// ============================================
// Composant: Bouton WhatsApp Flottant
// ============================================
// Bouton WhatsApp fixé en bas à droite avec animation

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/helpers';

/**
 * Composant FloatingWhatsApp
 * Bouton WhatsApp flottant persistant avec animation d'entrée
 * @returns {JSX.Element} Bouton flottant
 */
const FloatingWhatsApp = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      // Animation d'entrée : apparition progressive et glissement vers la droite
      initial={{ opacity: 0, x: 100, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 0.5, // Apparaît après 0.5s
      }}
    >
      <motion.button
        onClick={() => openWhatsApp('Bonjour Rose Délice! Je voudrais passer une commande...')}
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        // Animation pulsante pour attirer l'attention
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        title="Commander sur WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Bulle de texte info */}
      <motion.div
        className="absolute bottom-20 right-0 bg-white text-green-600 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ delay: 1 }}
      >
        Besoin d'aide?
      </motion.div>
    </motion.div>
  );
};

export default FloatingWhatsApp;
