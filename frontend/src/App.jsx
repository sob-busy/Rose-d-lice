// ============================================
// Composant App Principal
// ============================================
// Intègre tous les composants et sections dans une application unifiée

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import './global.css';

/**
 * Composant App
 * Composant racine de l'application Rose Délice
 * Gère la détection du mobile et l'intégration de tous les composants
 * @returns {JSX.Element} Application complète
 */
function App() {
  // État pour détecter si on est sur mobile
  const [isMobile, setIsMobile] = useState(false);

  // Effet pour détecter les changements de taille d'écran
  useEffect(() => {
    /**
     * Fonction qui vérifie si l'écran est mobile
     */
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint = 768px
    };

    // Vérifier au montage
    handleResize();

    // Ajouter écouteur pour les redimensionnements
    window.addEventListener('resize', handleResize);

    // Cleanup: retirer l'écouteur
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* 
        Barre de navigation fixe en haut
        isMobile={isMobile} permet d'adapter le menu (hamburger sur mobile, menu étendu sur desktop)
      */}
      <Navbar isMobile={isMobile} />

      {/* 
        Section Héro - Accueil avec titre et boutons d'action
        Première impression, inspire le visiteur
      */}
      <Hero />

      {/* 
        Section Galerie - Affiche toutes les pâtisseries
        Permet aussi aux visiteurs d'ajouter leurs propres photos
      */}
      <Gallery />

      {/* 
        Section Avis Clients - Témoignages et évaluations
        Permet de laisser un nouvel avis avec notation interactive
      */}
      <Reviews />

      {/* 
        Section À Propos - Histoire et points forts
        Crée une connexion émotionnelle avec la marque
      */}
      <About />

      {/* 
        Section Contact - Tous les moyens de joindre Rose Délice
        WhatsApp, téléphone, adresse, horaires
      */}
      <Contact />

      {/* 
        Footer - Pied de page avec liens et copyright
      */}
      <Footer />

      {/* 
        Bouton WhatsApp flottant
        Toujours visible en bas à droite pour encourager les commandes
      */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
