// ============================================
// Composant: Section Héro (Hero Section)
// ============================================
// Grande section avec image de fond, titre et boutons d'action
// Première impression du site

import { motion } from 'framer-motion';
import { openWhatsApp } from '../utils/helpers';

/**
 * Composant Hero
 * Section d'accueil avec image de fond et appel à l'action
 * @returns {JSX.Element} Section héro
 */
const Hero = () => {
  // Variantes de animation Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Image de fond (gâteau de mariage) */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop")',
          opacity: 0.3,
        }}
      />

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-rose-light to-cream opacity-90" />

      {/* Contenu centré */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Titre principal */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-rose-dark mb-4 font-playfair leading-tight"
          variants={itemVariants}
        >
          Rose Délice
        </motion.h1>

        {/* Sous-titre */}
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-8 font-light font-lato"
          variants={itemVariants}
        >
          Des créations pâtissières artisanales, confectionnées avec passion et raffinement
        </motion.p>

        {/* Ligne décorative */}
        <motion.div
          className="h-1 w-32 bg-gradient-to-r from-rose-powder via-rose-medium to-rose-powder mx-auto mb-8"
          variants={itemVariants}
        />

        {/* Boutons d'action */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          {/* Bouton "Découvrir" */}
          <motion.a
            href="#gallery"
            className="px-8 py-3 bg-rose-powder text-rose-dark font-semibold rounded-full hover:bg-rose-medium transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(244, 212, 230, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Découvrir nos créations
          </motion.a>

          {/* Bouton "Nous Contacter" */}
          <motion.button
            onClick={() => openWhatsApp('Bonjour, je souhaite connaître vos services...')}
            className="px-8 py-3 border-2 border-rose-dark text-rose-dark font-semibold rounded-full hover:bg-rose-light transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nous contacter
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Icône chevron bas (pour guider le scroll) */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-rose-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
