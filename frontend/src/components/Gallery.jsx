// ============================================
// Composant: Galerie "Nos Créations"
// ============================================
// Grille de photos en 3 colonnes avec notation
// Possibilité d'ajouter une nouvelle photo

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Upload } from 'lucide-react';
import { getGalleryPhotos, addGalleryPhoto } from '../services/api';

/**
 * Composant Gallery
 * Affiche les pâtisseries avec grille responsive et modal d'upload
 * @returns {JSX.Element} Section galerie
 */
const Gallery = () => {
  // État pour stocker les photos
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // État du formulaire d'ajout
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    imageUrl: '',
    categorie: 'gâteau',
  });

  // Images de démonstration (à remplacer par des vraies images)
  const demoPhotos = [
    {
      id: 1,
      titre: 'Macarons Rose',
      description: 'Délicieux macarons à la rose poudré',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop',
      categorie: 'macarons',
      note: 5,
    },
    {
      id: 2,
      titre: 'Éclairs Chocolat',
      description: 'Éclairs au chocolat noir de qualité premium',
      image: 'https://images.unsplash.com/photo-1571115765676-3d800e2173fe?w=400&h=300&fit=crop',
      categorie: 'éclairs',
      note: 4.8,
    },
    {
      id: 3,
      titre: 'Petit Fours Assortis',
      description: 'Sélection de petits gâteaux délicats',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      categorie: 'petits-fours',
      note: 5,
    },
    {
      id: 4,
      titre: 'Gâteau d\'Anniversaire',
      description: 'Gâteau d\'anniversaire personnalisé rose et crème',
      image: 'https://images.unsplash.com/photo-1558637845-60f1d78c3ed5?w=400&h=300&fit=crop',
      categorie: 'gâteau',
      note: 4.9,
    },
    {
      id: 5,
      titre: 'Viennoiseries Fraîches',
      description: 'Croissants et pains au chocolat frais du jour',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561341?w=400&h=300&fit=crop',
      categorie: 'viennoiseries',
      note: 4.7,
    },
    {
      id: 6,
      titre: 'Fondant au Chocolat',
      description: 'Fondant coulant avec chocolat premium',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      categorie: 'desserts',
      note: 5,
    },
  ];

  // Charger les photos au montage du composant
  useEffect(() => {
    // Pour le moment, utiliser les images de démo
    // En production, appeler: const data = await getGalleryPhotos();
    setPhotos(demoPhotos);
  }, []);

  /**
   * Gère la soumission du formulaire d'ajout
   */
  const handleSubmitPhoto = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Appel à l'API pour ajouter la photo
      await addGalleryPhoto(formData);
      
      // Réinitialiser le formulaire et fermer le modal
      setFormData({ titre: '', description: '', imageUrl: '', categorie: 'gâteau' });
      setShowModal(false);
      
      // Recharger les photos
      const updatedPhotos = await getGalleryPhotos();
      setPhotos(updatedPhotos);
    } catch (error) {
      console.error('Erreur lors de l\'ajout:', error);
      alert('Erreur lors de l\'ajout de la photo');
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour afficher les étoiles
  const renderStars = (note) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < Math.floor(note) ? 'text-yellow-400' : 'text-gray-300'}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-cream via-white to-rose-light">
      <div className="max-w-7xl mx-auto">
        {/* Titre de section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-dark mb-4">
            Nos Créations
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez notre sélection de pâtisseries artisanales, confectionnées avec passion et ingrédients de qualité premium.
          </p>
        </motion.div>

        {/* Grille de photos - 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-gray-200">
                <img
                  src={photo.image}
                  alt={photo.titre}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Contenu carte */}
              <div className="p-5">
                {/* Titre */}
                <h3 className="text-lg font-bold text-rose-dark font-playfair mb-2">
                  {photo.titre}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {photo.description}
                </p>

                {/* Note si disponible */}
                {photo.note && (
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex gap-1">
                      {renderStars(photo.note)}
                    </div>
                    <span className="text-gray-500">({photo.note}/5)</span>
                  </div>
                )}

                {/* Badge catégorie */}
                <div className="mt-3 inline-block bg-rose-light px-3 py-1 rounded-full text-xs text-rose-dark font-semibold">
                  {photo.categorie}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Carte "Ajouter une photo" */}
          <motion.button
            onClick={() => setShowModal(true)}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow flex items-center justify-center min-h-96 border-2 border-dashed border-rose-medium hover:border-rose-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: photos.length * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <Plus className="w-12 h-12 text-rose-medium mx-auto mb-3" />
              <p className="font-semibold text-rose-dark">Ajouter une photo</p>
              <p className="text-sm text-gray-500">de votre création</p>
            </div>
          </motion.button>
        </div>
      </div>

      {/* Modal d'ajout de photo */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-md w-full"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-rose-dark font-playfair mb-6">
              Partager votre création
            </h3>

            <form onSubmit={handleSubmitPhoto} className="space-y-4">
              {/* Champ Titre */}
              <input
                type="text"
                placeholder="Titre de la création"
                value={formData.titre}
                onChange={(e) => setFormData({ ...formData, titre: e.target.value })}
                className="w-full px-4 py-2 border border-rose-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-dark"
                required
              />

              {/* Champ Description */}
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border border-rose-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-dark"
                rows="3"
                required
              />

              {/* Champ URL Image */}
              <input
                type="url"
                placeholder="URL de l'image"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="w-full px-4 py-2 border border-rose-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-dark"
                required
              />

              {/* Champ Catégorie */}
              <select
                value={formData.categorie}
                onChange={(e) => setFormData({ ...formData, categorie: e.target.value })}
                className="w-full px-4 py-2 border border-rose-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-dark"
              >
                <option value="gâteau">Gâteau</option>
                <option value="macarons">Macarons</option>
                <option value="éclairs">Éclairs</option>
                <option value="petits-fours">Petits Fours</option>
                <option value="viennoiseries">Viennoiseries</option>
                <option value="desserts">Desserts</option>
              </select>

              {/* Boutons */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-rose-dark text-rose-dark rounded-lg hover:bg-rose-light transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-rose-powder text-rose-dark rounded-lg hover:bg-rose-medium transition-colors disabled:opacity-50"
                >
                  {loading ? 'Ajout...' : 'Ajouter'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
