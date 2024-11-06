import 'dotenv/config';

import { getApps, getApp, initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';

import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

class FirebaseManager {
    private static instance: FirebaseManager;
    private app: FirebaseApp;
    private db: Firestore;

    private constructor() {
        if (getApps().length === 0) {
            this.app = initializeApp(firebaseConfig);
        } else {
            this.app = getApp();
        }

        this.db = getFirestore(this.app);
    }

    public static getInstance(): FirebaseManager {
        if (!FirebaseManager.instance) {
            FirebaseManager.instance = new FirebaseManager();
        }
        return FirebaseManager.instance;
    }

    public async getCollection<T>(collectionName: string): Promise<T[]> {
        const collectionRef = collection(this.db, collectionName);
        const snapshot = await getDocs(collectionRef);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as T[];
    }

    public async getDocument<T>(collectionName: string, documentId: string): Promise<T | null> {
        const docRef = doc(this.db, collectionName, documentId);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) return null;
        return { id: docSnap.id, ...docSnap.data() } as T;
    }
}

export const firebaseManager = FirebaseManager.getInstance();