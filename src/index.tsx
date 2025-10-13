import React, { useState, useEffect, useRef } from 'react';
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
import { ref, uploadString, getDownloadURL, uploadBytes } from "firebase/storage";

// --- Types ---
type User = { id: string; name: string; email: string; avatar: string; };
type Church = { id: string; name: string; logo: string; offeringDetails: any; streamingInfo: any; };
type Comment = { id: string; author: User; content: string; createdAt: Timestamp; };
type PrayerRequest = { id: string; author: User; title: string; content: string; image?: string; prayedBy: string[]; comments: any[]; createdAt: Timestamp; };
type Podcast = { id: string; title: string; author: User; audioUrl: string; createdAt: Timestamp; };
type NewsItem = { id: string; title: string; date: string; content: string; image?: string; };
type Verse = { verse: string; text: string; };
type Message = { id: string; senderId: string; sender?: User; content: string; type: 'text' | 'image'; mediaUrl?: string; createdAt: Timestamp; };
type Chat = { id: string; participantIds: string[]; participants: User[]; messages: Message[]; lastMessageTimestamp: Timestamp; };

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
const BIBLE_READING_PLAN_NNRV = [ 'उत्पत्ति १, मत्ती १', 'उत्पत्ति २, मत्ती २', 'उत्पत्ति ३, मत्ती ३', 'उत्पत्ति ४, मत्ती ४', 'उत्पत्ति ५, मत्ती ५', 'उत्पत्ति ६, मत्ती ६', 'उत्पत्ति ७, मत्ती ७', 'उत्पत्ति ८, मत्ती ८', 'उत्पत्ति ९-१०, मत्ती ९' ];
const PROVERBS_NNRV: { [key: number]: string } = { 23: `१ जब तँ शासकसँग खान बस्छस्, तेरो सामुन्ने को छ, सो होशियारसित विचार गर्।` };
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
const fetchUsers = async (uids: string[]): Promise<User[]> => Promise.all(uids.map(uid => fetchUser(uid)));
const getBibleTextForPlan = (plan: string) => plan ? BIBLE_TEXT_NNRV['उत्पत्ति']?.['1'] : undefined; // Simplified for brevity

// --- Reusable Components ---
const Modal = ({ children, onClose }: React.PropsWithChildren<{ onClose: () => void; }>) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => { if (e.target === e.currentTarget) onClose(); };
    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button onClick={onClose} className="modal-close-button"><span className="material-symbols-outlined">close</span></button>
                {children}
            </div>
        </div>
    );
};
const ImageUpload = ({ imagePreview, onImageChange, onImageRemove }: { imagePreview: string | null; onImageChange: (file: File) => void; onImageRemove: () => void; }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => { e.target.files?.[0] && onImageChange(e.target.files[0]); };
    return (
        <div className="image-upload-container">
            {!imagePreview ? (<><input type="file" accept="image/*" onChange={handleFileSelect} style={{ display: 'none' }} ref={fileInputRef} /><label onClick={() => fileInputRef.current?.click()} className="image-upload-label"><span className="material-symbols-outlined">add_photo_alternate</span><span>Add Photo</span></label></>) : (<div className="image-preview"><img src={imagePreview} alt="Preview" /><button onClick={onImageRemove}><span className="material-symbols-outlined">delete</span></button></div>)}
        </div>
    );
};

// --- Auth Page ---
const LoginPage = ({ church }: { church: Church }) => {
    const [isLoginView, setIsLoginView] = useState(true);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleAuth = async (e: React.FormEvent, type: 'login' | 'signup') => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            if (type === 'login') {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                if (fullName.trim() === '') throw new Error('Please enter your full name.');
                const cred = await createUserWithEmailAndPassword(auth, email, password);
                const avatar = fullName.trim().split(' ').map(n => n[0]).join('').toUpperCase() || '?';
                await setDoc(doc(db, "users", cred.user.uid), { name: fullName.trim(), email: cred.user.email, avatar });
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred.');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="login-container"><div className="login-box"><img src={church.logo} alt={`${church.name} Logo`} className="login-logo" /><h2>{church.name}</h2><p>{isLoginView ? 'Log in to join.' : 'Create an account.'}</p><form onSubmit={(e) => handleAuth(e, isLoginView ? 'login' : 'signup')}>{!isLoginView && <input className="login-input" type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />}<input className="login-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><input className="login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><button className="login-button" type="submit" disabled={isLoading}>{isLoading ? '...' : (isLoginView ? 'Log In' : 'Sign Up')}</button></form>{error && <p className="login-error">{error}</p>}<button onClick={() => setIsLoginView(!isLoginView)} className="auth-toggle-link">{isLoginView ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}</button></div></div>
    );
};

