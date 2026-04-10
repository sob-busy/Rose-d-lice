// ============================================
// Utilitaires - Fonctions globales
// ============================================
// Fonctions pratiques réutilisables dans l'app

/**
 * Formate une note sur 5 en étoiles visuelles
 * @param {number} rating - Note entre 0 et 5
 * @returns {string} Représentation texte des étoiles
 */
export const formatStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  let stars = '★'.repeat(fullStars);
  if (hasHalfStar) stars += '½';
  stars += '☆'.repeat(5 - fullStars - (hasHalfStar ? 1 : 0));
  
  return stars;
};

/**
 * Calcule la note moyenne d'un tableau d'avis
 * @param {Array} reviews - Tableau d'avis avec propriété 'note'
 * @returns {number} Moyenne arrondie à 1 décimale
 */
export const calculateAverageRating = (reviews) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.note, 0);
  return (sum / reviews.length).toFixed(1);
};

/**
 * Ouvre WhatsApp avec message pré-rempli
 * @param {string} message - Message à envoyer
 * @param {string} phoneNumber - Numéro téléphone (ex: +228978336559)
 */
export const openWhatsApp = (message = '', phoneNumber = '+228978336559') => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Formatte une date en français
 * @param {Date|string} date - Date à formater
 * @returns {string} Date formatée (ex: "12 janvier 2024")
 */
export const formatDateFR = (date) => {
  const d = new Date(date);
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};

/**
 * Valide un email
 * @param {string} email - Email à valider
 * @returns {boolean} True si email valide
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Classe CSS conditionnelle
 * @param {Object} classes - Objet {className: condition}
 * @returns {string} Classes jointes
 */
export const classNames = (classes) => {
  return Object.keys(classes)
    .filter(key => classes[key])
    .join(' ');
};
