// ============================================
// Service API - Gestion des appels backend
// ============================================
// Ce fichier centralise tous les appels HTTP vers l'API backend
// Permet une meilleure organisation et maintenabilité

import axios from 'axios';

// URL de base de l'API
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Créer une instance Axios avec configuration par défaut
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// ========== GESTION DES GALERIE (PHOTOS) ==========

/**
 * Récupère toutes les photos de la galerie
 * @returns {Promise} Liste des photos
 */
export const getGalleryPhotos = async () => {
  try {
    const response = await apiClient.get('/gallery');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des photos:', error);
    throw error;
  }
};

/**
 * Ajoute une nouvelle photo à la galerie
 * @param {Object} photoData - {titre, description, imageUrl, categorie}
 * @returns {Promise} Photo créée
 */
export const addGalleryPhoto = async (photoData) => {
  try {
    const response = await apiClient.post('/gallery', photoData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de photo:', error);
    throw error;
  }
};

/**
 * Supprime une photo de la galerie (admin uniquement)
 * @param {string} photoId - ID de la photo
 * @returns {Promise}
 */
export const deleteGalleryPhoto = async (photoId) => {
  try {
    const response = await apiClient.delete(`/gallery/${photoId}`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la suppression de photo:', error);
    throw error;
  }
};

// ========== GESTION DES AVIS CLIENTS ==========

/**
 * Récupère tous les avis approuvés
 * @returns {Promise} Liste des avis
 */
export const getReviews = async () => {
  try {
    const response = await apiClient.get('/reviews');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des avis:', error);
    throw error;
  }
};

/**
 * Ajoute un nouvel avis (en attente d'approbation)
 * @param {Object} reviewData - {nom, produit, note, commentaire}
 * @returns {Promise} Avis créé
 */
export const addReview = async (reviewData) => {
  try {
    const response = await apiClient.post('/reviews', reviewData);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout d\'avis:', error);
    throw error;
  }
};

/**
 * Récupère la note moyenne globale
 * @returns {Promise} {note_moyenne, nombre_avis}
 */
export const getAverageRating = async () => {
  try {
    const response = await apiClient.get('/reviews/rating/average');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération de la note moyenne:', error);
    throw error;
  }
};

// ========== GESTION DES UPLOADS D'IMAGES ==========

/**
 * Upload une image vers le serveur
 * @param {FormData} formData - Données du formulaire avec fichier image
 * @returns {Promise} URL de l'image uploadée
 */
export const uploadImage = async (formData) => {
  try {
    const response = await apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'upload d\'image:', error);
    throw error;
  }
};

// ========== UTILITÉS ==========

/**
 * Envoyer un email de contact via le backend
 * @param {Object} data - {nom, email, message}
 * @returns {Promise}
 */
export const sendContactEmail = async (data) => {
  try {
    const response = await apiClient.post('/contact', data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    throw error;
  }
};

export default apiClient;
