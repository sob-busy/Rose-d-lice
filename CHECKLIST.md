# ✅ Checklist Complète - Rose Délice

## 🎯 Avant de Démarrer

- [ ] Node.js 16+ installé (`node -v` pour vérifier)
- [ ] npm ou yarn (`npm -v`)
- [ ] Compte Gmail pour Firebase
- [ ] Editeur de code (VS Code recommandé)
- [ ] Navigateur web moderne

---

## 🔧 Configuration Firebase

- [ ] Projet Firebase créé sur console.firebase.google.com
- [ ] Firestore Database activée (Mode test)
- [ ] Collections créées: "gallery" et "reviews"
- [ ] Clé de service (JSON) générée et téléchargée
- [ ] Valeurs Firebase copiées dans `backend/.env`:
  - [ ] FIREBASE_PROJECT_ID
  - [ ] FIREBASE_PRIVATE_KEY_ID
  - [ ] FIREBASE_PRIVATE_KEY
  - [ ] FIREBASE_CLIENT_EMAIL
  - [ ] FIREBASE_CLIENT_ID
  - [ ] FIREBASE_CLIENT_CERT_URL
  - [ ] FIREBASE_DATABASE_URL
- [ ] Firebase Config copiée dans `frontend/src/services/firebaseConfig.js`

---

## 📦 Installation

### Backend
```
cd backend
npm install
```
- [ ] npm install exécuté sans erreurs
- [ ] node_modules/ créé
- [ ] package-lock.json présent

### Frontend
```
cd frontend
npm install
```
- [ ] npm install exécuté sans erreurs
- [ ] node_modules/ créé
- [ ] package-lock.json présent

---

## ▶️ Lancement des Serveurs

### Backend Terminal 1
```
cd backend
npm run dev
```
- [ ] Serveur démarre sans erreurs
- [ ] Message "Serveur Rose Délice en cours d'exécution" ✅
- [ ] Port 5000 accessible
- [ ] Pas d'erreurs Firebase

### Frontend Terminal 2
```
cd frontend
npm run dev
```
- [ ] Serveur démarre sans erreurs
- [ ] "VITE v5.0.8 ready" affiché ✅
- [ ] Port 3000 accessible ($) 
- [ ] Pas d'erreurs de compilation

---

## 🌐 Test dans le Navigateur

1. Ouvrir http://localhost:3000
   - [ ] Page charge sans erreurs
   - [ ] Navbar visible en haut
   - [ ] Images de fond se chargent

2. Scrolle vers le bas
   - [ ] Tous les sections visibles
   - [ ] Animations fluides
   - [ ] Bouton WhatsApp flottant visible en bas à droite

---

## 🖼️ Tests Galerie

1. Naviguer à "Nos Créations"
   - [ ] 6 cartes de photos affichées en grille 3 colonnes
   - [ ] Images Unsplash se chargent
   - [ ] Étoiles (⭐) visibles sur les cartes
   - [ ] Catégories affichées (badges)

2. Cliquer "Ajouter une photo"
   - [ ] Modal s'ouvre
   - [ ] Formulaire visible avec champs:
     - [ ] Titre
     - [ ] Description
     - [ ] URL Image
     - [ ] Catégorie (dropdown)
   - [ ] Boutons "Annuler" et "Ajouter"

3. Remplir le formulaire
   - [ ] Titre: "Test Macaron"
   - [ ] Description: "Macaron de test"
   - [ ] URL: `https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop`
   - [ ] Catégorie: "macarons"

4. Cliquer "Ajouter"
   - [ ] Modal se ferme
   - [ ] Message de succès s'affiche
   - [ ] ⚠️ Photo en attente d'approbation (normale)

---

## ⭐ Tests Avis

1. Naviger à "Avis"
   - [ ] Note moyenne affichée en haut (4.8)
   - [ ] 3 cartes d'avis de démo
   - [ ] Chaque avis a:
     - [ ] ⭐⭐⭐⭐⭐ Étoiles
     - [ ] Nom du client
     - [ ] Produit commandé
     - [ ] Commentaire
     - [ ] Date

2. Cliquer "Laisser un avis"
   - [ ] Modal s'ouvre
   - [ ] Formulaire visible avec champs:
     - [ ] Nom
     - [ ] Email
     - [ ] Produit
     - [ ] Note (étoiles interactives ⭐)
     - [ ] Commentaire

3. Remplir et noter
   - [ ] Cliquer sur les étoiles change la note
   - [ ] Tous les champs remplis
   - [ ] Cliquer "Envoyer"

4. Soumettre
   - [ ] Modal se ferme
   - [ ] Message "Avis envoyé!" ✅
   - [ ] ⚠️ Avis en attente d'approbation (normale)

---

## 📞 Tests Contact

1. Naviguer à "Contact"
   - [ ] 4 cartes visibles:
     - [ ] WhatsApp
     - [ ] Téléphone
     - [ ] Adresse
     - [ ] Horaires

