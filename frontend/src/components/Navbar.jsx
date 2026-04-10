// ============================================
// Composant: Barre de navigation fixe (Navbar)
// ============================================
// Navigation en haut de page avec logo, liens et bouton Commander
// Reste visible lors du scroll grâce à 'fixed'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { openWhatsApp } from '../utils/helpers';

/**
 * Composant Navbar
 * @param {Object} props - Props du composant
 * @returns {JSX.Element} Élément navigation
 */
const Navbar = ({ isMobile = false }) => {
  // État pour afficher/masquer le menu mobile
  const [isOpen, setIsOpen] = useState(false);

  // Liens de navigation
  const navLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Nos Créations', href: '#gallery' },
    { label: 'Avis', href: '#reviews' },
    { label: 'À Propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Barre de navigation fixe */}
      <motion.nav
        className="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md shadow-md z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-2xl">🌹</div>
              <h1 className="text-xl font-bold text-rose-dark font-playfair">
                Rose Délice
              </h1>
            </motion.div>

            {/* Menu Desktop */}
            {!isMobile && (
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-gray-700 font-lato hover:text-rose-dark transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {/* Bouton Commander */}
            {!isMobile && (
              <motion.button
                onClick={() => openWhatsApp('Bonjour, je souhaite commander...')}
                className="hidden md:block bg-rose-powder text-rose-dark px-6 py-2 rounded-full font-semibold hover:bg-rose-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Commander
              </motion.button>
            )}

            {/* Bouton Menu Mobile */}
            {isMobile && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Menu Mobile déroulant */}
      {isMobile && isOpen && (
        <motion.div
          className="fixed top-16 left-0 right-0 bg-white border-b-2 border-rose-powder z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-700 py-2 hover:text-rose-dark"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                openWhatsApp('Bonjour, je souhaite commander...');
                setIsOpen(false);
              }}
              className="w-full bg-rose-powder text-rose-dark px-4 py-2 rounded-full font-semibold"
            >
              Commander
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
