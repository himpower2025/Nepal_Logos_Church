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
        name: 'Nepal Logos Church',
        logo: 'https://i.ibb.co/Vvz1DNM/logos-church-new-high-res.png',
        offeringDetails: {
            qrCodeUrl: 'https://i.ibb.co/9g0P5P3/logos-qr-code.png', // Using a stable URL for the QR code
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
};

type Chat = {
    id: string;
    participants: User[];
    messages: Message[];
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

// This is not a great pattern, but it's the simplest way to make login dynamic
// without refactoring the entire app's data flow.
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
    },
    {
        id: 'chat2',
        participants: [CURRENT_USER, MOCK_USERS[2]],
        messages: [
            { id: 'msg3', sender: MOCK_USERS[2], content: 'Blessings to you.', timestamp: 'Yesterday', type: 'text', timestampValue: 1722314400000 },
        ],
    },
];

let MOCK_PRAYER_REQUESTS: PrayerRequest[] = [
    {
        id: 'prayer1',
        author: MOCK_USERS[1],
        title: "Prayer for my family's health",
        content: "Please pray for my family. My parents are not feeling well, and we are seeking God's healing touch upon them.",
        image: 'https://picsum.photos/400/250',
        prayCount: 15,
        comments: [
            { id: 'c1', author: MOCK_USERS[2], content: 'Praying for healing and strength for your family.', timestamp: '1 day ago' },
            { id: 'c2', author: CURRENT_USER, content: 'I have lifted them up in prayer.', timestamp: '2 hours ago' }
        ],
        isPrayedByCurrentUser: false,
        createdAt: '2024-07-30T10:00:00Z',
    },
    {
        id: 'prayer2',
        author: MOCK_USERS[2],
        title: 'Guidance for the youth ministry',
        content: 'Asking for prayers for our youth ministry as we plan our upcoming outreach event. Pray for wisdom and for the hearts of the young people we will reach.',
        prayCount: 22,
        comments: [
             { id: 'c3', author: MOCK_USERS[1], content: 'May God guide your plans!', timestamp: '3 days ago' }
        ],
        isPrayedByCurrentUser: true,
        createdAt: '2024-07-31T12:00:00Z',
    },
];

const MOCK_NEWS: NewsItem[] = [
    {
        id: 'news1',
        title: 'Youth Camp 2024 Announcement',
        date: 'July 15, 2024',
        content: 'We are excited to announce our annual Youth Camp from August 5th to 8th. Registration is now open! Please see Pastor Ramesh for more details. We will have special guest speakers and worship nights.',
        image: 'https://picsum.photos/400/200'
    },
    {
        id: 'news2',
        title: 'Community Outreach Program',
        date: 'July 12, 2024',
        content: 'Join us this Saturday for our community outreach program. We will be distributing food and supplies to those in need in our local area. Volunteers are welcome. Meet at the church at 9 AM.',
    }
];

const MOCK_VERSES_OF_THE_DAY: Verse[] = [
    { verse: 'यूहन्ना ३:१६', text: 'किनभने परमेश्‍वरले संसारलाई यति साह्रो प्रेम गर्नुभयो, कि उहाँले आफ्‍ना एकमात्र पुत्र दिनुभयो, ताकि उहाँमाथि विश्‍वास गर्ने कोही पनि नाश नहोस्, तर त्‍यसले अनन्त जीवन पाओस्।' },
    { verse: 'हितोपदेश ३:५-६', text: 'तेरो सारा भरोसा परमप्रभुमा राख्, र तेरो आफ्‍नै समझ-शक्‍तिमा भरोसा नगर्। आफूले गर्ने सबै कुरामा उहाँलाई सम्झी, र उहाँले तेरा मार्गहरू सोझो बनाउनुहुनेछ।' },
    { verse: 'फिलिप्पी ४:१३', text: 'जसले मलाई शक्ति दिनuहुन्छ, उहाँमा म सब कुरा गर्न सक्छु।' },
    { verse: 'यशैया ४१:१०', text: 'नडरा, किनभने म तँसँग छु। निरुत्‍साहित नहो, किनभने म तेरो परमेश्‍वर हुँ। म तँलाई बलियो पार्नेछु र तँलाई सहायता गर्नेछु। मेरो धार्मिकताको दाहिने हातले म तँलाई सम्‍हाल्‍नेछु।' }
];

const MOCK_NOTIFICATIONS: Notification[] = [
    { id: 'n1', icon: 'chat_bubble', message: 'Pastor Ramesh commented on your prayer request.', timestamp: '2 hours ago' },
    { id: 'n2', icon: 'feed', message: 'New announcement posted: Youth Camp 2024.', timestamp: '1 day ago' },
    { id: 'n3', icon: 'volunteer_activism', message: 'Jane Smith is praying for your request "Family Health".', timestamp: '3 days ago' },
];

