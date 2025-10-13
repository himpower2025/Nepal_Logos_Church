
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
    type QuerySnapshot, 
    type QueryDocumentSnapshot
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// --- Platform Configuration ---
type OfferingDetails = {
    qrCodeUrl: string;
    bankName: string;
    accountHolder: string;
    accountNumber: string;
};

type StreamingInfo = {
    twitchChannel: string;
};

type Church = {
    id: string;
    name: string;
    logo: string;
    offeringDetails: OfferingDetails;
    streamingInfo: StreamingInfo;
};

const CHURCHES: Church[] = [
    {
        id: 'nepal_logos',
        name: 'Logos Church, Nepal',
        logo: '/logos-church-new-logo.jpg',
        offeringDetails: {
            qrCodeUrl: '/logos-qr-code.png',
            bankName: 'Global IME Bank',
            accountHolder: 'YAM PRADHAN',
            accountNumber: '10507010042662'
        },
        streamingInfo: {
            twitchChannel: 'logostvcnepal'
        }
    },
];

// --- Data Types ---
type User = {
    id: string; // Firebase Auth UID
    name: string;
    email: string;
    avatar: string;
};

type Message = {
    id: string;
    sender: User; // For mock chat
    content: string;
    timestamp: string;
    type: 'text' | 'image' | 'video';
    timestampValue: number;
};

type Chat = {
    id: string;
    participants: User[];
    messages: Message[];
};

type Comment = {
    author: { id: string, name: string, avatar: string };
    content: string;
    createdAt: Timestamp;
};

type PrayerRequest = {
    id: string;
    author: User; // Fetched User object
    title: string;
    content: string;
    image?: string;
    prayCount: number;
    prayedBy: string[];
    comments: Comment[];
    isPrayedByCurrentUser: boolean; // Calculated client-side
    createdAt: Timestamp;
};

type NewsItem = {
    id: string;
    title: string;
    date: string;
    content: string;
    image?: string;
};

type Verse = {
    verse: string;
    text: string;
};

// --- Mock Data for non-Firebase pages ---

// The current user will be populated by Firebase auth, but we need a placeholder for mock chats.
const MOCK_CURRENT_USER_PLACEHOLDER: User = { id: 'user1', name: 'You', email: '', avatar: 'ME' };

const MOCK_OTHER_USERS: User[] = [
    { id: 'user2', name: 'Jane Smith', email: 'jane@test.com', avatar: 'JS' },
    { id: 'user3', name: 'Pastor Ramesh', email: 'ramesh@test.com', avatar: 'PR' },
];

let MOCK_CHATS: Chat[] = [
    {
        id: 'chat1',
        participants: [MOCK_CURRENT_USER_PLACEHOLDER, MOCK_OTHER_USERS[0]],
        messages: [
            { id: 'msg1', sender: MOCK_OTHER_USERS[0], content: 'Hello! How are you?', timestamp: '10:00 AM', type: 'text', timestampValue: 1722400800000 },
            { id: 'msg2', sender: MOCK_CURRENT_USER_PLACEHOLDER, content: 'I am fine, thank you!', timestamp: '10:01 AM', type: 'text', timestampValue: 1722400860000 },
        ],
    },
];

const MOCK_NEWS: NewsItem[] = [
    { id: 'news1', title: 'Youth Camp 2024 Announcement', date: 'July 15, 2024', content: 'We are excited to announce our annual Youth Camp from August 5th to 8th. Registration is now open!', image: 'https://picsum.photos/400/200' },
    { id: 'news2', title: 'Community Outreach Program', date: 'July 12, 2024', content: 'Join us this Saturday for our community outreach program.' }
];

const MOCK_VERSES_OF_THE_DAY: Verse[] = [
    { verse: 'यूहन्ना ३:१६', text: 'किनभने परमेश्‍वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्‍ना एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्‍वास गर्ने कोही पनि नाश नहोस्, तर त्‍यसले अनन्त जीवन पाओस्।' },
    { verse: 'फिलिप्पी ४:१३', text: 'जसले मलाई शक्ति दिनuहुन्छ, उहाँमा म सब कुरा गर्न सक्छु।' }
];

