import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { auth, db, storage, messaging, firebaseError } from './firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    updateProfile
} from "firebase/auth";
import { 
    collection, 
    addDoc, 
    onSnapshot, 
    query, 
    orderBy, 
    doc, 
    updateDoc, 
    serverTimestamp,
    getDoc,
    setDoc,
    arrayUnion,
    Timestamp,
    where,
    arrayRemove,
    deleteDoc,
    getDocs
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { getToken, onMessage } from "firebase/messaging";

// --- Types ---
type UserRole = 'admin' | 'member' | 'news_contributor' | 'podcast_contributor';
type User = { id: string; name: string; email: string; avatar: string; roles: UserRole[]; };
type Church = { id: string; name: string; logo: string; offeringDetails: any; };
type Comment = { id: string; author: User; authorId: string; content: string; createdAt: Timestamp; };
type PrayerRequest = { id: string; authorId: string; authorName: string; title: string; content: string; image?: string; prayedBy: string[]; comments: Comment[]; createdAt: Timestamp; };
type Podcast = { id: string; title: string; authorId: string; authorName: string; audioUrl: string; createdAt: Timestamp; };
type NewsItem = { id: string; title: string; content: string; image?: string; createdAt: Timestamp; authorId: string, authorName: string };
type Verse = { verse: string; text: string; };
type Message = { id: string; senderId: string; content?: string; type: 'text' | 'image' | 'video'; mediaUrl?: string; createdAt: Timestamp; status?: 'uploading' | 'failed'; tempId?: string; };

type LastMessage = {
    content: string;
    senderId: string;
    createdAt: Timestamp;
    type: 'text' | 'image' | 'video';
};

type Chat = { 
    id: string; 
    participantIds: string[]; 
    participants: { [key: string]: User }; 
    lastMessage?: LastMessage;
    lastRead?: { [key: string]: Timestamp };
};

type Notification = {
    id: string;
    icon: string; // material symbol name
    message: string;
    timestamp: string;
};
type WorshipService = {
    id: string;
    isLive: boolean;
    twitchChannel: string;
    title: string;
    createdAt: Timestamp;
};


// --- Static Config & Data ---
const CHURCH: Church = {
    id: 'nepal_logos', name: 'Logos Church, Nepal', logo: '/logos-church-new-logo.jpg',
    offeringDetails: { qrCodeUrl: '/logos-qr-code.png', bankName: 'Global IME Bank', accountHolder: 'YAM PRADHAN', accountNumber: '10507010042662' },
};

const MOCK_VERSES_OF_THE_DAY: Verse[] = [
    { verse: 'यूहन्ना ३:१६', text: 'किनभने परमेश्‍वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्‍ना एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्‍वास गर्ने कोही पनि नाश नहोस्, तर त्‍यसले अनन्त जीवन पाओस्।' },
    { verse: 'फिलिप्पी ४:१३', text: 'जसले मलाई शक्ति दिनuहुन्छ, उहाँमा म सब कुरा गर्न सक्छु।' }
];

const BIBLE_READING_PLAN_NNRV = [ 'उत्पत्ति १, मत्ती १', 'उत्पत्ति २, मत्ती २', 'उत्पत्ति ३, मत्ती ३', 'उत्पत्ति ४, मत्ती ४', 'उत्पत्ति ५, मत्ती ५', 'उत्पत्ति ६, मत्ती ६', 'उत्पत्ति ७, मत्ती ७', 'उत्पत्ति ८, मत्ती ८', 'उत्पत्ति ९-१०, मत्ती ९', 'उत्पत्ति ११, मत्ती १०', 'उत्पत्ति १२, मत्ती ११', 'उत्पत्ति १३, मत्ती १२', 'उत्पत्ति १४, मत्ती १३', 'उत्पत्ति १५, मत्ती १४', 'उत्पत्ति १६, मत्ती १५', 'उत्पत्ति १७, मत्ती १६', 'उत्पत्ति १८, मत्ती १७', 'उत्पत्ति १९, मत्ती १८', 'उत्पत्ति २०, मत्ती १९', 'उत्पत्ति २१, मत्ती २०', 'उत्पत्ति २२, मत्ती २१', 'उत्पत्ति ২৩, मत्ती २२', 'उत्पत्ति २४, मत्ती २३', 'उत्पत्ति २५, मत्ती २४', 'उत्पत्ति २६, मत्ती २५', 'उत्पत्ति २७, मत्ती २۶', 'उत्पत्ति २८, मत्ती २७', 'उत्पत्ति २९, मत्ती २८', 'उत्पत्ति ३०, मर्कूस १', 'उत्पत्ति ३१, मर्कूस २', 'उत्पत्ति ३२, मर्कूस ३', 'उत्पत्ति ३३, मर्कूस ४', 'उत्पत्ति ३४, मर्कूस ५', 'उत्पत्ति ३५, मर्कूस ६', 'उत्पत्ति ३६, मर्कूस ७', 'उत्पत्ति ३७, मर्कूस ८', 'उत्पत्ति ३८, मर्कूस ९', 'उत्पत्ति ३९, मर्कूस १०', 'उत्पत्ति ४०, मर्कूस ११', 'उत्पत्ति ४１, मर्कूस १२', 'उत्पत्ति ४२, मर्कूस १३', 'उत्पत्ति ४३, मर्कूस १४', 'उत्पत्ति ४४, मर्कूस १५', 'उत्पत्ति ४५, मर्कूस १६', 'उत्पत्ति ४६, लूका १', 'उत्पत्ति ४७, लूका २', 'उत्पत्ति ४८, लूका ३', 'उत्पत्ति ४९, लूका ४', 'उत्पत्ति ५०, लूका ५', 'प्रस्थान १, लूका ६', 'प्रस्थान २, लूका ७', 'प्रस्थान ३, लूका ८', 'प्रस्थान ४, लूका ९', 'प्रस्थान ५, लूका १०', 'प्रस्थान ६, लूका ११', 'प्रस्थान ७, लूका १२', 'प्रस्थान ८, लूका १३', 'प्रस्थान ९, लूका १४', 'प्रस्थान १०, लूका १५', 'प्रस्थान ११, लूका १६', 'प्रस्थान १२, लूका १७', 'प्रस्थान १३, लूका १८', 'प्रस्थान १४, लूका १९', 'प्रस्थान १५, लूका २०', 'प्रस्थान १६, लूका २१', 'प्रस्थान १७, लूका २२', 'प्रस्थान १८, लूका ২৩', 'प्रस्थान १९, लूका २४', 'प्रस्थान २०, यूहन्ना १', 'प्रस्थान २१, यूहन्ना २', 'प्रस्थान २२, यूहन्ना ३', 'प्रस्थान ২৩, यूहन्ना ४', 'प्रस्थान २४, यूहन्ना ५', 'प्रस्थान २५, यूहन्ना ६', 'प्रस्थान २६, यूहन्ना ७', 'प्रस्थान २७, यूहन्ना ८', 'प्रस्थान २८, यूहन्ना ९', 'प्रस्थान २९, यूहन्ना १०', 'प्रस्थान ३०, यूहन्ना ११', 'प्रस्थान ३१, यूहन्ना १२', 'प्रस्थान ३２, यूहन्ना १३', 'प्रस्थान ३३, यूहन्ना १४', 'प्रस्थान ३४, यूहन्ना १५', 'प्रस्थान ३५, यूहन्ना १६', 'प्रस्थान ३६, यूहन्ना १७', 'प्रस्थान ३७, यूहन्ना १८', 'प्रस्थान ३८, यूहन्ना १९', 'प्रस्थान ३९, यूहन्ना २०', 'प्रस्थान ४०, यूहन्ना २१' ];
const PROVERBS_NNRV: { [key: number]: string } = { 23: `१ जब तँ शासकसँग खान बस्छस्, तेरो सामुन्ने को छ, सो होशियारसित विचार गर्। २ यदि तँ पेटू छस् भने, तेरो घिच्रोमा एउटा छुरी राख्। ३ त्‍यसका स्‍वादिष्‍ट भोजनहरूको लालसा नगर्, किनभने त्‍यो भोजन छली हुन सक्‍छ। ४ धनी हुनलाई परिश्रम नगर्, र आफ्‍नो समझ देखाउन छोड्। ५ तैंले आफ्‍ना आँखा त्‍यसतिर लगाउने बित्तिकै के त्‍यो गइhaल्‍छ र? किनभने धनले अवश्‍य नै चीलजस्‍तै पखेटाहरू लगाउँछ, र आकाशतिर उडिhaल्‍छ। ६ कन्जूस मानिसको भोजन नखा, न त त्‍यसका स्‍वादिष्‍ट भोजनहरूको लालसा गर्। ७ किनभने त्‍यो त्‍यस्‍तो मानिस हो, जसले भोजनको मोल सधैँ गनिरहन्छ। त्‍यसले तँलाई भन्छ, “खाऊ र पिओ,” तर त्‍यसको हृदय तँसँग हुँदैन। ८ तैंले खाएको अलिकति पनि तैंले उगेल्‍नुपर्छ, र तैंले बोलेका मीठा वचनहरू खेर जानेछन्। ९ अज्ञानीको कानमा नबोल्, किनभने त्‍यसले तेरा बुद्धिका कुरालाई तुच्‍छ ठान्‍नेछ। १० पुरानो सिमानाको ढुङ्गा नसार्, न त टुहुरा-टुहुरीहरूको जग्‍गा मिच्। ११ किनभने तिनीहरूका उद्धारक शक्तिशाली हुनुहुन्‍छ, तँसँग तिनीहरूको पक्षमा उहाँले नै बहस गर्नुहुनेछ। १२ तेरो हृदय अनुशासनतिर लगा, र तेरा कान ज्ञानका कुरातिर लगा। १३ बालकलाई अनुशासन दिन नहिचकिचा। यदि तैंले त्‍यसलाई लट्ठीले हिर्काइस् भने त्‍यो मर्दैन। १४ तैंले त्‍यसलाई लट्ठीले हिर्काइस् भनेता, तैंले त्‍यसको प्राणलाई चिहानबाट बचाउँछस्। १५ हे मेरो छोरो, यदि तेरो हृदय बुद्धिमान् छ भने, मेरो हृदय पनि आनन्दित हुनेछ। १६ जब तेरा ओठले ठीक कुरा बोल्‍छन्, तब मेरो भित्री प्राण रमाउनेछ। १७ पापीहरूसँग तेरो हृदयले डाह नगरोस्, तर दिनभरि परमप्रभुको भयमा लागिरह। १८ निश्‍चय नै तेरो निम्‍ति एउटा भविष्य छ, र तेरो आशा कहिल्‍यै टुट्नेछैन। १९ हे मेरो छोरो, सुन् र बुद्धिमान् हो, र तेरो हृदय सोझो मार्गमा डोर्‍या। २० धेरै दाखमद्य पिउनेहरू, वा धेरै मासु खाने पेटूहरूसँग सङ्गत नगर्। २१ किनभने पियक्कड र पेटूहरू गरीब हुनेछन्, र निन्द्राले तिनीहरूलाई झुत्रा लुगा पहिराइदिनेछ। २२ तँलाई जन्‍म दिने तेरा बाबुको कुरा सुन्, र तेरी आमा बूढ़ी भएकी बेला तिनलाई हेला नगर्। ২৩ सत्‍यलाई किन् र त्‍यसलाई नबेच्, बुद्धि, अनुशासन र समझलाई पनि किन्। २४ धर्मी मानिसको बाबुले धेरै रमाहट गर्छ, बुद्धिमान् छोरो हुने बाबु त्‍यसमा प्रसन्‍n हुन्‍छ। २५ तेरा बाबु र आमा आनन्दित होऊन्, र तँलाई जन्‍म दिने तिनी रमाऊन्। २६ हे मेरो छोरो, तेरो हृदय मलाई दे, र तेरा आँखाले मेरा मार्गहरू मन पराऊन्। २७ किनभने वेश्‍या एउटा गहिरो खाल्‍डो हो, र परस्‍त्री एउटा साँघुरो इनार हो। २८ डाँकुले झैँ त्‍यसले पनि मानिसहरूलाई ढुकिरहन्छे, र मानिसहरूका बीचमा विश्‍वासघातीहरूको संख्‍या बढ़ाउँछे। २९ कसलाई दु:ख छ? कसलाई शोक छ? कसको झगड़ा छ? कसको गनगन छ? कसलाई अकारण घाउहरू छन्? कसका आँखा राता छन्? ३० तिनीहरू, जो दाखमद्यमा अल्‍मलिरहन्छन्, जो मिस्रित दाखमद्य चाख्‍n जान्छन्। ३१ दाखमद्य रातो भएको बेला, जब त्‍यो कचौरामा चम्‍कन्‍छ, र जब त्‍यो सरर तल जान्छ, त्‍यसलाई नहेर्। ३२ आखिरमा त्‍यसले सर्पले झैँ डस्‍छ, र विषालु सर्पले झैँ टोक्‍छ। ३३ तेरा आँखाले अनौठा कुराहरू देख्‍नेछन्, र तेरो मनले विचलित कुराहरू बोल्‍नेछ। ३४ तँ समुद्रको बीचमा सुत्‍ने मानिसजस्‍तै, वा जहाजको मस्तूलको टुप्‍पामा सुत्‍ने मानिसजस्‍तै हुनेछस्। ३५ तैंले भन्‍नेछस्, “तिनीहरूले मलाई हिर्काए, तर मलाई दुखेको छैन। तिनीहरूले मलाई पिटे, तर मैले थाहै पाइनँ। म कहिले ब्‍उँझने? म फेरि अर्को गिलास पिउँछु।”` };

// --- Helper Functions ---

const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const formatTimestamp = (timestamp: Timestamp | undefined): string => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
};

