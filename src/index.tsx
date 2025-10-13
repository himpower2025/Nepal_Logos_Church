

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { auth, db, storage } from './firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut,
    // FIX: Removed 'type' keyword to fix TS error "Cannot use namespace 'FirebaseUser' as a type."
    User as FirebaseUser
} from "https://esm.sh/firebase@10.12.2/auth";
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
    // FIX: Removed 'type' keyword to fix TS error "Cannot use namespace 'QuerySnapshot' as a type."
    QuerySnapshot,
    // FIX: Removed 'type' keyword to fix TS error "Cannot use namespace 'QueryDocumentSnapshot' as a type."
    QueryDocumentSnapshot
} from "https://esm.sh/firebase@10.12.2/firestore";
import { ref, uploadBytes, getDownloadURL } from "https://esm.sh/firebase@10.12.2/storage";

// --- Platform Configuration ---
// ... (This section remains largely the same, but we can simplify the Church type)
type Church = {
    id: string;
    name: string;
    logo: string;
    streamingInfo: { twitchChannel: string; };
    offeringDetails: { 
        qrCodeUrl: string; 
        bankName: string; 
        accountHolder: string; 
        accountNumber: string; 
    };
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

// --- Data Types (No longer Mock Data) ---
type User = {
    id: string; // This will be the Firebase Auth UID
    name: string;
    email: string;
    avatar: string;
};

// ... (Other types like Message, Chat, PrayerRequest, etc. remain the same, but we will add Timestamps)
type PrayerRequest = {
    id: string;
    author: User;
    title: string;
    content: string;
    image?: string;
    prayCount: number;
    prayedBy: string[]; // Array of user IDs who prayed
    comments: Comment[]; // We'll handle comments as a sub-collection later if needed
    isPrayedByCurrentUser: boolean; // This will be calculated client-side
    createdAt: any; // Firestore Timestamp
};

type Comment = {
    id: string;
    author: User;
    content: string;
    timestamp: string;
};


// Helper to fetch user data
const userCache: { [key: string]: User } = {};
const fetchUser = async (uid: string): Promise<User> => {
    if (userCache[uid]) {
        return userCache[uid];
    }
    const userDocRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        userCache[uid] = { ...userData, id: uid };
        return userCache[uid];
    } else {
        // Fallback for users that might not have a doc yet
        return { id: uid, name: 'Unknown User', email: '', avatar: '?' };
    }
};


// --- Login Page ---
const LoginPage = ({ church }: { church: Church }) => {
    const [isLoginView, setIsLoginView] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState(''); // For sign up
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleAuthAction = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (isLoginView) {
                // Login
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                // Sign Up
                if (name.trim() === '') {
                    setError('Please enter your full name.');
                    setIsLoading(false);
                    return;
                }
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Create a user document in Firestore
                const avatar = name.trim().split(' ').map(n => n[0]).join('').toUpperCase();
                const userDocRef = doc(db, 'users', user.uid);
                await setDoc(userDocRef, {
                    id: user.uid,
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
        setEmail('');
        setPassword('');
        setName('');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={church.logo} alt={`${church.name} Logo`} className="login-logo" />
                <h2>{church.name}</h2>
                <p>{isLoginView ? 'Log in to join the community.' : 'Create an account to join.'}</p>
                
                <form onSubmit={handleAuthAction}>
                    {!isLoginView && (
                        <input className="login-input" type="text" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    )}
                    <input className="login-input" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="login-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="login-button" type="submit" disabled={isLoading}>
                        {isLoading ? 'Processing...' : (isLoginView ? 'Log In' : 'Sign Up')}
                    </button>
                </form>
                
                {error && <p className="login-error">{error}</p>}

                <button onClick={toggleView} className="auth-toggle-link">
                    {isLoginView ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
                </button>
            </div>
        </div>
    );
};


// --- Reusable Components (Modal, ImageUpload, etc.) remain the same ---
// ...

// --- AddPrayerRequestModal ---
const AddPrayerRequestModal = ({ onClose, onAddRequest }: { onClose: () => void; onAddRequest: (data: { title: string; content: string; image: File | null; }) => void; }) => {
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [imageFile, setImageFile] = React.useState<File | null>(null);
    const [imagePreview, setImagePreview] = React.useState<string | null>(null);

    const handleImageChange = (file: File) => {
        setImageFile(file);
        setImagePreview(URL.createObjectURL(file));
    };
    
    const handleImageRemove = () => {
        setImageFile(null);
        setImagePreview(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onAddRequest({ title, content, image: imageFile });
            onClose();
        }
    };

    // This is a simplified ImageUpload component for this context
    const ImageUploadComponent = () => {
        const fileInputRef = React.useRef<HTMLInputElement>(null);
        const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) handleImageChange(file);
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
                    <button onClick={handleImageRemove}> <span className="material-symbols-outlined">delete</span> </button>
                </div>
            )}
        </div>
        );
    };

    return (
        <Modal onClose={onClose}>
            <form className="modal-form" onSubmit={handleSubmit}>
                <h3>New Prayer Request</h3>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <textarea rows={5} placeholder="What should we pray for?" value={content} onChange={(e) => setContent(e.target.value)} required />
                <ImageUploadComponent />
                <button type="submit" className="action-button">Post Request</button>
            </form>
        </Modal>
    );
};
// ... Other components (PrayerPage, NewsPage, etc.) will be modified in App component

// --- Main App Component ---

