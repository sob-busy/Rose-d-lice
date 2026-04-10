// ============================================
// Composant: Avis Clients (Reviews)
// ============================================
// Affiche les avis avec étoiles, formulaire modal pour laisser un avis
// Note moyenne globale affichée en haut

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { getReviews, addReview, getAverageRating } from '../services/api';

/**
 * Composant Reviews
 * Affiche les avis clients et permet d'en ajouter de nouveaux
 * @returns {JSX.Element} Section avis
 */
const Reviews = () => {
  // États
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState(5); // Note sélectionnée

  // État du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    produit: '',
    note: 5,
    commentaire: '',
  });

  // Avis de démonstration
  const demoReviews = [
    {
      id: 1,
      nom: 'Ama Mensah',
      produit: 'Gâteau d\'anniversaire rose',
      note: 5,
      commentaire: 'Absolument délicieux! Les saveurs étaient parfaites et la présentation splendide. Rose Délice est ma nouvelle pâtisserie préférée.',
      date: '2024-12-15',
      approuve: true,
    },
    {
      id: 2,
      nom: 'Kofi Agbro',
      produit: 'Macarons assortis',
      note: 4.5,
      commentaire: 'Les macarons sont très savoureux et l\'emballage élégant. Un peu cher mais ça en vaut la peine!',
      date: '2024-11-20',
      approuve: true,
    },
    {
      id: 3,
      nom: 'Ekua Ofori',
      produit: 'Éclairs chocolat',
      note: 5,
      commentaire: 'Les éclairs étaient frais et délicieux. Le chocolat est vraiment de qualité. Je recommande vivement!',
      date: '2024-10-10',
      approuve: true,
    },
  ];

  // Charger les avis au montage
  useEffect(() => {
    // Pour le moment, utiliser les avis de démo
    setReviews(demoReviews);
    
    // Calculer la note moyenne
    const avgNote = demoReviews.reduce((sum, review) => sum + review.note, 0) / demoReviews.length;
    setAverageRating(Number(avgNote.toFixed(1)));
  }, []);

  /**
   * Gère l'ajout d'un nouvel avis
   */
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Appel à l'API pour ajouter l'avis
      await addReview({
        ...formData,
        note: userRating,
      });

      // Réinitialiser et fermer
      setFormData({ nom: '', email: '', produit: '', note: 5, commentaire: '' });
      setUserRating(5);
      setShowModal(false);

      alert('Avis envoyé! Merci. L\'avis sera publie après approbation.');

      // Recharger les avis
      const updatedReviews = await getReviews();
      setReviews(updatedReviews);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi de l\'avis');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Composant pour afficher les étoiles interactives
   */
  const StarRating = ({ value, onChange }) => {
    return (
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className={`text-3xl transition-colors ${
              star <= value ? 'text-yellow-400' : 'text-gray-300'
            } hover:text-yellow-400`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  // Fonction pour afficher les étoiles statiques
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
    <section id="reviews" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* En-tête section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-rose-dark mb-4">
            Avis de Nos Clients
          </h2>
          
          {/* Note moyenne globale */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-4xl font-bold text-rose-dark">{averageRating}</div>
            <div>
              <div className="flex gap-1">
                {renderStars(averageRating)}
              </div>
              <p className="text-gray-500 text-sm">
                sur {reviews.length} avis
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grille d'avis */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-rose-light rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Étoiles */}
              <div className="flex gap-1 mb-3">
                {renderStars(review.note)}
              </div>

              {/* Nom du client */}
              <h3 className="font-bold text-rose-dark mb-2 font-playfair">
                {review.nom}
              </h3>

              {/* Produit commandé */}
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-semibold">Produit:</span> {review.produit}
              </p>

              {/* Commentaire */}
              <p className="text-gray-700 mb-3 italic">
                "{review.commentaire}"
              </p>

              {/* Date */}
              <p className="text-xs text-gray-500">
                {new Date(review.date).toLocaleDateString('fr-FR')}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bouton "Laisser un avis" */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-rose-powder text-rose-dark rounded-full font-semibold hover:bg-rose-medium transition-colors"
          >
            <MessageCircle size={20} />
            Laisser un avis
          </button>
        </motion.div>
      </div>

      {/* Modal pour laisser un avis */}
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
              Partager votre avis
            </h3>

            <form onSubmit={handleSubmitReview} className="space-y-5">
              {/* Champ Nom */}
              <input
                type="text"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full px-4 py-2 border border-rose-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-dark"
                required
              />

              {/* Champ Email */}
              <input
                type="email"
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-rose-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-dark"
                required
              />

              {/* Champ Produit */}
              <input
                type="text"
                placeholder="Produit commandé"
                value={formData.produit}
                onChange={(e) => setFormData({ ...formData, produit: e.target.value })}
                className="w-full px-4 py-2 border border-rose-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-dark"
                required
              />

              {/* Notation interactive */}
              <div>
                <label className="block text-sm font-semibold text-rose-dark mb-2">
                  Votre note
                </label>
                <StarRating value={userRating} onChange={setUserRating} />
              </div>

              {/* Champ Commentaire */}
              <textarea
                placeholder="Votre commentaire..."
                value={formData.commentaire}
                onChange={(e) => setFormData({ ...formData, commentaire: e.target.value })}
                className="w-full px-4 py-2 border border-rose-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-dark"
                rows="4"
                required
              />

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
                  {loading ? 'Envoi...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Reviews;
