
import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeFirebaseServices, FirebaseServices } from './firebase';
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


// --- Firebase Context for safe dependency injection ---
const FirebaseContext = createContext<FirebaseServices | null>(null);
export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    if (!context) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
};

// --- Types ---
type UserRole = 'admin' | 'member' | 'news_contributor' | 'podcast_contributor';
type User = { id: string; name: string; email: string; avatar: string; roles: UserRole[]; fcmTokens?: string[] };
type Church = { id: string; name: string; logo: string; offeringDetails: any; };
type Comment = { id: string; author: User; authorId: string; content: string; createdAt: Timestamp; };
type PrayerRequest = { id:string; authorId: string; authorName: string; title: string; content: string; image?: string; prayedBy: string[]; comments: Comment[]; createdAt: Timestamp; };
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
    participants: { [key: string]: { name: string; avatar: string; } }; // Simplified participant info
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

const MCCHEYNE_READING_PLAN = [
  "उत्पत्ति १, मत्ती १, एज्रा १, प्रेरित १",
  "उत्पत्ति २, मत्ती २, एज्रा २, प्रेरित २",
  "उत्पत्ति ३, मत्ती ३, एज्रा ३, प्रेरित ३",
  // ... Add all 365 days here
];

const PROVERBS_NNRV: { [key: number]: string } = {
    1: `१ दाऊदका छोरा, इस्राएलका राजा सोलोमनका हितोपदेश: २ बुद्धि र अनुशासन प्राप्त गर्न, समझशक्तिका कुराहरू बुझ्न, ३ अनुशासन र बुद्धिमानी जीवन प्राप्त गर्न, अर्थात् जे ठीक, न्यायसङ्गत र निष्पक्ष छ, सो गर्न, ४ निर्दोषलाई विवेक, र जवान मानिसलाई ज्ञान र समझ दिनलाई लेखिएका हुन्। ५ बुद्धिमान्ले सुनोस् र आफ्नो ज्ञान बढ़ाओस्, र समझदार मानिसले मार्गदर्शन पाओस्, ६ हितोपदेश र त्यसको अर्थ, बुद्धिमान् मानिसहरूका वचन र तिनीहरूका पहेलीहरू बुझ्नलाई हो। ७ परमप्रभुको भय मान्नु नै ज्ञानको प्रारम्भ हो, तर मूर्खहरूले बुद्धि र अनुशासनलाई तुच्छ ठान्छन्। ८ हे मेरो छोरो, तेरो बाबुको अनुशासन सुन्, र तेरी आमाको शिक्षा नत्याग्। ९ ती तेरो शिरको निम्ति सुन्दर माला, र तेरो घाँटीको हार हुनेछन्। १० हे मेरो छोरो, यदि पापीहरूले तँलाई फसाउन खोजे भने, तिनीहरूको इच्छा पूरा नगर्। ...`, // Truncated for brevity
    23: `१ जब तँ शासकसँग खान बस्छस्, तेरो सामुन्ने को छ, सो होशियारसित विचार गर्। २ यदि तँ पेटू छस् भने, तेरो घिच्रोमा एउटा छुरी राख्। ३ त्‍यसका स्‍वादिष्‍ट भोजनहरूको लालसा नगर्, किनभने त्‍यो भोजन छली हुन सक्‍छ। ४ धनी हुनलाई परिश्रम नगर्, र आफ्‍नो समझ देखाउन छोड्। ५ तैंले आफ्‍ना आँखा त्‍यसतिर लगाउने बित्तिकै के त्‍यो गइhaल्‍छ र? किनभने धनले अवश्‍य नै चीलजस्‍तै पखेटाहरू लगाउँछ, र आकाशतिर उडिhaल्‍छ। ६ कन्जूस मानिसको भोजन नखा, न त त्‍यसका स्‍वादिष्‍ट भोजनहरूको लालसा गर्। ७ किनभने त्‍यो त्‍यस्‍तो मानिस हो, जसले भोजनको मोल सधैँ गनिरहन्छ। त्‍यसले तँलाई भन्छ, “खाऊ र पिओ,” तर त्‍यसको हृदय तँसँग हुँदैन। ८ तैंले खाएको अलिकति पनि तैंले उगेल्‍नुपर्छ, र तैंले बोलेका मीठा वचनहरू खेर जानेछन्। ९ अज्ञानीको कानमा नबोल्, किनभने त्‍यसले तेरा बुद्धिका कुरालाई तुच्‍छ ठान्‍नेछ। १० पुरानो सिमानाको ढुङ्गा नसार्, न त टुहुरा-टुहुरीहरूको जग्‍गा मिच्। ११ किनभने तिनीहरूका उद्धारक शक्तिशाली हुनुहुन्‍छ, तँसँग तिनीहरूको पक्षमा उहाँले नै बहस गर्नुहुनेछ। १२ तेरो हृदय अनुशासनतिर लगा, र तेरा कान ज्ञानका कुरातिर लगा। १३ बालकलाई अनुशासन दिन नहिचकिचा। यदि तैंले त्‍यसलाई लट्ठीले हिर्काइस् भने त्‍यो मर्दैन। १४ तैंले त्‍यसलाई लट्ठीले हिर्काइस् भनेता, तैंले त्‍यसको प्राणलाई चिहानबाट बचाउँछस्। १५ हे मेरो छोरो, यदि तेरो हृदय बुद्धिमान् छ भने, मेरो हृदय पनि आनन्दित हुनेछ। १६ जब तेरा ओठले ठीक कुरा बोल्‍छन्, तब मेरो भित्री प्राण रमाउनेछ। १७ पापीहरँग तेरो हृदयले डाह नगरोस्, तर दिनभरि परमप्रभुको भयमा लागिरह। १८ निश्‍चय नै तेरो निम्‍ति एउटा भविष्य छ, र तेरो आशा कहिल्‍यै टुट्नेछैन। १९ हे मेरो छोरो, सुन् र बुद्धिमान् हो, र तेरो हृदय सोझो मार्गमा डोर्‍या। २० धेरै दाखमद्य पिउनेहरू, वा धेरै मासु खाने पेटूहरूसँग सङ्गत नगर्। २१ किनभने पियक्कड र पेटूहरू गरीब हुनेछन्, र निन्द्राले तिनीहरूलाई झुत्रा लुगा पहिराइदिनेछ। २२ तँलाई जन्‍म दिने तेरा बाबुको कुरा सुन्, र तेरी आमा बूढ़ी भएकी बेला तिनलाई हेला नगर्। ২৩ सत्‍यलाई किन् र त्‍यसलाई नबेच्, बुद्धि, अनुशासन र समझलाई पनि किन्। २४ धर्मी मानिसको बाबुले धेरै रमाहट गर्छ, बुद्धिमान् छोरो हुने बाबु त्‍यसमा प्रसन्‍n हुन्‍छ। २५ तेरा बाबु र आमा आनन्दित होऊन्, र तँलाई जन्‍म दिने तिनी रमाऊन्। २६ हे मेरो छोरो, तेरो हृदय मलाई दे, र तेरा आँखाले मेरा मार्गहरू मन पराऊन्। २७ किनभने वेश्‍या एउटा गहिरो खाल्‍डो हो, र परस्‍त्री एउटा साँघुरो इनार हो। २८ डाँकुले झैँ त्‍यसले पनि मानिसहरूलाई ढुकिरहन्छे, र मानिसहरूका बीचमा विश्‍वासघातीहरूको संख्‍या बढ़ाउँछे। २९ कसलाई दु:ख छ? कसलाई शोक छ? कसको झगड़ा छ? कसको गनगन छ? कसलाई अकारण घाउहरू छन्? कसका आँखा राता छन्? ३० तिनीहरू, जो दाखमद्यमा अल्‍मलिरहन्छन्, जो मिस्रित दाखमद्य चाख्‍n जान्छन्। ३१ दाखमद्य रातो भएको बेला, जब त्‍यो कचौरामा चम्‍कन्‍छ, र जब त्‍यो सरर तल जान्छ, त्‍यसलाई नहेर्। ३२ आखिरमा त्‍यसले सर्पले झैँ डस्‍छ, र विषालु सर्पले झैँ टोक्‍छ। ३३ तेरा आँखाले अनौठा कुराहरू देख्‍नेछन्, र तेरो मनले विचलित कुराहरू बोल्‍नेछ। ३४ तँ समुद्रको बीचमा सुत्‍ने मानिसजस्‍तै, वा जहाजको मस्तूलको टुप्‍पामा सुत्‍ने मानिसजस्‍तै हुनेछस्। ३५ तैंले भन्‍नेछस्, “तिनीहरूले मलाई हिर्काए, तर मलाई दुखेको छैन। तिनीहरूले मलाई पिटे, तर मैले थाहै पाइनँ। म कहिले ब्‍उँझने? म फेरि अर्को गिलास पिउँछु।”` };

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

