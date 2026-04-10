# GUIDE DE MISE EN ROUTE - Rose Délice

## 🎉 Bienvenue dans le projet Rose Délice!

Ce guide vous aidera à démarrer le site web pas à pas. Ne vous inquiétez pas, c'est plus simple qu'il n'y paraît!

---

## ✅ Étape 1: Configuration Firebase

### 1.1 Créer un projet Firebase

1. Allez sur [console.firebase.google.com](https://console.firebase.google.com)
2. Cliquez sur "Créer un projet"
3. Entrez le nom: `rose-delice`
4. Cochez "J'accepte les conditions" et créez le projet

### 1.2 Activer Firestore

1. Dans le menu de gauche, cliquez sur **Firestore Database**
2. Cliquez sur "Créer une base de données"
3. Choisissez **Mode test** (pour développement)
4. Sélectionnez la région la plus proche de la Togo

### 1.3 Générer les clés de service

1. **Dans l'onglet du Projet**, cliquez sur l'icône ⚙️ (Paramètres)
2. Allez à **Comptes de service**
3. Sélectionnez **Node.js** comme SDK
4. Cliquez sur **Générer une nouvelle clé privée**
5. Un fichier JSON sera téléchargé - **Gardez-le en sécurité!**

### 1.4 Remplir le .env backend

Ouvrez `backend/.env` et remplissez avec les valeurs du JSON téléchargé:

```env
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=rose-delice-xxx  (project_id du JSON)
FIREBASE_PRIVATE_KEY_ID=xxx...        (private_key_id du JSON)
FIREBASE_PRIVATE_KEY="xxx..."         (private_key - avec \n intacts)
FIREBASE_CLIENT_EMAIL=xxx@iam.gserviceaccount.com  (client_email)
FIREBASE_CLIENT_ID=123456789
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/...
FIREBASE_DATABASE_URL=https://rose-delice-xxx.firebaseio.com
```

### 1.5 Configuration Firebase Frontend

1. Allez sur **Settings > Projet** dans Firebase Console
2. Copiez la section "firebaseConfig"
3. Ouvrez `frontend/src/services/firebaseConfig.js`
4. Remplacez les valeurs:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_FROM_CONSOLE",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "rose-delice-xxx",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

---

## 🖥️ Étape 2: Installer et Lancer le Backend

### 2.1 Ouvrir le terminal

```bash
# Naviguer au dossier backend
cd "f:\seri\rose delice\backend"
```

### 2.2 Installer les dépendances

```bash
npm install
```

⏳ Cela peut prendre quelques minutes...

### 2.3 Lancer le serveur

```bash
npm run dev
```

✅ Vous devriez voir:
```
🌹 ===============================
🌹 Serveur Rose Délice en cours d'exécution
🌹 Port: 5000
🌹 URL: http://localhost:5000
🌹 ===============================
```

**Laissez ce terminal ouvert!** (Ouvrez un nouveau terminal pour l'étape suivante)

---

## 🎨 Étape 3: Installer et Lancer le Frontend

### 3.1 Nouveau terminal - Naviguer au frontend

```bash
cd "f:\seri\rose delice\frontend"
```

### 3.2 Installer les dépendances

```bash
npm install
```

### 3.3 Lancer le serveur de développement

```bash
npm run dev
```

✅ Vous devriez voir:
```
  VITE v5.0.8  ready in 234 ms

  ➜  Local:   http://localhost:3000/
```

### 3.4 Ouvrir dans le navigateur

Cliquez sur le lien ou allez à **http://localhost:3000** 🌐

---

## 🌟 C'est prêt! 

Vous devriez maintenant voir le site Rose Délice complet avec:

✅ Navbar fixe  
✅ Section Héro  
✅ Galerie de pâtisseries  
✅ Section Avis Clients  
✅ À Propos  
✅ Contact  
✅ Bouton WhatsApp flottant  
✅ Footer  

---

## 🧪 Tester les Fonctionnalités

### Ajouter une photo à la galerie

1. Cliquez sur "Ajouter une photo" dans la galerie
2. Remplissez:
   - **Titre**: "Ma Création"
   - **Description**: "Une description..."
   - **URL Image**: Un lien d'image (ex: https://images.unsplash.com/...)
   - **Catégorie**: Choisir une catégorie
3. Cliquez "Ajouter"

⚠️ **Note**: La photo est en attente d'approbation admin (elle n'apparaîtra pas immédiatement). Pour voir cette logique fonctionner, il faudrait ajouter une interface admin.

### Laisser un avis

1. Cliquez sur "Laisser un avis" dans la section Avis
2. Remplissez le formulaire
3. Cliquez sur les ⭐ pour noter
4. Cliquez "Envoyer"

### Commander sur WhatsApp

Cliquez sur le bouton 💚 en bas à droite ou sur n'importe quel bouton "Nous Contacter"

---

## 📊 Visualiser les données en Firestore

1. Allez sur [Firebase Console](https://console.firebase.google.com)
2. Sélectionnez votre projet
3. Cliquez sur **Firestore Database**
4. Vous verrez les collections `gallery` et `reviews` avec vos données ✨

---

## 🔧 Dépannage

### Le site refuse de charger

1. ✅ Assurez-vous que le backend (port 5000) est en cours d'exécution
2. ✅ Les deux terminaux devraient afficher un message de réussite
3. ✅ Rechargez la page (Ctrl+R ou Cmd+R)

### Erreur Firebase

-Vérifiez que `.env` backend a toutes les bonnes valeurs
- Assurez-vous que Firestore est **activé** dans Firebase Console

### Images ne s'affichent pas

Les images utilisent des liens externes (Unsplash). Vérifiez votre connexion Internet.

### Les avis/photos ne sauvegardent pas

1. Ouvrez la **Console du Navigateur** (F12)
2. Allez à l'onglet **Console** pour voir les erreurs
3. Vérifiez que Firebase est bien configuré

---

## 📚 Comprendre le Code

Tous les fichiers ont des commentaires détaillés en FRANÇAIS. Prenez le temps de les lire:

### Frontend
- `frontend/src/components/` - Tous les composants visuels
- `frontend/src/services/api.js` - Comment appeler l'API
- `frontend/src/utils/helpers.js` - Fonctions utilitaires

### Backend
- `backend/config/firebase.js` - Configuration Firebase
- `backend/models/` - Structure des données
- `backend/routes/` - Tous les endpoints API

---

## 🚀 Prochaines Étapes

### Ajouter plus de photos
- Modifiez `frontend/src/components/Gallery.jsx` 
- Ajoutez des URLs d'images dans `demoPhotos`

### Personnaliser les couleurs
- Modifiez `frontend/tailwind.config.js`
- Changez les valeurs de la palette rose

### Ajouter une interface admin
- Créez une page admin pour approuver photos/avis
- Ajouter authentification (Firebase Auth)

### Déployer en ligne
- **Frontend**: Vercel, Netlify
- **Backend**: Heroku, Railway, Render

---

## 📞 Infos Rose Délice

- 🌹 **Nom**: Rose Délice
- 📱 **WhatsApp**: +228 97 83 36 59
- 📍 **Adresse**: Lomé, Togo
- ⏰ **Horaires**: Lun-Sam 8h-19h, Dim sur commande

---

## ❓ Questions?

Consultez les commentaires dans le code - ils expliquent tout en français!

- **Frontend**: Cherchez les `/**` pour les commentaires détaillés
- **Backend**: Même chose, tout est expliqué

---

**Bon codage et bon succès avec Rose Délice! 🌹✨**

---

*Créé avec ❤️ par votre assistant de code*