2. Tester boutons
   - [ ] Cliquer "Ouvrir WhatsApp"
     → Ouvre WhatsApp ou formulaire web
   - [ ] Cliquer "Appeler"
     → Ouvre l'app téléphone ou demande appel
   - [ ] Cliquer "Voir sur Maps"
     → Ouvre Google Maps

---

## 🎬 Tests Animations

1. Navbar
   - [ ] Anime au chargement (slide downde haut)
   - [ ] Reste fixe en haut lors du scroll
   - [ ] Survol lien → couleur rose
   - [ ] Bouton "Commander" pulse

2. Hero
   - [ ] Titre anime (slide up)
   - [ ] Sous-titre apparaît après
   - [ ] Boutons shine au survol
   - [ ] Chevron pulse bas

3. Galerie
   - [ ] Cartes staggered (cascade d'apparition)
   - [ ] Cartes lift on hover (+5px up)
   - [ ] Ombre augmente on hover

4. Avis
   - [ ] Cartes staggered
   - [ ] Étoiles jaunes

5. Buttons/Links
   - [ ] Scale 1.05 on hover
   - [ ] Scale 0.95 on click

---

## 📱 Test Responsive

1. Ouvrir http://localhost:3000

2. **Desktop** (1200px+)
   - [ ] Layout 3 colonnes pour galerie
   - [ ] Menu horizontal en haut
   - [ ] 2 boutons hero côte à côte
   - [ ] 4 colonnes contact

3. **Tablette** (640-1024px)
   - [ ] F12 → Device Toolbar → Tablet
   - [ ] Galerie: 2 colonnes
   - [ ] Menu hamburger
   - [ ] Boutons hero empilés

4. **Mobile** (< 640px)
   - [ ] F12 → Device Toolbar → iPhone
   - [ ] Galerie: 1 colonne
   - [ ] Menu hamburger (Menu/X)
   - [ ] Tout empilé verticalement
   - [ ] Textes lisibles
   - [ ] Boutons assez gros

---

## 🔌 Tests API

1. Ouvrir http://localhost:5000
   - [ ] Message JSON: "ServeurRose Délice actif" ✅

2. Tester endpoint galerie
   ```
   GET http://localhost:5000/api/gallery
   ```
   - [ ] Retourne JSON avec photos
   - [ ] Chaque photo a: id, titre, description, image_url, etc.

3. Tester endpoint avis
   ```
   GET http://localhost:5000/api/reviews
   ```
   - [ ] Retourne JSON avec avis
   - [ ] Chaque avis a: id, nom, produit, note, commentaire, etc.

4. Tester note moyenne
   ```
   GET http://localhost:5000/api/reviews/rating/average
   ```
   - [ ] Retourne: {"note_moyenne": 4.8, "nombre_avis": 3}

---

## 🔐 Vérifier la Console du Navigateur

1. F12 → Console (pas d'erreurs rouges)
   - [ ] Pas d'erreurs Lato/Playfair font
   - [ ] Pas d'erreurs "404 Not Found"
   - [ ] Pas d'erreurs CORS
   - [ ] Pas d'erreurs Firebase

2. F12 → Network
   - [ ] Requêtes vers localhost:5000/api réussissent (200)
   - [ ] Images Unsplash se chargent (200)

---

## 📊 Vérifier Firestore

1. Allez sur [console.firebase.google.com](https://console.firebase.google.com)
2. Sélectionnez votre projet
3. Cliquez "Firestore Database"
   - [ ] Collection "gallery" existe
   - [ ] Collection "reviews" existe
   - [ ] Collections non vides si vous aves testé

---

## 🚀 Si Tout Fonctionne ✅

Bravo! Vous êtes prêt pour:
- [ ] Personnaliser les couleurs dans `tailwind.config.js`
- [ ] Ajouter vos propres photos
- [ ] Modifier les textes (À Propos, Contact, etc.)
- [ ] Améliorer le design
- [ ] Ajouter une interface admin pour approuver photos/avis
- [ ] Déployer en ligne

---

## ❌ Si Quelque Chose Bloque

1. **Erreurs Firebase**: Vérifiez les clés dans `.env`
2. **Port déjà utilisé**: Changez PORT dans `.env`
3. **Module not found**: Relancez `npm install`
4. **Images ne chargent pas**: Vérifiez connexion Internet
5. **API ne répond pas**: Assurez-vous que backend (port 5000) est actif

→ Voir **TROUBLESHOOTING.md** pour solutions détaillées

---

## 📚 Documentation

- **[README.md](./README.md)** - Vue d'ensemble complète
- **[GUIDE_DEMARRAGE.md](./GUIDE_DEMARRAGE.md)** - Instructions pas à pas
- **[STRUCTURE_FICHIERS.md](./STRUCTURE_FICHIERS.md)** - Architecture projet
- **[IMAGES_DEMO.md](./IMAGES_DEMO.md)** - URLs images Unsplash
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Solutions erreurs

---

**Félicitations! 🎉 Votre site Rose Délice est en place!**

🌹✨ Bon codage!