const BIBLE_READING_PLAN_NNRV = [
    'उत्पत्ति १, मत्ती १', 'उत्पत्ति २, मत्ती २', 'उत्पत्ति ३, मत्ती ३', 'उत्पत्ति ४, मत्ती ४', 'उत्पत्ति ५, मत्ती ५', 'उत्पत्ति ६, मत्ती ६', 'उत्पत्ति ७, मत्ती ७', 'उत्पत्ति ८, मत्ती ८', 'उत्पत्ति ९-१०, मत्ती ९', 'उत्पत्ति ११, मत्ती १०', 'उत्पत्ति १२, मत्ती ११', 'उत्पत्ति १३, मत्ती १२', 'उत्पत्ति १४, मत्ती १३', 'उत्पत्ति १५, मत्ती १४', 'उत्पत्ति १६, मत्ती १५', 'उत्पत्ति १७, मत्ती १६', 'उत्पत्ति १८, मत्ती १७', 'उत्पत्ति १९, मत्ती १८', 'उत्पत्ति २०, मत्ती १९', 'उत्पत्ति २१, मत्ती २०', 'उत्पत्ति २२, मत्ती २१', 'उत्पत्ति ২৩, मत्ती २२', 'उत्पत्ति २४, मत्ती २३', 'उत्पत्ति २५, मत्ती २४', 'उत्पत्ति २६, मत्ती २५', 'उत्पत्ति २७, मत्ती २۶', 'उत्पत्ति २८, मत्ती २७', 'उत्पत्ति २९, मत्ती २८', 'उत्पत्ति ३०, मर्कूस १', 'उत्पत्ति ३१, मर्कूस २', 'उत्पत्ति ३२, मर्कूस ३', 'उत्पत्ति ३३, मर्कूस ४', 'उत्पत्ति ३४, मर्कूस ५', 'उत्पत्ति ३५, मर्कूस ६', 'उत्पत्ति ३६, मर्कूस ७', 'उत्पत्ति ३७, मर्कूस ८', 'उत्पत्ति ३८, मर्कूस ९', 'उत्पत्ति ३९, मर्कूस १०', 'उत्पत्ति ४०, मर्कूस ११', 'उत्पत्ति ४１, मर्कूस १२', 'उत्पत्ति ४२, मर्कूस १३', 'उत्पत्ति ४३, मर्कूस १४', 'उत्पत्ति ४४, मर्कूस १५', 'उत्पत्ति ४५, मर्कूस १६', 'उत्पत्ति ४६, लूका १', 'उत्पत्ति ४७, लूका २', 'उत्पत्ति ४८, लूका ३', 'उत्पत्ति ४९, लूका ४', 'उत्पत्ति ५०, लूका ५', 'प्रस्थान १, लूका ६', 'प्रस्थान २, लूका ७', 'प्रस्थान ३, लूका ८', 'प्रस्थान ४, लूका ९', 'प्रस्थान ५, लूका १०', 'प्रस्थान ६, लूका ११', 'प्रस्थान ७, लूका १२', 'प्रस्थान ८, लूका १३', 'प्रस्थान ९, लूका १४', 'प्रस्थान १०, लूका १५', 'प्रस्थान ११, लूका १६', 'प्रस्थान १२, लूका १७', 'प्रस्थान १३, लूका १८', 'प्रस्थान १४, लूका १९', 'प्रस्थान १५, लूका २०', 'प्रस्थान १६, लूका २१', 'प्रस्थान १७, लूका २२', 'प्रस्थान १८, लूका ২৩', 'प्रस्थान १९, लूका २४', 'प्रस्थान २०, यूहन्ना १', 'प्रस्थान २१, यूहन्ना २', 'प्रस्थान २२, यूहन्ना ३', 'प्रस्थान ২৩, यूहन्ना ४', 'प्रस्थान २४, यूहन्ना ५', 'प्रस्थान २५, यूहन्ना ६', 'प्रस्थान २६, यूहन्ना ७', 'प्रस्थान २७, यूहन्ना ८', 'प्रस्थान २८, यूहन्ना ९', 'प्रस्थान २९, यूहन्ना १०', 'प्रस्थान ३०, यूहन्ना ११', 'प्रस्थान ३१, यूहन्ना १२', 'प्रस्थान ३２, यूहन्ना १३', 'प्रस्थान ३३, यूहन्ना १४', 'प्रस्थान ३४, यूहन्ना १५', 'प्रस्थान ३५, यूहन्ना १६', 'प्रस्थान ३६, यूहन्ना १७', 'प्रस्थान ३७, यूहन्ना १८', 'प्रस्थान ३८, यूहन्ना १९', 'प्रस्थान ३९, यूहन्ना २०', 'प्रस्थान ४०, यूहन्ना २१', 'लेवी १, प्रेरित १', 'लेवी २, प्रेरित २', 'लेवी ३, प्रेरित ३', 'लेवी ४, प्रेरित ४', 'लेवी ५, प्रेरित ५', 'लेवी ६, प्रेरित ६', 'लेवी ७, प्रेरित ७', 'लेवी ८, प्रेरित ८', 'लेवी ९, प्रेरित ९', 'लेवी १०, प्रेरित १०', 'लेवी ११, प्रेरित ११', 'लेवी १२, प्रेरित १२', 'लेवी १३, प्रेरित १३', 'लेवी १४, प्रेरित १४', 'लेवी १५, प्रेरित १५', 'लेवी १६, प्रेरित १६', 'लेवी १७, प्रेरित १७', 'लेवी १८, प्रेरित १८', 'लेवी १९, प्रेरित १९', 'लेवी २०, प्रेरित २०', 'लेवी २१, प्रेरित २१', 'लेवी २२, प्रेरित २२', 'लेवी ২৩, प्रेरित २३', 'लेवी २४, प्रेरित २४', 'लेवी २५, प्रेरित २५', 'लेवी ২৬, प्रेरित २६', 'लेवी २७, प्रेरित २७', 'गन्ती १, प्रेरित २८', 'गन्ती २, रोमी १', 'गन्ती ३, रोमी २', 'गन्ती ४, रोमी ३', 'गन्ती ५, रोमी ४', 'गन्ती ६, रोमी ५', 'गन्ती ७, रोमी ६', 'गन्ती ८, रोमी ७', 'गन्ती ९, रोमी ८', 'गन्ती १०, रोमी ९', 'गन्ती ११, रोमी १०', 'गन्ती १२, रोमी ११', 'गन्ती १३, रोमी १२', 'गन्ती १४, रोमी १३', 'गन्ती १५, रोमी १४', 'गन्ती १६, रोमी १५', 'गन्ती १७, रोमी १६', 'गन्ती १८, १ कोरिन्थी १', 'गन्ती १९, १ कोरिन्थी २', 'गन्ती २०, १ कोरिन्थी ३', 'गन्ती २१, १ कोरिन्थी ४', 'गन्ती २२, १ कोरिन्थी ५', 'गन्ती ২৩, १ कोरिन्थी ६', 'गन्ती २४, १ कोरिन्थी ७', 'गन्ती २५, १ कोरिन्थी ८', 'गन्ती २६, १ कोरिन्थी ९', 'गन्ती २७, १ कोरिन्थी १०', 'गन्ती २८, १ कोरिन्थी ११', 'गन्ती २९, १ कोरिन्थी १२', 'गन्ती ३०, १ कोरिन्थी १३', 'गन्ती ३१, १ कोरिन्थी १४', 'गन्ती ३２, १ कोरिन्थी १५', 'गन्ती ३३, १ कोरिन्थी १६', 'गन्ती ३४, २ कोरिन्थी १', 'गन्ती ३५, २ कोरिन्थी २', 'गन्ती ३६, २ कोरिन्थी ३', 'व्यवस्था १, २ कोरिन्थी ४', 'व्यवस्था २, २ कोरिन्थी ५', 'व्यवस्था ३, २ कोरिन्थी ६', 'व्यवस्था ४, २ कोरिन्थी ७', 'व्यवस्था ५, २ कोरिन्थी ८', 'व्यवस्था ६, २ कोरिन्थी ९', 'व्यवस्था ७, २ कोरिन्थी १०', 'व्यवस्था ८, २ कोरिन्थी ११', 'व्यवस्था ९, २ कोरिन्थी १२', 'व्यवस्था १०, २ कोरिन्थी १३', 'व्यवस्था ११, गलाती १', 'व्यवस्था १२, गलाती २', 'व्यवस्था १३, गलाती ३', 'व्यवस्था १४, गलाती ४', 'व्यवस्था १५, गलाती ५', 'व्यवस्था १६, गलाती ६', 'व्यवस्था १७, एफिसी १', 'व्यवस्था १८, एफिसी २', 'व्यवस्था १९, एफिसी ३', 'व्यवस्था २०, एफिसी ४', 'व्यवस्था २१, एफिसी ५', 'व्यवस्था २२, एफिसी ६', 'व्यवस्था ২৩, फिलिप्पी १', 'व्यवस्था २४, फिलिप्पी २', 'व्यवस्था २५, फिलिप्पी ३', 'व्यवस्था २۶, फिलिप्पी ४', 'व्यवस्था २७, कलस्सी १', 'व्यवस्था २८, कलस्सी २', 'व्यवस्था २९, कलस्सी ३', 'व्यवस्था ३०, कलस्सी ४', 'व्यवस्था ३१, १ थिस्सलोनिकी १', 'व्यवस्था ३２, १ थिस्सलोनिकी २', 'व्यवस्था ३३, १ थिस्सलोनिकी ३', 'व्यवस्था ३४, १ थिस्सलोनिकी ४', 'यहोशू १, १ थिस्सलोनिकी ५', 'यहोशू २, २ थिस्सलोनिकी १', 'यहोशू ३, २ थिस्सलोनिकी २', 'यहोशू ४, २ थिस्सलोनिकी ३', 'यहोशू ५, १ तिमोथी १', 'यहोशू ६, १ तिमोथी २', 'यहोशू ७, १ तिमोथी ३', 'यहोशू ८, १ तिमोथी ४', 'यहोशू ९, १ तिमोथी ५', 'यहोशू १०, १ तिमोथी ६', 'यहोशू ११, २ तिमोथी १', 'यहोशू १२, २ तिमोथी २', 'यहोशू १३, २ तिमोथी ३', 'यहोशू १४, २ तिमोथी ४', 'यहोशू १५, तीतस १', 'यहोशू १६, तीतस २', 'यहोशू १७, तीतस ३', 'यहोशू १८, फिलेमोन १', 'यहोशू १९, हिब्रू १', 'यहोशू २०, हिब्रू २', 'यहोशू २१, हिब्रू ३', 'यहोशू २२, हिब्रू ४', 'यहोशू ২৩, हिब्रू ५', 'यहोशू २४, हिब्रू ६', 'न्यायकर्ता १, हिब्रू ७', 'न्यायकर्ता २, हिब्रू ८', 'न्यायकर्ता ३, हिब्रू ९', 'न्यायकर्ता ४, हिब्रू १०', 'न्यायकर्ता ५, हिब्रू ११', 'न्यायकर्ता ६, हिब्रू १२', 'न्यायकर्ता ७, हिब्रू १३', 'न्यायकर्ता ८, याकूब १', 'न्यायकर्ता ९, याकूब २', 'न्यायकर्ता १०, याकूब ३', 'न्यायकर्ता ११, याकूब ४', 'न्यायकर्ता १२, याकוב ५', 'न्यायकर्ता १३, १ पत्रुस १', 'न्यायकर्ता १४, १ पत्रुस २', 'न्यायकर्ता १५, १ पत्रुस ३', 'न्यायकर्ता १६, १ पत्रुस ४', 'न्यायकर्ता १७, १ पत्रुस ५', 'न्यायकर्ता १८, २ पत्रुस १', 'न्यायकर्ता १९, २ पत्रुस २', 'न्यायकर्ता २०, २ पत्रुस ३', 'न्यायकर्ता २१, १ यूहन्ना १', 'रूथ १, १ यूहन्ना २', 'रूथ २, १ यूहन्ना ३', 'रूथ ३, १ यूहन्ना ४', 'रूथ ४, १ यूहन्ना ५', '१ शमूएल १, २ यूहन्ना १', '१ शमूएल २, ३ यूहन्ना १', '१ शमूएल ३, यहूदा १', '१ शमूएल ४, प्रकाश १', '१ शमूएल ५, प्रकाश २', '१ शमूएल ६, प्रकाश ३', '१ शमूएल ७, प्रकाश ४', '१ शमूएल ८, प्रकाश ५', '१ शमूएल ९, प्रकाश ६', '१ शमूएल १०, प्रकाश ७', '१ शमूएल ११, प्रकाश ८', '१ शमूएल १२, प्रकाश ९', '१ शमूएल १३, प्रकाश १०', '१ शमूएल १४, प्रकाश ११', '१ शमूएल १५, प्रकाश १२', '१ शमूएल १६, प्रकाश १३', '१ शमूएल १७, प्रकाश १४', '१ शमूएल १८, प्रकाश १५', '१ शमूएल १९, प्रकाश १६', '१ शमूएल २०, प्रकाश १७', '१ शमूएल २१, प्रकाश १८', '१ शमूएल २२, प्रकाश १९', '१ शमूएल ২৩, प्रकाश २०', '१ शमूएल २४, प्रकाश २१', '१ शमूएल २५, प्रकाश २२', '१ शमूएल २६, भजनसंग्रह १-२', '१ शमूएल २७, भजनसंग्रह ३-४', '१ शमूएल २८, भजनसंग्रह ५-६', '१ शमूएल २९, भजनसंग्रह ७-८', '१ शमूएल ३०, भजनसंग्रह ९-१०', '१ शमूएल ३१, भजनसंग्रह ११-१२', '२ शमूएल १, भजनसंग्रह १३-१४', '२ शमूएल २, भजनसंग्रह १५-१६', '२ शमूएल ३, भजनसंग्रह १७', '२ शमूएल ४, भजनसंग्रह १८', '२ शमूएल ५, भजनसंग्रह १९', '२ शमूएल ६, भजनसंग्रह २०-२१', '२ शमूएल ७, भजनसंग्रह २२', '२ शमूएल ८, भजनसंग्रह २३-२४', '२ शमूएल ९, भजनसंग्रह २५', '२ शमूएल १०, भजनसंग्रह २६-२७', '२ शमूएल ११, भजनसंग्रह २८- ২৯', '२ शमूएल १२, भजनसंग्रह ३０', '२ शमूएल १३, भजनसंग्रह ३१', '२ शमूएल १४, भजनसंग्रह ३२', '२ शमूएल १५, भजनसंग्रह ३३', '२ शमूएल १६, भजनसंग्रह ३४', '२ शमूएल १७, भजनसंग्रह ३५', '२ शमूएल १८, भजनसंग्रह ३６', '२ शमूएल १९, भजनसंग्रह ३७', '२ शमूएल २०, भजनसंग्रह ३८', '२ शमूएल २१, भजनसंग्रह ३९', '२ शमूएल २२, भजनसंग्रह ४०-४१', '२ शमूएल ২৩, भजनसंग्रह ४२-৪৩', '२ शमूएल २४, भजनसंग्रह ४४', '१ राजा १, भजनसंग्रह ४५', '१ राजा २, भजनसंग्रह ४६-४७', '१ राजा ३, भजनसंग्रह ४८', '१ राजा ४, भजनसंग्रह ४९', '१ राजा ५, भजनसंग्रह ५०', '१ राजा ६, भजनसंग्रह ५१', '१ राजा ७, भजनसंग्रह ५２-५४', '१ राजा ८, भजनसंग्रह ५५', '१ राजा ९, भजनसंग्रह ५६-५७', '१ राजा १०, भजनसंग्रह ५८-५९', '१ राजा ११, भजनसंग्रह ६०', '१ राजा १२, भजनसंग्रह ६१-६२', '१ राजा १३, भजनसंग्रह ६३-६४', '१ राजा १४, भजनसंग्रह ६५', '१ राजा १५, भजनसंग्रह ६६-६७', '१ राजा १६, भजनसंग्रह ६८', '१ राजा १७, भजनसंग्रह ६९', '१ राजा १८, भजनसंग्रह ७०-७१', '१ राजा १९, भजनसंग्रह ७２', '१ राजा २०, भजनसंग्रह ७३', '१ राजा २१, भजनसंग्रह ७४', '१ राजा २२, भजनसंग्रह ७५-७６', '२ राजा १, भजनसंग्रह ७७', '२ राजा २, भजनसंग्रह ७८', '२ राजा ३, भजनसंग्रह ७९', '२ राजा ४, भजनसंग्रह ८०', '२ राजा ५, भजनसंग्रह ८१-८२', '२ राजा ६, भजनसंग्रह ८३', '२ राजा ७, भजनसंग्रह ८४-८５', '२ राजा ८, भजनसंग्रह ८६-८७', '२ राजा ९, भजनसंग्रह ८८', '२ राजा १०, भजनसंग्रह ८९', '२ राजा ११, भजनसंग्रह ९०-९१', '२ राजा १२, भजनसंग्रह ९２-९३', '२ राजा १३, भजनसंग्रह ९४', '२ राजा १४, भजनसंग्रह ९５-९६', '२ राजा १५, भजनसंग्रह ९७-९8', '२ राजा १६, भजनसंग्रह ९९-१०१', '२ राजा १७, भजनसंग्रह १०२', '२ राजा १८, भजनसंग्रह १०३', '२ राजा १९, भजनसंग्रह १०४', '२ राजा २०, भजनसंग्रह १०५', '२ राजा २१, भजनसंग्रह १०६', '२ राजा २२, भजनसंग्रह १०७', '२ राजा ২৩, भजनसंग्रह १०८-१०९', '२ राजा २४, भजनसंग्रह ११०-१११', '२ राजा २५, भजनसंग्रह ११२-११३', '१ इतिहास १, भजनसंग्रह ११४-११५', '१ इतिहास २, भजनसंग्रह ११६', '१ इतिहास ३, भजनसंग्रह ११७-११८', '१ इतिहास ४-५, भजनसंग्रह ११९:१-२४', '१ इतिहास ६, भजनसंग्रह ११९:२५-४८', '१ इतिहास ७, भजनसंग्रह ११९:४९-७२', '१ इतिहास ८, भजनसंग्रब ११९:७३-९६', '१ इतिहास ९, भजनसंग्रह ११९:९७-१२०', '१ इतिहास १०, भजनसंग्रह ११९:१२१-१४४', '१ इतिहास ११, भजनसंग्रह ११९:१४५-१७६', '१ इतिहास १२, भजनसंग्रह १२०-१२२', '१ इतिहास १३-१४, भजनसंग्रह १२३-१२५', '१ इतिहास १५, भजनसंग्रह १२६-१२८', '१ इतिहास १६, भजनसंग्रह १२९-१३१', '१ इतिहास १७, भजनसंग्रह १३२-१३४', '१ इतिहास १८-१९, भजनसंग्रह १३५', '१ इतिहास २०-२१, भजनसंग्रह १३６', '१ इतिहास २२-২৩, भजनसंग्रह १३७-१३८', '१ इतिहास २४-२۵, भजनसंग्रह १३९', '१ इतिहास २६-२7, भजनसंग्रह १४०-१४१', '१ इतिहास २८-२९, भजनसंग्रह १४２-१४३', '२ इतिहास १-२, भजनसंग्रह १४४', '२ इतिहास ३-४, भजनसंग्रह १४५', '२ इतिहास ५-६, भजनसंग्रह १४६-१४७', '२ इतिहास ७-८, भजनसंग्रह १४８', '२ इतिहास ९, भजनसंग्रह १४९-१५०', 'एज्रा १-२, हितोपदेश १', 'एज्रा ३-४, हितोपदेश २', 'एज्रा ५-६, हितोपदेश ३', 'एज्रा ७-८, हितोपदेश ४', 'एज्रा ९-१०, हितोपदेश ५', 'नहेम्याह १-२, हितोपदेश ६', 'नहेम्याह ३-४, हितोपदेश ७', 'नहेम्याह ५-६, हितोपदेश ८', 'नहेम्याह ७, हितोपदेश ९', 'नहेम्याह ८-९, हितोपदेश १०', 'नहेम्याह १०-११, हितोपदेश ११', 'नहेम्याह १२-१३, हितोपदेश १२', 'एस्तर १-२, हितोपदेश १३', 'एस्तर ३-५, हितोपदेश १४', 'एस्तर ६-८, हितोपदेश १५', 'एस्तर ९-१०, हितोपदेश १६', 'अय्यूब १-२, हितोपदेश १७', 'अय्यूब ३-४, हितोपदेश १८', 'अय्यूब ५-६, हितोपदेश १९', 'अय्यूब ७-८, हितोपदेश २०', 'अय्यूब ९-१०, हितोपदेश २१', 'अय्यूब ११-१२, हितोपदेश २२', 'अय्यूब १३-१4, हितोपदेश २३', 'अय्यूब १५-১৬, हितोपदेश २४', 'अय्यूब १७-१९, हितोपदेश २५', 'अय्यूब २०-२१, हितोपदेश २६', 'अय्यूब २२-२४, हितोपदेश २७', 'अय्यूब २५-२७, हितोपदेश २८', 'अय्यूब २८-२९, हितोपदेश २९', 'अय्यूब ३०-३१, हितोपदेश ३०', 'अय्यूब ३２-३३, हितोपदेश ३१', 'अय्यूब ३४-३५, उपदेशक १', 'अय्यूब ३६-३७, उपदेशक २', 'अय्यूब ३८-३९, उपदेशक ३', 'अय्यूब ४०-४२, उपदेशक ४', 'यशैया १-२, उपदेशक ५', 'यशैया ३-४, उपदेशक ६', 'यशैया ५-६, उपदेशक ७', 'यशैया ७-८, उपदेशक ८', 'यशैया ९-१०, उपदेशक ९', 'यशैया ११-१३, उपदेशक १०', 'यशैया १४-१६, उपदेशक ११', 'यशैया १७-१९, उपदेशक १२', 'यशैया २०-२२, श्रेष्ठगीत १', 'यशैया २३-२５, श्रेष्ठगीत २', 'यशैया २६-२७, श्रेष्ठगीत ३', 'यशैया २८-२९, श्रेष्ठगीत ४', 'यशैया ३०-३१, श्रेष्ठगीत ५', 'यशैया ३２-३३, श्रेष्ठगीत ६', 'यशैया ३४-३６, श्रेष्ठगीत ७', 'यशैया ३७-३8, श्रेष्ठगीत ८', 'यशैया ३९-४०, मत्ती १', 'यशैया ४१-४２, मत्ती २', 'यशैया ४३-४४, मत्ती ३', 'यशैया ४५-४६, मत्ती ४', 'यशैया ४७-४८, मत्ती ५', 'यशैया ४९-५０, मत्ती ६', 'यशैया ५१-५२, मत्ती ७', 'यशैया ५३-५४, मत्ती ८', 'यशैया ५५-५७, मत्ती ९', 'यशैया ५८-५९, मत्ती १०', 'यशैया ६०-६१, मत्ती ११', 'यशैया ६２-६३, मत्ती १२', 'यशैया ६४-६५, मत्ती १३', 'यशैया ६६, मत्ती १४', 'यर्मिया १-२, मत्ती १५', 'यर्मिया ३-४, मत्ती १६', 'यर्मिया ५-६, मत्ती १७', 'यर्मिया ७-८, मत्ती १८', 'यर्मिया ९-१०, मत्ती १९', 'यर्मिया ११-१३, मत्ती २०', 'यर्मिया १४-१५, मत्ती २१', 'यर्मिया १६-१७, मत्ती २२', 'यर्मिया १८-२०, मत्ती ২৩', 'यर्मिया २१-२२, मत्ती २४', 'यर्मिया ২৩-२४, मत्ती २५', 'यर्मिया २५-२६, मत्ती २६', 'यर्मिया २७-२८, मत्ती २७', 'यर्मिया २९-३०, मत्ती २८', 'यर्मिया ३१-३２, मर्कूस १', 'यर्मिया ३३-३४, मर्कूस २', 'यर्मिया ३५-३६, मर्कूस ३', 'यर्मिया ३७-३८, मर्कूस ४', 'यर्मिया ३९-४१, मर्कूस ५', 'यर्मिया ४２-४४, मर्कूस ६', 'यर्मिया ४५-४७, मर्कूस ७', 'यर्मिया ४८-४९, मर्कूस ८', 'यर्मिया ५०, मर्कूस ९', 'यर्मिया ५１-５２, मर्कूस १०', 'विलाप १-२, मर्कूस ११', 'विलाप ३-५, मर्कूस १२', 'इजकिएल १-३, मर्कूस १३', 'इजकिएल ४-६, मर्कूस १४', 'इजकिएल ७-९, मर्कूस १५', 'इजकिएल १०-१२, मर्कूस १६', 'इजकिएल १३-१५, लूका १', 'इजकिएल १६-१८, लूका २', 'इजकिएल १९-२१, लूका ३', 'इजकिएल २２-२४, लूका ४', 'इजकिएल २५-२७, लूका ५', 'इजकिएल २८-३०, लूका ६', 'इजकिएल ३१-३३, लूका ७', 'इजकिएल ३４-३６, लूका ८', 'इजकिएल ३７-३９, लूका ९', 'इजकिएल ४०-४２, लूका १०', 'इजकिएल ४३-४５, लूका ११', 'इजकिएल ४६-४८, लूका १२', 'दानिएल १-३, लूका १३', 'दानिएल ۴-६, लूका १४', 'दानिएल ७-९, लूका १५', 'दानिएल १०-१२, लूका १६', 'होशे १-४, लूका १७', 'होशे ५-८, लूका १८', 'होशे ९-११, लूका १९', 'होशे १२-१४, लूका २०', 'योएल १-३, लूका २१', 'आमोस १-३, लूका २२', 'आमोस ४-६, लूका ২৩', 'आमोस ७-९, लूका २४', 'ओबदिया, यूहन्ना १', 'योना १-४, यूहन्ना २', 'मीका १-३, यूहन्ना ३', 'मीका ४-५, यूहन्ना ४', 'मीका ६-७, यूहन्ना ५', 'नहूम १-३, यूहन्ना ६', 'हबकूक १-३, यूहन्ना ७', 'सपन्याह १-३, यूहन्ना ८', 'हाग्गै १-२, यूहन्ना ९', 'जकरिया १-४, यूहन्ना १०', 'जकरिया ५-८, यूहन्ना ११', 'जकरिया ९-१２, यूहन्ना १२', 'जकरिया १३-१४, यूhन्ना १३', 'मलाकी १-४, यूहन्ना १४'
];

