# 🔧 Troubleshooting - Résolution des Erreurs

Si vous rencontrez un problème, cherchez-le ici!

---

## 🚀 Problèmes de Démarrage

### ❌ "Module not found" ou erreur npm

**Symptôme**: `npm ERR!` ou `Cannot find module`

**Solution**:
```bash
# Naviguer au dossier (frontend ou backend)
cd frontend  # ou cd backend

# Supprimer node_modules et réinstaller
rm -r node_modules
npm install

# Réessayer
npm run dev
```

---

### ❌ Port déjà utilisé (EADDRINUSE)

**Symptôme**: `Error: listen EADDRINUSE: address already in use :::5000`

**Solution 1**: Tuer le processus ancien
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID xxx /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

**Solution 2**: Utiliser un port différent
- Modifiez `backend/.env`: `PORT=5001`

---

### ❌ Node.js non installé

**Symptôme**: `'npm' is not recognized` ou commande not found'

**Solution**:
1. Allez sur [nodejs.org](https://nodejs.org)
2. Téléchargez LTS (Long Term Support)
3. Installez
4. Redémarrez le terminal
5. Vérifiez: `node -v` et `npm -v`

---

## 🔐 Problèmes Firebase

### ❌ "Firebase credentials not valid"

**Symptôme**: Erreur lors du démarrage du backend

**Solution**:
1. Vérifiez `backend/.env`
2. Toutes les valeurs doivent être remplies:
   ```env
   FIREBASE_PROJECT_ID=rose-delice-xxx
   FIREBASE_PRIVATE_KEY="...avec \\n..."
   FIREBASE_CLIENT_EMAIL=xxx@iam.gserviceaccount.com
   ```

3. Si la clé private key a des problèmes:
   - Téléchargez à nouveau le JSON depuis Firebase
   - Copiez la clé complète (avec \\n)

---

### ❌ Firestore ne se connecte pas

**Symptôme**: "Cannot read property 'forEach'" ou déconnexion Firestore

**Solution**:
1. Allez sur [console.firebase.google.com](https://console.firebase.google.com)
2. Vérifiez:
   - [ ] Firestore Database existé
   - [ ] Database est en "Mode test"
   - [ ] Collections "gallery" et "reviews" existent
3. Vérifiez `FIREBASE_DATABASE_URL` dans `.env`

---

### ❌ Erreur CORS: "No 'Access-Control-Allow-Origin'"

**Symptôme**: Erreur réseau en rouge dans la console navigateur

**Solution**:
1. Assurez-vous que backend tourne (`npm run dev`)
2. Vérifiez frontend `.env`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
3. Redémarrez frontend: `npm run dev`

---

## 🖥️ Problèmes Frontend

### ❌ "VITE ERR!" - Erreur Vite

**Symptôme**: `error during build` ou `ENOENT`

**Solution**:
```bash
# Réinstaller dépendances
cd frontend
rm -r node_modules
npm install

# Nettoyer cache
rm -r .vite

# Redémarrer
npm run dev
```

---

### ❌ Tailwind CSS ne s'applique pas

**Symptôme**: Pas de styles rose poudré, texte noir sur noir

**Solution 1**: Vérifiez `tailwind.config.js`
```javascript
// Doit contenir:
content: ["./src/**/*.{js,jsx}"]
```

**Solution 2**: Rechargez la page (Ctrl+Shift+R pour force refresh)

**Solution 3**: Vérifiez `src/global.css` est importé dans `main.jsx`

---

### ❌ Images Unsplash ne s'affichent pas

**Symptôme**: Images grises ou "image not found"

**Solution**:
1. Vérifiez votre connexion Internet
2. Les URLs Unsplash requièrent une connexion externe
3. Remplacez par des images locales si besoin (voir IMAGES_DEMO.md)

---

### ❌ Animations Framer Motion non fluides

**Symptôme**: Les éléments bougent saccadé

**Solution**:
1. Assurez-vous que Framer Motion est installé:
   ```bash
   npm list framer-motion
   ```

2. Si manquant:
   ```bash
   npm install framer-motion
   ```

3. Rechargez la page

---

## 🔌 Problèmes API

### ❌ "GET /api/gallery" retourne []empty

**Symptôme**: Galerie vide même après avoir soumis une photo

**Solution**:
1. Vérifiez Firestore: Des documents existent dans "gallery"?
2. Vérifiez que le document a: `approuve: true`
3. Par défaut, les photos sont en attente (`approuve: false`)
4. Solution temporaire pour test:
   ```javascript
   // Dans backend/routes/gallery.js
   // Enlevez ".where('approuve', '==', true)" pour voir tous
   ```

---

### ❌ "POST /api/reviews" retourne erreur 400

**Symptôme**: L'avis ne s'enregistre pas, erreur "Validation failed"

**Solution**:
1. Vérifiez tous les champs sont remplis:
   - [ ] Nom (obligatoire)
   - [ ] Email (valide avec @)
   - [ ] Produit (obligatoire)
   - [ ] Note (entre 1 et 5)
   - [ ] Commentaire (obligatoire)

2. Vérifiez la note est un nombre: `note: 5` pas `note: "5"`

---

### ❌ Upload d'image échoue

**Symptôme**: "Cannot POST /api/upload" ou "File too large"

**Solution**:
1. Vérifiez le fichier:
   - [ ] Format: JPEG, PNG, GIF, WebP
   - [ ] Taille: < 5MB
   - [ ] Sélectionné correctement

2. Utilisez FormData:
   ```javascript
   const formData = new FormData();
   formData.append('file', file);
   ```

3. Vérifiez que backend route upload.js existe

---

## 📱 Problèmes Mobile/Responsive

### ❌ Site pas responsive sur mobile

**Symptôme**: Menu pas en hamburger, texte trop gros

**Solution**:
1. Vérifiez `index.html` a la meta viewport:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

2. Vérifiez Tailwind breakpoints:
   - `md:` = 768px (hamburger menu s'active)

3. Testez avec F12 Device Toolbar

---

### ❌ Menu hamburger ne fonctionne pas

**Symptôme**: Cliquer sur le bouton menu ne change rien

**Solution**:
1. Vérifiez `Navbar.jsx`:
   - [ ] État `isOpen` exist
   - [ ] `onClick` trigger `setIsOpen`
   - [ ] Menu affiche quand `isOpen === true`

2. Vérifiez que le composant reçoit `isMobile={isMobile}`

---

## 🎨 Problèmes Design/Style

### ❌ Couleurs ne correspondent pas à la palette rose

**Symptôme**: Fond gris au lieu de crème, rose inexistant

**Solution**:
1. Vérifiez `tailwind.config.js`:
   ```javascript
   colors: {
     rose: {
       powder: '#F4D4E6',
       light: '#F9E7F0',
       // ...
     }
   }
   ```

2. Vérifiez les classes Tailwind:
   - `bg-rose-powder` (pas `bg-rose`)
   - `text-rose-dark` (correct)

3. Rechargez (Ctrl+Shift+R)

---

### ❌ Polices (Fonts) ne se chargent pas

**Symptôme**: Texte dans sans-serif (pas Playfair/Lato)

**Solution**:
1. Vérifiez `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Playfair+Display..." rel="stylesheet">
   ```

2. Vérifiez `tailwind.config.js`:
   ```javascript
   fontFamily: {
     playfair: ['Playfair Display', 'serif'],
     lato: ['Lato', 'sans-serif'],
   }
   ```

3. Vérifiez les classes sont utilisées:
   - `font-playfair` pour titres
   - `font-lato` pour corps

---

## ⚡ Problèmes de Performance

### ❌ Site lent à charger

**Symptôme**: Page quasi le premier chargement

**Solution**:
1. Vérifiez les requêtes API:
   ```javascript
   // F12 → Network → Cherchez requêtes lentes
   ```

2. Optimisez les images:
   - Utilisez paramètres Unsplash: `?w=400&h=300`

3. Vérifiez la taille des bundles:
   ```bash
   npm run build
   # Regardez la taille de dist/
   ```

---

### ❌ "Too many requests" error

**Symptôme**: Erreur Firebase ou API après plusieurs tests

**Solution**:
1. Attendez quelques minutes
2. Réduisez les requêtes de test
3. En production, ajouter rate limiting

---

## 🐛 Débugage

### Activer les logs détaillés

Ajoutez dans `server.js`:
```javascript
console.log('📨 Requête reçue:',  req.method, req.path, req.body);
```

Ajoutez dans les composants:
```javascript
console.log('Galerie chargée:', photos);
```

### Ouvrir DevTools
- **Frontend**: F12 → Console (voir les erreurs)
- **Backend**: Terminal (voir les logs)

### Vérifier état React Hooks
Installez React Developer Tools (extension Chrome):
- Voyez l'état de chaque composant en temps réel

---

## 💌 Obtenir de l'Aide

Si le problème persiste:

1. **Vérifiez CHECKLIST.md** - Tous les points courus?
2. **Relisez les logs** - Erreur généralement affichée
3. **Validez le code** - Vérifiez la synthaxe
4. **Posez-vous des questions**:
   - Les deux serveurs sont-ils actifs?
   - Les fichiers .env sont-ils remplis?
   - La connexion Internet fonctionne?

---

## 🎯 Questions Courantes

**Q: Les avis que j'ajoute ne sauvegardent pas?**
A: Vérifiez Firestore collection "reviews" existe. Les avis existent mais sont `approuve: false` par défaut.

**Q: Les images uploadées disparaissent?**
A: Elles sont enregistrées dans le dossier `uploads/` du serveur. En production, migrez vers Firebase Storage.

**Q: Comment activer un ensemble d'avis?**
A: En production, créez une interface admin. Pour test, changez `.where('approuve', '==', false)` dans gallery.js et reviews.js.

**Q: Comment changer le numéro WhatsApp?**
A: `frontend/src/utils/helpers.js` → fonction `openWhatsApp()`. Ou changez directement le numéro.

---

**Besoin d'aide? Relisez les commentaires du code en français! 🌹**

Bon débugage! 🔧✨
