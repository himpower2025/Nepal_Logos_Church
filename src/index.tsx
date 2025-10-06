import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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

// --- Mock Data ---

type User = {
    id: string;
    name: string;
    avatar: string; // URL or initials
};

type Message = {
    id: string;
    sender: User;
    content: string;
    timestamp: string;
    type: 'text' | 'image' | 'video';
    timestampValue: number;
    mediaUrl?: string;
    mediaType?: 'image' | 'video';
};

type Chat = {
    id: string;
    name?: string; // For group chats
    participants: User[];
    messages: Message[];
    isGroup: boolean;
};

type Comment = {
    id: string;
    author: User;
    content: string;
    timestamp: string;
};

type PrayerRequest = {
    id: string;
    author: User;
    title: string;
    content: string;
    image?: string;
    prayCount: number;
    comments: Comment[];
    isPrayedByCurrentUser: boolean;
    createdAt: string;
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

type Notification = {
    id: string;
    icon: string; // material symbol name
    message: string;
    timestamp: string;
};

type Podcast = {
    id: string;
    title: string;
    author: User;
    audioUrl: string;
    createdAt: string;
};

type PastService = {
    id: string;
    title: string;
    date: string;
    url: string;
};


let CURRENT_USER: User = { id: 'user1', name: '', avatar: '' };

const MOCK_USERS: User[] = [
    CURRENT_USER,
    { id: 'user2', name: 'Jane Smith', avatar: 'JS' },
    { id: 'user3', name: 'Pastor Ramesh', avatar: 'PR' },
];

let MOCK_CHATS: Chat[] = [
    {
        id: 'chat1',
        participants: [CURRENT_USER, MOCK_USERS[1]],
        messages: [
            { id: 'msg1', sender: MOCK_USERS[1], content: 'Hello! How are you?', timestamp: '10:00 AM', type: 'text', timestampValue: 1722400800000 },
            { id: 'msg2', sender: CURRENT_USER, content: 'I am fine, thank you!', timestamp: '10:01 AM', type: 'text', timestampValue: 1722400860000 },
        ],
        isGroup: false,
    },
    {
        id: 'chat2',
        participants: [CURRENT_USER, MOCK_USERS[2]],
        messages: [
            { id: 'msg3', sender: MOCK_USERS[2], content: 'Blessings to you.', timestamp: 'Yesterday', type: 'text', timestampValue: 1722314400000 },
        ],
        isGroup: false,
    },
    {
        id: 'group1',
        name: 'Youth Ministry',
        participants: [CURRENT_USER, MOCK_USERS[1], MOCK_USERS[2]],
        messages: [
             { id: 'gmsg1', sender: MOCK_USERS[2], content: 'Let us pray for the upcoming camp.', timestamp: '9:30 AM', type: 'text', timestampValue: 1722400800000 - 100000 },
             { id: 'gmsg2', sender: MOCK_USERS[1], content: 'Amen! I will be praying.', timestamp: '9:32 AM', type: 'text', timestampValue: 1722400800000 - 80000 },
        ],
        isGroup: true,
    }
];

let MOCK_PRAYER_REQUESTS: PrayerRequest[] = [
    {
        id: 'prayer1', author: MOCK_USERS[1], title: "Prayer for my family's health", content: "Please pray for my family. My parents are not feeling well, and we are seeking God's healing touch upon them.", image: 'https://picsum.photos/400/250', prayCount: 15, comments: [{ id: 'c1', author: MOCK_USERS[2], content: 'Praying for healing and strength for your family.', timestamp: '1 day ago' }, { id: 'c2', author: CURRENT_USER, content: 'I have lifted them up in prayer.', timestamp: '2 hours ago' }], isPrayedByCurrentUser: false, createdAt: '2024-07-30T10:00:00Z',
    },
    {
        id: 'prayer2', author: MOCK_USERS[2], title: 'Guidance for the youth ministry', content: 'Asking for prayers for our youth ministry as we plan our upcoming outreach event. Pray for wisdom and for the hearts of the young people we will reach.', prayCount: 22, comments: [{ id: 'c3', author: MOCK_USERS[1], content: 'May God guide your plans!', timestamp: '3 days ago' }], isPrayedByCurrentUser: true, createdAt: '2024-07-31T12:00:00Z',
    },
];

const MOCK_NEWS: NewsItem[] = [
    { id: 'news1', title: 'Youth Camp 2024 Announcement', date: 'July 15, 2024', content: 'We are excited to announce our annual Youth Camp from August 5th to 8th. Registration is now open! Please see Pastor Ramesh for more details. We will have special guest speakers and worship nights.', image: 'https://picsum.photos/400/200' },
    { id: 'news2', title: 'Community Outreach Program', date: 'July 12, 2024', content: 'Join us this Saturday for our community outreach program. We will be distributing food and supplies to those in need in our local area. Volunteers are welcome. Meet at the church at 9 AM.' }
];

const MOCK_PODCASTS: Podcast[] = [
    { id: 'podcast1', title: 'Sunday Sermon: The Good Shepherd', author: MOCK_USERS[2], audioUrl: '', createdAt: '2024-07-28T10:00:00Z' },
    { id: 'podcast2', title: 'Youth Fellowship: Living with Purpose', author: MOCK_USERS[1], audioUrl: '', createdAt: '2024-07-26T18:00:00Z' }
];

const MOCK_PAST_SERVICES: PastService[] = [
    {
        id: 'service3',
        title: 'शनिबार आरधना',
        date: 'अगस्ट १०, २०२४',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        id: 'service2',
        title: 'शनिबार आरधना',
        date: 'अगस्ट ३, २०२४',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        id: 'service1',
        title: 'शनिबार आरधना',
        date: 'जुलाई २७, २०२४',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
];

const MOCK_VERSES_OF_THE_DAY: Verse[] = [
    { verse: 'यूहन्ना ३:१६', text: 'किनभने परमेश्‍वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्‍ना एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्‍वास गर्ने कोही पनि नाश नहोस्, तर त्‍यसले अनन्त जीवन पाओस्।' },
    { verse: 'हितोपदेश ३:५-६', text: 'तेरो सारा भरोसा परमप्रभुमा राख्, र तेरो आफ्‍नै समझ-शक्‍तिमा भरोसा नगर्। आफूले गर्ने सबै कुरामा उहाँलाई सम्झी, र उहाँले तेरा मार्गहरू सोझो बनाउनuहुनेछ।' },
];

const MOCK_NOTIFICATIONS: Notification[] = [
    { id: 'n1', icon: 'chat_bubble', message: 'Pastor Ramesh commented on your prayer request.', timestamp: '2 hours ago' },
    { id: 'n2', icon: 'feed', message: 'New announcement posted: Youth Camp 2024.', timestamp: '1 day ago' },
];

const BIBLE_READING_PLAN_NNRV: string[] = [];
const PROVERBS_NNRV: { [key: number]: string } = {};
const BIBLE_TEXT_NNRV: { [key: string]: { [key: string]: string } } = {};

// --- Helper Functions ---
const getDayOfYear = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

const getBibleTextForPlan = (plan: string) => {
    if (!plan) return undefined;

    const parts = plan.split(',').map(p => p.trim());
    let fullText = '';

    for (const part of parts) {
        const lastSpaceIndex = part.lastIndexOf(' ');
        if (lastSpaceIndex === -1) continue;

        const bookName = part.substring(0, lastSpaceIndex);
        const chapterStr = part.substring(lastSpaceIndex + 1);

        if (BIBLE_TEXT_NNRV[bookName]) {
            const chapterRange = chapterStr.split('-');
            const startChapter = parseInt(chapterRange[0], 10);
            const endChapter = parseInt(chapterRange[1] || chapterRange[0], 10);

            if (!isNaN(startChapter) && !isNaN(endChapter)) {
                for (let i = startChapter; i <= endChapter; i++) {
                    const chapterNumStr = i.toString();
                    if (BIBLE_TEXT_NNRV[bookName][chapterNumStr]) {
                        if (fullText !== '') {
                            fullText += '\n\n---\n\n';
                        }
                        fullText += `${bookName} ${chapterNumStr}\n\n`;
                        fullText += BIBLE_TEXT_NNRV[bookName][chapterNumStr];
                    } else {
                        return undefined; 
                    }
                }
            } else {
                 return undefined;
            }
        } else {
            return undefined;
        }
    }
    return fullText === '' ? undefined : fullText;
};

// --- Reusable Components ---
const Modal = ({ children, onClose }: React.PropsWithChildren<{ onClose: () => void; }>) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
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

const ImageUpload = ({ imagePreview, onImageChange, onImageRemove }: { imagePreview: string | null; onImageChange: (dataUrl: string) => void; onImageRemove: () => void; }) => {
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageChange(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="image-upload-container">
            {!imagePreview ? (
                <>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                    />
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


// --- Pages ---

// --- Login Page ---
const LoginPage = ({ church, onLogin }: { church: Church; onLogin: (user: User) => void; }) => {
    const [name, setName] = React.useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim() === '') return;
        
        const avatar = name.trim().split(' ').map(n => n[0]).join('').toUpperCase();
        const user = {
            id: 'user1', // Use a static ID for the current user
            name: name.trim(),
            avatar: avatar || '?'
        };
        onLogin(user);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={church.logo} alt={`${church.name} Logo`} className="login-logo" />
                <h2>{church.name}</h2>
                <p>Login to join the community.</p>
                <form onSubmit={handleLogin}>
                    <input 
                        className="login-input" 
                        type="text" 
                        placeholder="तपाईको नाम लेख्नुहोस्" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

// --- Main App Pages ---

const WorshipPage = ({ church }: { church: Church; }) => {
    const [showOfferingModal, setShowOfferingModal] = React.useState(false);

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
            <div className="card">
                <div className="twitch-container">
                    <iframe
                        src={`https://player.twitch.tv/?channel=${church.streamingInfo.twitchChannel}&parent=${window.location.hostname}`}
                        height="100%"
                        width="100%"
                        allowFullScreen>
                    </iframe>
                </div>
                <p className="twitch-info-text">Join the live worship.</p>
                <div className="worship-offering-container">
                    <button className="action-button" onClick={() => setShowOfferingModal(true)}>
                        <span className="material-symbols-outlined">volunteer_activism</span>
                        Online Offering
                    </button>
                </div>
            </div>

            <h3 className="section-title">विगतका आरधनाहरू</h3>
            <div className="list-container">
                {MOCK_PAST_SERVICES.map(service => (
                    <a key={service.id} href={service.url} target="_blank" rel="noopener noreferrer" className="card past-service-item">
                        <h4>{service.title}</h4>
                        <p>{service.date}</p>
                    </a>
                ))}
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
                                <button className="copy-button" onClick={() => copyToClipboard(church.offeringDetails.accountNumber)}>
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
    const [readingData, setReadingData] = React.useState<{title: string; plan: string; text: string} | null>(null);
    const dayOfYear = getDayOfYear();
    const readingPlan = BIBLE_READING_PLAN_NNRV[dayOfYear - 1] || 'आजको लागि कुनै पढ्ने योजना छैन।';
    const proverbsChapter = dayOfYear % 31 === 0 ? 31 : dayOfYear % 31;
    const proverbsText = PROVERBS_NNRV[proverbsChapter] || 'हितोपदेश उपलब्ध छैन।';

    const handleShowReading = () => {
        const text = getBibleTextForPlan(readingPlan);
        if (text) {
             setReadingData({
                title: `दिन ${dayOfYear} पढाइ`,
                plan: readingPlan,
                text: text
            });
        } else {
             setReadingData({
                title: `दिन ${dayOfYear} पढाइ`,
                plan: readingPlan,
                text: "आजको पढाइ योजनाको लागि बाइबल पदहरू एपमा उपलब्ध छैन। कृपया आफ्नो भौतिक बाइबल प्रयोग गर्नुहोस्।"
            });
        }
    };
    
    const handleShowProverb = () => {
        setReadingData({
            title: 'दिनको हितोपदेश',
            plan: `हितोपदेश ${proverbsChapter}`,
            text: proverbsText
        });
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
            <div className="card bible-card" onClick={handleShowProverb}>
                <h3>दिनको हितोपदेश</h3>
                <p>महिनाको हरेक दिनको लागि एक हितोपदेश: हितोपदेश अध्याय {proverbsChapter}</p>
            </div>

            {readingData && (
                <Modal onClose={() => setReadingData(null)}>
                    <div className="bible-reading-modal-content">
                        <h3>{readingData.title}</h3>
                        <h4>{readingData.plan}</h4>
                        <div className="bible-text-content">
                            <p>{readingData.text}</p>
                        </div>
                        <button className="action-button close-reading-button" onClick={() => setReadingData(null)}>बन्द गर्नुहोस्</button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

const NewsPage = () => {
    const sortedNews = [...MOCK_NEWS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return (
        <div className="page-content">
            <h2>सुचना तथा घोषणाहरू</h2>
            <div className="list-container">
                {sortedNews.map(item => (
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
};

const ChatListPage = ({ chats, onSelectChat, onCreateChat }: { chats: Chat[]; onSelectChat: (id: string) => void; onCreateChat: () => void; }) => {
    const sortedChats = [...chats].sort((a, b) => {
        const lastMessageA = a.messages[a.messages.length - 1];
        const lastMessageB = b.messages[b.messages.length - 1];
        if (!lastMessageA) return 1; if (!lastMessageB) return -1;
        return lastMessageB.timestampValue - lastMessageA.timestampValue;
    });
    
    return (
        <div className="page-content">
            <h2>संगतीहरु</h2>
            <div className="list-container">
                {sortedChats.map(chat => {
                    const lastMessage = chat.messages[chat.messages.length - 1];
                    let lastMessageContent = chat.isGroup ? 'No messages yet.' : 'Start a conversation!';
                    if (lastMessage) {
                        const senderName = lastMessage.sender.id === CURRENT_USER.id ? 'You' : lastMessage.sender.name.split(' ')[0];
                         if (lastMessage.mediaType === 'image') {
                            lastMessageContent = `${senderName} sent an image.`;
                        } else if (lastMessage.mediaType === 'video') {
                            lastMessageContent = `${senderName} sent a video.`;
                        } else {
                             const prefix = chat.isGroup ? `${senderName}: ` : (lastMessage.sender.id === CURRENT_USER.id ? 'You: ' : '');
                             lastMessageContent = prefix + lastMessage.content;
                        }
                    }

                    const otherParticipant = chat.participants.find(p => p.id !== CURRENT_USER.id);
                    const chatName = chat.isGroup ? chat.name : otherParticipant?.name;
                    const chatAvatar = chat.isGroup
                        ? <div className="chat-avatar group-avatar"><span className="material-symbols-outlined">groups</span></div>
                        : <div className="chat-avatar">{otherParticipant?.avatar}</div>;

                    return (
                        <div key={chat.id} className="list-item chat-item" onClick={() => onSelectChat(chat.id)}>
                            {chatAvatar}
                            <div className="chat-info">
                                <span className="chat-name">{chatName}</span>
                                <span className="chat-last-message">{lastMessageContent}</span>
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

const ConversationPage = ({ chat, onBack, onSendMessage, onShowMembers }: { chat: Chat; onBack: () => void; onSendMessage: (content: string, media?: {url: string; type: 'image' | 'video'}) => void; onShowMembers: () => void; }) => {
    const [newMessage, setNewMessage] = React.useState('');
    const [mediaPreview, setMediaPreview] = React.useState<{url: string; type: 'image' | 'video'} | null>(null);
    const messagesEndRef = React.useRef<HTMLDivElement>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    
    const otherParticipant = !chat.isGroup ? chat.participants.find(p => p.id !== CURRENT_USER.id) : null;
    const chatName = chat.isGroup ? chat.name : otherParticipant?.name;

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
    }, [chat.messages]);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
            const reader = new FileReader();
            reader.onload = () => {
                const type = file.type.startsWith('image/') ? 'image' : 'video';
                setMediaPreview({ url: reader.result as string, type });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSend = () => {
        if (newMessage.trim() || mediaPreview) {
            onSendMessage(newMessage.trim(), mediaPreview || undefined);
            setNewMessage('');
            setMediaPreview(null);
            if(fileInputRef.current) fileInputRef.current.value = "";
        }
    };
    
    return (
        <div className="conversation-page">
            <header className={`conversation-header ${chat.isGroup ? 'is-group' : ''}`} onClick={chat.isGroup ? onShowMembers : undefined}>
                <button className="back-button" onClick={onBack}><span className="material-symbols-outlined">arrow_back</span></button>
                <h3>{chatName}</h3>
                <div style={{width: 40}}></div>
            </header>
            <div className="message-list">
                {chat.messages.map(msg => (
                    <div key={msg.id} className={`message-container ${msg.sender.id === CURRENT_USER.id ? 'sent' : 'received'}`}>
                        {chat.isGroup && msg.sender.id !== CURRENT_USER.id && <div className="sender-name">{msg.sender.name}</div>}
                        <div className="message-bubble">
                            {msg.mediaUrl && msg.mediaType === 'image' && <img src={msg.mediaUrl} alt="chat media" className="message-media"/>}
                            {msg.mediaUrl && msg.mediaType === 'video' && <video src={msg.mediaUrl} controls className="message-media"/>}
                            {msg.content && <p>{msg.content}</p>}
                            <span className="message-timestamp">{msg.timestamp}</span>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="message-input-area">
                 {mediaPreview && (
                    <div className="media-preview-container">
                        {mediaPreview.type === 'image' && <img src={mediaPreview.url} alt="preview" />}
                        {mediaPreview.type === 'video' && <video src={mediaPreview.url} muted />}
                        <button onClick={() => setMediaPreview(null)} className="cancel-media-button"><span className="material-symbols-outlined">close</span></button>
                    </div>
                )}
                <div className="message-input-container">
                    <input type="file" accept="image/*,video/*" ref={fileInputRef} onChange={handleFileSelect} style={{ display: 'none' }} />
                    <button className="input-action-button" onClick={() => fileInputRef.current?.click()}><span className="material-symbols-outlined">attach_file</span></button>
                    <input type="text" placeholder="Type a message..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} />
                    <button className="send-button" onClick={handleSend}><span className="material-symbols-outlined">send</span></button>
                </div>
            </div>
        </div>
    );
};

const GroupMembersModal = ({ members, onClose }: { members: User[]; onClose: () => void; }) => (
    <Modal onClose={onClose}>
        <h3>Group Members</h3>
        <div className="user-list">
            {members.map(user => (
                <div key={user.id} className="user-list-item">
                    <div className="chat-avatar" style={{width: 40, height: 40}}>{user.avatar}</div>
                    <span>{user.name}</span>
                </div>
            ))}
        </div>
    </Modal>
);

const PrayerPage = ({ prayerRequests, onPray, onAddRequest, onSelectRequest }: { prayerRequests: PrayerRequest[]; onPray: (id:string) => void; onAddRequest: () => void; onSelectRequest: (req: PrayerRequest) => void; }) => {
    return (
        <div className="page-content">
            <h2>प्रार्थना</h2>
            <div className="list-container">
                {prayerRequests
                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                    .map(request => (
                    <div key={request.id} className="card prayer-item" onClick={() => onSelectRequest(request)}>
                        {request.image && <img src={request.image} alt={request.title} className="prayer-image" />}
                        <h4>{request.title}</h4>
                        <p className="prayer-content">{request.content}</p>
                        <div className="prayer-meta">
                            <span>By {request.author.name}</span>
                            <div className="prayer-actions">
                                <button
                                    className={`prayer-action-button ${request.isPrayedByCurrentUser ? 'prayed' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); onPray(request.id); }}
                                    aria-pressed={request.isPrayedByCurrentUser}
                                >
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
             <button className="fab" onClick={onAddRequest} aria-label="New Prayer Request">
                 <span className="material-symbols-outlined">add</span>
            </button>
        </div>
    );
};

const PrayerDetailsModal = ({ request, onClose, onPray, onComment }: { request: PrayerRequest; onClose: () => void; onPray: (id: string) => void; onComment: (id: string, text: string) => void; }) => {
    const [comment, setComment] = React.useState('');

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
                    <h3>{request.title}</h3>
                    <p className="prayer-author">By {request.author.name}</p>
                    {request.image && <img src={request.image} alt={request.title} className="prayer-image" style={{ marginBottom: '1rem' }} />}
                    <p className="prayer-main-content">{request.content}</p>
                    <div className="prayer-meta" style={{ justifyContent: 'flex-end' }}>
                         <div className="prayer-actions">
                            <button
                                className={`prayer-action-button ${request.isPrayedByCurrentUser ? 'prayed' : ''}`}
                                onClick={() => onPray(request.id)}
                                aria-pressed={request.isPrayedByCurrentUser}
                            >
                                <span className="material-symbols-outlined">volunteer_activism</span>
                                <span>{request.prayCount} I prayed</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="prayer-comments-section">
                    <h4>Comments ({request.comments.length})</h4>
                    <div className="prayer-comment-list">
                       {request.comments.length > 0 ? (
                            [...request.comments].reverse().map(c => (
                                <div key={c.id} className="comment-item">
                                    <p><strong>{c.author.name}:</strong> {c.content}</p>
                                    <p className="comment-timestamp">{c.timestamp}</p>
                                </div>
                            ))
                       ) : (
                           <p className="no-comments">No comments yet. Be the first to encourage!</p>
                       )}
                    </div>
                    <form className="comment-form" onSubmit={handleCommentSubmit}>
                        <input 
                            type="text" 
                            placeholder="Add a comment..." 
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button type="submit">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

const AddPrayerRequestModal = ({ onClose, onAddRequest }: { onClose: () => void; onAddRequest: (data: { title: string; content: string; image: string | null; }) => void; }) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onAddRequest({ title, content, image });
            onClose();
        }
    };

    return (
        <Modal onClose={onClose}>
            <form className="modal-form" onSubmit={handleSubmit}>
                <h3>New Prayer Request</h3>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea 
                    rows={5} 
                    placeholder="What should we pray for?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <ImageUpload 
                    imagePreview={image}
                    onImageChange={setImage}
                    onImageRemove={() => setImage(null)}
                />
                <button type="submit" className="action-button">Post Request</button>
            </form>
        </Modal>
    );
};

const CreateChatModal = ({ onClose, onCreateChat }: { onClose: () => void; onCreateChat: (data: { userIds: string[], name?: string }) => void; }) => {
    const [selectedUserIds, setSelectedUserIds] = React.useState<string[]>([]);
    const [groupName, setGroupName] = React.useState('');
    const users = MOCK_USERS.filter(u => u.id !== CURRENT_USER.id);

    const handleUserToggle = (userId: string) => {
        setSelectedUserIds(prev =>
            prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
        );
    };

    const handleStart = () => {
        if (selectedUserIds.length === 0) return;
        if (selectedUserIds.length > 1 && !groupName.trim()) {
            alert("Please enter a group name.");
            return;
        }
        onCreateChat({
            userIds: selectedUserIds,
            name: selectedUserIds.length > 1 ? groupName.trim() : undefined,
        });
    };

    return (
        <Modal onClose={onClose}>
            <div className="create-chat-modal">
                <h3>Start a new conversation</h3>
                <div className="user-list">
                    {users.map(user => (
                        <div key={user.id} className="user-list-item selectable" onClick={() => handleUserToggle(user.id)}>
                             <input type="checkbox" checked={selectedUserIds.includes(user.id)} readOnly style={{marginRight: '10px'}}/>
                             <span>{user.name}</span>
                        </div>
                    ))}
                </div>
                {selectedUserIds.length > 1 && (
                    <input
                        type="text"
                        placeholder="Group Name"
                        className="login-input"
                        style={{marginTop: '1rem'}}
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                    />
                )}
                <button className="action-button" style={{marginTop: '1rem', width: '100%'}} onClick={handleStart} disabled={selectedUserIds.length === 0}>
                    {selectedUserIds.length > 1 ? 'Create Group Chat' : 'Start Chat'}
                </button>
            </div>
        </Modal>
    );
};

const NotificationPanel = ({ notifications, onClose }: { notifications: Notification[]; onClose: () => void; }) => {
    const panelRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                if (!(event.target as Element).closest('.header-button.notifications')) {
                    onClose();
                }
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="notification-panel" ref={panelRef}>
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
    );
};

const PodcastPage = ({ podcasts, onAddPodcast }: { podcasts: Podcast[]; onAddPodcast: () => void; }) => (
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
                    {podcast.audioUrl && <audio controls src={podcast.audioUrl} className="podcast-player" />}
                </div>
            )) : <p>No podcasts available yet.</p>}
        </div>
        <button className="fab" onClick={onAddPodcast} aria-label="New Podcast"><span className="material-symbols-outlined">add</span></button>
    </div>
);

const RecordAudioModal = ({ onClose, onSave }: { onClose: () => void; onSave: (data: { title: string; audioUrl: string }) => void; }) => {
    const [isRecording, setIsRecording] = React.useState(false);
    const [audioUrl, setAudioUrl] = React.useState<string | null>(null);
    const [title, setTitle] = React.useState('');
    const [error, setError] = React.useState<string | null>(null);
    const mediaRecorderRef = React.useRef<MediaRecorder | null>(null);
    const audioChunksRef = React.useRef<Blob[]>([]);

    const handleStartRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (event) => audioChunksRef.current.push(event.data);
            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                const reader = new FileReader();
                reader.onloadend = () => setAudioUrl(reader.result as string);
                reader.readAsDataURL(audioBlob);
                stream.getTracks().forEach(track => track.stop());
            };
            audioChunksRef.current = [];
            mediaRecorderRef.current.start();
            setIsRecording(true);
            setError(null);
        } catch (err) {
            console.error("Error starting recording:", err);
            setError("Microphone access was denied. Please allow microphone access in your browser settings.");
        }
    };

    const handleStopRecording = () => {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
    };

    const handleSave = () => {
        if (title.trim() && audioUrl) {
            onSave({ title, audioUrl });
        }
    };

    return (
        <Modal onClose={onClose}>
            <h3>Record Audio</h3>
            <div className="recording-ui">
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {!audioUrl && (
                    <>
                        {isRecording && <div className="recording-status"><div className="recording-dot"></div>Recording...</div>}
                        <button className={`record-button ${isRecording ? 'stop' : ''}`} onClick={isRecording ? handleStopRecording : handleStartRecording}></button>
                    </>
                )}
                {audioUrl && (
                    <div className="modal-form">
                        <audio src={audioUrl} controls className="audio-preview"/>
                        <input type="text" placeholder="Podcast Title" value={title} onChange={e => setTitle(e.target.value)} required />
                        <button className="action-button" onClick={handleSave} disabled={!title.trim()}>Save Podcast</button>
                    </div>
                )}
            </div>
        </Modal>
    );
};

const AddPodcastModal = ({ onClose, onAddPodcast }: { onClose: () => void; onAddPodcast: (data: { title: string; audioUrl: string }) => void; }) => {
    const [showRecordModal, setShowRecordModal] = React.useState(false);
    const fileInputRef = React.useRef<HTMLInputElement>(null);
    const [title, setTitle] = React.useState('');
    const [audioFile, setAudioFile] = React.useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('audio/')) {
            const reader = new FileReader();
            reader.onloadend = () => setAudioFile(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (title.trim() && audioFile) {
            onAddPodcast({ title, audioUrl: audioFile });
        }
    };
    
    if (showRecordModal) {
        return <RecordAudioModal onClose={() => setShowRecordModal(false)} onSave={onAddPodcast} />;
    }

    if (audioFile) {
         return (
             <Modal onClose={onClose}>
                <div className="modal-form">
                    <h3>Upload Podcast</h3>
                    <audio src={audioFile} controls className="audio-preview"/>
                    <input type="text" placeholder="Podcast Title" value={title} onChange={e => setTitle(e.target.value)} required />
                    <button className="action-button" onClick={handleSave} disabled={!title.trim()}>Save Podcast</button>
                </div>
            </Modal>
         );
    }

    return (
        <Modal onClose={onClose}>
            <h3>Add Podcast</h3>
            <div className="add-podcast-options">
                <button className="action-button" onClick={() => setShowRecordModal(true)}>Record Live</button>
                <input type="file" accept="audio/*" ref={fileInputRef} onChange={handleFileChange} style={{display: 'none'}} />
                <button className="action-button secondary" onClick={() => fileInputRef.current?.click()}>Upload Audio File</button>
            </div>
        </Modal>
    );
};

const UpdatePrompt = ({ registration }: { registration: ServiceWorkerRegistration }) => {
    const handleUpdate = () => {
        const worker = registration.waiting;
        if (worker) {
            worker.postMessage({ type: 'SKIP_WAITING' });
        }
    };

    return (
        <div className="update-prompt">
            <span>A new version is available.</span>
            <button onClick={handleUpdate}>Reload</button>
        </div>
    );
};


// --- Main App Component ---

const App = () => {
    const [user, setUser] = React.useState<User | null>(null);
    const [church] = React.useState(CHURCHES[0]);
    const [activePage, setActivePage] = React.useState('worship');
    
    // Data states
    const [chats, setChats] = React.useState(MOCK_CHATS);
    const [prayerRequests, setPrayerRequests] = React.useState(MOCK_PRAYER_REQUESTS);
    const [notifications] = React.useState(MOCK_NOTIFICATIONS);
    const [podcasts, setPodcasts] = React.useState(MOCK_PODCASTS);

    // View states
    const [activeChatId, setActiveChatId] = React.useState<string | null>(null);
    const [selectedPrayerRequest, setSelectedPrayerRequest] = React.useState<PrayerRequest | null>(null);
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [hasUnread, setHasUnread] = React.useState(true);
    
    // Modal states
    const [showAddPrayerModal, setShowAddPrayerModal] = React.useState(false);
    const [showCreateChatModal, setShowCreateChatModal] = React.useState(false);
    const [showGroupMembersModal, setShowGroupMembersModal] = React.useState(false);
    const [showAddPodcastModal, setShowAddPodcastModal] = React.useState(false);
    
    // Update and Loading states
    const [swRegistration, setSwRegistration] = React.useState<ServiceWorkerRegistration | null>(null);

    React.useEffect(() => {
        const setAppHeight = () => {
            // Use the visual viewport height which accounts for on-screen keyboards, etc.
            // Fallback to innerHeight for broader compatibility.
            const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            document.documentElement.style.setProperty('--app-height', `${vh}px`);
        };

        // Run the function initially, but wrapped in a timeout to ensure the DOM is ready.
        // This helps prevent race conditions on initial load.
        const timeoutId = setTimeout(setAppHeight, 0);

        const visualViewport = window.visualViewport;

        // Add listeners for resize and orientation changes
        if (visualViewport) {
            visualViewport.addEventListener('resize', setAppHeight);
        } else {
            window.addEventListener('resize', setAppHeight);
        }
        window.addEventListener('orientationchange', setAppHeight);

        // Cleanup function to remove listeners when the component unmounts
        return () => {
            clearTimeout(timeoutId);
            if (visualViewport) {
                visualViewport.removeEventListener('resize', setAppHeight);
            } else {
                window.removeEventListener('resize', setAppHeight);
            }
            window.removeEventListener('orientationchange', setAppHeight);
        };
    }, []);

    React.useEffect(() => {
        // --- Service Worker Update Listener ---
        const handleSwUpdate = (event: Event) => {
            const customEvent = event as CustomEvent<ServiceWorkerRegistration>;
            console.log('Service worker update found, prompting user.');
            setSwRegistration(customEvent.detail);
        };
        window.addEventListener('swUpdate', handleSwUpdate);
        
        const onControllerChange = () => {
            console.log("New service worker has taken control, reloading page.");
            window.location.reload();
        };
        navigator.serviceWorker.addEventListener('controllerchange', onControllerChange);

        // --- Persisted User Check ---
        try {
            const storedUser = localStorage.getItem('nepalLogosChurchUser');
            if (storedUser) {
                const parsedUser: User = JSON.parse(storedUser);
                handleLogin(parsedUser, true);
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage", error);
            localStorage.removeItem('nepalLogosChurchUser');
        }

        // --- Cleanup ---
        return () => {
            window.removeEventListener('swUpdate', handleSwUpdate);
            navigator.serviceWorker.removeEventListener('controllerchange', onControllerChange);
        };
    }, []);


    const handleLogin = (loggedInUser: User, fromStorage: boolean = false) => {
        CURRENT_USER.id = loggedInUser.id;
        CURRENT_USER.name = loggedInUser.name;
        CURRENT_USER.avatar = loggedInUser.avatar;
        // This is a mock data refresh. In a real app, this would be handled by API calls.
        MOCK_PRAYER_REQUESTS.forEach(req => { req.comments.find(c => c.author.id === 'user1' && (c.author = CURRENT_USER)); });
        MOCK_CHATS.forEach(chat => {
            const p = chat.participants.find(p => p.id === 'user1');
            if (p) { p.name = CURRENT_USER.name; p.avatar = CURRENT_USER.avatar; }
            chat.messages.forEach(msg => { if(msg.sender.id === 'user1') msg.sender = CURRENT_USER; });
        });
        setPrayerRequests([...MOCK_PRAYER_REQUESTS]);
        setChats([...MOCK_CHATS]);
        setUser(loggedInUser);

        if (!fromStorage) {
            localStorage.setItem('nepalLogosChurchUser', JSON.stringify(loggedInUser));
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('nepalLogosChurchUser');
        setUser(null);
        setActivePage('worship');
        setActiveChatId(null);
    };

    const handlePray = (requestId: string) => {
        setPrayerRequests(prevRequests => 
            prevRequests.map(req => {
                if (req.id === requestId) {
                    const isPrayed = !req.isPrayedByCurrentUser;
                    return {
                        ...req,
                        isPrayedByCurrentUser: isPrayed,
                        prayCount: isPrayed ? req.prayCount + 1 : req.prayCount - 1,
                    };
                }
                return req;
            })
        );
         // Also update the selected request if it's open
        setSelectedPrayerRequest(prev => {
            if (prev && prev.id === requestId) {
                 const isPrayed = !prev.isPrayedByCurrentUser;
                 return {
                    ...prev,
                    isPrayedByCurrentUser: isPrayed,
                    prayCount: isPrayed ? prev.prayCount + 1 : prev.prayCount - 1,
                 }
            }
            return prev;
        });
    };
    const handleAddPrayerRequest = (data: { title: string; content: string; image: string | null; }) => {
        const newRequest: PrayerRequest = {
            id: `prayer${Date.now()}`,
            author: CURRENT_USER,
            title: data.title,
            content: data.content,
            image: data.image || undefined,
            prayCount: 0,
            comments: [],
            isPrayedByCurrentUser: false,
            createdAt: new Date().toISOString(),
        };
        setPrayerRequests(prev => [newRequest, ...prev]);
    };
    const handleComment = (requestId: string, commentText: string) => {
        const newComment: Comment = {
            id: `c${Date.now()}`,
            author: CURRENT_USER,
            content: commentText,
            timestamp: 'Just now',
        };
        setPrayerRequests(prev => prev.map(req => 
            req.id === requestId
                ? { ...req, comments: [...req.comments, newComment] }
                : req
        ));
        // Also update the selected request if it's open
        setSelectedPrayerRequest(prev => prev && prev.id === requestId ? { ...prev, comments: [...prev.comments, newComment]} : prev);
    };

    const handleSendMessage = (content: string, media?: {url: string; type: 'image' | 'video'}) => {
        const newMessage: Message = {
            id: `msg${Date.now()}`,
            sender: CURRENT_USER,
            content,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: media ? media.type : 'text',
            timestampValue: Date.now(),
            mediaUrl: media?.url,
            mediaType: media?.type
        };
        setChats(prevChats => prevChats.map(chat => 
            chat.id === activeChatId
                ? { ...chat, messages: [...chat.messages, newMessage] }
                : chat
        ));
    };

    const handleCreateChat = ({ userIds, name }: { userIds: string[], name?: string }) => {
        const isGroup = userIds.length > 1;

        if (!isGroup) {
            const userId = userIds[0];
            const existingChat = chats.find(chat => 
                !chat.isGroup && 
                chat.participants.length === 2 &&
                chat.participants.some(p => p.id === userId) && 
                chat.participants.some(p => p.id === CURRENT_USER.id)
            );
            if (existingChat) {
                setActiveChatId(existingChat.id);
                setShowCreateChatModal(false);
                return;
            }
        }

        const participantUsers = MOCK_USERS.filter(u => userIds.includes(u.id));
        if (participantUsers.length !== userIds.length) {
            console.error("Some users not found");
            return;
        }

        const newChat: Chat = {
            id: `chat${Date.now()}`,
            participants: [CURRENT_USER, ...participantUsers],
            messages: [],
            isGroup: isGroup,
            name: isGroup ? name : undefined,
        };
        setChats(prev => [newChat, ...prev]);
        setActiveChatId(newChat.id);
        setShowCreateChatModal(false);
    };
    const handleNotificationToggle = () => {
        setShowNotifications(prev => !prev);
        if (hasUnread) {
            setHasUnread(false);
        }
    };

    const handleAddPodcast = (data: { title: string; audioUrl: string }) => {
        const newPodcast: Podcast = {
            id: `podcast${Date.now()}`,
            author: CURRENT_USER,
            title: data.title,
            audioUrl: data.audioUrl,
            createdAt: new Date().toISOString(),
        };
        setPodcasts(prev => [newPodcast, ...prev]);
        setShowAddPodcastModal(false);
    };

    const renderPage = () => {
        switch (activePage) {
            case 'worship': return <WorshipPage church={church} />;
            case 'bible': return <BiblePage />;
            case 'news': return <NewsPage />;
            case 'podcast': return <PodcastPage podcasts={podcasts} onAddPodcast={() => setShowAddPodcastModal(true)} />;
            case 'fellowship':
                if (activeChatId) return null;
                return <ChatListPage chats={chats} onSelectChat={setActiveChatId} onCreateChat={() => setShowCreateChatModal(true)} />;
            case 'prayer':
                return <PrayerPage prayerRequests={prayerRequests} onPray={handlePray} onAddRequest={() => setShowAddPrayerModal(true)} onSelectRequest={setSelectedPrayerRequest} />;
            default: return <WorshipPage church={church} />;
        }
    };
    
    if (!user) {
        return <LoginPage church={church} onLogin={handleLogin} />;
    }

    const activeChat = chats.find(c => c.id === activeChatId);

    return (
        <div className="app-container">
            {swRegistration && <UpdatePrompt registration={swRegistration} />}
            <header className="app-header">
                 <div className="header-content">
                    <img src={church.logo} alt="Church Logo" className="header-logo" />
                    <h1>{church.name}</h1>
                </div>
                <div className="header-actions">
                    <button className="header-button notifications" onClick={handleNotificationToggle} aria-label="Notifications">
                        <span className="material-symbols-outlined">notifications</span>
                        {hasUnread && <div className="notification-dot"></div>}
                    </button>
                     <button className="header-button" onClick={handleLogout} aria-label="Logout">
                        <span className="material-symbols-outlined">logout</span>
                    </button>
                </div>
            </header>
            <main className="main-content">
                {renderPage()}
            </main>
            
            {showNotifications && <NotificationPanel notifications={notifications} onClose={() => setShowNotifications(false)} />}
            
            <nav className="bottom-nav six-items">
                <button className={`nav-item ${activePage === 'worship' ? 'active' : ''}`} onClick={() => { setActivePage('worship'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">church</span><span>आरधना</span>
                </button>
                <button className={`nav-item ${activePage === 'podcast' ? 'active' : ''}`} onClick={() => { setActivePage('podcast'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">podcasts</span><span>Podcast</span>
                </button>
                <button className={`nav-item ${activePage === 'news' ? 'active' : ''}`} onClick={() => { setActivePage('news'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">feed</span><span>सुचना</span>
                </button>
                <button className={`nav-item ${activePage === 'bible' ? 'active' : ''}`} onClick={() => { setActivePage('bible'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">book_2</span><span>बाइबल</span>
                </button>
                 <button className={`nav-item ${activePage === 'fellowship' ? 'active' : ''}`} onClick={() => { setActivePage('fellowship'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">groups</span><span>संगतीहरु</span>
                </button>
                <button className={`nav-item ${activePage === 'prayer' ? 'active' : ''}`} onClick={() => { setActivePage('prayer'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">volunteer_activism</span><span>प्रार्थना</span>
                </button>
            </nav>
            
            {activeChat && <ConversationPage chat={activeChat} onBack={() => setActiveChatId(null)} onSendMessage={handleSendMessage} onShowMembers={() => setShowGroupMembersModal(true)} />}
            {showAddPrayerModal && <AddPrayerRequestModal onClose={() => setShowAddPrayerModal(false)} onAddRequest={handleAddPrayerRequest} />}
            {selectedPrayerRequest && <PrayerDetailsModal request={selectedPrayerRequest} onClose={() => setSelectedPrayerRequest(null)} onPray={handlePray} onComment={handleComment} />}
            {showCreateChatModal && <CreateChatModal onClose={() => setShowCreateChatModal(false)} onCreateChat={handleCreateChat} />}
            {showGroupMembersModal && activeChat?.isGroup && <GroupMembersModal members={activeChat.participants} onClose={() => setShowGroupMembersModal(false)} />}
            {showAddPodcastModal && <AddPodcastModal onClose={() => setShowAddPodcastModal(false)} onAddPodcast={handleAddPodcast} />}

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);