const PROVERBS_NNRV: { [key: number]: string } = {
    23: `१ जब तँ शासकसँग खान बस्छस्, तेरो सामुन्ने को छ, सो होशियारसित विचार गर्।
२ यदि तँ पेटू छस् भने, तेरो घिच्रोमा एउटा छुरी राख्।
३ त्‍यसका स्‍वादिष्‍ट भोजनहरूको लालसा नगर्, किनभने त्‍यो भोजन छली हुन सक्‍छ।
४ धनी हुनलाई परिश्रम नगर्, र आफ्‍नो समझ देखाउन छोड्।
५ तैंले आफ्‍ना आँखा त्‍यसतिर लगाउने बित्तिकै के त्‍यो गइहाल्‍छ र? किनभने धनले अवश्‍य नै चीलजस्‍तै पखेटाहरू लगाउँछ, र आकाशतिर उडिहाल्‍छ।
६ कन्जूस मानिसको भोजन नखा, न त त्‍यसका स्‍वादिष्‍ट भोजनहरूको लालसा गर्।
७ किनभने त्‍यो त्‍यस्‍तो मानिस हो, जसले भोजनको मोल सधैँ गनिरहन्छ। त्‍यसले तँलाई भन्छ, “खाऊ र पिओ,” तर त्‍यसको हृदय तँसँग हुँदैन।
८ तैंले खाएको अलिकति पनि तैंले उगेल्‍नुपर्छ, र तैंले बोलेका मीठा वचनहरू खेर जानेछन्।
९ अज्ञानीको कानमा नबोल्, किनभने त्‍यसले तेरा बुद्धिका कुरालाई तुच्‍छ ठान्‍नेछ।
१० पुरानो सिमानाको ढुङ्गा नसार्, न त टुहुरा-टुहुरीहरूको जग्‍गा मिच्।
११ किनभने तिनीहरूका उद्धारक शक्तिशाली हुनुहुन्‍छ, तँसँग तिनीहरूको पक्षमा उहाँले नै बहस गर्नुहुनेछ।
१२ तेरो हृदय अनुशासनतिर लगा, र तेरा कान ज्ञानका कुरातिर लगा।
१३ बालकलाई अनुशासन दिन नहिचकिचा। यदि तैंले त्‍यसलाई लट्ठीले हिर्काइस् भने त्‍यो मर्दैन।
१४ तैंले त्‍यसलाई लट्ठीले हिर्काइस् भनेता, तैंले त्‍यसको प्राणलाई चिहानबाट बचाउँछस्।
 १५ हे मेरो छोरो, यदि तेरो हृदय बुद्धिमान् छ भने, मेरो हृदय पनि आनन्दित हुनेछ।
१६ जब तेरा ओठले ठीक कुरा बोल्‍छन्, तब मेरो भित्री प्राण रमाउनेछ।
१७ पापीहरूसँग तेरो हृदयले डाह नगरोस्, तर दिनभरि परमप्रभुको भयमा लागिरह।
१८ निश्‍चय नै तेरो निम्‍ति एउटा भविष्य छ, र तेरो आशा कहिल्‍यै टुट्नेछैन।
१९ हे मेरो छोरो, सुन् र बुद्धिमान् हो, र तेरो हृदय सोझो मार्गमा डोर्‍या।
२० धेरै दाखमद्य पिउनेहरू, वा धेरै मासु खाने पेटूहरूसँग सङ्गत नगर्।
२१ किनभने पियक्कड र पेटूहरू गरीब हुनेछन्, र निन्द्राले तिनीहरूलाई झुत्रा लुगा पहिराइदिनेछ।
२२ तँलाई जन्‍म दिने तेरा बाबुको कुरा सुन्, र तेरी आमा बूढ़ी भएकी बेला तिनलाई हेला नगर्।
२३ सत्‍यलाई किन् र त्‍यसलाई नबेच्, बुद्धि, अनुशासन र समझलाई पनि किन्।
२४ धर्मी मानिसको बाबुले धेरै रमाहट गर्छ, बुद्धिमान् छोरो हुने बाबु त्‍यसमा प्रसन्‍न हुन्‍छ।
२५ तेरा बाबु र आमा आनन्दित होऊन्, र तँलाई जन्‍म दिने तिनी रमाऊन्।
२६ हे मेरो छोरो, तेरो हृदय मलाई दे, र तेरा आँखाले मेरा मार्गहरू मन पराऊन्।
२७ किनभने वेश्‍या एउटा गहिरो खाल्‍डो हो, र परस्‍त्री एउटा साँघुरो इनार हो।
२८ डाँकुले झैँ त्‍यसले पनि मानिसहरूलाई ढुकिरहन्छे, र मानिसहरूका बीचमा विश्‍वासघातीहरूको संख्‍या बढ़ाउँछे।
२९ कसलाई दु:ख छ? कसलाई शोक छ? कसको झगड़ा छ? कसको गनगन छ? कसलाई अकारण घाउहरू छन्? कसका आँखा राता छन्?
३० तिनीहरू, जो दाखमद्यमा अल्‍मलिरहन्छन्, जो मिस्रित दाखमद्य चाख्‍n जान्छन्।
३१ दाखमद्य रातो भएको बेला, जब त्‍यो कचौरामा चम्‍कन्‍छ, र जब त्‍यो सरर तल जान्छ, त्‍यसलाई नहेर्।
३२ आखिरमा त्‍यसले सर्पले झैँ डस्‍छ, र विषालु सर्पले झैँ टोक्‍छ।
३३ तेरा आँखाले अनौठा कुराहरू देख्‍नेछन्, र तेरो मनले विचलित कुराहरू बोल्‍नेछ।
३४ तँ समुद्रको बीचमा सुत्‍ने मानिसजस्‍तै, वा जहाजको मस्तूलको टुप्‍पामा सुत्‍ने मानिसजस्‍तै हुनेछस्।
३५ तैंले भन्‍नेछस्, “तिनीहरूले मलाई हिर्काए, तर मलाई दुखेको छैन। तिनीहरूले मलाई पिटे, तर मैले थाहै पाइनँ। म कहिले ब्‍उँझने? म फेरि अर्को गिलास पिउँछु।”`
};

