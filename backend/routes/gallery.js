// ============================================
// Routes: Galerie
// ============================================
// Endpoints pour gérer les photos de la galerie

import express from 'express';
import { firestore } from '../config/firebase.js';
import { GalleryPhoto } from '../models/GalleryPhoto.js';

const router = express.Router();
const COLLECTION = 'gallery';

/**
 * GET /api/gallery
 * Récupère toutes les photos approuvées de la galerie
 * 
 * Réponse:
 * - 200: Liste des photos
 * - 500: Erreur serveur
 */
router.get('/', async (req, res) => {
  try {
    // Récupérer les documents où approuve = true
    const snapshot = await firestore
      .collection(COLLECTION)
      .where('approuve', '==', true)
      .orderBy('date_ajout', 'desc')
      .get();

    // Convertir chaque document en objet photo avec son ID
    const photos = [];
    snapshot.forEach((doc) => {
      photos.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.json(photos);
  } catch (error) {
    console.error('❌ Erreur lors de la récupération des photos:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/gallery
 * Ajoute une nouvelle photo à la galerie
 * La photo est d'abord en attente d'approbation admin
 * 
 * Body:
 * - titre (string): Nom de la création
 * - description (string): Description
 * - imageUrl (string): URL de l'image
 * - categorie (string): Catégorie
 * 
 * Réponse:
 * - 201: Photo créée avec son ID
 * - 400: Données invalides
 * - 500: Erreur serveur
 */
router.post('/', async (req, res) => {
  try {
    const { titre, description, imageUrl, categorie } = req.body;

    // Validation basique
    if (!titre || !description || !imageUrl) {
      return res.status(400).json({
        error: 'Titre, description et imageUrl sont obligatoires',
      });
    }

    // Créer une nouvelle photo
    const photo = new GalleryPhoto({
      titre,
      description,
      image_url: imageUrl,
      categorie,
      approuve: false, // En attente d'approbation
      date_ajout: new Date(),
    });

    // Sauvegarder en base de données
    const docRef = await firestore.collection(COLLECTION).add(photo.toFirestore());

    console.log(`✅ Photo ajoutée (en attente d'approbation): ${docRef.id}`);

    res.status(201).json({
      id: docRef.id,
      message: 'Photo ajoutée! Elle sera visible après approbation par l\'administrateur.',
      ...photo.toFirestore(),
    });
  } catch (error) {
    console.error('❌ Erreur lors de l\'ajout de photo:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * DELETE /api/gallery/:id
 * Supprime une photo (administrateur uniquement)
 * 
 * Paramètres:
 * - id (string): ID de la photo à supprimer
 * 
 * Réponse:
 * - 200: Photo supprimée
 * - 404: Photo non trouvée
 * - 500: Erreur serveur
 */
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Vérifier que la photo existe
    const photoDoc = await firestore.collection(COLLECTION).doc(id).get();
    if (!photoDoc.exists) {
      return res.status(404).json({ error: 'Photo non trouvée' });
    }

    // Supprimer la photo
    await firestore.collection(COLLECTION).doc(id).delete();

    console.log(`🗑️ Photo supprimée: ${id}`);

    res.json({
      message: 'Photo supprimée avec succès',
      id,
    });
  } catch (error) {
    console.error('❌ Erreur lors de la suppression:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
