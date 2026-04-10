// ============================================
// Point d'entrée de l'application
// ============================================
// Démarre l'application React et l'attache au DOM

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'

/**
 * Monter l'application React:
 * 1. Recherche l'élément HTML avec id="root" (défini dans index.html)
 * 2. Crée une racine React
 * 3. Rend le composant App à l'intérieur
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