const BIBLE_TEXT_NNRV: { [key: string]: { [key: string]: string } } = {
    '१ शमूएल': {
        '31': `१ पलिश्‍तीहरू इस्राएलको विरुद्धमा लड़े, र इस्राएलीहरू पलिश्‍तीहरूका अगिबाट भागे, र गिल्‍बो डाँड़ामा तिनीहरू मारिए। 
२ पलिश्‍तीहरूले शाऊल र तिनका छोराहरूलाई नजिकैबाट खेदे, र तिनीहरूले तिनका छोराहरू जोनाथन, अबीनादाब र मल्‍कीशूअलाई मारे। 
३ शाऊलको विरुद्धमा लड़ाइँ अझै चर्को भयो, र धनुर्धारीहरूले तिनलाई भेट्टाए र नराम्रोसँग घाइते बनाए। 
४ शाऊलले आफ्‍ना हतियार बोक्‍नेलाई भने, “तेरो तरवार थुत् र मलाई घोंच्, नत्रता यी खतना नभएकाहरू आएर मलाई घोंच्‍नेछन् र मेरो खिल्‍ली गर्नेछन्।” तर तिनको हतियार बोक्‍नेले मानेन, किनभने त्‍यो साह्रै डराएको थियो। यसकारण शाऊलले आफ्‍नै तरवार लिएर त्‍यसमाथि घोप्‍टिए। 
५ जब हतियार बोक्‍नेले शाऊल मरेको देख्‍यो, तब त्‍यो पनि आफ्‍नै तरवारमाथि घोप्‍टियो र तिनीसँगै मर्‍यो। 
६ यसरी शाऊल, तिनका तीन जना छोराहरू र तिनका हतियार बोक्‍ने अनि तिनका सबै मानिसहरू त्‍यही दिन सँगसँगै मरे। 
७ जब डाँड़ापारि र यर्दनपारि बस्‍ने इस्राएलीहरूले इस्राएली सेना भागेको र शाऊल र तिनका छोराहरू मरेका देखे, तब तिनीहरूले सहरहरू छोड़ेर भागे। अनि पलिश्‍तीहरू आएर त्‍यहाँ बसे। 
८ भोलिपल्‍ट जब पलिश्‍तीहरू मारिएकाहरूलाई लुट्न आए, तब तिनीहरूले शाऊल र तिनका तीन जना छोराहरूलाई गिल्‍बो डाँड़ामा लडिरहेका भेट्टाए। 
९ तिनीहरूले तिनको शिर काटे, र तिनका हतियार फुकाले, र पलिश्‍तीहरूका देशभरि तिनीहरूका देवताहरूका मन्दिरहरूमा र मानिसहरूका बीचमा यो शुभ समाचार पठाए। 
१० तिनीहरूले तिनका हतियार अश्‍तारोत देवीको मन्दिरमा राखे, र तिनको मृत शरीर बेथ-शानको पर्खालमा झुन्ड्याए। 
११ जब याबेश-गिलादका बासिन्दाहरूले पलिश्‍तीहरूले शाऊललाई के गरे भनी सुने, 
१2 तब सबै वीर योद्धाहरू उठे र रातभरि यात्रा गरेर बेथ-शानको पर्खालबाट शाऊलको मृत शरीर र तिनका छोराहरूका मृत शरीरहरू निकाले। तिनीहरू याबेशमा आए र त्‍यहाँ तिनीहरूलाई जलाए। 
१३ तब तिनीहरूले तिनीहरूका हड्डीहरू लिएर याबेशमा एउटा सिसौको रूखमुनि गाड़े, र सात दिनसम्म उपवास बसे।`
    },
    'भजनसंग्रह': {
        '11': `१ म परमप्रभुमा शरण लिन्छु। तिमीहरू कसरी मेरो प्राणलाई भन्‍न सक्‍छौ, “चराजस्‍तै तिमीहरूका डाँड़ातिर भाग?” 
२ किनभने हेर, दुष्‍टहरूले आफ्‍ना धनु ताँग्‍छन्, तिनीहरूले सोझो हृदय भएकाहरूलाई अँध्यारोमा हान्‍nलाई आफ्‍ना काँड़ ताँदोमा चढाउँछन्। 
३ जब जगहरू नै भत्‍काइन्छन्, तब धर्मीले के गर्न सक्‍छ र? 
४ परमप्रभु आफ्‍नो पवित्र मन्दिरमा हुनुहुन्‍छ, परमप्रभुको सिंहासन स्‍वर्गमा छ। उहाँका आँखाहरूले हेर्छन्, उहाँका आँखाहरूले मानिसहरूलाई जाँच्‍छन्। 
५ परमप्रभुले धर्मीलाई जाँच्‍नुहुन्‍छ, तर दुष्‍ट र हिंसा मन पराउनेलाई उहाँको प्राणले घृणा गर्छ। 
६ दुष्‍टहरूमाथि उहाँले जलिरहेका कोइलाहरू र बल्‍दो गन्धक वर्षाउनुहुनेछ, र प्रचण्ड बतास तिनीहरूको भाग हुनेछ। 
७ किनभने परमप्रभु धर्मी हुनुहुन्‍छ, उहाँले धार्मिकता प्रेम गर्नुहुन्‍छ, र सोझो मानिसले उहाँको मुहार देख्‍नेछ।`,
        '12': `१ हे परमप्रभु, सहायता गर्नुहोस्, किनभने धर्मी मानिसहरू अब रहेनन्। मानिसहरूका बीचमा विश्‍वासीहरू लोप भएका छन्। 
२ हरेकले आफ्‍नो छिमेकीसँग झूटो बोल्‍छ, तिनीहरू चापलुसी गर्ने ओठले र दोहोरो हृदयले बोल्‍छन्। 
३ परमप्रभुले सबै चापलुसी गर्ने ओठहरू र घमण्डसाथ बोल्‍ने जिब्राहरूलाई काटिदिनुहुनेछ, 
४ जसले भन्छन्, “हामी आफ्‍ना जिब्राहरूले जित्‍नेछौं, हाम्रा ओठहरू हाम्रै हुन्, हाम्रो मालिक को हो र?” 
५ “गरीबहरूको लुट र दरिद्रहरूको सुस्केराको कारण,” परमप्रभु भन्‍नुहुन्‍छ, “म अब उठ्नेछु, म तिनीहरूलाई सुरक्षा दिनेछु, जसको निम्ति तिनीहरू तृष्णा गर्छन्।” 
६ परमप्रभुका वचनहरू निर्दोष वचनहरू हुन्, माटोको भट्टीमा खारेको चाँदीजस्‍तै, सात पल्‍ट शुद्ध पारेको चाँदीजस्‍तै। 
७ हे परमप्रभु, तपाईंले तिनीहरूलाई सुरक्षित राख्‍नुहुनेछ, तपाईंले तिनीहरूलाई यस पुस्‍ताबाट सदासर्वदा रक्षा गर्नुहुनेछ। 
८ जब मानिसहरूका बीचमा नीचतालाई उच्‍च पारिन्छ, तब दुष्‍टहरू चारैतिर स्वतन्त्र घुम्‍छन्।`
    }
};

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

