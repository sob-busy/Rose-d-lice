#!/bin/bash
# 🚀 COMMANDES UTILES - Rose Délice

# ============================================
# INSTALLATION INITIALE
# ============================================

# Frontend (Terminal 1)
cd frontend
npm install
npm run dev
# Accessible à: http://localhost:3000

# Backend (Terminal 2)
cd backend
npm install
npm run dev
# Accessible à: http://localhost:5000

# ============================================
# DÉVELOPPEMENT COURANT
# ============================================

# Lancer le site complet (2 terminaux)
# Terminal 1:
cd frontend && npm run dev

# Terminal 2:
cd backend && npm run dev

# Build production du frontend
npm run build      # Dans le dossier frontend/
# Crée dossier: frontend/dist/

# ============================================
# PROBLÈMES & SOLUTIONS
# ============================================

# Port déjà utilisé? Trouver quel processus
# Windows:
netstat -ano | findstr :5000
# Après avoir vu le PID:
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:5000 | xargs kill -9

# Réinstaller les dépendances
rm -rf node_modules
rm package-lock.json
npm install

# Nettoyer le cache
npm cache clean --force

# ============================================
# NPM COMMANDS UTILES
# ============================================

# Voir toutes les dépendances
npm list

# Chercher une dépendance spécifique
npm list react

# Ajouter un package
npm install <package-name>

# Ajouter en devDependency
npm install --save-dev <package-name>

# Supprimer un package
npm uninstall <package-name>

# Mettre à jour les packages
npm update                    # Minor versions
npm install react@latest     # Version spécifique

# Vérifier les vulnérabilités
npm audit

# Réparer automatiquement les failles
npm audit fix

# Force fix (attention!)
npm audit fix --force

# ============================================
# FIREBASE & BASE DE DONNÉES
# ============================================

# Vérifier les collections Firestore
# 1. Aller sur: https://console.firebase.google.com
# 2. Sélectionner le projet
# 3. Firestore Database
# 4. Voir les collections: "gallery" et "reviews"

# ============================================
# GIT COMMANDS (si vous utilisez Git)
# ============================================

# Initialiser git
git init

# Ajouter à .gitignore (déjà fait!)
# .env
# node_modules/
# dist/

# Ajouter les fichiers
git add .

# Commit
git commit -m "Initial commit: Rose Délice site"

# Push (si vous avez un repo)
git push origin main

# ============================================
# VÉRIFICATIONS RAPIDES
# ============================================

# Node et npm installés?
node -v
npm -v

# Frontend démarre?
cd frontend && npm run dev
# Devrait afficher: "VITE v5.0.8 ready in XXXms"

# Backend démarre?
cd backend && npm run dev
# Devrait afficher: "Serveur Rose Délice en cours d'exécution"

# Vous pouvez atteindre http://localhost:3000?
# Yes → Tout fonctionne!

# ============================================
# COMMANDES PERSONNALISÉES (dans scripts)
# ============================================

# Package.json frontend:
npm run build       # Build production
npm run preview     # Preview du build

# Package.json backend:
npm start          # Run production
npm run dev        # Run développement

# ============================================
# DÉPLOIEMENT (après)
# ============================================

# Frontend - Build et déployer sur Vercel
npm run build
vercel deploy     # Ou vercel --prod

# Backend - Déployer sur Railway/Render
git push          # Si GitHub linked
# Sinon Railway/Render auto capture les env vars

# ============================================
# DEBUGGING
# ============================================

# Voir tous les logs du backend
# (regarder le terminal où npm run dev tourne)

# Voir tous les logs du frontend
# F12 → Console tab

# Voir les requêtes API
# F12 → Network tab → Filtrer par "api"

# Voir l'état des componants React
# Installer React Developer Tools extension
# Puis: F12 → "Components" tab

# ============================================
# NETTOYAGE & MAINTENANCE
# ============================================

# Supprimer fichier temporaire
rm -rf frontend/.vite

# Supprimer les images uploadées (dev only)
rm -rf backend/uploads/*

# Renommer un dossier
mv old-folder new-folder

# Copier un fichier
cp source.txt destination.txt

# ============================================
# COMMANDES AVANCÉES
# ============================================

# Installer une version spécifique
npm install express@4.18.0

# Installer de @latest
npm install @latest

# Voir les infos d'un package
npm info framer-motion

# Auditer et fixer
npm audit --json      # Voir en JSON
npm audit --detailed  # Détails complets

# Voir utilisation d'une commande
npm <command> --help

# ============================================
# Pour Windows (PowerShell)
# ============================================

# Naviguer
cd frontend

# Lister fichiers
Get-ChildItem   # ou: ls

# Supprimer dossier
Remove-Item -Recurse node_modules

# Créer dossier
New-Item -ItemType Directory -Path "src/components"

# ============================================
# Pour macOS/Linux (Bash)
# ============================================

# Naviguer
cd frontend

# Lister fichiers
ls -la

# Supprimer dossier
rm -rf node_modules

# Créer dossier
mkdir -p src/components

# ============================================
# RACCOURCIS UTILES
# ============================================

# npm list (dépendances) = npm ls
# npm install = npm i
# npm install --save-dev = npm i -D
# npm run build = npm run build
# npm start = npm start

# ============================================
# VÉRIFIER LA STRUCTURE
# ============================================

# Le project a la bonne structure?
tree              # Si installé

# Ou manuellement:
# frontend/src/components/ → has 8 .jsx files?
# backend/routes/          → has 3 .js files?
# frontend/package.json    → react, vite, tailwind?
# backend/package.json     → express, firebase-admin?

# ============================================
# RACCOURCIS NPM PERSONNALISÉS
# ============================================

# Vous pouvez ajouter dans package.json:
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "clean": "rm -rf node_modules dist",
    "reinstall": "npm run clean && npm install"
  }
}

# Ensuite:
npm run clean
npm run reinstall

# ============================================
# TESTS RAPIDES
# ============================================

# Frontend démarre correctement?
cd frontend && npm run dev
# → Attendez: "VITE v5.0.8 ready"

# Backend démarre correctement?
cd backend && npm run dev
# → Attendez: "Serveur Rose Délice"

# Les deux servent sans erreurs?
# → Accédez à http://localhost:3000
# → Vous voyez le site, c'est bon!

# ============================================
# LIENS UTILES
# ============================================

# Node.js:             https://nodejs.org
# npm registry:        https://npmjs.com
# React docs:          https://react.dev
# Vite:                https://vitejs.dev
# Tailwind CSS:        https://tailwindcss.com
# Framer Motion:       https://framer.com/motion
# Firebase:            https://firebase.google.com
# Express:             https://expressjs.com

# ============================================
# ASTUCE FINALE
# ============================================

# Sauvegarder cette liste!
# C'est votre référence rapide pour toutes
# les commandes courantes du projet.

# Questions? Lire: TROUBLESHOOTING.md

# ============================================
