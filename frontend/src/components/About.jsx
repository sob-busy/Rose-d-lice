// ============================================
// Composant: Section À Propos
// ============================================
// Photo à gauche, histoire à droite avec 4 points forts et icônes

import { motion } from 'framer-motion';
import { Heart, Award, Gift, Sparkles } from 'lucide-react';

/**
 * Composant About
 * Raconte l'histoire de Rose Délice avec points forts
 * @returns {JSX.Element} Section à propos
 */
const About = () => {
  // Points forts avec icônes
  const features = [
    {
      icon: Heart,
      title: 'Fait avec amour',
      description: 'Chaque création est confectionnée avec passion et dévouement',
    },
    {
      icon: Award,
      title: 'Qualité premium',
      description: 'Utilisation d\'ingrédients haut de gamme et sourcing responsable',
    },
    {
      icon: Gift,
      title: 'Sur commande',
      description: 'Adaptée à vos événements spéciaux et vos envies personnelles',
    },
    {
      icon: Sparkles,
      title: 'Unique & créatif',
      description: 'Designs originaux et saveurs innovantes à chaque création',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-rose-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=600&fit=crop"
              alt="Rose Délice - Pâtisserie"
              className="rounded-lg shadow-2xl w-full"
            />
          </motion.div>

          {/* Texte droite */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-dark mb-6">
              Notre Histoire
            </h2>

            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Rose Délice est née d'une passion pour l'art pâtissier et d'un rêve de partager des moments sucré avec la communauté de Lomé. Depuis notre création, nous nous efforçons de proposer des créations pâtissières artisanales d'exception.
            </p>

            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Chaque gâteau, chaque macaron, chaque éclair est une œuvre d'art cullinaire. Nous sélectionnons minutieusement nos ingrédients pour garantir une qualité exceptionnelle à chaque bouchée. Votre satisfaction est notre priorité absolue.
            </p>

            {/* Points forts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Icône */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-rose-powder">
                        <IconComponent className="h-6 w-6 text-rose-dark" />
                      </div>
                    </div>

                    {/* Texte */}
                    <div>
                      <h3 className="text-lg font-semibold text-rose-dark">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