// --- Main App Pages ---
const WorshipPage = ({ church }: { church: Church; }) => {
    const [showOfferingModal, setShowOfferingModal] = useState(false);
    const copyToClipboard = (text: string) => navigator.clipboard.writeText(text).then(() => alert("Account number copied."));
    return (
        <div className="page-content"><h2>Worship</h2><div className="card"><div className="twitch-container"><iframe src={`https://player.twitch.tv/?channel=${church.streamingInfo.twitchChannel}&parent=${window.location.hostname}`} height="100%" width="100%" allowFullScreen></iframe></div><p className="twitch-info-text">Join the live worship.</p><div className="worship-offering-container"><button className="action-button" onClick={() => setShowOfferingModal(true)}><span className="material-symbols-outlined">volunteer_activism</span>Online Offering</button></div></div>{showOfferingModal && (<Modal onClose={() => setShowOfferingModal(false)}><div className="offering-modal-content"><h3>Online Offering</h3><img src={church.offeringDetails.qrCodeUrl} alt="QR Code" className="qr-code-img" /><div className="offering-details"><p><strong>Bank:</strong> {church.offeringDetails.bankName}</p><p><strong>Account Holder:</strong> {church.offeringDetails.accountHolder}</p><div className="account-number-container"><p><strong>Account Number:</strong> {church.offeringDetails.accountNumber}</p><button className="copy-button" onClick={() => copyToClipboard(church.offeringDetails.accountNumber)}><span className="material-symbols-outlined">content_copy</span>Copy</button></div></div></div></Modal>)}</div>
    );
};
const NewsPage = () => (
    <div className="page-content"><h2>News & Announcements</h2><div className="list-container">{[...MOCK_NEWS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map(item => (<div key={item.id} className="card news-item">{item.image && <img src={item.image} alt={item.title} className="news-image"/>}<div className="news-content"><h3>{item.title}</h3><p className="news-meta">{item.date}</p><p>{item.content}</p></div></div>))}</div></div>
);
const BiblePage = () => {
    const [readingData, setReadingData] = useState<{title: string; plan: string; text: string} | null>(null);
    const day = getDayOfYear();
    const plan = BIBLE_READING_PLAN_NNRV[day - 1] || 'No plan for today.';
    const proverbChapter = day % 31 === 0 ? 31 : day % 31;
    const verse = MOCK_VERSES_OF_THE_DAY[day % MOCK_VERSES_OF_THE_DAY.length];
    const showReading = (type: 'plan' | 'proverb') => {
        if (type === 'plan') setReadingData({ title: `Day ${day} Reading`, plan, text: getBibleTextForPlan(plan) || "Bible text not available in app." });
        else setReadingData({ title: 'Proverb of the Day', plan: `Proverbs ${proverbChapter}`, text: PROVERBS_NNRV[proverbChapter] || "Proverb not available." });
    };
    return (
        <div className="page-content"><h2>बाइबल</h2><div className="card verse-card"><h3>दिनको पद</h3><p className="verse-text">“{verse.text}”</p><p className="verse-ref">- {verse.verse}</p></div><div className="card bible-card" onClick={() => showReading('plan')}><h3>Bible Reading Plan (NNRV)</h3><p>Day {day}: {plan}</p></div><div className="card bible-card" onClick={() => showReading('proverb')}><h3>Proverb of the Day</h3><p>Proverbs Chapter {proverbChapter}</p></div>{readingData && <Modal onClose={() => setReadingData(null)}><div className="bible-reading-modal-content"><h3>{readingData.title}</h3><h4>{readingData.plan}</h4><div className="bible-text-content"><p>{readingData.text}</p></div></div></Modal>}</div>
    );
};
const ChatListPage = ({ chats, onSelectChat, onCreateChat, currentUser }: { chats: Chat[]; onSelectChat: (id: string) => void; onCreateChat: () => void; currentUser: User; }) => {
    const getOtherParticipant = (chat: Chat) => chat.participants.find(p => p.id !== currentUser.id);
    return (
        <div className="page-content chat-list-page"><h2>Fellowship</h2><div className="list-container">{chats.map(chat => { const other = getOtherParticipant(chat); if (!other) return null; const lastMsg = chat.messages[chat.messages.length - 1]; return (<div key={chat.id} className="list-item chat-item" onClick={() => onSelectChat(chat.id)}><div className="chat-avatar">{other.avatar}</div><div className="chat-info"><span className="chat-name">{other.name}</span><span className="chat-last-message">{lastMsg ? lastMsg.content : 'No messages.'}</span></div></div>); })}</div><button className="fab" onClick={onCreateChat} aria-label="New Chat"><span className="material-symbols-outlined">edit</span></button></div>
    );
};
const ConversationPage = ({ chat, onBack, onSendMessage, currentUser }: { chat: Chat; onBack: () => void; onSendMessage: (chatId: string, content: string) => void; currentUser: User }) => {
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chat.messages]);
    const handleSend = () => { if (newMessage.trim()) { onSendMessage(chat.id, newMessage.trim()); setNewMessage(''); } };
    const otherParticipant = chat.participants.find(p => p.id !== currentUser.id);
    return (
        <div className="conversation-page"><header className="conversation-header"><button className="back-button" onClick={onBack}><span className="material-symbols-outlined">arrow_back</span></button><h3>{otherParticipant?.name}</h3><div style={{width: 40}}></div></header><div className="message-list">{chat.messages.map(msg => (<div key={msg.id} className={`message-bubble ${msg.senderId === currentUser.id ? 'sent' : 'received'}`}>{msg.content}</div>))}<div ref={messagesEndRef} /></div><div className="message-input-container"><input type="text" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} /><button className="send-button" onClick={handleSend}><span className="material-symbols-outlined">send</span></button></div></div>
    );
};
const PrayerPage = ({ prayerRequests, onPray, onAddRequest, onSelectRequest, currentUser }: { prayerRequests: PrayerRequest[]; onPray: (id: string) => void; onAddRequest: () => void; onSelectRequest: (req: PrayerRequest) => void; currentUser: User; }) => (
    <div className="page-content"><h2>Prayer Wall</h2><div className="list-container">{prayerRequests.map(req => (<div key={req.id} className="card prayer-item" onClick={() => onSelectRequest(req)}>{req.image && <img src={req.image} alt={req.title} className="prayer-image"/>}<h4>{req.title}</h4><p className="prayer-content">{req.content}</p><div className="prayer-meta"><span>By {req.author.name}</span><div className="prayer-actions"><button className={`prayer-action-button ${req.prayedBy.includes(currentUser.id) ? 'prayed' : ''}`} onClick={(e) => { e.stopPropagation(); onPray(req.id); }}><span className="material-symbols-outlined">volunteer_activism</span><span>{req.prayedBy.length}</span></button><div className="prayer-action-button comment-button"><span className="material-symbols-outlined">chat_bubble</span><span>{req.comments.length}</span></div></div></div></div>))}</div><button className="fab" onClick={onAddRequest}><span className="material-symbols-outlined">add</span></button></div>
);
const PodcastPage = ({ podcasts, onAddPodcast }: { podcasts: Podcast[]; onAddPodcast: () => void; }) => (
    <div className="page-content"><h2>Podcast</h2><div className="list-container">{podcasts.length > 0 ? podcasts.map(p => (<div key={p.id} className="card podcast-item"><div className="podcast-info"><div><h4 className="podcast-title">{p.title}</h4><p className="podcast-author">By {p.author.name}</p></div></div><audio controls className="podcast-player" src={p.audioUrl}></audio></div>)) : <p>No podcasts available yet.</p>}</div><button className="fab" onClick={onAddPodcast} aria-label="New Podcast"><span className="material-symbols-outlined">mic</span></button></div>
);