const BIBLE_READING_PLAN_NNRV = ['उत्पत्ति १, मत्ती १', 'उत्पत्ति २, मत्ती २', 'उत्पत्ति ३, मत्ती ३']; // Truncated for brevity
const BIBLE_TEXT_NNRV: { [key: string]: { [key: string]: string } } = { 'उत्पत्ति': { '1': `१ आदिमा परमेश्‍वरले आकाश र पृथ्‍वी सृष्‍टि गर्नुभयो।` } }; // Truncated

// --- Helper Functions ---

const userCache: { [key: string]: User } = {};
const fetchUser = async (uid: string): Promise<User> => {
    if (userCache[uid]) return userCache[uid];
    const userDocRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
        const userData = userDoc.data();
        const user = { ...userData, id: uid } as User;
        userCache[uid] = user;
        return user;
    }
    return { id: uid, name: 'Unknown User', email: '', avatar: '?' };
};

const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const getBibleTextForPlan = (plan: string) => {
    if (!plan) return undefined;
    const bookName = plan.split(' ')[0];
    const chapter = plan.split(' ')[1].split(',')[0];
    return BIBLE_TEXT_NNRV[bookName]?.[chapter] || "Bible text not available in the app.";
};

// --- Reusable Components ---
const Modal = ({ children, onClose }: React.PropsWithChildren<{ onClose: () => void; }>) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };
    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button"><span className="material-symbols-outlined">close</span></button>
                {children}
            </div>
        </div>
    );
};

// --- Pages & Modals ---

const LoginPage = ({ church }: { church: Church }) => {
    const [isLoginView, setIsLoginView] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleAuthAction = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            if (isLoginView) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                if (name.trim() === '') {
                    setError('Please enter your full name.');
                    setIsLoading(false);
                    return;
                }
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                const avatar = name.trim().split(' ').map(n => n[0]).join('').toUpperCase();
                await setDoc(doc(db, 'users', user.uid), {
                    name: name.trim(),
                    email: user.email,
                    avatar: avatar || '?'
                });
            }
        } catch (err: any) {
            setError(err.message.replace('Firebase: ', ''));
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
                <form onSubmit={handleAuthAction}>
                    {!isLoginView && <input className="login-input" type="text" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} required />}
                    <input className="login-input" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="login-button" type="submit" disabled={isLoading}>{isLoading ? 'Processing...' : (isLoginView ? 'Log In' : 'Sign Up')}</button>
                </form>
                {error && <p className="login-error">{error}</p>}
                <button onClick={toggleView} className="auth-toggle-link">{isLoginView ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}</button>
            </div>
        </div>
    );
};

