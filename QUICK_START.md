🚀 QUICK START - 5 MINUTES
===========================

PRÉREQUIS
---------
✓ Node.js 16+ (https://nodejs.org)
✓ Compte Firebase (https://firebase.google.com)
✓ VS Code ou éditeur

ÉTAPE 1: FIREBASE (2 min)
------------------------

1. Aller sur https://console.firebase.google.com
2. Créer "Nouveau projet" → "rose-delice"
3. Menu gauche → "Firestore Database" → "Créer"
4. Mode test
5. Paramètres projet (⚙️) → Comptes de service
6. Node.js → "Générer clé privée" → JSON téléchargé

💾 Garder le JSON ouvert!

ÉTAPE 2: BACKEND (1 min)
-----------------------

Terminal 1:
```
cd backend
```

Ouvrir `backend/.env` et remplir avec le JSON:
```
FIREBASE_PROJECT_ID=xxx
FIREBASE_PRIVATE_KEY="xxx"
FIREBASE_CLIENT_EMAIL=xxx@iam.gserviceaccount.com
FIREBASE_CLIENT_ID=123
FIREBASE_CLIENT_CERT_URL=https://...
FIREBASE_DATABASE_URL=https://xxx.firebaseio.com
```

(PORT=5000 déjà prérempli)

```
npm install
npm run dev
```

✅ Vous devriez voir:
```
🌹 Serveur Rose Délice en cours d'exécution
🌹 Port: 5000
```

ÉTAPE 3: FIREBASE CONFIG FRONTEND (30 sec)
-------------------------------------------

1. Android Firebase Console → Settings → Projet
2. Copier la section "firebaseConfig"
3. Ouvrir `frontend/src/services/firebaseConfig.js`
4. Remplacer:
   - apiKey
   - authDomain
   - projectId
   - storageBucket
   - etc.

ÉTAPE 4: FRONTEND (1 min)
-------------------------

Terminal 2 (nouveau):
```
cd frontend
npm install
npm run dev
```

✅ Vous devriez voir:
```
➜  Local:   http://localhost:3000/
```

ÉTAPE 5: OUVRIR LE SITE (30 sec)
--------------------------------

http://localhost:3000

🎉 VOILÀ! Le site fonctionne!

TESTER LES FONCTIONNALITÉS
---------------------------

1️⃣ Galerie
   - Voir 6 photos
   - Cliquer "Ajouter une photo"
   - Remplir le formulaire
   - Voir la réponse "en attente d'approbation"

2️⃣ Avis
   - Voir 3 avis de démo
   - Cliquer "Laisser un avis"
   - Remplir, noter, envoyer

3️⃣ WhatsApp
   - Cliquer le bouton 💚 en bas à droite
   - Devrait ouvrir WhatsApp

4️⃣ Animations
   - Scroller pour voir les animations
   - Hover sur les cartes
   - Cliquer des boutons

PROCHAINES ÉTAPES OPTIONNELLES
-------------------------------

Personnaliser:
  ✏️ Textes: frontend/src/components/*.jsx
  🎨 Couleurs: frontend/tailwind.config.js
  📱 Logo: index.html (emoji 🌹 actuellement)
  📞 WhatsApp: frontend/src/utils/helpers.js

Améliorer:
  🔐 Ajouter authentification admin
  📸 Migrer vers Firebase Storage (images)
  📧 Ajouter emails
  🔍 SEO

Déployer:
  ▶️ Frontend: https://vercel.com
  ⚙️ Backend: https://railway.app

TRUCS&ASTUCES
-------------

• Les avis/photos soumis sont "approuvé: false" par défaut
  (en attente d'approbation admin - normal!)

• Les images viennent d'Unsplash (gratuites, libres)
  (À remplacer par vos propres photos)

• Tous les fichiers ont des commentaires EN FRANÇAIS
  (Lisez-les pour comprendre le code!)

• Vérifiez que DEUX terminaux restent ouverts:
  Terminal 1: Backend (npm run dev)
  Terminal 2: Frontend (npm run dev)

DOCUMENTATION COMPLÈTE
----------------------

📖 Lire dans cet ordre:
   1. README.md ........................ Vue d'ensemble
   2. GUIDE_DEMARRAGE.md .............. Détails complets
   3. CHECKLIST.md .................... Tous les tests
   4. TROUBLESHOOTING.md .............. Si erreurs
   5. Code du projet .................. Commentaires FR

ERREURS COURANTES
-----------------

❌ "MODULE NOT FOUND"
   → npm install dans le dossier

❌ "FIREBASE CREDENTIALS NOT VALID"
   → Vérifier backend/.env est rempli correctement

❌ "Cannot GET /api/gallery"
   → Assurez-vous que backend (port 5000) tourne

❌ "Images ne s'affichent pas"
   → Vérifier votre connexion Internet (images externes)

❌ "Port déjà utilisé"
   → Changer PORT=5001 dans backend/.env

AIDE
----

Besoin d'aide?
  1. F12 → Console pour voir les erreurs
  2. Vérifier les logs dans les 2 terminaux
  3. Lire TROUBLESHOOTING.md
  4. Relire les commentaires du code

RÉSUMÉ FINAL
------------

✅ 30+ fichiers créés
✅ Frontend React complet
✅ Backend API complet
✅ Base Firebase Firestore
✅ ~3000 lignes de code commenté EN FRANÇAIS
✅ Prêt à customizer et déployer

🌹 Rose Délice - Site web 100% fonctionnel!

Bon courage! 🚀✨

---

Pour plus d'infos: Lisez simplement README.md
