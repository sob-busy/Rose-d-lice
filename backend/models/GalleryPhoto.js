// ============================================
// Modèle: Photo Galerie
// ============================================
// Schéma et méthodes pour gérer les photos de la galerie

/**
 * GalleryPhoto Schema
 * 
 * Structure d'une photo en base de données:
 * - id (string): Identifiant unique généré par Firestore
 * - titre (string): Nom de la création
 * - description (string): Détails sur la création
 * - image_url (string): URL de l'image stockée
 * - categorie (string): Catégorie (gâteau, macarons, éclairs, etc.)
 * - note (number): Note moyenne si disponible
 * - date_ajout (timestamp): Date d'ajout
 * - approuve (boolean): Approuvée par admin avant affichage
 */

export class GalleryPhoto {
  /**
   * Créer une nouvelle instance de photo
   * @param {Object} data - Données de la photo
   */
  constructor(data) {
    this.titre = data.titre || '';
    this.description = data.description || '';
    this.image_url = data.image_url || data.imageUrl || '';
    this.categorie = data.categorie || 'autre';
    this.note = data.note || null;
    this.date_ajout = data.date_ajout || new Date();
    this.approuve = data.approuve || false; // Non approuvée par défaut
  }

  /**
   * Convertir l'objet en données Firestore
   */
  toFirestore() {
    return {
      titre: this.titre,
      description: this.description,
      image_url: this.image_url,
      categorie: this.categorie,
      note: this.note,
      date_ajout: this.date_ajout,
      approuve: this.approuve,
    };
  }

  /**
   * Créer une instance à partir de données Firestore
   */
  static fromFirestore(data) {
    return new GalleryPhoto(data);
  }
}
