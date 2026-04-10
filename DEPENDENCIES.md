# 📦 Dépendances et Versions - Rose Délice

## Frontend Dependencies

### Production Dependencies
```json
{
  "react": "^18.2.0",           // Framework UI
  "react-dom": "^18.2.0",       // Rendu DOM
  "framer-motion": "^10.16.4",  // Animations fluides
  "firebase": "^10.7.0",        // SDK Firebase
  "axios": "^1.6.2",            // Requêtes HTTP
  "lucide-react": "^0.263.1"    // Icônes SVG
}
```

### Dev Dependencies
```json
{
  "@vitejs/plugin-react": "^4.2.1",  // Vite plugin React
  "vite": "^5.0.8",                   // Build tool
  "tailwindcss": "^3.4.0",            // CSS framework
  "postcss": "^8.4.32",               // CSS processing
  "autoprefixer": "^10.4.17"          // CSS vendor prefixes
}
```

## Backend Dependencies

### Production Dependencies
```json
{
  "express": "^4.18.2",           // Framework web
  "firebase-admin": "^12.0.0",    // Firebase Admin SDK
  "multer": "^1.4.5-lts.1",       // Upload fichiers
  "dotenv": "^16.3.1",            // Variables d'env
  "cors": "^2.8.5",               // CORS middleware
  "body-parser": "^1.20.2"        // Body parsing
}
```

## Versions recommandées

### Node.js
- **LTS**: 18.x ou 20.x (recommandé)
- **Minimum**: 16.x
- **Maximum**: Latest stable

Vérifier:
```bash
node -v   # v18.x.x ou v20.x.x
npm -v    # 9.x.x ou 10.x.x
```

## Installation spécifique des dépendances

### Si une dépendance manque

**Frontend**:
```bash
cd frontend
npm install framer-motion
npm install firebase
npm install axios
npm install lucide-react
```

**Backend**:
```bash
cd backend
npm install firebase-admin
npm install multer
npm install express CORS
npm install dotenv
```

## Vérifier les dépendances

```bash
npm list                   # Voir toutes les versions
npm outdated              # Voir ce qui doit être mis à jour
npm ls --depth=0          # Voir les dépendances principales
```

## Mettre à jour les dépendances

```bash
npm update                # Mettre à jour minor versions
npm install -g npm-check-updates    # Installer checker

ncu                       # Voir les mises à jour majeures
ncu -u                    # Mettre à jour tous les packages
npm install               # Réinstaller
```

## Résolution de con flits

Si npm install échoue:

```bash
# Nettoyer le cache
npm cache clean --force

# Supprimer les dépendances
rm -rf node_modules
rm package-lock.json

# Réinstaller
npm install
```

## Alternatives aux packages

**Si vous préférez yarn**:
```bash
yarn install
yarn add framer-motion
yarn dev
```

**Si vous préférez pnpm**:
```bash
pnpm install
pnpm add framer-motion
pnpm dev
```

## Package.json personnalisé

Vous pouvez éditer `package.json` pour:
- Changer les versions
- Ajouter scripts personnalisés
- Ajouter metadata

Exemple script personnalisé:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "format": "prettier --write src/",
    "lint": "eslint src/"
  }
}
```

## Sécurité des dépendances

Checker les vulnérabilités:
```bash
npm audit          # Voir les failles
npm audit fix      # Corriger automatiquement
npm audit fix --force   # Forcer les corrections
```

## Taille des bundles

Frontend (optimisé):
- React + React-DOM: ~42KB (gzipped)
- Tailwind CSS: ~10KB
- Framer Motion: ~25KB
- Firebase SDK: ~120KB
- **Total**: ~300KB (acceptable)

Backend:
- Express: ~50KB
- Firebase Admin: ~5MB (mais serveur seulement)
- Autres: ~100KB

## Notes importantes

⚠️ **Important**:
- Gardez Node.js à jour
- Vérifiez les vulnérabilités avec `npm audit`
- Ne commitez pas `node_modules` sur GitHub
- Utilisez `package-lock.json` pour version exacte

✅ **À Faire**:
- Installez une fois, commitez `package.json` et `package-lock.json`
- Autres développeurs: `npm install` suffit
- CI/CD: Utilise `package-lock.json` pour consistance

## Bonnes pratiques

1️⃣ **Versioning Sémantique**
   - ^1.2.3 = 1.2.3 à 1.9.9 (minor/patch)
   - ~1.2.3 = 1.2.3 à 1.2.9 (patch)
   - 1.2.3 = exactement 1.2.3

2️⃣ **Garder à jour**
   ```bash
   npm update              # Minor updates
   npm install package@latest   # Latest
   npm install package@^2.0  # Spécific version
   ```

3️⃣ **Tester après update**
   ```bash
   npm run dev
   npm run build
   # Vérifier que tout fonctionne
   ```

## Problèmes courants de dépendances

❌ "Cannot find module"
✅ `npm install` le package ou `npm install --save`

❌ "Module version conflict"
✅ Vérifier compatible: `npm ci` (install exact)

❌ "Too many node_modules"
✅ Normal, aide au démarrage rapide

❌ "Firebase is not defined"
✅ Vérifier import: `import { firestore } from './path'`

## Ressources

- npm Registry: https://npmjs.com
- npm Docs: https://docs.npmjs.com
- Semver: https://semver.org

---

**Besoin de mettre à jour une dépendance?**
```bash
npm install [package]@[version]
```

Exemple:
```bash
npm install react@19.0.0
npm install framer-motion@latest
npm install tailwindcss@3.5.0
```

🌹 Rose Délice - Toutes les deps à jour!
