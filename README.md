# Rose Délice - Site Web Pâtisserie Artisanale 🌹

## Vue d'ensemble

**Rose Délice** est un site web professionnel et moderne pour une pâtisserie artisanale basée à Lomé, Togo. Le site presente une design élégant avec palette rose poudré et crème, animations fluides, et fonctionnalités backend complètes.

### 🎯 Caractéristiques principales

- ✨ **Design élégant**: Palette rose poudré/crème, typographie serif (Playfair Display) pour titres, sans-serif (Lato) pour corps
- 🎬 **Animations fluides**: Framer Motion pour tous les éléments interactifs
- 📱 **Responsive**: Fonctionne parfaitement sur mobile, tablette et desktop
- 🖼️ **Galerie interactive**: Grille 3 colonnes avec upload de photos par visiteurs
- ⭐ **Système d'avis**: Avis clients avec notation (1-5 étoiles) nécessitant approbation admin
- 💬 **Intégration WhatsApp**: Bouton flottant + lien pré-rempli pour commander
- 🔧 **Backend robuste**: Node.js/Express avec Firebase Firestore
- 📧 **Gestion de contenu**: Photos et avis sauvegardés dynamiquement

---

## 📁 Structure du Projet

```
rose-delice/
├── frontend/                 # Application React + Vite
│   ├── src/
│   │   ├── components/      # Composants React
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Reviews.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── FloatingWhatsApp.jsx
│   │   │   └── Footer.jsx
│   │   ├── services/
│   │   │   ├── api.js       # Appels API backend
│   │   │   └── firebaseConfig.js
│   │   ├── utils/
│   │   │   └── helpers.js   # Utilitaires globaux
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── global.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/                  # Serveur Node.js + Express
│   ├── config/
│   │   └── firebase.js       # Configuration Firebase Admin
│   ├── models/
│   │   ├── GalleryPhoto.js   # Modèle photo
│   │   └── Review.js         # Modèle avis
│   ├── routes/
│   │   ├── gallery.js        # Routes galerie
│   │   ├── reviews.js        # Routes avis
│   │   └── upload.js         # Routes upload
│   ├── uploads/              # Dossier images uploadées
│   ├── server.js             # Point d'entrée serveur
│   ├── package.json
│   ├── .env.example
│   └── .env                  # Variables d'environnement
│
└── README.md                 # Ce fichier
```

---

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 16+
- npm ou yarn
- Compte Firebase avec Firestore
- Visual Studio Code (recommandé)

### 1️⃣ Configuration Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Créez un nouveau projet
3. Activez **Firestore Database** (mode test pour développement)
4. Allez à **Settings > Service Accounts**
5. Générez une clé privée JSON
6. Copiez les valeurs dans `backend/.env`

### 2️⃣ Installation Frontend

```bash
# Naviguer au dossier frontend
cd frontend

# Installer les dépendances
npm install

# Lancer le serveur de développement (port 3000)
npm run dev
```

### 3️⃣ Installation Backend

```bash
# Naviguer au dossier backend
cd backend

# Installer les dépendances
npm install

# Remplir les variables d'environnement dans .env
# (Voir section Configuration Firebase ci-dessus)

# Lancer le serveur (port 5000)
npm run dev
```

### ✅ Vérification

- Frontend: http://localhost:3000 🌐
- Backend: http://localhost:5000/api ⚙️

---

## 📋 Sections du Site

### 🏠 Navbar Fixe
- Logo "Rose Délice" à gauche
- Liens de navigation (Accueil, Nos Créations, Avis, À Propos, Contact)
- Bouton "Commander" (WhatsApp)
- Menu hamburger sur mobile

### 🎨 Hero Section
- Photo de fond (gâteau de mariage)
- Titre principal avec animations
- Sous-titre sur créations artisanales
- 2 boutons d'action: "Découvrir" + "Nous contacter"
- Chevron pulsant

### 🖼️ Galerie "Nos Créations"
- **Grille 3 colonnes** de cartes
- **6 images de démo**: macarons, éclairs, petits fours, gâteau, viennoiseries, fondant
- **Notation par étoiles** si disponible
- **"Ajouter une photo"** - Modal d'upload
  - Champs: Titre, Description, URL image, Catégorie
  - Nécessite approbation admin avant affichage

### ⭐ Avis Clients
- **Grille de cartes d'avis** avec:
  - Étoiles (1-5)
  - Nom client
  - Produit commandé
  - Commentaire
  - Date
- **Note moyenne globale** affichée en haut
- **"Laisser un avis"** - Modal interactif
  - Champs: Nom, Email, Produit, Note (⭐⭐⭐⭐⭐), Commentaire
  - Validation complète
  - Approbation admin requise

### ℹ️ À Propos
- **Photo à gauche**
- **Texte à droite** racontant l'histoire
- **4 points clés** avec icônes:
  - ❤️ Fait avec amour
  - 🏆 Qualité premium
  - 🎁 Sur commande
  - ✨ Unique & créatif

### 📞 Contact
- **Carte WhatsApp** (bouton: "Ouvrir WhatsApp")
- **Carte Téléphone** (lien direct)
- **Carte Adresse** (Lomé, Togo → Google Maps)
- **Carte Horaires** (Lun-Sam 8h-19h, Dim sur commande)
- Section demandes personnalisées

