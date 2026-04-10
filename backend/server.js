// ============================================
// Configuration du serveur Express
// ============================================
// Point d'entrée du backend

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import multer from 'multer';

// Routes
import galleryRoutes from './routes/gallery.js';
import reviewRoutes from './routes/reviews.js';
import uploadRoutes from './routes/upload.js';

// Charger variables d'environnement
dotenv.config();

// Créer l'application Express
const app = express();
const PORT = process.env.PORT || 5000;

// ========== MIDDLEWARES ==========

/**
 * CORS: Autoriser les requêtes depuis le frontend (localhost:3000)
 * Nécessaire pour que le frontend puisse appeler le backend
 */
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));

/**
 * Body Parser: Parser les requêtes JSON
 * Convertit le corps JSON en objet JavaScript
 */
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

/**
 * Middleware de log: Affiche chaque requête reçue
 */
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.path} - ${new Date().toLocaleString()}`);
  next();
});

// ========== ROUTES ==========

/**
 * Route racine: Vérifier que le serveur fonctionne
 */
app.get('/', (req, res) => {
  res.json({
    message: '🌹 Serveur Rose Délice actif',
    version: '1.0.0',
    status: 'running',
  });
});

/**
 * Routes API - Galerie
 * GET  /api/gallery        - Récupérer toutes les photos
 * POST /api/gallery        - Ajouter une photo
 * DELETE /api/gallery/:id  - Supprimer une photo
 */
app.use('/api/gallery', galleryRoutes);

/**
 * Routes API - Avis
 * GET /api/reviews              - Récupérer tous les avis approuvés
 * POST /api/reviews             - Ajouter un nouvel avis
 * GET /api/reviews/rating/average - Récupérer la note moyenne
 */
app.use('/api/reviews', reviewRoutes);

/**
 * Routes API - Upload d'images
 * POST /api/upload - Upload une image
 */
app.use('/api/upload', uploadRoutes);

// ========== GESTION DES ERREURS ==========

/**
 * Middleware 404: Route non trouvée
 */
app.use((req, res) => {
  res.status(404).json({
    error: 'Route non trouvée',
    path: req.path,
    method: req.method,
  });
});

/**
 * Middleware global d'erreur
 */
app.use((err, req, res, next) => {
  console.error('❌ Erreur:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Erreur serveur',
  });
});

// ========== DÉMARRAGE DU SERVEUR ==========

/**
 * Démarrer le serveur sur le port spécifié
 * Affiche un message de confirmation
 */
app.listen(PORT, () => {
  console.log(`\n🌹 ===============================`);
  console.log(`🌹 Serveur Rose Délice en cours d'exécution`);
  console.log(`🌹 Port: ${PORT}`);
  console.log(`🌹 URL: http://localhost:${PORT}`);
  console.log(`🌹 Environnement: ${process.env.NODE_ENV || 'développement'}`);
  console.log(`🌹 ===============================\n`);
});

export default app;
