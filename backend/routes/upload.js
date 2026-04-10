// ============================================
// Routes: Upload d'Images
// ============================================
// Endpoints pour uploader des images

import express from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Pour utiliser __dirname en module ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

/**
 * Configuration Multer pour l'upload d'images
 * Stocke les fichiers dans le dossier 'uploads'
 */
const storage = multer.diskStorage({
  // Dossier de destination
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  
  // Nom du fichier
  filename: (req, file, cb) => {
    // Générer un nom unique avec timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

/**
 * Filtre pour accepter uniquement les images
 */
const fileFilter = (req, file, cb) => {
  // Types MIME autorisés
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Seules les images (JPEG, PNG, GIF, WebP) sont autorisées'), false);
  }
};

// Créer l'instance multer
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // Limite 5MB
  },
});

/**
 * POST /api/upload
 * Upload une image et retourne son URL
 * 
 * Body:
 * - file (multipart/form-data): Fichier image
 * 
 * Réponse:
 * - 200: {url, filename}
 * - 400: Fichier invalide ou trop volumineux
 * - 500: Erreur serveur
 */
router.post('/', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Aucun fichier fourni' });
    }

    // Construire l'URL de l'image uploadée
    const imageUrl = `${process.env.API_URL || 'http://localhost:5000'}/uploads/${req.file.filename}`;

    console.log(`📤 Image uploadée: ${req.file.filename}`);

    res.json({
      url: imageUrl,
      filename: req.file.filename,
      size: req.file.size,
      message: 'Image uploadée avec succès',
    });
  } catch (error) {
    console.error('❌ Erreur lors de l\'upload:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Middleware pour servir les fichiers statiques uploadés
 * Permet d'accéder aux images via /uploads/...
 */
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

export default router;