const App = () => {
    const [user, setUser] = React.useState<User | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const [church] = React.useState(CHURCHES[0]);
    const [activePage, setActivePage] = React.useState('worship');
    
    // Data states (will be populated from Firestore)
    const [prayerRequests, setPrayerRequests] = React.useState<PrayerRequest[]>([]);

    React.useEffect(() => {
        // Firebase Auth state listener
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
            if (firebaseUser) {
                const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
                if (userDoc.exists()) {
                    setUser({ id: firebaseUser.uid, ...userDoc.data() } as User);
                } else {
                    // This can happen if user doc creation failed, or for older users
                    // We can create a doc here as a fallback if needed
                }
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    React.useEffect(() => {
        if (!user) return; // Don't fetch data if not logged in

        // Prayer Requests real-time listener
        const q = query(collection(db, "prayerRequests"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, async (querySnapshot: QuerySnapshot) => {
            const requests: PrayerRequest[] = [];
            // Use Promise.all to fetch author data concurrently
            await Promise.all(querySnapshot.docs.map(async (docData: QueryDocumentSnapshot) => {
                const data = docData.data();
                const author = await fetchUser(data.authorId);
                requests.push({
                    id: docData.id,
                    ...data,
                    author: author,
                    prayedBy: data.prayedBy || [],
                    isPrayedByCurrentUser: (data.prayedBy || []).includes(user.id),
                } as PrayerRequest);
            }));
            setPrayerRequests(requests);
        });

        return () => unsubscribe();
    }, [user]); // Rerun when user logs in/out

    const handleLogout = async () => {
        await signOut(auth);
    };

    const handleAddPrayerRequest = async ({ title, content, image }: { title: string; content: string; image: File | null; }) => {
        if (!user) return;

        let imageUrl = '';
        if (image) {
            const storageRef = ref(storage, `prayerImages/${user.id}_${Date.now()}_${image.name}`);
            const snapshot = await uploadBytes(storageRef, image);
            imageUrl = await getDownloadURL(snapshot.ref);
        }

        await addDoc(collection(db, "prayerRequests"), {
            authorId: user.id,
            title,
            content,
            image: imageUrl,
            prayCount: 0,
            prayedBy: [],
            comments: [],
            createdAt: serverTimestamp(),
        });
    };

    const handlePray = async (requestId: string) => {
        if (!user) return;
        const requestRef = doc(db, "prayerRequests", requestId);
        const request = prayerRequests.find(r => r.id === requestId);
        if (!request) return;

        let newPrayedBy = [...request.prayedBy];
        if (request.isPrayedByCurrentUser) {
            newPrayedBy = newPrayedBy.filter(uid => uid !== user.id);
        } else {
            newPrayedBy.push(user.id);
        }

        await updateDoc(requestRef, {
            prayedBy: newPrayedBy,
            prayCount: newPrayedBy.length
        });
    };
    
    // Placeholder render function
    const renderPage = () => {
        switch (activePage) {
            // Simplified for now, only showing Prayer page with real data
            case 'prayer':
                return <PrayerPage 
                            prayerRequests={prayerRequests} 
                            onPray={handlePray}
                            onAddRequest={() => setShowAddPrayerModal(true)}
                            onSelectRequest={(_req) => {/* TODO */}}
                        />;
            // Other pages would be implemented similarly
            default:
                return <div className="page-content"><h2>{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h2><p>This page is not yet connected to the backend.</p></div>;
        }
    };
    
    const [showAddPrayerModal, setShowAddPrayerModal] = React.useState(false);

    if (isLoading) {
        return <div className="login-container"><div className="login-box"><h2>Loading...</h2></div></div>;
    }
    
    if (!user) {
        return <LoginPage church={church} />;
    }

    return (
        <div className="app-container">
            <header className="app-header">
                <div className="header-content">
                    <img src={church.logo} alt="Church Logo" className="header-logo" />
                    <h1>{church.name}</h1>
                </div>
                <div className="header-actions">
                    <button className="header-button" onClick={handleLogout} aria-label="Logout">
                        <span className="material-symbols-outlined">logout</span>
                    </button>
                </div>
            </header>
            <main className="main-content">
                {renderPage()}
            </main>
            <nav className="bottom-nav">
                 {/* Simplified nav */}
                <button className={`nav-item ${activePage === 'worship' ? 'active' : ''}`} onClick={() => setActivePage('worship')}>
                    <span className="material-symbols-outlined">church</span><span>Worship</span>
                </button>
                <button className={`nav-item ${activePage === 'fellowship' ? 'active' : ''}`} onClick={() => setActivePage('fellowship')}>
                    <span className="material-symbols-outlined">groups</span><span>Fellowship</span>
                </button>
                <button className={`nav-item ${activePage === 'prayer' ? 'active' : ''}`} onClick={() => setActivePage('prayer')}>
                    <span className="material-symbols-outlined">volunteer_activism</span><span>Prayer</span>
                </button>
            </nav>
            {showAddPrayerModal && <AddPrayerRequestModal onClose={() => setShowAddPrayerModal(false)} onAddRequest={handleAddPrayerRequest} />}
        </div>
    );
};

// --- PrayerPage component (as it's used by App) ---
// This is now simpler as it just receives props
const PrayerPage = ({ prayerRequests, onPray, onAddRequest, onSelectRequest }: { prayerRequests: PrayerRequest[]; onPray: (id:string) => void; onAddRequest: () => void; onSelectRequest: (req: PrayerRequest) => void; }) => {
    return (
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

// --- Modal Component (needed by other components) ---
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


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode><App /></React.StrictMode>);