// --- Modals ---
const AddPrayerRequestModal = ({ onClose, onAddRequest }: { onClose: () => void; onAddRequest: (data: { title: string; content: string; imageFile: File | null; }) => void; }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (title.trim() && content.trim()) { onAddRequest({ title, content, imageFile }); } };
    const handleImageChange = (file: File) => { setImageFile(file); setImagePreview(URL.createObjectURL(file)); };
    const handleImageRemove = () => { setImageFile(null); setImagePreview(null); };
    return (
        <Modal onClose={onClose}><form className="modal-form" onSubmit={handleSubmit}><h3>New Prayer Request</h3><input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><textarea rows={5} placeholder="What should we pray for?" value={content} onChange={(e) => setContent(e.target.value)} required /><ImageUpload imagePreview={imagePreview} onImageChange={handleImageChange} onImageRemove={handleImageRemove} /><button type="submit" className="action-button">Post Request</button></form></Modal>
    );
};
const PrayerDetailsModal = ({ request, onClose, onPray, onComment, currentUser }: { request: PrayerRequest; onClose: () => void; onPray: (id: string) => void; onComment: (id: string, text: string) => void; currentUser: User; }) => {
    const [comment, setComment] = useState('');
    const handleCommentSubmit = (e: React.FormEvent) => { e.preventDefault(); if (comment.trim()) { onComment(request.id, comment.trim()); setComment(''); } };
    const isPrayed = request.prayedBy.includes(currentUser.id);
    return (
        <Modal onClose={onClose}><div className="prayer-details-modal"><div className="prayer-details-content"><h3>{request.title}</h3><p className="prayer-author">By {request.author.name}</p>{request.image && <img src={request.image} alt={request.title} className="prayer-image" />}<p className="prayer-main-content">{request.content}</p><div className="prayer-meta"><div className="prayer-actions"><button className={`prayer-action-button ${isPrayed ? 'prayed' : ''}`} onClick={() => onPray(request.id)}><span className="material-symbols-outlined">volunteer_activism</span><span>{request.prayedBy.length} I prayed</span></button></div></div></div><div className="prayer-comments-section"><h4>Comments ({request.comments.length})</h4><div className="prayer-comment-list">{request.comments.length > 0 ? [...request.comments].reverse().map(c => (<div key={c.id} className="comment-item"><p><strong>{c.author.name}:</strong> {c.content}</p></div>)) : <p className="no-comments">No comments yet.</p>}</div><form className="comment-form" onSubmit={handleCommentSubmit}><input type="text" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)} /><button type="submit"><span className="material-symbols-outlined">send</span></button></form></div></div></Modal>
    );
};
const CreateChatModal = ({ onClose, onStartChat, allUsers, currentUser }: { onClose: () => void; onStartChat: (userId: string) => void; allUsers: User[]; currentUser: User }) => (
    <Modal onClose={onClose}><div className="create-chat-modal"><h3>Start a conversation</h3><div className="user-list">{allUsers.filter(u => u.id !== currentUser.id).map(user => (<div key={user.id} className="user-list-item" onClick={() => onStartChat(user.id)}><div className="chat-avatar">{user.avatar}</div><span className="user-name">{user.name}</span></div>))}</div></div></Modal>
);
const AddPodcastModal = ({ onClose, onAddPodcast }: { onClose: () => void; onAddPodcast: (data: { title: string; audioFile: File; }) => void; }) => {
    const [title, setTitle] = useState('');
    const [audioFile, setAudioFile] = useState<File | null>(null);
    const [audioPreview, setAudioPreview] = useState<string | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const handleStartRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = event => audioChunksRef.current.push(event.data);
        mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudioFile(new File([audioBlob], "recording.webm", { type: 'audio/webm' }));
            setAudioPreview(audioUrl);
            audioChunksRef.current = [];
        };
        mediaRecorderRef.current.start();
        setIsRecording(true);
    };
    const handleStopRecording = () => { mediaRecorderRef.current?.stop(); setIsRecording(false); };
    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (title.trim() && audioFile) onAddPodcast({ title, audioFile }); };

    return (
        <Modal onClose={onClose}><form className="modal-form" onSubmit={handleSubmit}><h3>New Podcast</h3><input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><div className="recording-ui">{!audioFile && (<><h4>Record Audio</h4><button type="button" onClick={isRecording ? handleStopRecording : handleStartRecording} className={`record-button ${isRecording ? 'stop' : ''}`}>{isRecording && <div className="recording-dot"></div>}</button><p>{isRecording ? "Recording..." : "Tap to record"}</p></>)}{audioPreview && (<div className="audio-preview"><h4>Preview</h4><audio src={audioPreview} controls /><button type="button" className="action-button secondary" onClick={() => { setAudioFile(null); setAudioPreview(null); }}>Record Again</button></div>)}</div><button type="submit" className="action-button" disabled={!title || !audioFile}>Upload Podcast</button></form></Modal>
    );
};

