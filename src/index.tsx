
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { auth, db, storage } from './firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    type User as FirebaseUser
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
    getDocs,
    arrayRemove
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// --- Types ---
type User = { id: string; name: string; email: string; avatar: string; };
type Church = { id: string; name: string; logo: string; offeringDetails: any; streamingInfo: any; };
type Comment = { id: string; author: User; content: string; createdAt: Timestamp; };
type PrayerRequest = { id: string; author: User; title: string; content: string; image?: string; prayCount: number; prayedBy: string[]; comments: Comment[]; createdAt: Timestamp; };
type Podcast = { id: string; title: string; author: User; audioUrl: string; createdAt: Timestamp; };
type NewsItem = { id: string; title: string; date: string; content: string; image?: string; };
type Verse = { verse: string; text: string; };
type Notification = { id: string; icon: string; message: string; timestamp: string; url?: string; read: boolean; };
type Message = { id: string; sender: User; content: string; type: 'text' | 'image' | 'video'; mediaUrl?: string; createdAt: Timestamp; };
type Chat = { id: string; participants: User[]; messages: Message[]; lastMessageTimestamp: number; };


// --- Static Config & Data ---
const CHURCH: Church = {
    id: 'nepal_logos', name: 'Logos Church, Nepal', logo: '/logos-church-new-logo.jpg',
    offeringDetails: { qrCodeUrl: '/logos-qr-code.png', bankName: 'Global IME Bank', accountHolder: 'YAM PRADHAN', accountNumber: '10507010042662' },
    streamingInfo: { twitchChannel: 'logostvcnepal' }
};
const MOCK_NEWS: NewsItem[] = [
    { id: 'news1', title: 'Youth Camp 2024 Announcement', date: 'July 15, 2024', content: 'We are excited to announce our annual Youth Camp from August 5th to 8th. Registration is now open!', image: 'https://picsum.photos/400/200' },
    { id: 'news2', title: 'Community Outreach Program', date: 'July 12, 2024', content: 'Join us this Saturday for our community outreach program.' }
];
const MOCK_VERSES_OF_THE_DAY: Verse[] = [
    { verse: 'यूहन्ना ३:१६', text: 'किनभने परमेश्‍वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्‍ना एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्‍वास गर्ने कोही पनि नाश नहोस्, तर त्‍यसले अनन्त जीवन पाओस्।' },
    { verse: 'फिलिप्पी ४:१३', text: 'जसले मलाई शक्ति दिनuहुन्छ, उहाँमा म सब कुरा गर्न सक्छु।' }
];
// --- BIBLE DATA (truncated for brevity) ---
const BIBLE_READING_PLAN_NNRV = [ 'उत्पत्ति १, मत्ती १', 'उत्पत्ति २, मत्ती २', 'उत्पत्ति ३, मत्ती ३', 'उत्पत्ति ४, मत्ती ४', 'उत्पत्ति ५, मत्ती ५', 'उत्पत्ति ६, मत्ती ६', 'उत्पत्ति ७, मत्ती ७', 'उत्पत्ति ८, मत्ती ८', 'उत्पत्ति ९-१०, मत्ती ९' ];
const PROVERBS_NNRV: { [key: number]: string } = {
    23: `१ जब तँ शासकसँग खान बस्छस्, तेरो सामुन्ने को छ, सो होशियारसित विचार गर्।`
};
const BIBLE_TEXT_NNRV: { [key: string]: { [key: string]: string } } = { 'उत्पत्ति': { '1': `१ आदिमा परमेश्‍वरले आकाश र पृथ्‍वी सृष्‍टि गर्नुभयो।` } };


// --- Helper Functions ---
const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const userCache: { [key: string]: User } = {};
const fetchUser = async (uid: string): Promise<User> => {
    if (!uid) return { id: 'unknown', name: 'Unknown', email: '', avatar: '?' };
    if (userCache[uid]) return userCache[uid];
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (userDoc.exists()) {
        const user = { id: uid, ...userDoc.data() } as User;
        userCache[uid] = user;
        return user;
    }
    return { id: uid, name: 'Unknown User', email: '', avatar: '?' };
};
const fetchUsers = async (uids: string[]): Promise<User[]> => {
    return Promise.all(uids.map(uid => fetchUser(uid)));
};