const Modal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void; }) => {
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

// --- Login/Selection Pages ---
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
                        placeholder="Enter your name" 
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
            <h2>Worship</h2>
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
            <div className="bible-section-container">
                 <div className="card bible-card" onClick={handleShowReading}>
                    <h3>बाइबल पढाइ योजना (NNRV)</h3>
                    <p>दिन {dayOfYear}: {readingPlan}</p>
                </div>
            </div>
            <div className="bible-section-container">
                <div className="card bible-card" onClick={handleShowProverb}>
                    <h3>दिनको हितोपदेश</h3>
                    <p>महिनाको हरेक दिनको लागि एक हितोपदेश: हितोपदेश अध्याय {proverbsChapter}</p>
                </div>
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
            <h2>News & Announcements</h2>
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
        const lastMessageA = a.messages.length > 0 ? a.messages[a.messages.length - 1] : null;
        const lastMessageB = b.messages.length > 0 ? b.messages[b.messages.length - 1] : null;

        if (!lastMessageA && !lastMessageB) return 0;
        if (!lastMessageA) return 1; // Chats with no messages go to the bottom
        if (!lastMessageB) return -1;

        return lastMessageB.timestampValue - lastMessageA.timestampValue;
    });
    
    return (
        <div className="page-content chat-list-page">
            <h2>Fellowship</h2>
            <div className="list-container">
                {sortedChats.map(chat => {
                    const otherParticipant = chat.participants.find(p => p.id !== CURRENT_USER.id);
                    if (!otherParticipant) return null;
                    const lastMessage = chat.messages[chat.messages.length - 1];

                    return (
                        <div key={chat.id} className="list-item chat-item" onClick={() => onSelectChat(chat.id)}>
                            <div className="chat-avatar">{otherParticipant.avatar}</div>
                            <div className="chat-info">
                                <span className="chat-name">{otherParticipant.name}</span>
                                <span className="chat-last-message">{lastMessage ? lastMessage.content : 'No messages yet.'}</span>
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

const ConversationPage = ({ chat, onBack, onSendMessage }: { chat: Chat; onBack: () => void; onSendMessage: (content: string) => void; }) => {
    const [newMessage, setNewMessage] = React.useState('');
    const messagesEndRef = React.useRef<HTMLDivElement>(null);
    const otherParticipant = chat.participants.find(p => p.id !== CURRENT_USER.id);

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chat.messages]);

    const handleSend = () => {
        if (newMessage.trim()) {
            onSendMessage(newMessage.trim());
            setNewMessage('');
        }
    };
    
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="conversation-page">
            <header className="conversation-header">
                <button className="back-button" onClick={onBack}>
                    <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <h3>{otherParticipant?.name}</h3>
                <div style={{width: 40}}></div> {/* Spacer */}
            </header>
            <div className="message-list">
                {chat.messages.map(msg => (
                    <div key={msg.id} className={`message-bubble ${msg.sender.id === CURRENT_USER.id ? 'sent' : 'received'}`}>
                        {msg.content}
                        <span className="message-timestamp">{msg.timestamp}</span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="message-input-container">
                 <input 
                    type="text" 
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                 <button className="send-button" onClick={handleSend}>
                    <span className="material-symbols-outlined">send</span>
                </button>
            </div>
        </div>
    );
};

const PrayerPage = ({ prayerRequests, onPray, onAddRequest, onSelectRequest }: { prayerRequests: PrayerRequest[]; onPray: (id:string) => void; onAddRequest: () => void; onSelectRequest: (req: PrayerRequest) => void; }) => {
    return (
        <div className="page-content">
            <h2>Prayer Wall</h2>
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

const CreateChatModal = ({ onClose, onStartChat }: { onClose: () => void; onStartChat: (userId: string) => void; }) => {
    const users = MOCK_USERS.filter(u => u.id !== CURRENT_USER.id);

    return (
        <Modal onClose={onClose}>
            <div className="create-chat-modal">
                <h3>Start a new conversation</h3>
                <div className="new-chat-options">
                    <h4>Members</h4>
                    <div className="user-list">
                        {users.map(user => (
                            <div key={user.id} className="user-list-item" onClick={() => onStartChat(user.id)}>
                                {user.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

const NotificationPanel = ({ notifications, onClose }: { notifications: Notification[]; onClose: () => void; }) => {
    const panelRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Close if clicked outside the panel
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                // But don't close if the click was on the button that opens it
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

// --- Main App Component ---

const App = () => {
    const [user, setUser] = React.useState<User | null>(null);
    const [church, setChurch] = React.useState(CHURCHES[0]); // Default to the first church
    const [activePage, setActivePage] = React.useState('worship');
    
    // Data states
    const [chats, setChats] = React.useState(MOCK_CHATS);
    const [prayerRequests, setPrayerRequests] = React.useState(MOCK_PRAYER_REQUESTS);
    const [notifications, setNotifications] = React.useState(MOCK_NOTIFICATIONS);

    // View states
    const [activeChatId, setActiveChatId] = React.useState<string | null>(null);
    const [selectedPrayerRequest, setSelectedPrayerRequest] = React.useState<PrayerRequest | null>(null);
    const [showNotifications, setShowNotifications] = React.useState(false);
    const [hasUnread, setHasUnread] = React.useState(true);
    
    // Modal states
    const [showAddPrayerModal, setShowAddPrayerModal] = React.useState(false);
    const [showCreateChatModal, setShowCreateChatModal] = React.useState(false);

    const handleLogin = (loggedInUser: User) => {
        // This is a workaround to update the global user object and reflect it in mock data
        CURRENT_USER.id = loggedInUser.id;
        CURRENT_USER.name = loggedInUser.name;
        CURRENT_USER.avatar = loggedInUser.avatar;

        // Re-initialize mock data that depends on CURRENT_USER
        MOCK_PRAYER_REQUESTS.forEach(req => {
            const userComment = req.comments.find(c => c.author.id === 'user1');
            if(userComment) userComment.author = CURRENT_USER;
        });
        
        MOCK_CHATS.forEach(chat => {
            const userParticipant = chat.participants.find(p => p.id === 'user1');
            if (userParticipant) {
                 userParticipant.name = CURRENT_USER.name;
                 userParticipant.avatar = CURRENT_USER.avatar;
            }
            chat.messages.forEach(msg => {
                if(msg.sender.id === 'user1') msg.sender = CURRENT_USER;
            });
        });
        
        setPrayerRequests([...MOCK_PRAYER_REQUESTS]);
        setChats([...MOCK_CHATS]);
        setUser(loggedInUser);
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

    const handleAddPrayerRequest = ({ title, content, image }: { title: string; content: string; image: string | null; }) => {
        const newRequest: PrayerRequest = {
            id: `prayer${Date.now()}`,
            author: CURRENT_USER,
            title,
            content,
            image: image || undefined,
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

    const handleSendMessage = (content: string) => {
        const newMessage: Message = {
            id: `msg${Date.now()}`,
            sender: CURRENT_USER,
            content,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            type: 'text',
            timestampValue: Date.now()
        };
        setChats(prevChats => prevChats.map(chat => 
            chat.id === activeChatId
                ? { ...chat, messages: [...chat.messages, newMessage] }
                : chat
        ));
    };

    const handleStartChat = (userId: string) => {
        // Check if a chat with this user already exists
        const existingChat = chats.find(chat => chat.participants.some(p => p.id === userId));
        if (existingChat) {
            setActiveChatId(existingChat.id);
        } else {
            // Create a new chat
            const otherUser = MOCK_USERS.find(u => u.id === userId);
            if (!otherUser) return;
            const newChat: Chat = {
                id: `chat${Date.now()}`,
                participants: [CURRENT_USER, otherUser],
                messages: []
            };
            setChats(prev => [newChat, ...prev]);
            setActiveChatId(newChat.id);
        }
        setShowCreateChatModal(false);
    };

    const handleNotificationToggle = () => {
        setShowNotifications(prev => !prev);
        if (hasUnread) {
            setHasUnread(false);
        }
    };

    const renderPage = () => {
        switch (activePage) {
            case 'worship':
                return <WorshipPage church={church} />;
            case 'bible':
                return <BiblePage />;
            case 'news':
                return <NewsPage />;
            case 'fellowship':
                if (activeChatId) return null; // Don't render list when conversation is active on mobile
                return <ChatListPage chats={chats} onSelectChat={setActiveChatId} onCreateChat={() => setShowCreateChatModal(true)} />;
            case 'prayer':
                return <PrayerPage 
                    prayerRequests={prayerRequests} 
                    onPray={handlePray}
                    onAddRequest={() => setShowAddPrayerModal(true)}
                    onSelectRequest={setSelectedPrayerRequest}
                />;
            default:
                return <WorshipPage church={church} />;
        }
    };
    
    if (!user) {
        return <LoginPage church={church} onLogin={handleLogin} />;
    }

    const activeChat = chats.find(c => c.id === activeChatId);

    return (
        <div className="app-container">
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
                </div>
            </header>
            <main className="main-content">
                {renderPage()}
            </main>
            
            {showNotifications && <NotificationPanel notifications={notifications} onClose={() => setShowNotifications(false)} />}
            
            <nav className="bottom-nav">
                <button className={`nav-item ${activePage === 'worship' ? 'active' : ''}`} onClick={() => { setActivePage('worship'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">church</span>
                    <span>Worship</span>
                </button>
                <button className={`nav-item ${activePage === 'news' ? 'active' : ''}`} onClick={() => { setActivePage('news'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">feed</span>
                    <span>News</span>
                </button>
                <button className={`nav-item ${activePage === 'bible' ? 'active' : ''}`} onClick={() => { setActivePage('bible'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">book_2</span>
                    <span>Bible</span>
                </button>
                 <button className={`nav-item ${activePage === 'fellowship' ? 'active' : ''}`} onClick={() => { setActivePage('fellowship'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">groups</span>
                    <span>Fellowship</span>
                </button>
                <button className={`nav-item ${activePage === 'prayer' ? 'active' : ''}`} onClick={() => { setActivePage('prayer'); setActiveChatId(null); }}>
                    <span className="material-symbols-outlined">volunteer_activism</span>
                    <span>Prayer</span>
                </button>
            </nav>
            
            {activeChat && <ConversationPage chat={activeChat} onBack={() => setActiveChatId(null)} onSendMessage={handleSendMessage} />}
            {showAddPrayerModal && <AddPrayerRequestModal onClose={() => setShowAddPrayerModal(false)} onAddRequest={handleAddPrayerRequest} />}
            {selectedPrayerRequest && <PrayerDetailsModal 
                request={selectedPrayerRequest} 
                onClose={() => setSelectedPrayerRequest(null)}
                onPray={handlePray}
                onComment={handleComment}
            />}
            {showCreateChatModal && <CreateChatModal onClose={() => setShowCreateChatModal(false)} onStartChat={handleStartChat} />}

        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);