// --- Reusable Components ---

const Modal = ({ children, onClose }: React.PropsWithChildren<{ onClose: () => void; }>) => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close-button">
                    <span className="material-symbols-outlined">close</span>
                </button>
                {children}
            </div>
        </div>
    );
};

const ImageUpload = ({ imagePreview, onImageChange, onImageRemove }: { imagePreview: string | null; onImageChange: (file: File) => void; onImageRemove: () => void; }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onImageChange(file);
        }
    };

    return (
        <div className="image-upload-container">
            {!imagePreview ? (
                <>
                    <input type="file" accept="image/*" onChange={handleFileSelect} style={{ display: 'none' }} ref={fileInputRef} />
                    <label onClick={() => fileInputRef.current?.click()} className="image-upload-label">
                        <span className="material-symbols-outlined">add_photo_alternate</span>
                        <span>Add Photo</span>
                    </label>
                </>
            ) : (
                <div className="image-preview">
                    <img src={imagePreview} alt="Preview" />
                    <button onClick={onImageRemove}>
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            )}
        </div>
    );
};

// --- Pages & Components ---

const LoginPage = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email.trim(), password);
            onLoginSuccess();
        } catch (err: any) {
            setError('प्रयोगकर्ता नाम वा पासवर्ड फेला परेन।');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
            setError('कृपया सबै फिल्डहरू भर्नुहोस्।');
            return;
        }
        setIsLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: fullName.trim() });
            const avatar = fullName.trim().split(' ').map(n => n[0]).join('').toUpperCase() || '?';
            
            // Create user document in Firestore
            await setDoc(doc(db, "users", user.uid), {
                id: user.uid,
                name: fullName.trim(),
                email: user.email,
                avatar,
                roles: ['member'] // Default role
            });

            onLoginSuccess();
        } catch (err: any) {
            if (err.code === 'auth/email-already-in-use') {
                setError('यो ইমেল पहिले नै प्रयोगमा छ।');
            } else {
                setError('खाता बनाउन असफल भयो।');
            }
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setError('');
        setFullName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={CHURCH.logo} alt={`${CHURCH.name} Logo`} className="login-logo" />
                <h2>{CHURCH.name}</h2>
                <p>{isLoginView ? 'समुदायमा सामेल हुन लगइन गर्नुहोस्।' : 'सामेल हुन एउटा खाता बनाउनुहोस्।'}</p>
                
                {isLoginView ? (
                    <form onSubmit={handleLogin}>
                        <input className="login-input" type="email" placeholder="इमेल" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input className="login-input" type="password" placeholder="पासवर्ड" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button className="login-button" type="submit" disabled={isLoading}>{isLoading ? 'लग इन गर्दै...' : 'लग इन'}</button>
                    </form>
                ) : (
                    <form onSubmit={handleSignUp}>
                        <input className="login-input" type="text" placeholder="पूरा नाम" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                        <input className="login-input" type="email" placeholder="इमेल (लगइन आईडी)" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input className="login-input" type="password" placeholder="पासवर्ड" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button className="login-button" type="submit" disabled={isLoading}>{isLoading ? 'साइन अप गर्दै...' : 'साइन अप गर्नुहोस्'}</button>
                    </form>
                )}
                
                {error && <p className="login-error">{error}</p>}

                <button onClick={toggleView} className="auth-toggle-link">
                    {isLoginView ? 'खाता छैन? साइन अप गर्नुहोस्' : 'पहिले नै खाता छ? लग इन गर्नुहोस्'}
                </button>
            </div>
        </div>
    );
};

