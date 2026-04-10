// ============================================
// Routes: Avis Clients
// ============================================
// Endpoints pour gérer les avis

import express from 'express';
import { firestore } from '../config/firebase.js';
import { Review } from '../models/Review.js';

const router = express.Router();
const COLLECTION = 'reviews';

/**
 * GET /api/reviews
 * Récupère tous les avis approuvés
 * 
 * Réponse:
 * - 200: Liste des avis
 * - 500: Erreur serveur
 */
router.get('/', async (req, res) => {
  try {
    // Récupérer les documents où approuve = true
    const snapshot = await firestore
      .collection(COLLECTION)
      .where('approuve', '==', true)
      .orderBy('date', 'desc')
      .get();

    // Convertir chaque document
    const reviews = [];
    snapshot.forEach((doc) => {
      reviews.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.json(reviews);
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des avis:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/reviews
 * Ajoute un nouvel avis
 * L'avis est d'abord en attente d'approbation admin
 * 
 * Body:
 * - nom (string): Nom du client
 * - email (string): Email du client
 * - produit (string): Produit commandé
 * - note (number): Note de 1 à 5
 * - commentaire (string): Texte de l'avis
 * 
 * Réponse:
 * - 201: Avis créé
 * - 400: Données invalides
 * - 500: Erreur serveur
 */
router.post('/', async (req, res) => {
  try {
    const { nom, email, produit, note, commentaire } = req.body;

    // Créer une instance Review
    const review = new Review({
      nom,
      email,
      produit,
      note,
      commentaire,
      approuve: false, // En attente d'approbation
      date: new Date(),
    });

    // Valider les données
    review.valider();

    // Sauvegarder en base de données
    const docRef = await firestore.collection(COLLECTION).add(review.toFirestore());

    console.log(`✅ Avis ajouté (en attente): ${docRef.id}`);

    res.status(201).json({
      id: docRef.id,
      message: 'Avis envoyé! Il sera visible après approbation par l\'administrateur.',
      ...review.toFirestore(),
    });
  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout d\'avis:', error);
    
    // Retourner le message d'erreur de validation si présent
    const statusCode = error.message.includes('obligatoire') || 
                       error.message.includes('invalide') ? 400 : 500;
    
    res.status(statusCode).json({ error: error.message });
  }
});

/**
 * GET /api/reviews/rating/average
 * Récupère la note moyenne et le nombre d'avis
 * 
 * Réponse:
 * - 200: {note_moyenne, nombre_avis}
 * - 500: Erreur serveur
 */
router.get('/rating/average', async (req, res) => {
  try {
    // Récupérer tous les avis approuvés
    const snapshot = await firestore
      .collection(COLLECTION)
      .where('approuve', '==', true)
      .get();

    let totalNotes = 0;
    let count = 0;

    // Calculer la somme des notes
    snapshot.forEach((doc) => {
      const review = doc.data();
      totalNotes += review.note || 0;
      count++;
    });

    // Calculer la moyenne
    const average = count > 0 ? (totalNotes / count).toFixed(1) : 0;

    res.json({
      note_moyenne: parseFloat(average),
      nombre_avis: count,
    });
  } catch (error) {
    console.error('❌ Erreur lors du calcul de la note moyenne:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
