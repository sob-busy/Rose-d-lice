// ============================================
// Modèle: Avis Client
// ============================================
// Schéma et méthodes pour gérer les avis clients

/**
 * Review Schema
 * 
 * Structure d'un avis en base de données:
 * - id (string): Identifiant unique généré par Firestore
 * - nom (string): Nom du client
 * - email (string): Email du client pour suivi
 * - produit (string): Produit commandé/testé
 * - note (number): Note de 1 à 5 étoiles
 * - commentaire (string): Texte de l'avis
 * - date (timestamp): Date du commentaire
 * - approuve (boolean): Approuvé par admin avant affichage
 */

export class Review {
  /**
   * Créer une nouvelle instance d'avis
   * @param {Object} data - Données de l'avis
   */
  constructor(data) {
    this.nom = data.nom || '';
    this.email = data.email || '';
    this.produit = data.produit || '';
    this.note = Math.min(5, Math.max(1, data.note || 5)); // Entre 1 et 5
    this.commentaire = data.commentaire || '';
    this.date = data.date || new Date();
    this.approuve = data.approuve || false; // Non approuvé par défaut
  }

  /**
   * Valider les données de l'avis
   */
  valider() {
    if (!this.nom || this.nom.trim() === '') {
      throw new Error('Le nom est obligatoire');
    }
    if (!this.email || !this.email.includes('@')) {
      throw new Error('L\'email est invalide');
    }
    if (!this.produit || this.produit.trim() === '') {
      throw new Error('Le produit est obligatoire');
    }
    if (this.note < 1 || this.note > 5) {
      throw new Error('La note doit être entre 1 et 5');
    }
    if (!this.commentaire || this.commentaire.trim() === '') {
      throw new Error('Le commentaire est obligatoire');
    }
    return true;
  }

  /**
   * Convertir l'objet en données Firestore
   */
  toFirestore() {
    return {
      nom: this.nom,
      email: this.email,
      produit: this.produit,
      note: this.note,
      commentaire: this.commentaire,
      date: this.date,
      approuve: this.approuve,
    };
  }

  /**
   * Créer une instance à partir de données Firestore
   */
  static fromFirestore(data) {
    return new Review(data);
  }
}