### 🔗 Bouton WhatsApp Flottant
- Fixé en bas à droite
- Animation d'entrée (apparition + glissement)
- Animation pulsante (attire l'attention)
- Message pré-rempli

### 👣 Footer
- Logo et description brève
- Liens de navigation
- Coordonnées de contact
- © Copyright avec icône cœur

---

## 🔌 API Backend

### 📸 Gallery (Photos)

#### `GET /api/gallery`
Récupère toutes les photos approuvées
```json
[
  {
    "id": "doc-id",
    "titre": "Macarons Rose",
    "description": "Délicieux macarons à la rose poudré",
    "image_url": "https://...",
    "categorie": "macarons",
    "note": 5,
    "date_ajout": "2024-12-15T10:30:00Z",
    "approuve": true
  }
]
```

#### `POST /api/gallery`
Ajoute une nouvelle photo (en attente d'approbation)
```json
{
  "titre": "Nouveaux Macarons",
  "description": "Description...",
  "imageUrl": "https://...",
  "categorie": "macarons"
}
```

#### `DELETE /api/gallery/:id`
Supprime une photo (admin uniquement)

---

### ⭐ Reviews (Avis)

#### `GET /api/reviews`
Récupère tous les avis approuvés
```json
[
  {
    "id": "doc-id",
    "nom": "Ama Mensah",
    "produit": "Gâteau d'anniversaire rose",
    "note": 5,
    "commentaire": "Absolument délicieux!",
    "date": "2024-12-15T10:30:00Z",
    "approuve": true
  }
]
```

#### `POST /api/reviews`
Ajoute un nouvel avis (en attente d'approbation)
```json
{
  "nom": "Jean Dupont",
  "email": "jean@example.com",
  "produit": "Éclairs Chocolat",
  "note": 5,
  "commentaire": "Excellent!"
}
```

#### `GET /api/reviews/rating/average`
Récupère la note moyenne
```json
{
  "note_moyenne": 4.8,
  "nombre_avis": 25
}
```

---

### 📤 Upload

#### `POST /api/upload`
Upload une image
```
Content-Type: multipart/form-data
file: [image file]
```
Réponse:
```json
{
  "url": "http://localhost:5000/uploads/filename.jpg",
  "filename": "filename.jpg",
  "size": 512000
}
```

---

## 🛠️ Configuration

### Frontend `.env` (à créer)
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend `.env` (à remplir)
Voir `.env.example` - Vous devez ajouter vos données Firebase

---

## 📝 Commentaires du Code

**Tous les fichiers contiennent des commentaires détaillés en français** expliquant:
- Le rôle du fichier/composant
- Les fonctions et leurs paramètres
- La logique métier
- Les appels API
- Les animations

Exemple:
```javascript
/**
 * Composant Gallery
 * Affiche les pâtisseries avec grille responsive et modal d'upload
 * @returns {JSX.Element} Section galerie
 */
const Gallery = () => {
  // ...
}
```

---

## 🎨 Palette de Couleurs

| Couleur | Valeur | Utilisation |
|---------|--------|------------|
| Rose poudré | `#F4D4E6` | Fonds, boutons primaires |
| Rose clair | `#F9E7F0` | Arrière-plans légers |
| Rose moyen | `#E8B4D0` | Accents, hover states |
| Crème | `#FFF8F3` | Fond principal |
| Texte sombre | `#2C2C2C` | Contenu principal |

---

## 🔐 Sécurité

### À Faire en Production

1. **Authentification admin**
   - Ajouter un système d'authentification pour approuver photos/avis

2. **Validation côté serveur**
   - Vérifier tous les inputs (déjà fait dans les modèles)

3. **Stockage images**
   - Passer à Firebase Storage au lieu du disque serveur

4. **HTTPS**
   - Utiliser HTTPS en production

5. **CORS**
   - Restreindre aux domaines autorisés

6. **Variables .env**
   - NE JAMAIS commiter `.env` sur GitHub
   - Utiliser les secrets des plateformes de déploiement

---

## 📚 Technologies Utilisées

### Frontend
- **React 18** - Interface utilisateur
- **Vite** - Build tool rapide
- **Tailwind CSS** - Styles utilitaires
- **Framer Motion** - Animations fluides
- **Axios** - Requêtes HTTP
- **Firebase SDK** - Intégration Firebase
- **Lucide React** - Icônes SVG

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **Firebase Admin SDK** - Base de données Firestore
- **Multer** - Upload de fichiers
- **CORS** - Gestion CORS
- **dotenv** - Variables d'environnement

---

## 🚀 Déploiement

### Frontend (Vercel)
```bash
npm run build
# Déployer le dossier dist
```

### Backend (Heroku/Render/Railway)
```bash
# Assurez-vous que les variables .env sont définies
npm start
```

---

## 📞 Informations de Contact

**Rose Délice - Pâtisserie Artisanale**
- 📱 WhatsApp: +228 97 83 36 59
- 📍 Adresse: Lomé, Togo
- ⏰ Horaires: Lun-Sam 8h-19h, Dim sur commande

---

## 📄 Licence

Ce projet est personnel à Rose Délice. Tous les droits réservés.

---

## 🙏 Remerciements

Créé avec ❤️ pour Rose Délice - Pâtisserie Artisanale

Animé par passion, qualité et créativité ✨

---

**Dernière mise à jour:** Décembre 2024