const WorshipPage = ({services}: {services: WorshipService[]}) => {
    const [showOfferingModal, setShowOfferingModal] = useState(false);
    const liveService = services.find(s => s.isLive);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            alert("Account number copied to clipboard.");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    return (
        <div className="page-content">
            <h2>Worship</h2>
            {liveService ? (
                 <div className="card live-worship-card">
                    <div className="live-badge">LIVE</div>
                    <div className="twitch-container">
                        <iframe
                            src={`https://player.twitch.tv/?channel=${liveService.twitchChannel}&parent=${window.location.hostname}`}
                            height="100%"
                            width="100%"
                            allowFullScreen>
                        </iframe>
                    </div>
                    <h4>{liveService.title}</h4>
                    <div className="worship-actions">
                        <button className="action-button" onClick={() => setShowOfferingModal(true)}>
                            <span className="material-symbols-outlined">volunteer_activism</span>
                            Online Offering
                        </button>
                    </div>
                </div>
            ) : (
                 <div className="card no-live-service">
                    <span className="material-symbols-outlined">videocam_off</span>
                    <p>There is no live service at the moment.</p>
                     <div className="worship-actions">
                        <button className="action-button" onClick={() => setShowOfferingModal(true)}>
                            <span className="material-symbols-outlined">volunteer_activism</span>
                            Online Offering
                        </button>
                    </div>
                </div>
            )}
           
            {showOfferingModal && (
                <Modal onClose={() => setShowOfferingModal(false)}>
                    <div className="offering-modal-content">
                        <h3>Online Offering</h3>
                        <img src={CHURCH.offeringDetails.qrCodeUrl} alt="Offering QR Code" className="qr-code-img" />
                        <div className="offering-details">
                            <p><strong>Bank:</strong> {CHURCH.offeringDetails.bankName}</p>
                            <p><strong>Account Holder:</strong> {CHURCH.offeringDetails.accountHolder}</p>
                            <div className="account-number-container">
                                <p><strong>Account Number:</strong> {CHURCH.offeringDetails.accountNumber}</p>
                                <button className="copy-button" onClick={() => copyToClipboard(CHURCH.offeringDetails.accountNumber)}>
                                    <span className="material-symbols-outlined">content_copy</span>
                                    Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

const BiblePage = () => {
    const dayOfYear = getDayOfYear();
    const readingPlan = BIBLE_READING_PLAN_NNRV[dayOfYear - 1] || 'आजको लागि कुनै पढ्ने योजना छैन।';
    const proverbsChapter = dayOfYear % 31 === 0 ? 31 : dayOfYear % 31;
    const proverbsText = PROVERBS_NNRV[proverbsChapter] || 'हितोपदेश उपलब्ध छैन।';
    
    return (
        <div className="page-content">
            <h2>बाइबल</h2>
            <div className="card verse-card">
                <h3>दिनको पद</h3>
                <p className="verse-text">“{MOCK_VERSES_OF_THE_DAY[dayOfYear % MOCK_VERSES_OF_THE_DAY.length].text}”</p>
                <p className="verse-ref">- {MOCK_VERSES_OF_THE_DAY[dayOfYear % MOCK_VERSES_OF_THE_DAY.length].verse}</p>
            </div>
            <div className="card bible-card">
                <h3>बाइबल पढ्ने योजना (NNRV)</h3>
                <p>दिन {dayOfYear}: {readingPlan}</p>
            </div>
            <div className="card bible-card">
                <h3>दिनको हितोपदेश</h3>
                <p>महिनाको हरेक दिनको लागि एक हितोपदेश: हितोपदेश अध्याय {proverbsChapter}</p>
            </div>
        </div>
    );
};

const NewsPage = ({news, currentUser, onDelete}: {news: NewsItem[], currentUser: User | null, onDelete: (id: string, image?: string) => void}) => {
    return (
        <div className="page-content">
            <h2>News & Announcements</h2>
            <div className="list-container">
                {news.map(item => (
                    <div key={item.id} className="card news-item">
                        {item.image && <img src={item.image} alt={item.title} className="news-image"/>}
                        <div className="news-content">
                            <div className="news-header">
                                <h3>{item.title}</h3>
                                {currentUser?.roles.includes('admin') && (
                                    <button className="delete-button" onClick={() => onDelete(item.id, item.image)}>
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                )}
                            </div>
                            <p className="news-meta">{item.createdAt.toDate().toLocaleDateString()}</p>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PodcastPage = ({podcasts, currentUser, onDelete}: {podcasts: Podcast[], currentUser: User | null, onDelete: (id: string, audioUrl: string) => void}) => {
    return (
        <div className="page-content">
            <h2>Podcast</h2>
             <div className="list-container">
                {podcasts.map(podcast => (
                    <div key={podcast.id} className="card podcast-item">
                        <div className="podcast-info">
                            <div>
                                <h4 className="podcast-title">{podcast.title}</h4>
                                <p className="podcast-author">by {podcast.authorName}</p>
                            </div>
                             {currentUser?.roles.includes('admin') && (
                                <button className="delete-button" onClick={() => onDelete(podcast.id, podcast.audioUrl)}>
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            )}
                        </div>
                        <audio controls className="podcast-player">
                            <source src={podcast.audioUrl} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ChatListPage = ({ chats, currentUser, onSelectChat, onCreateChat }: { chats: Chat[]; currentUser: User; onSelectChat: (id: string) => void; onCreateChat: () => void; }) => {
    return (
        <div className="page-content chat-list-page">
            <h2>संगतिहरु</h2>
            <div className="list-container">
                {chats.map(chat => {
                    const otherParticipants = Object.values(chat.participants).filter(p => p.id !== currentUser.id);
                    if (otherParticipants.length === 0) return null;
                    const displayName = otherParticipants.map(p => p.name).join(', ');
                    const lastMessage = chat.lastMessage;
                    const isUnread = chat.lastRead && lastMessage && currentUser && chat.lastRead[currentUser.id] < lastMessage.createdAt;

                    return (
                        <div key={chat.id} className={`list-item chat-item ${isUnread ? 'unread' : ''}`} onClick={() => onSelectChat(chat.id)}>
                            <div className="chat-avatar">{otherParticipants[0].avatar}</div>
                            <div className="chat-info">
                                <span className="chat-name">{displayName}</span>
                                {lastMessage && <span className="chat-last-message">
                                    {lastMessage.type === 'image' && <span className="material-symbols-outlined">image</span>}
                                    {lastMessage.type === 'video' && <span className="material-symbols-outlined">videocam</span>}
                                    {lastMessage.content}
                                </span>}
                            </div>
                            <div className="chat-meta">
                                {lastMessage && <span>{formatTimestamp(lastMessage.createdAt)}</span>}
                                {isUnread && <div className="unread-dot"></div>}
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="fab" onClick={onCreateChat} aria-label="New Chat">
                 <span className="material-symbols-outlined">edit</span>
            </button>
        </div>
    );
};

const ConversationPage = ({ chat, messages, currentUser, onBack, onSendMessage }: { chat: Chat; messages: Message[], currentUser: User; onBack: () => void; onSendMessage: (text: string, file: File | null) => void; }) => {
    const [newMessage, setNewMessage] = useState('');
    const [mediaFile, setMediaFile] = useState<File | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const otherParticipants = Object.values(chat.participants).filter(p => p.id !== currentUser.id);
    const displayName = otherParticipants.map(p => p.name).join(', ');
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (newMessage.trim() || mediaFile) {
            onSendMessage(newMessage.trim(), mediaFile);
            setNewMessage('');
            setMediaFile(null);
            if(fileInputRef.current) fileInputRef.current.value = "";
        }
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
           setMediaFile(file);
           // Immediately try to send or let user add text
           onSendMessage('', file); // Auto-send file
           setMediaFile(null);
           if(fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    return (
        <div className="conversation-page">
            <header className="conversation-header">
                <button className="back-button" onClick={onBack}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h3>{displayName}</h3>
                <div style={{width: 40}}></div>
            </header>
            <div className="message-list">
                {messages.map(msg => (
                    <div key={msg.id || msg.tempId} className={`message-container ${msg.senderId === currentUser.id ? 'sent' : 'received'}`}>
                        <div className="message-bubble">
                             {msg.type === 'text' && <p>{msg.content}</p>}
                             {(msg.type === 'image' || msg.type === 'video') && (
                                <div className="message-media-container">
                                    {msg.type === 'image' && <img src={msg.mediaUrl} alt="sent" className="message-media" />}
                                    {msg.type === 'video' && <video src={msg.mediaUrl} controls className="message-media" />}
                                    {msg.status === 'uploading' && <div className="media-upload-overlay"><div className="spinner"></div></div>}
                                </div>
                            )}
                            <div className="message-footer">
                                {msg.status === 'failed' && <span className="material-symbols-outlined message-failed-indicator">error</span>}
                                <span className="message-timestamp">{formatTimestamp(msg.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="message-input-container">
                 <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{display: 'none'}} accept="image/*,video/*" />
                 <button className="input-action-button" onClick={() => fileInputRef.current?.click()}>
                     <span className="material-symbols-outlined">add</span>
                 </button>
                 <input type="text" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
                 <button className="send-button" onClick={handleSend} disabled={!newMessage.trim()}>
                    <span className="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>
    );
};

const PrayerPage = ({ prayerRequests, currentUser, onPray, onAddRequest, onSelectRequest, onDelete, onEdit }: { prayerRequests: PrayerRequest[]; currentUser: User | null; onPray: (id:string) => void; onAddRequest: () => void; onSelectRequest: (req: PrayerRequest) => void; onDelete: (id: string, image?: string) => void; onEdit: (req: PrayerRequest) => void; }) => {
    return (
        <div className="page-content">
            <h2>Prayer Wall</h2>
            <div className="list-container">
                {prayerRequests.map(request => (
                    <div key={request.id} className="card prayer-item">
                        <div onClick={() => onSelectRequest(request)}>
                            {request.image && <img src={request.image} alt={request.title} className="prayer-image" />}
                            <h4>{request.title}</h4>
                            <p className="prayer-content">{request.content}</p>
                            <div className="prayer-meta">
                                <span>By {request.authorName}</span>
                                <div className="prayer-actions">
                                    <button
                                        className={`prayer-action-button ${request.prayedBy.includes(currentUser?.id || '') ? 'prayed' : ''}`}
                                        onClick={(e) => { e.stopPropagation(); onPray(request.id); }}
                                    >
                                        <span className="material-symbols-outlined">volunteer_activism</span>
                                        <span>{request.prayedBy.length}</span>
                                    </button>
                                    <div className="prayer-action-button comment-button">
                                        <span className="material-symbols-outlined">chat_bubble</span>
                                        <span>{request.comments.length}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {(currentUser?.id === request.authorId || currentUser?.roles.includes('admin')) && (
                            <div className="item-actions-footer">
                                {currentUser?.id === request.authorId && (
                                     <button className="edit-button" onClick={(e) => { e.stopPropagation(); onEdit(request);}}>
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                )}
                                <button className="delete-button" onClick={(e) => { e.stopPropagation(); onDelete(request.id, request.image); }}>
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
             <button className="fab" onClick={onAddRequest} aria-label="New Prayer Request">
                 <span className="material-symbols-outlined">add</span>
            </button>
        </div>
    );
};

const PrayerDetailsModal = ({ request, currentUser, onClose, onPray, onComment, onDelete, onEdit }: { request: PrayerRequest; currentUser: User | null; onClose: () => void; onPray: (id: string) => void; onComment: (id: string, text: string) => void; onDelete: (id: string, image?:string) => void; onEdit: (req: PrayerRequest) => void; }) => {
    const [comment, setComment] = useState('');

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim()) {
            onComment(request.id, comment.trim());
            setComment('');
        }
    };
    
    return (
        <Modal onClose={onClose}>
            <div className="prayer-details-modal">
                <div className="prayer-details-content">
                    <div className="prayer-details-header">
                        <h3>{request.title}</h3>
                         {(currentUser?.id === request.authorId || currentUser?.roles.includes('admin')) && (
                            <div className="item-actions-header">
                                {currentUser?.id === request.authorId && (
                                     <button className="edit-button" onClick={() => onEdit(request)}>
                                        <span className="material-symbols-outlined">edit</span>
                                    </button>
                                )}
                                <button className="delete-button" onClick={() => onDelete(request.id, request.image)}>
                                    <span className="material-symbols-outlined">delete</span>
                                </button>
                            </div>
                        )}
                    </div>
                    <p className="prayer-author">By {request.authorName}</p>
                    {request.image && <img src={request.image} alt={request.title} className="prayer-image" style={{ marginBottom: '1rem' }} />}
                    <p className="prayer-main-content">{request.content}</p>
                    <div className="prayer-meta" style={{ justifyContent: 'flex-end', marginTop: '1rem' }}>
                         <div className="prayer-actions">
                            <button
                                className={`prayer-action-button ${request.prayedBy.includes(currentUser?.id || '') ? 'prayed' : ''}`}
                                onClick={() => onPray(request.id)}
                            >
                                <span className="material-symbols-outlined">volunteer_activism</span>
                                <span>{request.prayedBy.length} I prayed</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="prayer-comments-section">
                    <h4>Comments ({request.comments.length})</h4>
                    <div className="prayer-comment-list">
                       {request.comments.length > 0 ? (
                            [...request.comments].sort((a,b) => b.createdAt.toMillis() - a.createdAt.toMillis()).map(c => (
                                <div key={c.id} className="comment-item">
                                    <p><strong>{c.author.name}:</strong> {c.content}</p>
                                    <p className="comment-timestamp">{c.createdAt.toDate().toLocaleTimeString()}</p>
                                </div>
                            ))
                       ) : (
                           <p className="no-comments">No comments yet. Be the first to encourage!</p>
                       )}
                    </div>
                    <form className="comment-form" onSubmit={handleCommentSubmit}>
                        <input type="text" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button type="submit">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

const AddPrayerRequestModal = ({ onClose, onSave, existingRequest }: { onClose: () => void; onSave: (data: { title: string; content: string; imageFile: File | null }, id?: string) => void; existingRequest?: PrayerRequest | null; }) => {
    const [title, setTitle] = useState(existingRequest?.title || '');
    const [content, setContent] = useState(existingRequest?.content || '');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(existingRequest?.image || null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleImageChange = (file: File) => {
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleImageRemove = () => {
        setImageFile(null);
        setImagePreview(null);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            setIsSubmitting(true);
            await onSave({ title, content, imageFile }, existingRequest?.id);
            setIsSubmitting(false);
            onClose();
        }
    };

    return (
        <Modal onClose={onClose}>
            <form className="modal-form" onSubmit={handleSubmit}>
                <h3>{existingRequest ? 'अनुरोध सम्पादन गर्नुहोस्' : 'नयाँ प्रार्थना अनुरोध'}</h3>
                <input type="text" placeholder="शीर्षक" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea rows={5} placeholder="हामीले केको लागि प्रार्थना गर्नुपर्छ?" value={content} onChange={(e) => setContent(e.target.value)} required />
                <ImageUpload imagePreview={imagePreview} onImageChange={handleImageChange} onImageRemove={handleImageRemove} />
                <button type="submit" className="action-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Posting...' : (existingRequest ? 'Save Changes' : 'अनुरोध पोस्ट गर्नुहोस्')}
                </button>
            </form>
        </Modal>
    );
};

const AddNewsModal = ({onClose, onAdd}: {onClose: () => void, onAdd: (data: {title: string, content: string, imageFile: File | null}) => void}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const handleImageChange = (file: File) => {
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;
        setIsSubmitting(true);
        await onAdd({title, content, imageFile});
        setIsSubmitting(false);
        onClose();
    };

    return (
         <Modal onClose={onClose}>
            <form className="modal-form" onSubmit={handleSubmit}>
                <h3>Add News/Announcement</h3>
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
                <textarea rows={5} placeholder="Content" value={content} onChange={e => setContent(e.target.value)} required />
                <ImageUpload imagePreview={imagePreview} onImageChange={handleImageChange} onImageRemove={() => {setImageFile(null); setImagePreview(null);}} />
                <button type="submit" className="action-button" disabled={isSubmitting}>{isSubmitting ? 'Posting...' : 'Post News'}</button>
            </form>
        </Modal>
    );
};

const AddPodcastModal = ({onClose, onAdd}: {onClose: () => void, onAdd: (data: {title: string, audioFile: File}) => void}) => {
    const [title, setTitle] = useState('');
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !audioFile) return;
        setIsSubmitting(true);
        await onAdd({title, audioFile});
        setIsSubmitting(false);
        onClose();
    };

    return (
        <Modal onClose={onClose}>
            <form className="modal-form" onSubmit={handleSubmit}>
                <h3>Add Podcast</h3>
                <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
                 <div className="custom-file-input">
                    <button type="button" className="action-button secondary" onClick={() => fileInputRef.current?.click()}>
                        <span className="material-symbols-outlined">audiotrack</span>
                        Find File
                    </button>
                    <span>{audioFile?.name || 'No file selected'}</span>
                </div>
                <input type="file" accept="audio/*" ref={fileInputRef} onChange={e => setAudioFile(e.target.files?.[0] || null)} style={{display: 'none'}} />
                <button type="submit" className="action-button" disabled={isSubmitting || !audioFile}>{isSubmitting ? 'Uploading...' : 'Upload Podcast'}</button>
            </form>
        </Modal>
    );
};

const CreateChatModal = ({ onClose, onStartChat, users, currentUser }: { onClose: () => void; onStartChat: (userId: string) => void; users: User[], currentUser: User }) => {
    const otherUsers = users.filter(u => u.id !== currentUser.id);

    return (
        <Modal onClose={onClose}>
            <div className="create-chat-modal">
                <h3>Start a new conversation</h3>
                <div className="user-list">
                    {otherUsers.map(user => (
                        <div key={user.id} className="list-item user-list-item selectable" onClick={() => onStartChat(user.id)}>
                            <div className="chat-avatar">{user.avatar}</div>
                            <span>{user.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

const ManageUsersModal = ({onClose, users, onUpdateRoles}: {onClose: () => void; users: User[]; onUpdateRoles: (userId: string, newRoles: UserRole[]) => void;}) => {
    
    const handleRoleChange = (userId: string, role: UserRole, checked: boolean) => {
        const user = users.find(u => u.id === userId);
        if (!user) return;
        
        let newRoles = [...user.roles];
        if (checked) {
            if (!newRoles.includes(role)) newRoles.push(role);
        } else {
            newRoles = newRoles.filter(r => r !== role);
        }
        onUpdateRoles(userId, newRoles);
    };

    return (
        <Modal onClose={onClose}>
            <div className="manage-users-modal">
                <h3>प्रयोगकर्ता व्यवस्थापन गर्नुहोस्</h3>
                <div className="user-role-list">
                {users.map(user => (
                    <div key={user.id} className="card user-role-item">
                        <p className="user-name">{user.name}</p>
                        <p className="user-email">{user.email}</p>
                        <div className="role-checkboxes">
                            <label>
                                <input type="checkbox"
                                    checked={user.roles.includes('news_contributor')}
                                    onChange={(e) => handleRoleChange(user.id, 'news_contributor', e.target.checked)} />
                                News Contributor
                            </label>
                            <label>
                                <input type="checkbox"
                                    checked={user.roles.includes('podcast_contributor')}
                                     onChange={(e) => handleRoleChange(user.id, 'podcast_contributor', e.target.checked)} />
                                Podcast Contributor
                            </label>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </Modal>
    );
}

// --- Main App Component ---

const App = () => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activePage, setActivePage] = useState('worship');
    
    // Data states
    const [users, setUsers] = useState<User[]>([]);
    const [chats, setChats] = useState<Chat[]>([]);
    const [messages, setMessages] = useState<{ [key: string]: Message[] }>({});
    const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);
    const [news, setNews] = useState<NewsItem[]>([]);
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [worshipServices, setWorshipServices] = useState<WorshipService[]>([]);
    
    // View states
    const [activeChatId, setActiveChatId] = useState<string | null>(null);
    const [selectedPrayerRequest, setSelectedPrayerRequest] = useState<PrayerRequest | null>(null);
    const [prayerRequestToEdit, setPrayerRequestToEdit] = useState<PrayerRequest | null>(null);
    
    // Modal states
    const [showAddPrayerModal, setShowAddPrayerModal] = useState(false);
    const [showAddNewsModal, setShowAddNewsModal] = useState(false);
    const [showAddPodcastModal, setShowAddPodcastModal] = useState(false);
    const [showCreateChatModal, setShowCreateChatModal] = useState(false);
    const [showManageUsersModal, setShowManageUsersModal] = useState(false);

    if (firebaseError) {
        return (
            <div className="error-container">
                <img src={CHURCH.logo} alt="Church Logo" className="error-logo" />
                <h2>Application Error</h2>
                <p>Could not connect to services. Please contact support if the problem persists.</p>
                <pre>{firebaseError}</pre>
            </div>
        );
    }

    useEffect(() => {
        if (!auth) return;
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                    setCurrentUser({ id: user.uid, ...userDocSnap.data() } as User);
                }
            } else {
                setCurrentUser(null);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!currentUser) return;
        const q = query(collection(db, "users"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User)));
        });
        return () => unsubscribe();
    }, [currentUser]);

    useEffect(() => {
        if (!currentUser) return;
        const q = query(collection(db, "prayerRequests"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPrayerRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PrayerRequest)));
        });
        return () => unsubscribe();
    }, [currentUser]);
    
    useEffect(() => {
        if (!currentUser) return;
        const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setNews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NewsItem)));
        });
        return () => unsubscribe();
    }, [currentUser]);

    useEffect(() => {
        if (!currentUser) return;
        const q = query(collection(db, "podcasts"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPodcasts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Podcast)));
        });
        return () => unsubscribe();
    }, [currentUser]);

    useEffect(() => {
        const q = query(collection(db, "worshipServices"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setWorshipServices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as WorshipService)));
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!currentUser) return;
        const q = query(collection(db, "chats"), where("participantIds", "array-contains", currentUser.id));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const chatsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Chat));
            setChats(chatsData);
        });
        return () => unsubscribe();
    }, [currentUser]);
    
    useEffect(() => {
        if (!activeChatId) return;
        const q = query(collection(db, "chats", activeChatId, "messages"), orderBy("createdAt", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
             const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
             setMessages(prev => ({...prev, [activeChatId]: messagesData}));
        });
        return () => unsubscribe();
    }, [activeChatId]);

    // --- Handlers ---
    const handleTogglePray = async (requestId: string) => {
        if (!currentUser) return;
        const prayerRef = doc(db, "prayerRequests", requestId);
        const prayer = prayerRequests.find(p => p.id === requestId);
        if (!prayer) return;

        if (prayer.prayedBy.includes(currentUser.id)) {
            await updateDoc(prayerRef, { prayedBy: arrayRemove(currentUser.id) });
        } else {
            await updateDoc(prayerRef, { prayedBy: arrayUnion(currentUser.id) });
        }
    };

    const handleSavePrayerRequest = async (data: { title: string; content: string; imageFile: File | null }, id?: string) => {
        if (!currentUser) return;
        try {
            const requestToEdit = prayerRequestToEdit;
            let imageUrl = (id && requestToEdit) ? requestToEdit.image : undefined;

            if (data.imageFile) {
                const storageRef = ref(storage, `prayer_images/${Date.now()}_${data.imageFile.name}`);
                await uploadBytes(storageRef, data.imageFile);
                imageUrl = await getDownloadURL(storageRef);
            }

            const prayerData = {
                title: data.title,
                content: data.content,
                image: imageUrl,
            };

            if (id) { // Editing existing request
                const prayerDocRef = doc(db, "prayerRequests", id);
                await updateDoc(prayerDocRef, prayerData);
            } else { // Adding new request
                await addDoc(collection(db, "prayerRequests"), {
                    ...prayerData,
                    authorId: currentUser.id,
                    authorName: currentUser.name,
                    prayedBy: [],
                    comments: [],
                    createdAt: serverTimestamp(),
                });
            }
        } catch (error) {
            console.error("Error saving prayer request: ", error);
            alert("पोस्ट गर्न असफल भयो");
        }
    };

    const handleDeletePrayerRequest = async (id: string, imageUrl?: string) => {
        if(!window.confirm("Are you sure you want to delete this prayer request?")) return;
        try {
            if (imageUrl) {
                const imageRef = ref(storage, imageUrl);
                await deleteObject(imageRef).catch(err => console.error("Error deleting image: ", err));
            }
            await deleteDoc(doc(db, "prayerRequests", id));
            if(selectedPrayerRequest?.id === id) setSelectedPrayerRequest(null);
        } catch (error) {
            console.error("Error deleting prayer request: ", error);
        }
    }
    
    const handleComment = async (requestId: string, commentText: string) => {
        if(!currentUser) return;
        const newComment = {
            id: doc(collection(db, "tmp")).id, // temp id
            authorId: currentUser.id,
            author: currentUser,
            content: commentText,
            createdAt: Timestamp.now(),
        };
        const prayerRef = doc(db, "prayerRequests", requestId);
        await updateDoc(prayerRef, { comments: arrayUnion(newComment) });
    };

    const handleAddNews = async (data: {title: string, content: string, imageFile: File | null}) => {
        if (!currentUser) return;
        try {
            let imageUrl = undefined;
            if (data.imageFile) {
                const storageRef = ref(storage, `news_images/${Date.now()}_${data.imageFile.name}`);
                await uploadBytes(storageRef, data.imageFile);
                imageUrl = await getDownloadURL(storageRef);
            }
            await addDoc(collection(db, "news"), {
                title: data.title,
                content: data.content,
                image: imageUrl,
                authorId: currentUser.id,
                authorName: currentUser.name,
                createdAt: serverTimestamp()
            });
        } catch (error) {
            console.error("Error posting news: ", error);
            alert("पोस्ट गर्न असफल भयो");
        }
    };
    
    const handleDeleteNews = async (id: string, imageUrl?: string) => {
        if(!window.confirm("Are you sure you want to delete this news item?")) return;
        try {
            if (imageUrl) {
                const imageRef = ref(storage, imageUrl);
                await deleteObject(imageRef).catch(err => console.error("Error deleting image: ", err));
            }
            await deleteDoc(doc(db, "news", id));
        } catch (error) {
            console.error("Error deleting news: ", error);
        }
    };

    const handleAddPodcast = async (data: {title: string, audioFile: File}) => {
        if (!currentUser) return;
        try {
            const storageRef = ref(storage, `podcasts/${Date.now()}_${data.audioFile.name}`);
            await uploadBytes(storageRef, data.audioFile);
            const audioUrl = await getDownloadURL(storageRef);
            await addDoc(collection(db, "podcasts"), {
                title: data.title,
                audioUrl,
                authorId: currentUser.id,
                authorName: currentUser.name,
                createdAt: serverTimestamp()
            });
        } catch (error) {
            console.error("Error uploading podcast: ", error);
            alert("पोस्ट गर्न असफल भयो");
        }
    };
    
    const handleDeletePodcast = async (id: string, audioUrl: string) => {
        if(!window.confirm("Are you sure you want to delete this podcast?")) return;
        try {
            const audioRef = ref(storage, audioUrl);
            await deleteObject(audioRef).catch(err => console.error("Error deleting audio: ", err));
            await deleteDoc(doc(db, "podcasts", id));
        } catch (error) {
            console.error("Error deleting podcast: ", error);
        }
    };
    
    const handleSendMessage = async (text: string, file: File | null) => {
        if (!currentUser || !activeChatId) return;

        const tempId = Date.now().toString();
        const messageData: Partial<Message> = {
            tempId,
            senderId: currentUser.id,
            createdAt: Timestamp.now(),
        };

        if (file) {
            messageData.type = file.type.startsWith('image/') ? 'image' : 'video';
            messageData.mediaUrl = URL.createObjectURL(file);
            messageData.status = 'uploading';
            messageData.content = '';
        } else {
            messageData.type = 'text';
            messageData.content = text;
        }

        // Optimistic UI update
        setMessages(prev => ({...prev, [activeChatId]: [...(prev[activeChatId] || []), messageData as Message] }));
        
        try {
            if (file) {
                const storageRef = ref(storage, `chat_media/${activeChatId}/${Date.now()}_${file.name}`);
                await uploadBytes(storageRef, file);
                messageData.mediaUrl = await getDownloadURL(storageRef);
            }
            delete messageData.status;
            delete messageData.tempId;

            const chatRef = doc(db, "chats", activeChatId);
            await addDoc(collection(chatRef, "messages"), messageData);
            await updateDoc(chatRef, { 
                lastMessage: {
                    content: file ? (messageData.type === 'image' ? 'Photo' : 'Video') : text,
                    senderId: currentUser.id,
                    createdAt: messageData.createdAt,
                    type: messageData.type
                }
             });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("मिडिया अपलोड गर्न असफल भयो");
            // Update UI to show error
            setMessages(prev => {
                const newMessages = [...(prev[activeChatId] || [])];
                const msgIndex = newMessages.findIndex(m => m.tempId === tempId);
                if (msgIndex > -1) {
                    newMessages[msgIndex].status = 'failed';
                }
                return {...prev, [activeChatId]: newMessages};
            });
        }
    };

    const handleStartChat = async (userId: string) => {
        if(!currentUser) return;
        // Check for existing 1-on-1 chat
        const q = query(collection(db, "chats"), where("participantIds", "==", [currentUser.id, userId].sort()));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            setActiveChatId(querySnapshot.docs[0].id);
        } else {
            // Create new chat
            const otherUser = users.find(u => u.id === userId);
            if (!otherUser) return;

            const newChatDoc = await addDoc(collection(db, "chats"), {
                participantIds: [currentUser.id, userId].sort(),
                participants: {
                    [currentUser.id]: { name: currentUser.name, avatar: currentUser.avatar },
                    [userId]: { name: otherUser.name, avatar: otherUser.avatar }
                },
                lastRead: { [currentUser.id]: Timestamp.now() }
            });
            setActiveChatId(newChatDoc.id);
        }
        setShowCreateChatModal(false);
    };

    const handleUpdateUserRoles = async (userId: string, newRoles: UserRole[]) => {
        try {
            await updateDoc(doc(db, "users", userId), { roles: newRoles });
        } catch (error) {
            console.error("Error updating roles:", error);
        }
    };

    const handleLogout = () => {
        signOut(auth);
    };

    const openAddPrayerModal = () => {
        setPrayerRequestToEdit(null);
        setShowAddPrayerModal(true);
    };

    const openEditPrayerModal = (request: PrayerRequest) => {
        setPrayerRequestToEdit(request);
        setSelectedPrayerRequest(null); // Close details modal if open
        setShowAddPrayerModal(true);
    };

    const existingRequest = prayerRequests.find(r => r.id === prayerRequestToEdit?.id);

    // --- Render Logic ---

    if (isLoading) {
        return <div className="loading-container">Loading...</div>;
    }

    if (!currentUser) {
        return <LoginPage onLoginSuccess={() => setIsLoading(true)} />;
    }
    
    const activeChat = chats.find(c => c.id === activeChatId);

    const renderPage = () => {
        switch (activePage) {
            case 'worship': return <WorshipPage services={worshipServices} />;
            case 'bible': return <BiblePage />;
            case 'news': return <NewsPage news={news} currentUser={currentUser} onDelete={handleDeleteNews} />;
            case 'fellowship':
                if (activeChatId) return null;
                return <ChatListPage chats={chats} currentUser={currentUser} onSelectChat={setActiveChatId} onCreateChat={() => setShowCreateChatModal(true)} />;
            case 'prayer':
                return <PrayerPage prayerRequests={prayerRequests} currentUser={currentUser} onPray={handleTogglePray} onAddRequest={openAddPrayerModal} onSelectRequest={setSelectedPrayerRequest} onDelete={handleDeletePrayerRequest} onEdit={openEditPrayerModal} />;
            case 'podcast': return <PodcastPage podcasts={podcasts} currentUser={currentUser} onDelete={handleDeletePodcast}/>;
            default: return <WorshipPage services={worshipServices} />;
        }
    };
    

    return (
        <div className="app-container">
            <header className="app-header">
                 <div className="header-content">
                    <img src={CHURCH.logo} alt="Church Logo" className="header-logo" />
                    <h1>{CHURCH.name}</h1>
                </div>
                <div className="header-actions">
                    {currentUser.roles.includes('admin') && (
                        <button className="header-button" onClick={() => setShowManageUsersModal(true)} aria-label="Manage Users">
                            <span className="material-symbols-outlined">settings</span>
                        </button>
                    )}
                    <button className="header-button" onClick={handleLogout} aria-label="Log Out">
                        <span className="material-symbols-outlined">logout</span>
                    </button>
                </div>
            </header>
            <main className="main-content">
                {renderPage()}
            </main>
            
            <nav className="bottom-nav">
                <button className={`nav-item ${activePage === 'worship' ? 'active' : ''}`} onClick={() => { setActivePage('worship'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">church</span>
                    <span>आरधना</span>
                </button>
                <button className={`nav-item ${activePage === 'news' ? 'active' : ''}`} onClick={() => { setActivePage('news'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">feed</span>
                    <span>सूचना</span>
                </button>
                <button className={`nav-item ${activePage === 'bible' ? 'active' : ''}`} onClick={() => { setActivePage('bible'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">book_2</span>
                    <span>बाइबल</span>
                </button>
                 <button className={`nav-item ${activePage === 'fellowship' ? 'active' : ''}`} onClick={() => { setActivePage('fellowship'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">groups</span>
                    <span>संगतिहरु</span>
                </button>
                <button className={`nav-item ${activePage === 'prayer' ? 'active' : ''}`} onClick={() => { setActivePage('prayer'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">volunteer_activism</span>
                    <span>प्रार्थना</span>
                </button>
                <button className={`nav-item ${activePage === 'podcast' ? 'active' : ''}`} onClick={() => { setActivePage('podcast'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">podcasts</span>
                    <span>Podcast</span>
                </button>
            </nav>
            
            {activeChat && activeChatId && <ConversationPage chat={activeChat} messages={messages[activeChatId] || []} currentUser={currentUser} onBack={() => setActiveChatId(null)} onSendMessage={handleSendMessage} />}
            {showAddPrayerModal && <AddPrayerRequestModal onClose={() => setShowAddPrayerModal(false)} onSave={handleSavePrayerRequest} existingRequest={existingRequest} />}
            {selectedPrayerRequest && <PrayerDetailsModal 
                request={selectedPrayerRequest} 
                currentUser={currentUser}
                onClose={() => setSelectedPrayerRequest(null)}
                onPray={handleTogglePray}
                onComment={handleComment}
                onDelete={handleDeletePrayerRequest}
                onEdit={openEditPrayerModal}
            />}
            {showCreateChatModal && <CreateChatModal onClose={() => setShowCreateChatModal(false)} onStartChat={handleStartChat} users={users} currentUser={currentUser} />}
            {currentUser.roles.includes('news_contributor') && activePage === 'news' && (
                <button className="fab" onClick={() => setShowAddNewsModal(true)} aria-label="Add News">
                    <span className="material-symbols-outlined">add</span>
                </button>
            )}
            {currentUser.roles.includes('podcast_contributor') && activePage === 'podcast' && (
                 <button className="fab" onClick={() => setShowAddPodcastModal(true)} aria-label="Add Podcast">
                    <span className="material-symbols-outlined">add</span>
                </button>
            )}
            {showAddNewsModal && <AddNewsModal onClose={() => setShowAddNewsModal(false)} onAdd={handleAddNews} />}
            {showAddPodcastModal && <AddPodcastModal onClose={() => setShowAddPodcastModal(false)} onAdd={handleAddPodcast} />}
            {showManageUsersModal && <ManageUsersModal onClose={() => setShowManageUsersModal(false)} users={users} onUpdateRoles={handleUpdateUserRoles} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);