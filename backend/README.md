# Backend - Rose Délice

Serveur Node.js/Express pour la pâtisserie artisanale Rose Délice.

## 🚀 Démarrage rapide

### Installation
```bash
npm install
```

### Configuration Firebase
1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Créez un projet et activez Firestore
3. Générez une clé de service (Settings > Service Accounts)
4. Remplissez `.env` avec les données

### Développement
```bash
npm run dev
```
Le serveur sera accessible à `http://localhost:5000`

### Production
```bash
npm start
```

## 📦 Dépendances

- **Express** - Framework web
- **Firebase Admin SDK** - Accès Firestore
- **Multer** - Upload de fichiers
- **CORS** - Gestion des domaines
- **dotenv** - Variables d'environnement

## 📂 Structure

```
backend/
├── config/
│   └── firebase.js      # Initialisation Firebase Admin
├── models/
│   ├── GalleryPhoto.js  # Modèle photo
│   └── Review.js        # Modèle avis
├── routes/
│   ├── gallery.js       # GET/POST/DELETE photos
│   ├── reviews.js       # GET/POST avis
│   └── upload.js        # POST upload images
├── uploads/             # Dossier images uploadées
├── server.js            # Point d'entrée
├── .env                 # Variables (NE PAS commiter)
└── .env.example         # Template variables
```

## 🔌 Endpoints API

### Galerie
- `GET /api/gallery` - Toutes les photos approuvées
- `POST /api/gallery` - Ajouter une photo
- `DELETE /api/gallery/:id` - Supprimer une photo

### Avis
- `GET /api/reviews` - Tous les avis approuvés
- `POST /api/reviews` - Ajouter un avis
- `GET /api/reviews/rating/average` - Note moyenne

### Upload
- `POST /api/upload` - Uploader une image

## 🔐 Base de Données (Firestore)

### Collections

#### `gallery`
```javascript
{
  titre: string,
  description: string,
  image_url: string,
  categorie: string,
  note: number,
  date_ajout: timestamp,
  approuve: boolean // false par défaut
}
```

#### `reviews`
```javascript
{
  nom: string,
  email: string,
  produit: string,
  note: number (1-5),
  commentaire: string,
  date: timestamp,
  approuve: boolean // false par défaut
}
```

## 🔒 Sécurité

### À Faire en Production

1. **Authentification Admin**
   - Ajouter JWT ou session pour l'approbation

2. **Validation**
   - Tous les inputs sont validés côté serveur

3. **Firebase Storage**
   - Passer de fichiers disque à Firebase Storage

4. **HTTPS**
   - Activer SSL/TLS

5. **Rate Limiting**
   - Ajouter limitation de requêtes

6. **CORS**
   - Restreindre le domaine en production

## 🌍 Variables d'Environnement

```env
# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
API_URL=http://localhost:5000

# Firebase Admin SDK
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=...
FIREBASE_PRIVATE_KEY_ID=...
FIREBASE_PRIVATE_KEY=...
FIREBASE_CLIENT_EMAIL=...
FIREBASE_CLIENT_ID=...
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_CERT_URL=...
FIREBASE_DATABASE_URL=...
```

⚠️ **NE PAS commiter `.env` - Utiliser `.env.example` pour le template**

## 📷 Upload d'Images

- Types acceptés: JPEG, PNG, GIF, WebP
- Taille limite: 5MB
- Stockage: Dossier `uploads/` (à migrer vers Firebase Storage en prod)

## 🚀 Déploiement

### Heroku
```bash
git push heroku main
heroku config:set < .env
```

### Railway/Render
1. Connecter le repo GitHub
2. Définir les variables d'environnement
3. Déployer automatiquement

---

Pour plus de détails, voir [README.md](../README.md) principal
