// ============================================
// Composant: Footer
// ============================================
// Pied de page avec logo, liens, copyright

import { motion } from 'framer-motion';
import { Heart, MessageCircle, Phone, MapPin } from 'lucide-react';

/**
 * Composant Footer
 * Pied de page avec informations et navigation
 * @returns {JSX.Element} Footer
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Nos Créations', href: '#gallery' },
    { label: 'Avis', href: '#reviews' },
    { label: 'À Propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-b from-rose-light to-rose-powder py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1 - Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌹</span>
              <h3 className="text-2xl font-bold text-rose-dark font-playfair">
                Rose Délice
              </h3>
            </div>
            <p className="text-gray-600">
              Pâtisserie artisanale à Lomé, Togo. Créations délicieuses confectionnées avec passion et ingrédients premium.
            </p>
          </motion.div>

          {/* Colonne 2 - Liens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-rose-dark mb-4 font-playfair">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-rose-dark transition-colors"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-rose-dark mb-4 font-playfair">
              Nous contacter
            </h4>
            <div className="space-y-3">
              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <MessageCircle size={18} className="text-green-500" />
                <a href="https://wa.me/228978336559" className="text-gray-700 hover:text-rose-dark">
                  +228 97 83 36 59
                </a>
              </div>

              {/* Téléphone */}
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-blue-500" />
                <a href="tel:+22897833659" className="text-gray-700 hover:text-rose-dark">
                  +228 97 83 36 59
                </a>
              </div>

              {/* Adresse */}
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-red-500 mt-1" />
                <span className="text-gray-700">Lomé, Togo</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-rose-medium my-8" />

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-700 flex items-center justify-center gap-1">
            © {currentYear} Rose Délice. Confectionné avec
            <Heart size={16} className="text-rose-dark inline" />
            <span className="text-rose-dark font-semibold">par Rose Délice</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Pâtisserie Artisanale | Lomé, Togo
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
