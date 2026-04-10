# 📸 Images de Démonstration - Rose Délice

Ce fichier contient les URLs des images utilisées dans les démonstrations.

## Images Galerie

### 1. Macarons Rose
**URL:** `https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop`

Délicieux macarons à la rose poudré avec remplissage crémeux. Une création signature de Rose Délice.

### 2. Éclairs Chocolat
**URL:** `https://images.unsplash.com/photo-1571115765676-3d800e2173fe?w=400&h=300&fit=crop`

Éclairs au chocolat noir de qualité premium avec glaçage brillant. Croquant à l'extérieur, fondant à l'intérieur.

### 3. Petit Fours Assortis
**URL:** `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop`

Sélection élégante de petits gâteaux délicats avec décoration minutieuse. Parfait pour les occasions.

### 4. Gâteau d'Anniversaire
**URL:** `https://images.unsplash.com/photo-1558637845-60f1d78c3ed5?w=400&h=300&fit=crop`

Gâteau d'anniversaire personnalisé rose et crème avec étages délicats. Le centre de tous les regards!

### 5. Viennoiseries Fraîches
**URL:** `https://images.unsplash.com/photo-1555939594-58d7cb561341?w=400&h=300&fit=crop`

Croissants feuilletés et pains au chocolat frais du jour. Meilleures le matin!

### 6. Fondant au Chocolat
**URL:** `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop`

Fondant coulant avec chocolat premium. Le cœur fond en bouche à chaque bouchée.

---

## Images Section Héro

**URL (Gâteau de Mariage):** `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&h=800&fit=crop`

Gâteau de mariage multi-étages, parfait pour l'image de fond héroïque.

---

## Images Section À Propos

**URL (Photo Pâtisserie):** `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=600&fit=crop`

Photo générique de pâtisserie pour la section À Propos.

---

## 🔄 Comment Utiliser

### Ajouter une Photo Personnalisée

Pour ajouter une image personnelle:

1. Uploadez votre image sur un service de stockage gratuit:
   - **Unsplash** (Gratuit, libre de droits)
   - **Pexels** (Gratuit, libre de droits)
   - **Pixabay** (Gratuit, libre de droits)
   - **ImgBB** (Gratuit, simple upload)
   - **Firebase Storage** (Pour production)

2. Copiez l'URL publique

3. Utilisez cette URL dans le formulaire d'ajout de photo

---

## 💡 Conseils

### Pour les Photos Locales
Si vous avez des photos Rose Délice personnelles:

1. **Production**: Uploadez sur Firebase Storage
   ```javascript
   // Dans backend/routes/upload.js
   // Remplacez stockage disque par Firebase Storage
   ```

2. **Développement**: Utilisez ImgBB (simple et rapide)
   - Allez sur [imgbb.com](https://imgbb.com)
   - Uploadez votre image
   - Copiez le lien "Direct Link"

---

## 🎨 Format Recommandé

Pour les meilleures performances:

- **Format**: JPEG ou WebP
- **Taille**: 400x300px minimum (galerie)
- **Taille fichier**: < 200KB
- **Aspect ratio**: 4:3 pour galerie

---

## 📱 URLs Responsive

Les URLs Unsplash utilisent des paramètres:
- `?w=400&h=300` = Largeur 400px, hauteur 300px
- `&fit=crop` = Recadrer pour remplir

Exemple personnalisé:
```
https://images.unsplash.com/photo-ID?w=800&h=600&fit=crop
```

---

## 🚀 Migration vers Firebase Storage (Production)

Quand vous êtes prêt pour la production:

1. Activez **Firebase Storage** dans Firebase Console
2. Modifiez `backend/routes/upload.js`:
   ```javascript
   // Changer de multer disque à Firebase Storage
   import { storage } from '../config/firebase.js';
   ```
3. Téléchargez les mises à jour du code

---

**Besoin d'aide?** Consultez le GUIDE_DEMARRAGE.md

🌹 Bon succès avec Rose Délice!
