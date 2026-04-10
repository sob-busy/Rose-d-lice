// ============================================
// Configuration Firebase Admin
// ============================================
// Initialise Firebase Admin SDK pour accéder à Firestore

import admin from 'firebase-admin';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Initialiser Firebase Admin
 * ⚠️ IMPORTANT: Remplacez les variables d'environnement par vos vraies données
 */
try {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.FIREBASE_TYPE,
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI,
      token_uri: process.env.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
      client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });

  console.log('✅ Firebase Admin initialisé avec succès');
} catch (error) {
  console.error('❌ Erreur lors de l\'initialisation de Firebase:', error);
  process.exit(1);
}

/**
 * Récupérer l'instance Firestore
 * Utilisée pour accéder à la base de données
 */
export const firestore = admin.firestore();

/**
 * Récupérer l'instance Storage
 * Utilisée pour uploader les images
 */
export const storage = admin.storage();

export default admin;
