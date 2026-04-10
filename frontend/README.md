# Frontend - Rose Délice

Application React pour le site web de la pâtisserie artisanale Rose Délice.

## 🚀 Démarrage rapide

### Installation
```bash
npm install
```

### Développement
```bash
npm run dev
```
Le site sera accessible à `http://localhost:3000`

### Build
```bash
npm run build
```

## 📦 Dépendances principales

- **React 18** - Interface utilisateur
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Styles CSS utilitaires
- **Framer Motion** - Animations fluides et performantes
- **Axios** - Requêtes HTTP vers l'API
- **Firebase** - Intégration base de données (Firestore)
- **Lucide React** - Icônes SVG modernes

## 📁 Structure src/

```
src/
├── components/          # Composants réutilisables
│   ├── Navbar.jsx       # Navigation fixe
│   ├── Hero.jsx         # Section héro
│   ├── Gallery.jsx      # Galerie avec modal d'upload
│   ├── Reviews.jsx      # Avis avec formulaire modal
│   ├── About.jsx        # À propos avec points clés
│   ├── Contact.jsx      # Section contact
│   ├── FloatingWhatsApp.jsx
│   └── Footer.jsx
├── services/
│   ├── api.js          # Appels API backend
│   └── firebaseConfig.js
├── utils/
│   └── helpers.js      # Fonctions utilitaires
├── App.jsx             # Composant principal
├── main.jsx            # Point d'entrée
└── global.css          # Styles globaux
```

## 🎨 Design

- **Palette**: Rose poudré (#F4D4E6) + Crème (#FFF8F3)
- **Typographie**: 
  - Titres: Playfair Display (serif)
  - Corps: Lato (sans-serif)
- **Animations**: Framer Motion pour tous les éléments interactifs

## 🔗 Variables d'environnement

Créez un fichier `.env.local`:
```
VITE_API_URL=http://localhost:5000/api
```

## 📞 Configuration Firebase

Mettez à jour `src/services/firebaseConfig.js` avec vos clés Firebase:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## 📱 Responsive

Le site est optimisé pour:
- 📱 Mobile: < 640px
- 📱 Tablette: 640px - 1024px
- 💻 Desktop: > 1024px

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

---

Pour plus de détails, voir [README.md](../README.md) principal
