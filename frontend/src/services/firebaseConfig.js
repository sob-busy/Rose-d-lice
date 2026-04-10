// ============================================
// Configuration Firebase Firestore
// ============================================
// Ce fichier configure la connexion à Firebase Firestore
// Remplacez les valeurs par vos propres clés Firebase

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// ⚠️ IMPORTANT: Remplacez avec vos données Firebase
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_AUTH_DOMAIN",
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_STORAGE_BUCKET",
  messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
  appId: "VOTRE_APP_ID"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore (base de données)
export const firestore = getFirestore(app);

// Initialiser Storage (stockage des images)
export const storage = getStorage(app);

export default app;