// --- Main App Component ---
const App = () => {
    const [user, setUser] = useState<User | null | undefined>(undefined);
    const [activePage, setActivePage] = useState('worship');
    const [prayerRequests, setPrayerRequests] = useState<PrayerRequest[]>([]);
    const [podcasts, setPodcasts] = useState<Podcast[]>([]);
    const [chats, setChats] = useState<Chat[]>([]);
    const [allUsers, setAllUsers] = useState<User[]>([]);
    const [activeChatId, setActiveChatId] = useState<string | null>(null);
    const [selectedPrayerRequest, setSelectedPrayerRequest] = useState<PrayerRequest | null>(null);
    const [showAddPrayerModal, setShowAddPrayerModal] = useState(false);
    const [showCreateChatModal, setShowCreateChatModal] = useState(false);
    const [showAddPodcastModal, setShowAddPodcastModal] = useState(false);
    
    useEffect(() => {
        onAuthStateChanged(auth, async (fbUser) => {
            if (fbUser) {
                const userDoc = await fetchUser(fbUser.uid);
                setUser(userDoc);
                const usersQuery = await getDocs(collection(db, "users"));
                setAllUsers(usersQuery.docs.map(doc => ({ id: doc.id, ...doc.data() } as User)));
            } else {
                setUser(null);
            }
        });
    }, []);

    useEffect(() => {
        if (!user) return;
        const prayerQ = query(collection(db, "prayerRequests"), orderBy("createdAt", "desc"));
        const unsubPrayer = onSnapshot(prayerQ, async (snap) => {
            const reqs = await Promise.all(snap.docs.map(async (d) => {
                const data = d.data();
                const author = await fetchUser(data.authorId);
                const comments = await Promise.all((data.comments || []).map(async (c: any) => ({...c, id: Math.random().toString(), author: await fetchUser(c.authorId)})));
                return { ...data, id: d.id, author, comments, prayedBy: data.prayedBy || [], createdAt: data.createdAt } as PrayerRequest;
            }));
            setPrayerRequests(reqs);
        });
        const podcastQ = query(collection(db, "podcasts"), orderBy("createdAt", "desc"));
        const unsubPodcast = onSnapshot(podcastQ, async (snap) => {
            const pods = await Promise.all(snap.docs.map(async (d) => ({ ...d.data(), id: d.id, author: await fetchUser(d.data().authorId) } as Podcast)));
            setPodcasts(pods);
        });
        const chatQ = query(collection(db, "chats"), where("participantIds", "array-contains", user.id), orderBy("lastMessageTimestamp", "desc"));
        const unsubChat = onSnapshot(chatQ, async (snap) => {
            const chs = await Promise.all(snap.docs.map(async (d) => {
                const data = d.data();
                return { ...data, id: d.id, participants: await fetchUsers(data.participantIds), messages: (data.messages || []) } as Chat;
            }));
            setChats(chs);
        });
        return () => { unsubPrayer(); unsubPodcast(); unsubChat(); };
    }, [user]);

    const handleLogout = () => signOut(auth);
    const handlePray = async (reqId: string) => { if (user) await updateDoc(doc(db, "prayerRequests", reqId), { prayedBy: prayerRequests.find(r => r.id === reqId)?.prayedBy.includes(user.id) ? arrayRemove(user.id) : arrayUnion(user.id) }); };
    const handleAddPrayerRequest = async ({ title, content, imageFile }: { title: string; content: string; imageFile: File | null; }) => {
        if (!user) return;
        let imageUrl = '';
        if (imageFile) {
            const storageRef = ref(storage, `prayerImages/${Date.now()}_${imageFile.name}`);
            const snapshot = await uploadBytes(storageRef, imageFile);
            imageUrl = await getDownloadURL(snapshot.ref);
        }
        await addDoc(collection(db, "prayerRequests"), { authorId: user.id, title, content, image: imageUrl, prayedBy: [], comments: [], createdAt: serverTimestamp() });
        setShowAddPrayerModal(false);
    };
    const handleComment = async (reqId: string, text: string) => { if (user) await updateDoc(doc(db, "prayerRequests", reqId), { comments: arrayUnion({ authorId: user.id, content: text, createdAt: Timestamp.now() }) }); };
    const handleAddPodcast = async ({ title, audioFile }: { title: string; audioFile: File }) => {
        if(!user) return;
        const storageRef = ref(storage, `podcasts/${Date.now()}_${audioFile.name}`);
        const snapshot = await uploadBytes(storageRef, audioFile);
        const audioUrl = await getDownloadURL(snapshot.ref);
        await addDoc(collection(db, 'podcasts'), { title, authorId: user.id, audioUrl, createdAt: serverTimestamp() });
        setShowAddPodcastModal(false);
    };
    const handleSendMessage = async (chatId: string, content: string) => {
        if (!user) return;
        const now = Timestamp.now();
        await updateDoc(doc(db, "chats", chatId), { messages: arrayUnion({ senderId: user.id, content, type: 'text', createdAt: now }), lastMessageTimestamp: now });
    };
    const handleStartChat = async (otherUserId: string) => {
        if (!user) return;
        const existingChat = chats.find(c => c.participantIds.includes(otherUserId));
        if (existingChat) {
            setActiveChatId(existingChat.id);
        } else {
            const newChatRef = await addDoc(collection(db, "chats"), { participantIds: [user.id, otherUserId], messages: [], lastMessageTimestamp: serverTimestamp() });
            setActiveChatId(newChatRef.id);
        }
        setShowCreateChatModal(false);
    };
    
    if (user === undefined) return <div className="login-container"><div>Loading...</div></div>;
    if (user === null) return <LoginPage church={CHURCH} />;
    
    const renderPage = () => {
        if (activePage === 'fellowship' && activeChatId) return null; // Hide list on mobile when convo is open
        switch (activePage) {
            case 'worship': return <WorshipPage church={CHURCH} />;
            case 'news': return <NewsPage />;
            case 'bible': return <BiblePage />;
            case 'fellowship': return <ChatListPage chats={chats} onSelectChat={setActiveChatId} onCreateChat={() => setShowCreateChatModal(true)} currentUser={user} />;
            case 'prayer': return <PrayerPage prayerRequests={prayerRequests} onPray={handlePray} onAddRequest={() => setShowAddPrayerModal(true)} onSelectRequest={setSelectedPrayerRequest} currentUser={user} />;
            case 'podcast': return <PodcastPage podcasts={podcasts} onAddPodcast={() => setShowAddPodcastModal(true)} />;
            default: return <WorshipPage church={CHURCH} />;
        }
    };

    const activeChat = chats.find(c => c.id === activeChatId);
    const openPrayer = prayerRequests.find(r => r.id === selectedPrayerRequest?.id);

    return (
        <div className="app-container">
            <header className="app-header">
                 <div className="header-content"><img src={CHURCH.logo} alt="Logo" className="header-logo" /><h1>{CHURCH.name}</h1></div>
                 <div className="header-actions"><button className="header-button" onClick={handleLogout} aria-label="Log Out"><span className="material-symbols-outlined">logout</span></button></div>
            </header>
            <main className="main-content">{renderPage()}</main>
            
            <nav className="bottom-nav">
                {['worship', 'news', 'bible', 'fellowship', 'prayer', 'podcast'].map(page => {
                    const icons: { [key: string]: string } = { worship: 'church', news: 'feed', bible: 'book_2', fellowship: 'groups', prayer: 'volunteer_activism', podcast: 'podcasts' };
                    return (<button key={page} className={`nav-item ${activePage === page ? 'active' : ''}`} onClick={() => { setActivePage(page); setActiveChatId(null); }}><span className="material-symbols-outlined">{icons[page]}</span><span>{page.charAt(0).toUpperCase() + page.slice(1)}</span></button>);
                })}
            </nav>
            
            {activeChat && <ConversationPage chat={activeChat} onBack={() => setActiveChatId(null)} onSendMessage={handleSendMessage} currentUser={user} />}
            {showAddPrayerModal && <AddPrayerRequestModal onClose={() => setShowAddPrayerModal(false)} onAddRequest={handleAddPrayerRequest} />}
            {openPrayer && <PrayerDetailsModal request={openPrayer} onClose={() => setSelectedPrayerRequest(null)} onPray={handlePray} onComment={handleComment} currentUser={user} />}
            {showCreateChatModal && <CreateChatModal onClose={() => setShowCreateChatModal(false)} onStartChat={handleStartChat} allUsers={allUsers} currentUser={user} />}
            {showAddPodcastModal && <AddPodcastModal onClose={() => setShowAddPodcastModal(false)} onAddPodcast={handleAddPodcast} />}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode><App /></React.StrictMode>);
