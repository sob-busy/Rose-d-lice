// ============================================
// Composant: Section Contact
// ============================================
// Carte WhatsApp, téléphone, adresse, horaires

import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react';
import { openWhatsApp } from '../utils/helpers';

/**
 * Composant Contact
 * Affiche les informations de contact avec plusieurs moyens de joindre
 * @returns {JSX.Element} Section contact
 */
const Contact = () => {
  // Données de contact
  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: '+228 97 83 36 59',
      action: () => openWhatsApp('Bonjour Rose Délice, je souhaite passer une commande...'),
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      detail: '+228 97 83 36 59',
      action: () => window.location.href = 'tel:+22897833659',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      detail: 'Lomé, Togo',
      action: () => window.open('https://maps.google.com/?q=Lomé,Togo', '_blank'),
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Clock,
      title: 'Horaires',
      detail: 'Lun–Sam: 8h–19h\nDimanche sur commande',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-dark mb-4">
            Nous Contacter
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Plusieurs moyens pour nous joindre et passer votre commande
          </p>
        </motion.div>

        {/* Grille de cartes de contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <motion.div
                key={info.title}
                className="bg-gradient-to-br from-rose-light to-cream rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Icône */}
                <div className={`inline-flex items-center justify-center h-14 w-14 rounded-full ${info.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-7 w-7" />
                </div>

                {/* Titre */}
                <h3 className="text-lg font-semibold text-rose-dark font-playfair mb-2">
                  {info.title}
                </h3>

                {/* Détail/lien */}
                <p className="text-gray-700 mb-4 whitespace-pre-line">
                  {info.detail}
                </p>

                {/* Bouton action si existant */}
                {info.action && (
                  <motion.button
                    onClick={info.action}
                    className="w-full px-4 py-2 bg-rose-powder text-rose-dark rounded-lg font-semibold hover:bg-rose-medium transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {info.title === 'WhatsApp' && 'Ouvrir WhatsApp'}
                    {info.title === 'Téléphone' && 'Appeler'}
                    {info.title === 'Adresse' && 'Voir sur Maps'}
                  </motion.button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Section Message personnalisé */}
        <motion.div
          className="bg-gradient-to-r from-rose-light via-cream to-rose-light rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-700 text-lg mb-6">
            Vous avez une commande spéciale en tête? Une occasion particulière à célébrer?
          </p>
          <motion.button
            onClick={() => openWhatsApp('J\'ai une demande de création personnalisée...')}
            className="px-8 py-3 bg-rose-powder text-rose-dark rounded-full font-semibold hover:bg-rose-medium transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Personnaliser une commande
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