const WorshipPage = ({ church }: { church: Church }) => {
    const [showOfferingModal, setShowOfferingModal] = React.useState(false);
    const copyToClipboard = (text: string) => navigator.clipboard.writeText(text).then(() => alert("Account number copied."));

    return (
        <div className="page-content">
            <h2>Worship</h2>
            <div className="card">
                <div className="twitch-container">
                    <iframe src={`https://player.twitch.tv/?channel=${church.streamingInfo.twitchChannel}&parent=${window.location.hostname}`} height="100%" width="100%" allowFullScreen></iframe>
                </div>
                <p className="twitch-info-text">Join the live worship.</p>
                <div className="worship-offering-container">
                    <button className="action-button" onClick={() => setShowOfferingModal(true)}>
                        <span className="material-symbols-outlined">volunteer_activism</span> Online Offering
                    </button>
                </div>
            </div>
            {showOfferingModal && (
                <Modal onClose={() => setShowOfferingModal(false)}>
                    <div className="offering-modal-content">
                        <h3>Online Offering</h3>
                        <img src={church.offeringDetails.qrCodeUrl} alt="Offering QR Code" className="qr-code-img" />
                        <div className="offering-details">
                            <p><strong>Bank:</strong> {church.offeringDetails.bankName}</p>
                            <p><strong>Account Holder:</strong> {church.offeringDetails.accountHolder}</p>
                            <div className="account-number-container">
                                <p><strong>Account Number:</strong> {church.offeringDetails.accountNumber}</p>
                                <button className="copy-button" onClick={() => copyToClipboard(church.offeringDetails.accountNumber)}><span className="material-symbols-outlined">content_copy</span> Copy</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

const BiblePage = () => {
    const [readingData, setReadingData] = React.useState<{title: string; plan: string; text: string} | null>(null);
    const dayOfYear = getDayOfYear();
    const readingPlan = BIBLE_READING_PLAN_NNRV[dayOfYear - 1] || 'No plan for today.';

    const handleShowReading = () => {
        const text = getBibleTextForPlan(readingPlan);
        setReadingData({ title: `Day ${dayOfYear} Reading`, plan: readingPlan, text: text || "Text not available." });
    };

    return (
        <div className="page-content">
            <h2>बाइबल</h2>
            <div className="card verse-card">
                <h3>दिनको पद</h3>
                <p className="verse-text">“{MOCK_VERSES_OF_THE_DAY[dayOfYear % MOCK_VERSES_OF_THE_DAY.length].text}”</p>
                <p className="verse-ref">- {MOCK_VERSES_OF_THE_DAY[dayOfYear % MOCK_VERSES_OF_THE_DAY.length].verse}</p>
            </div>
            <div className="card bible-card" onClick={handleShowReading}>
                <h3>बाइबल पढाइ योजना (NNRV)</h3>
                <p>दिन {dayOfYear}: {readingPlan}</p>
            </div>
            {readingData && (
                <Modal onClose={() => setReadingData(null)}>
                    <div className="bible-reading-modal-content">
                        <h3>{readingData.title}</h3>
                        <h4>{readingData.plan}</h4>
                        <div className="bible-text-content"><p>{readingData.text}</p></div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

const NewsPage = () => (
    <div className="page-content">
        <h2>News & Announcements</h2>
        <div className="list-container">
            {MOCK_NEWS.map(item => (
                <div key={item.id} className="card news-item">
                    {item.image && <img src={item.image} alt={item.title} className="news-image"/>}
                    <div className="news-content">
                         <h3>{item.title}</h3>
                        <p className="news-meta">{item.date}</p>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const ChatListPage = ({ chats, onSelectChat, currentUser }: { chats: Chat[]; onSelectChat: (id: string) => void; currentUser: User; }) => (
    <div className="page-content chat-list-page">
        <h2>Fellowship</h2>
        <div className="list-container">
            {chats.map(chat => {
                const otherParticipant = chat.participants.find(p => p.id !== currentUser.id);
                if (!otherParticipant) return null;
                const lastMessage = chat.messages[chat.messages.length - 1];
                return (
                    <div key={chat.id} className="list-item chat-item" onClick={() => onSelectChat(chat.id)}>
                        <div className="chat-avatar">{otherParticipant.avatar}</div>
                        <div className="chat-info">
                            <span className="chat-name">{otherParticipant.name}</span>
                            <span className="chat-last-message">{lastMessage ? lastMessage.content : 'No messages.'}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

const ConversationPage = ({ chat, onBack, onSendMessage, currentUser }: { chat: Chat; onBack: () => void; onSendMessage: (content: string) => void; currentUser: User }) => {
    const [newMessage, setNewMessage] = React.useState('');
    const otherParticipant = chat.participants.find(p => p.id !== currentUser.id);
    const handleSend = () => { if (newMessage.trim()) { onSendMessage(newMessage.trim()); setNewMessage(''); } };
    return (
        <div className="conversation-page">
            <header className="conversation-header">
                <button className="back-button" onClick={onBack}><span className="material-symbols-outlined">arrow_back</span></button>
                <h3>{otherParticipant?.name}</h3>
                <div style={{width: 40}}></div>
            </header>
            <div className="message-list">
                {chat.messages.map(msg => <div key={msg.id} className={`message-bubble ${msg.sender.id === currentUser.id ? 'sent' : 'received'}`}>{msg.content}</div>)}
            </div>
            <div className="message-input-container">
                 <input type="text" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
                 <button className="send-button" onClick={handleSend}><span className="material-symbols-outlined">send</span></button>
            </div>
        </div>
    );
};

const PrayerPage = ({ prayerRequests, onPray, onAddRequest, onSelectRequest }: { prayerRequests: PrayerRequest[]; onPray: (id:string) => void; onAddRequest: () => void; onSelectRequest: (req: PrayerRequest) => void; }) => (
    <div className="page-content">
        <h2>Prayer Wall</h2>
        <div className="list-container">
            {prayerRequests.map(request => (
                <div key={request.id} className="card prayer-item" onClick={() => onSelectRequest(request)}>
                    {request.image && <img src={request.image} alt={request.title} className="prayer-image" />}
                    <h4>{request.title}</h4>
                    <p className="prayer-content">{request.content}</p>
                    <div className="prayer-meta">
                        <span>By {request.author.name}</span>
                        <div className="prayer-actions">
                            <button className={`prayer-action-button ${request.isPrayedByCurrentUser ? 'prayed' : ''}`} onClick={(e) => { e.stopPropagation(); onPray(request.id); }}>
                                <span className="material-symbols-outlined">volunteer_activism</span>
                                <span>{request.prayCount}</span>
                            </button>
                            <div className="prayer-action-button comment-button">
                                <span className="material-symbols-outlined">chat_bubble</span>
                                <span>{request.comments.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button className="fab" onClick={onAddRequest} aria-label="New Prayer Request"><span className="material-symbols-outlined">add</span></button>
    </div>
);

const PrayerDetailsModal = ({ request, onClose, onPray, onComment }: { request: PrayerRequest; onClose: () => void; onPray: (id: string) => void; onComment: (id: string, text: string) => void; }) => {
    const [comment, setComment] = React.useState('');
    const handleCommentSubmit = (e: React.FormEvent) => { e.preventDefault(); if (comment.trim()) { onComment(request.id, comment.trim()); setComment(''); } };
    return (
        <Modal onClose={onClose}>
            <div className="prayer-details-modal">
                <h3>{request.title}</h3>
                <p className="prayer-author">By {request.author.name}</p>
                {request.image && <img src={request.image} alt={request.title} className="prayer-image" />}
                <p className="prayer-main-content">{request.content}</p>
                <button className={`prayer-action-button ${request.isPrayedByCurrentUser ? 'prayed' : ''}`} onClick={() => onPray(request.id)}>
                    <span className="material-symbols-outlined">volunteer_activism</span>
                    <span>{request.prayCount} I prayed</span>
                </button>
                <div className="prayer-comments-section">
                    <h4>Comments ({request.comments.length})</h4>
                    <div className="prayer-comment-list">
                       {[...request.comments].reverse().map((c, i) => (
                           <div key={i} className="comment-item">
                               <p><strong>{c.author.name}:</strong> {c.content}</p>
                           </div>
                       ))}
                    </div>
                    <form className="comment-form" onSubmit={handleCommentSubmit}>
                        <input type="text" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button type="submit"><span className="material-symbols-outlined">send</span></button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

const AddPrayerRequestModal = ({ onClose, onAddRequest }: { onClose: () => void; onAddRequest: (data: { title: string; content: string; image: File | null; }) => void; }) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [imageFile, setImageFile] = React.useState<File | null>(null);
    const [imagePreview, setImagePreview] = React.useState<string | null>(null);

    const handleFileChange = (file: File) => { setImageFile(file); setImagePreview(URL.createObjectURL(file)); };
    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (title.trim() && content.trim()) { onAddRequest({ title, content, image: imageFile }); onClose(); } };

    return (
        <Modal onClose={onClose}>
            <form className="modal-form" onSubmit={handleSubmit}>
                <h3>New Prayer Request</h3>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea rows={5} placeholder="What should we pray for?" value={content} onChange={(e) => setContent(e.target.value)} required />
                <ImageUpload onImageChange={handleFileChange} imagePreview={imagePreview} onImageRemove={() => { setImageFile(null); setImagePreview(null); }} />
                <button type="submit" className="action-button">Post Request</button>
            </form>
        </Modal>
    );
};

const ImageUpload = ({ imagePreview, onImageChange, onImageRemove }: { imagePreview: string | null; onImageChange: (file: File) => void; onImageRemove: () => void; }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => { e.target.files?.[0] && onImageChange(e.target.files[0]); };
    return (
        <div className="image-upload-container">
            {!imagePreview ? (<><input type="file" accept="image/*" onChange={handleFileSelect} style={{ display: 'none' }} ref={fileInputRef} /><label onClick={() => fileInputRef.current?.click()} className="image-upload-label"><span className="material-symbols-outlined">add_photo_alternate</span><span>Add Photo</span></label></>) : (<div className="image-preview"><img src={imagePreview} alt="Preview" /><button onClick={onImageRemove}><span className="material-symbols-outlined">delete</span></button></div>)}
        </div>
    );
};


// --- Main App Component ---

const App = () => {
    const [user, setUser] = React.useState<User | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [church] = React.useState(CHURCHES[0]);
    const [activePage, setActivePage] = React.useState('worship');
    
    // Data states
    const [chats, setChats] = React.useState(MOCK_CHATS);
    const [prayerRequests, setPrayerRequests] = React.useState<PrayerRequest[]>([]);
    
    // View states
    const [activeChatId, setActiveChatId] = React.useState<string | null>(null);
    const [selectedPrayerRequest, setSelectedPrayerRequest] = React.useState<PrayerRequest | null>(null);
    const [showAddPrayerModal, setShowAddPrayerModal] = React.useState(false);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
            if (firebaseUser) {
                const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
                if (userDoc.exists()) {
                    setUser({ id: firebaseUser.uid, ...userDoc.data() } as User);
                }
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    React.useEffect(() => {
        if (!user) return;

        const q = query(collection(db, "prayerRequests"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, async (querySnapshot: QuerySnapshot) => {
            const requestsPromises = querySnapshot.docs.map(async (docData: QueryDocumentSnapshot) => {
                const data = docData.data();
                const author = await fetchUser(data.authorId);
                const commentsWithAuthors = await Promise.all((data.comments || []).map(async (comment: any) => ({
                    ...comment,
                    author: await fetchUser(comment.authorId || comment.author.id) // Support both old and new comment format
                })));

                return {
                    id: docData.id,
                    ...data,
                    author,
                    prayedBy: data.prayedBy || [],
                    isPrayedByCurrentUser: (data.prayedBy || []).includes(user.id),
                    comments: commentsWithAuthors,
                } as PrayerRequest;
            });
            const requests = await Promise.all(requestsPromises);
            setPrayerRequests(requests);
        });

        return () => unsubscribe();
    }, [user]);

    const handleLogout = () => signOut(auth);

    const handleAddPrayerRequest = async ({ title, content, image }: { title: string; content: string; image: File | null; }) => {
        if (!user) return;
        let imageUrl = '';
        if (image) {
            const storageRef = ref(storage, `prayerImages/${Date.now()}_${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            imageUrl = await getDownloadURL(snapshot.ref);
        }
        await addDoc(collection(db, "prayerRequests"), {
            authorId: user.id, title, content, image: imageUrl,
            prayCount: 0, prayedBy: [], comments: [], createdAt: serverTimestamp(),
        });
    };

    const handlePray = async (requestId: string) => {
        if (!user) return;
        const requestRef = doc(db, "prayerRequests", requestId);
        const request = prayerRequests.find(r => r.id === requestId);
        if (!request) return;
        const newPrayedBy = request.isPrayedByCurrentUser ? request.prayedBy.filter(uid => uid !== user.id) : [...request.prayedBy, user.id];
        await updateDoc(requestRef, { prayedBy: newPrayedBy, prayCount: newPrayedBy.length });
    };

    const handleComment = async (requestId: string, commentText: string) => {
        if (!user) return;
        const requestRef = doc(db, "prayerRequests", requestId);
        const newComment = {
            author: { id: user.id, name: user.name, avatar: user.avatar },
            content: commentText,
            createdAt: Timestamp.now()
        };
        await updateDoc(requestRef, { comments: arrayUnion(newComment) });
    };

    const handleSendMessage = (content: string) => {
        if (!user) return;
        const newMessage = { id: `msg${Date.now()}`, sender: user, content, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}), type: 'text' as const, timestampValue: Date.now() };
        setChats(prev => prev.map(chat => chat.id === activeChatId ? { ...chat, messages: [...chat.messages, newMessage] } : chat));
    };

    const renderPage = () => {
        if (!user) return null;
        switch (activePage) {
            case 'worship': return <WorshipPage church={church} />;
            case 'bible': return <BiblePage />;
            case 'news': return <NewsPage />;
            case 'fellowship': return activeChatId ? null : <ChatListPage chats={chats} onSelectChat={setActiveChatId} currentUser={user} />;
            case 'prayer': return <PrayerPage prayerRequests={prayerRequests} onPray={handlePray} onAddRequest={() => setShowAddPrayerModal(true)} onSelectRequest={setSelectedPrayerRequest} />;
            default: return <WorshipPage church={church} />;
        }
    };
    
    if (isLoading) {
        return <div className="login-container"><div className="login-box"><h2>Loading...</h2></div></div>;
    }
    
    if (!user) {
        return <LoginPage church={church} />;
    }

    const activeChat = chats.find(c => c.id === activeChatId);

    return (
        <div className="app-container">
            <header className="app-header">
                 <div className="header-content"><img src={church.logo} alt="Church Logo" className="header-logo" /><h1>{church.name}</h1></div>
                 <div className="header-actions"><button className="header-button" onClick={handleLogout} aria-label="Logout"><span className="material-symbols-outlined">logout</span></button></div>
            </header>
            <main className="main-content">{renderPage()}</main>
            
            <nav className="bottom-nav">
                <button className={`nav-item ${activePage === 'worship' ? 'active' : ''}`} onClick={() => { setActivePage('worship'); setActiveChatId(null); }}><span className="material-symbols-outlined">church</span><span>Worship</span></button>
                <button className={`nav-item ${activePage === 'news' ? 'active' : ''}`} onClick={() => { setActivePage('news'); setActiveChatId(null); }}><span className="material-symbols-outlined">feed</span><span>News</span></button>
                <button className={`nav-item ${activePage === 'bible' ? 'active' : ''}`} onClick={() => { setActivePage('bible'); setActiveChatId(null); }}><span className="material-symbols-outlined">book_2</span><span>Bible</span></button>
                <button className={`nav-item ${activePage === 'fellowship' ? 'active' : ''}`} onClick={() => { setActivePage('fellowship'); setActiveChatId(null); }}><span className="material-symbols-outlined">groups</span><span>Fellowship</span></button>
                <button className={`nav-item ${activePage === 'prayer' ? 'active' : ''}`} onClick={() => { setActivePage('prayer'); setActiveChatId(null); }}><span className="material-symbols-outlined">volunteer_activism</span><span>Prayer</span></button>
            </nav>
            
            {activeChat && <ConversationPage chat={activeChat} onBack={() => setActiveChatId(null)} onSendMessage={handleSendMessage} currentUser={user} />}
            {showAddPrayerModal && <AddPrayerRequestModal onClose={() => setShowAddPrayerModal(false)} onAddRequest={handleAddPrayerRequest} />}
            {selectedPrayerRequest && <PrayerDetailsModal request={selectedPrayerRequest} onClose={() => setSelectedPrayerRequest(null)} onPray={handlePray} onComment={handleComment} />}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);