// --- Reusable Components ---
const Modal = ({ children, onClose }: React.PropsWithChildren<{ onClose: () => void; }>) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };
    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
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
        if (file) onImageChange(file);
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
                    <button onClick={onImageRemove}><span className="material-symbols-outlined">delete</span></button>
                </div>
            )}
        </div>
    );
};

// --- Auth Pages ---
const LoginPage = ({ church }: { church: Church }) => {
    const [isLoginView, setIsLoginView] = React.useState(true);
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
            setError(err.message || 'Failed to log in.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (fullName.trim() === '') {
            setError('Please enter your full name.');
            return;
        }
        setIsLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const avatar = fullName.trim().split(' ').map(n => n[0]).join('').toUpperCase() || '?';
            
            await setDoc(doc(db, "users", user.uid), {
                name: fullName.trim(),
                email: user.email,
                avatar: avatar
            });
        } catch (err: any) {
            setError(err.message || 'Failed to sign up.');
        } finally {
            setIsLoading(false);
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setError('');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={church.logo} alt={`${church.name} Logo`} className="login-logo" />
                <h2>{church.name}</h2>
                <p>{isLoginView ? 'Log in to join the community.' : 'Create an account to join.'}</p>
                
                <form onSubmit={isLoginView ? handleLogin : handleSignUp}>
                    {!isLoginView && <input className="login-input" type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />}
                    <input className="login-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="login-button" type="submit" disabled={isLoading}>{isLoading ? '...' : (isLoginView ? 'Log In' : 'Sign Up')}</button>
                </form>
                
                {error && <p className="login-error">{error}</p>}

                <button onClick={toggleView} className="auth-toggle-link">
                    {isLoginView ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
                </button>
            </div>
        </div>
    );
};

// --- Main App Pages ---
const WorshipPage = ({ church }: { church: Church }) => { /* ... implementation from mock version ... */ return <div>Worship</div> };
const NewsPage = () => { /* ... implementation from mock version ... */ return <div>News</div> };
const BiblePage = () => { /* ... implementation from mock version ... */ return <div>Bible</div> };
const ChatListPage = ({ chats, onSelectChat, onCreateChat, currentUser }: { chats: Chat[]; onSelectChat: (id: string) => void; onCreateChat: () => void; currentUser: User; }) => { /* ... implementation ... */ return <div>Chat List</div> };
const ConversationPage = ({ chat, onBack, onSendMessage, currentUser }: { chat: Chat; onBack: () => void; onSendMessage: (chatId: string, content: string, type: 'text' | 'image', file?: File) => void; currentUser: User }) => { /* ... implementation ... */ return <div>Conversation</div>};
const PrayerPage = ({ prayerRequests, onPray, onAddRequest, onSelectRequest, currentUser }: { prayerRequests: PrayerRequest[]; onPray: (id:string) => void; onAddRequest: () => void; onSelectRequest: (req: PrayerRequest) => void; currentUser: User; }) => { /* ... implementation ... */ return <div>Prayer Wall</div> };

const PodcastPage = ({ podcasts, onAddPodcast, currentUser }: { podcasts: Podcast[]; onAddPodcast: () => void; currentUser: User; }) => {
    return (
        <div className="page-content">
            <h2>Podcast</h2>
            <div className="list-container">
                {podcasts.length > 0 ? podcasts.map(podcast => (
                    <div key={podcast.id} className="card podcast-item">
                        <div className="podcast-info">
                            <div>
                                <h4 className="podcast-title">{podcast.title}</h4>
                                <p className="podcast-author">By {podcast.author.name}</p>
                            </div>
                        </div>
                        <audio controls className="podcast-player" src={podcast.audioUrl}></audio>
                    </div>
                )) : <p>No podcasts available yet.</p>}
            </div>
            <button className="fab" onClick={onAddPodcast} aria-label="New Podcast">
                 <span className="material-symbols-outlined">mic</span>
            </button>
        </div>
    );
};