const HomePage = ({ currentUser }: { currentUser: User }) => {
    const dayOfYear = getDayOfYear();
    const verseOfTheDay = MOCK_VERSES_OF_THE_DAY[dayOfYear % MOCK_VERSES_OF_THE_DAY.length];
    
    return (
        <div className="page-content">
            <h2>Welcome, {currentUser.name.split(' ')[0]}!</h2>
            <div className="card home-welcome-card">
                 <h3>आजको लागि बाइबल पढ्ने योजना</h3>
                <p>Have a victorious day in the Word.</p>
            </div>
            <div className="card verse-card">
                <h3>दिनको पद (Verse of the Day)</h3>
                <p className="verse-text">“{verseOfTheDay.text}”</p>
                <p className="verse-ref">- {verseOfTheDay.verse}</p>
            </div>
        </div>
    );
};


const LoginPage = ({ onLoginSuccess }: { onLoginSuccess: () => void }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { auth, db } = useFirebase();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!auth) {
            setError("Authentication service is not available. Please try again later.");
            return;
        }
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
        if (!auth || !db) {
            setError("Authentication service is not available. Please try again later.");
            return;
        }
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
            
            await setDoc(doc(db, "users", user.uid), {
                id: user.uid,
                name: fullName.trim(),
                email: user.email,
                avatar,
                roles: ['member']
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
            <h2>आरधना</h2>
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
                    <p>अहिले कुनै पनि आरधना सेवा छैन।</p>
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

const BibleReadingModal = ({ title, content, onClose }: { title: string; content: string; onClose: () => void; }) => {
    return (
        <Modal onClose={onClose}>
            <div className="bible-reading-modal-content">
                <h3>{title}</h3>
                <div className="bible-text-content">
                    <p>{content}</p>
                </div>
                <button className="action-button close-reading-button" onClick={onClose}>Close</button>
            </div>
        </Modal>
    );
};

const BiblePage = () => {
    const [showProverbsModal, setShowProverbsModal] = useState(false);
    
    const dayOfYear = getDayOfYear();
    const today = new Date();
    const dayOfMonth = today.getDate();
    
    const readingPlan = MCCHEYNE_READING_PLAN[dayOfYear - 1] || 'आजको लागि कुनै पढ्ने योजना छैन।';
    const proverbsText = PROVERBS_NNRV[dayOfMonth] || 'हितोपदेश उपलब्ध छैन।';
    
    return (
        <div className="page-content">
            <h2>बाइबल</h2>
            <div className="card verse-card">
                <h3>दिनको पद</h3>
                <p className="verse-text">“{MOCK_VERSES_OF_THE_DAY[dayOfYear % MOCK_VERSES_OF_THE_DAY.length].text}”</p>
                <p className="verse-ref">- {MOCK_VERSES_OF_THE_DAY[dayOfYear % MOCK_VERSES_OF_THE_DAY.length].verse}</p>
            </div>
            <div className="card bible-card">
                <h3>आजको लागि बाइबल पढ्ने योजना</h3>
                <p>{readingPlan}</p>
            </div>
            <div className="card bible-card" onClick={() => setShowProverbsModal(true)}>
                <h3>दिनको हितोपदेश</h3>
                <p>महिनाको हरेक दिनको लागि एक हितोपदेश: हितोपदेश अध्याय {dayOfMonth}</p>
                <small style={{ color: 'var(--primary-color)', marginTop: '8px', display: 'block' }}>पढ्नको लागि क्लिक गर्नुहोस्</small>
            </div>
            {showProverbsModal && (
                <BibleReadingModal
                    title={`हितोपदेश अध्याय ${dayOfMonth}`}
                    content={proverbsText}
                    onClose={() => setShowProverbsModal(false)}
                />
            )}
        </div>
    );
};


const NewsPage = ({news, currentUser, onDelete}: {news: NewsItem[], currentUser: User | null, onDelete: (id: string, image?: string) => void}) => {
    return (
        <div className="page-content">
            <h2>सुचना</h2>
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
                    const participantDetails = Object.entries(chat.participants).filter(([id]) => id !== currentUser.id).map(([,p]) => p);

                    if (participantDetails.length === 0) return null;

                    const displayName = participantDetails.map(p => p.name).join(', ');
                    const avatar = participantDetails[0].avatar;
                    const lastMessage = chat.lastMessage;
                    const isUnread = chat.lastRead && lastMessage && currentUser && chat.lastRead[currentUser.id] && (chat.lastRead[currentUser.id].toMillis() < lastMessage.createdAt.toMillis());

                    return (
                        <div key={chat.id} className={`list-item chat-item ${isUnread ? 'unread' : ''}`} onClick={() => onSelectChat(chat.id)}>
                            <div className="chat-avatar">{avatar}</div>
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

    const otherParticipants = Object.entries(chat.participants).filter(([id]) => id !== currentUser.id).map(([,p]) => p);
    const displayName = otherParticipants.map(p => p.name).join(', ');
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
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
           onSendMessage('', file);
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
            <h2>प्रार्थना अनुरोध</h2>
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

const NotificationPanel = ({ notifications, onClose }: { notifications: Notification[], onClose: () => void }) => {
    return (
        <>
            <div className="modal-backdrop" onClick={onClose} style={{backgroundColor: 'transparent', zIndex: 1000}}></div>
            <div className="notification-panel">
                <div className="notification-header">
                    <h4>Notifications</h4>
                </div>
                <div className="notification-list">
                    {notifications.length > 0 ? (
                        notifications.map(notif => (
                            <div key={notif.id} className="notification-item">
                                <span className="material-symbols-outlined notification-icon">{notif.icon}</span>
                                <div className="notification-content">
                                    <p>{notif.message}</p>
                                    <span className="notification-timestamp">{notif.timestamp}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-notifications">No new notifications.</p>
                    )}
                </div>
            </div>
        </>
    );
};

// --- Main App Component ---

const App = () => {
    const { auth, db, storage, messaging } = useFirebase();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [activePage, setActivePage] = useState('home');
    
    // Data states
    const [users, setUsers] = useState<User[]>([]);
    const [chats, setChats] = useState<Chat[]>([]);
    const [messages, setMessages] = useState<{ [key: string]: Message[] }>({});
    const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);
    const [news, setNews] = useState<NewsItem[]>([]);
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [worshipServices, setWorshipServices] = useState<WorshipService[]>([]);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    
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
    const [showNotificationPanel, setShowNotificationPanel] = useState(false);


    const setupNotifications = useCallback(async (user: User) => {
        if (!messaging || !db) return;
        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                const currentToken = await getToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY });
                if (currentToken) {
                    if (!user.fcmTokens?.includes(currentToken)) {
                        await updateDoc(doc(db, "users", user.id), {
                            fcmTokens: arrayUnion(currentToken)
                        });
                    }
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }
        } catch (error) {
            console.error('An error occurred while retrieving token. ', error);
        }
    }, [messaging, db]);


    useEffect(() => {
        if (!auth || !db) {
            setIsLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    const userDocRef = doc(db, "users", user.uid);
                    const userDocSnap = await getDoc(userDocRef);
                    if (userDocSnap.exists()) {
                        const userData = userDocSnap.data();
                        const userProfile: User = {
                            id: user.uid,
                            name: userData.name || user.displayName || 'Unknown User',
                            email: userData.email || user.email || '',
                            avatar: userData.avatar || (userData.name || user.displayName || '?').split(' ').map((n: string) => n[0]).join('').toUpperCase(),
                            roles: userData.roles || ['member'],
                            fcmTokens: userData.fcmTokens || []
                        };
                        setCurrentUser(userProfile);
                        await setupNotifications(userProfile);
                    } else {
                        await signOut(auth);
                        setCurrentUser(null);
                    }
                } else {
                    setCurrentUser(null);
                }
            } catch (error) {
                console.error("Error during authentication state check:", error);
                setCurrentUser(null);
            } finally {
                setIsLoading(false);
            }
        });

        return () => unsubscribe();
    }, [auth, db, setupNotifications]);
    
    useEffect(() => {
        if (messaging) {
            const unsubscribe = onMessage(messaging, (payload) => {
                console.log('Message received. ', payload);
                const notification: Notification = {
                    id: payload.messageId || new Date().toISOString(),
                    icon: 'notifications',
                    message: payload.notification?.body || "You have a new message.",
                    timestamp: new Date().toLocaleTimeString()
                };
                setNotifications(prev => [notification, ...prev]);
                setShowNotificationPanel(true);
            });
            return () => unsubscribe();
        }
    }, [messaging]);


    useEffect(() => {
        if (!currentUser || !db) return;
        const q = query(collection(db, "users"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as User)));
        });
        return () => unsubscribe();
    }, [currentUser, db]);

    useEffect(() => {
        if (!currentUser || !db) return;
        const q = query(collection(db, "prayerRequests"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPrayerRequests(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PrayerRequest)));
        });
        return () => unsubscribe();
    }, [currentUser, db]);
    
    useEffect(() => {
        if (!currentUser || !db) return;
        const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setNews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as NewsItem)));
        });
        return () => unsubscribe();
    }, [currentUser, db]);

    useEffect(() => {
        if (!currentUser || !db) return;
        const q = query(collection(db, "podcasts"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setPodcasts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Podcast)));
        });
        return () => unsubscribe();
    }, [currentUser, db]);

    useEffect(() => {
        if (!db) return;
        const q = query(collection(db, "worshipServices"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            setWorshipServices(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as WorshipService)));
        });
        return () => unsubscribe();
    }, [db]);

    useEffect(() => {
        if (!currentUser || !db) return;
        const q = query(collection(db, "chats"), where("participantIds", "array-contains", currentUser.id));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const chatsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Chat));
            setChats(chatsData);
        });
        return () => unsubscribe();
    }, [currentUser, db]);
    
    useEffect(() => {
        if (!activeChatId || !db) return;
        const q = query(collection(db, "chats", activeChatId, "messages"), orderBy("createdAt", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
             const messagesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Message));
             setMessages(prev => ({...prev, [activeChatId]: messagesData}));
        });
        return () => unsubscribe();
    }, [activeChatId, db]);

    // --- Handlers ---
    const handleTogglePray = async (requestId: string) => {
        if (!currentUser || !db) return;
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
        if (!currentUser || !db || !storage) return;
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

            if (id) {
                const prayerDocRef = doc(db, "prayerRequests", id);
                await updateDoc(prayerDocRef, prayerData);
            } else {
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
        if (!db || !storage) return;
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
        if(!currentUser || !db) return;
        const newComment = {
            id: doc(collection(db, "tmp")).id,
            authorId: currentUser.id,
            author: { id: currentUser.id, name: currentUser.name, avatar: currentUser.avatar, roles: currentUser.roles, email: currentUser.email },
            content: commentText,
            createdAt: Timestamp.now(),
        };
        const prayerRef = doc(db, "prayerRequests", requestId);
        await updateDoc(prayerRef, { comments: arrayUnion(newComment) });
    };

    const handleAddNews = async (data: {title: string, content: string, imageFile: File | null}) => {
        if (!currentUser || !db || !storage) return;
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
        if (!db || !storage) return;
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
        if (!currentUser || !db || !storage) return;
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
        if (!db || !storage) return;
        try {
            const audioRef = ref(storage, audioUrl);
            await deleteObject(audioRef).catch(err => console.error("Error deleting audio: ", err));
            await deleteDoc(doc(db, "podcasts", id));
        } catch (error) {
            console.error("Error deleting podcast: ", error);
        }
    };
    
    const handleSendMessage = async (text: string, file: File | null) => {
        if (!currentUser || !activeChatId || !db || !storage) return;

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
        if(!currentUser || !db) return;
        const sortedIds = [currentUser.id, userId].sort();
        const q = query(collection(db, "chats"), where("participantIds", "==", sortedIds));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            setActiveChatId(querySnapshot.docs[0].id);
        } else {
            const otherUser = users.find(u => u.id === userId);
            if (!otherUser) return;

            const newChatDoc = await addDoc(collection(db, "chats"), {
                participantIds: sortedIds,
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
        if (!db) return;
        try {
            await updateDoc(doc(db, "users", userId), { roles: newRoles });
        } catch (error) {
            console.error("Error updating roles:", error);
        }
    };

    const handleLogout = () => {
        if (auth) {
            signOut(auth);
        }
    };

    const openAddPrayerModal = () => {
        setPrayerRequestToEdit(null);
        setShowAddPrayerModal(true);
    };

    const openEditPrayerModal = (request: PrayerRequest) => {
        setPrayerRequestToEdit(request);
        setSelectedPrayerRequest(null);
        setShowAddPrayerModal(true);
    };

    const existingRequest = prayerRequests.find(r => r.id === prayerRequestToEdit?.id);

    // --- Render Logic ---

    if (isLoading) {
        return <div className="loading-container">Authenticating...</div>;
    }

    if (!currentUser) {
        return <LoginPage onLoginSuccess={() => setIsLoading(true)} />;
    }
    
    const activeChat = chats.find(c => c.id === activeChatId);

    const renderPage = () => {
        switch (activePage) {
            case 'home': return <HomePage currentUser={currentUser} />;
            case 'worship': return <WorshipPage services={worshipServices} />;
            case 'bible': return <BiblePage />;
            case 'news': return <NewsPage news={news} currentUser={currentUser} onDelete={handleDeleteNews} />;
            case 'fellowship':
                if (activeChatId && activeChat) {
                    return <ConversationPage chat={activeChat} messages={messages[activeChatId] || []} currentUser={currentUser} onBack={() => setActiveChatId(null)} onSendMessage={handleSendMessage} />;
                }
                return <ChatListPage chats={chats} currentUser={currentUser} onSelectChat={setActiveChatId} onCreateChat={() => setShowCreateChatModal(true)} />;
            case 'prayer':
                return <PrayerPage prayerRequests={prayerRequests} currentUser={currentUser} onPray={handleTogglePray} onAddRequest={openAddPrayerModal} onSelectRequest={setSelectedPrayerRequest} onDelete={handleDeletePrayerRequest} onEdit={openEditPrayerModal} />;
            case 'podcast': return <PodcastPage podcasts={podcasts} currentUser={currentUser} onDelete={handleDeletePodcast}/>;
            default: return <HomePage currentUser={currentUser} />;
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
                    <button className="header-button" onClick={() => setShowNotificationPanel(p => !p)} aria-label="Notifications">
                        <span className="material-symbols-outlined">notifications</span>
                        {notifications.length > 0 && <div className="notification-dot"></div>}
                    </button>
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
            
            {(activePage !== 'fellowship' || !activeChatId) && (
                <nav className="bottom-nav">
                    <button className={`nav-item ${activePage === 'home' ? 'active' : ''}`} onClick={() => setActivePage('home')}>
                        <span className="material-symbols-outlined">home</span>
                        <span>होम</span>
                    </button>
                    <button className={`nav-item ${activePage === 'worship' ? 'active' : ''}`} onClick={() => setActivePage('worship')}>
                        <span className="material-symbols-outlined">church</span>
                        <span>आरधना</span>
                    </button>
                    <button className={`nav-item ${activePage === 'podcast' ? 'active' : ''}`} onClick={() => setActivePage('podcast')}>
                        <span className="material-symbols-outlined">podcasts</span>
                        <span>Podcast</span>
                    </button>
                    <button className={`nav-item ${activePage === 'news' ? 'active' : ''}`} onClick={() => setActivePage('news')}>
                        <span className="material-symbols-outlined">feed</span>
                        <span>सूचना</span>
                    </button>
                    <button className={`nav-item ${activePage === 'bible' ? 'active' : ''}`} onClick={() => setActivePage('bible')}>
                        <span className="material-symbols-outlined">book_2</span>
                        <span>बाइबल</span>
                    </button>
                    <button className={`nav-item ${activePage === 'fellowship' ? 'active' : ''}`} onClick={() => setActivePage('fellowship')}>
                        <span className="material-symbols-outlined">groups</span>
                        <span>संगतिहरु</span>
                    </button>
                    <button className={`nav-item ${activePage === 'prayer' ? 'active' : ''}`} onClick={() => setActivePage('prayer')}>
                        <span className="material-symbols-outlined">volunteer_activism</span>
                        <span>प्रार्थना</span>
                    </button>
                </nav>
            )}
            
            {showNotificationPanel && <NotificationPanel notifications={notifications} onClose={() => setShowNotificationPanel(false)} />}
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

const AppInitializer = () => {
    const [services, setServices] = useState<FirebaseServices | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isInitializing, setIsInitializing] = useState(true);

    useEffect(() => {
        const init = () => {
            const firebaseServices = initializeFirebaseServices();
            if (firebaseServices.firebaseError) {
                setError(firebaseServices.firebaseError);
            } else {
                setServices(firebaseServices);
            }
            setIsInitializing(false);
        };
        init();
    }, []);

    if (isInitializing) {
        return <div className="loading-container">Initializing services...</div>;
    }

    if (error) {
        return (
            <div className="error-container">
                <img src={CHURCH.logo} alt="Church Logo" className="error-logo" />
                <h2>Application Error</h2>
                <p>Could not connect to services. Please check your configuration and contact support if the problem persists.</p>
                <pre>{error}</pre>
            </div>
        );
    }

    if (services) {
        return (
            <FirebaseContext.Provider value={services}>
                <App />
            </FirebaseContext.Provider>
        );
    }

    return (
        <div className="error-container">
            <h2>Unknown Error</h2>
            <p>An unexpected error occurred during application startup.</p>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <AppInitializer />
    </React.StrictMode>
);