// --- Modals ---
const AddPrayerRequestModal = ({ onClose, onAddRequest }: { onClose: () => void; onAddRequest: (data: { title: string; content: string; imageFile: File | null; }) => void; }) => { /* ... implementation ... */ return <div>Add Prayer Modal</div> };
const PrayerDetailsModal = ({ request, onClose, onPray, onComment, currentUser }: { request: PrayerRequest; onClose: () => void; onPray: (id: string) => void; onComment: (id: string, text: string) => void; currentUser: User; }) => { /* ... implementation ... */ return <div>Prayer Details</div> };
const CreateChatModal = ({ onClose, onStartChat, currentUser }: { onClose: () => void; onStartChat: (userId: string) => void; currentUser: User }) => { /* ... implementation ... */ return <div>Create Chat Modal</div> };
const AddPodcastModal = ({ onClose, onAddPodcast }: { onClose: () => void; onAddPodcast: (data: { title: string; audioFile: File; }) => void; }) => { /* ... implementation ... */ return <div>Add Podcast Modal</div> };


// --- Main App Component ---
const App = () => {
    // Auth State
    const [user, setUser] = React.useState<User | null | undefined>(undefined); // undefined: loading, null: logged out

    // Page State
    const [activePage, setActivePage] = React.useState('worship');

    // Data State
    const [prayerRequests, setPrayerRequests] = React.useState<PrayerRequest[]>([]);
    const [podcasts, setPodcasts] = React.useState<Podcast[]>([]);
    const [chats, setChats] = React.useState<Chat[]>([]);
    
    // UI State
    const [activeChatId, setActiveChatId] = React.useState<string | null>(null);
    const [selectedPrayerRequest, setSelectedPrayerRequest] = React.useState<PrayerRequest | null>(null);
    const [showAddPrayerModal, setShowAddPrayerModal] = React.useState(false);
    const [showCreateChatModal, setShowCreateChatModal] = React.useState(false);
    const [showAddPodcastModal, setShowAddPodcastModal] = React.useState(false);
    
    // --- Auth Effect ---
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const fetchedUser = await fetchUser(firebaseUser.uid);
                setUser(fetchedUser);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    // --- Data Fetching Effects ---
    React.useEffect(() => {
        if (!user) return;
        
        // Fetch Prayer Requests
        const prayerQuery = query(collection(db, "prayerRequests"), orderBy("createdAt", "desc"));
        const unsubPrayer = onSnapshot(prayerQuery, async (snapshot) => {
            const requests = await Promise.all(snapshot.docs.map(async (docData) => {
                const data = docData.data();
                const author = await fetchUser(data.authorId);
                const comments = await Promise.all((data.comments || []).map(async (c: any) => ({...c, author: await fetchUser(c.authorId)})));
                return { ...data, id: docData.id, author, comments, createdAt: data.createdAt } as PrayerRequest;
            }));
            setPrayerRequests(requests);
        });

        // Fetch Podcasts
        const podcastQuery = query(collection(db, "podcasts"), orderBy("createdAt", "desc"));
        const unsubPodcast = onSnapshot(podcastQuery, async (snapshot) => {
            const pods = await Promise.all(snapshot.docs.map(async (docData) => {
                const data = docData.data();
                const author = await fetchUser(data.authorId);
                return { ...data, id: docData.id, author, createdAt: data.createdAt } as Podcast;
            }));
            setPodcasts(pods);
        });

        return () => {
            unsubPrayer();
            unsubPodcast();
        };
    }, [user]);

    // --- Handlers ---
    const handleLogout = () => signOut(auth);
    
    const handlePray = async (requestId: string) => {
        if (!user) return;
        const requestRef = doc(db, "prayerRequests", requestId);
        const request = prayerRequests.find(r => r.id === requestId);
        if (request) {
            const isPrayed = request.prayedBy.includes(user.id);
            await updateDoc(requestRef, {
                prayedBy: isPrayed ? arrayRemove(user.id) : arrayUnion(user.id)
            });
        }
    };

    const handleAddPrayerRequest = async ({ title, content, imageFile }: { title: string; content: string; imageFile: File | null; }) => {
        if (!user) return;
        let imageUrl = '';
        if (imageFile) {
            const storageRef = ref(storage, `prayerImages/${Date.now()}_${imageFile.name}`);
            const snapshot = await uploadBytes(storageRef, imageFile);
            imageUrl = await getDownloadURL(snapshot.ref);
        }
        await addDoc(collection(db, "prayerRequests"), {
            authorId: user.id,
            title, content, image: imageUrl,
            prayedBy: [],
            comments: [],
            createdAt: serverTimestamp()
        });
        setShowAddPrayerModal(false);
    };

    const handleAddPodcast = async ({ title, audioFile }: { title: string; audioFile: File }) => {
        if(!user) return;
        const storageRef = ref(storage, `podcasts/${Date.now()}_${audioFile.name}`);
        const snapshot = await uploadBytes(storageRef, audioFile);
        const audioUrl = await getDownloadURL(snapshot.ref);

        await addDoc(collection(db, 'podcasts'), {
            title,
            authorId: user.id,
            audioUrl,
            createdAt: serverTimestamp()
        });
        setShowAddPodcastModal(false);
    };

    // --- Render Logic ---
    if (user === undefined) {
        return <div className="login-container"><div>Loading...</div></div>; // Or a proper loading spinner
    }
    
    if (user === null) {
        return <LoginPage church={CHURCH} />;
    }
    
    const renderPage = () => {
        switch (activePage) {
            case 'worship': return <WorshipPage church={CHURCH} />;
            case 'news': return <NewsPage />;
            case 'bible': return <BiblePage />;
            case 'fellowship': return <div>Fellowship Page</div>; // Placeholder
            case 'prayer': return <PrayerPage prayerRequests={prayerRequests} onPray={handlePray} onAddRequest={() => setShowAddPrayerModal(true)} onSelectRequest={setSelectedPrayerRequest} currentUser={user} />;
            case 'podcast': return <PodcastPage podcasts={podcasts} onAddPodcast={() => setShowAddPodcastModal(true)} currentUser={user} />;
            default: return <WorshipPage church={CHURCH} />;
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
                    <button className="header-button" onClick={handleLogout} aria-label="Log Out">
                        <span className="material-symbols-outlined">logout</span>
                    </button>
                </div>
            </header>
            <main className="main-content">{renderPage()}</main>
            
            <nav className="bottom-nav">
                <button className={`nav-item ${activePage === 'worship' ? 'active' : ''}`} onClick={() => setActivePage('worship')}>
                    <span className="material-symbols-outlined">church</span>
                    <span>Worship</span>
                </button>
                <button className={`nav-item ${activePage === 'news' ? 'active' : ''}`} onClick={() => setActivePage('news')}>
                    <span className="material-symbols-outlined">feed</span>
                    <span>News</span>
                </button>
                <button className={`nav-item ${activePage === 'bible' ? 'active' : ''}`} onClick={() => setActivePage('bible')}>
                    <span className="material-symbols-outlined">book_2</span>
                    <span>Bible</span>
                </button>
                <button className={`nav-item ${activePage === 'fellowship' ? 'active' : ''}`} onClick={() => setActivePage('fellowship')}>
                    <span className="material-symbols-outlined">groups</span>
                    <span>Fellowship</span>
                </button>
                <button className={`nav-item ${activePage === 'prayer' ? 'active' : ''}`} onClick={() => setActivePage('prayer')}>
                    <span className="material-symbols-outlined">volunteer_activism</span>
                    <span>Prayer</span>
                </button>
                <button className={`nav-item ${activePage === 'podcast' ? 'active' : ''}`} onClick={() => setActivePage('podcast')}>
                    <span className="material-symbols-outlined">podcasts</span>
                    <span>Podcast</span>
                </button>
            </nav>
            
            {/* Modals will be rendered here */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
