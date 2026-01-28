# Guide Google Analytics & Campagnes Marketing

## 📊 Ce qui est Suivi

### Suivi Automatique (Événements GA4 par Défaut)
- **page_view** : Chaque visite de page
- **first_visit** : Premiers visiteurs
- **session_start** : Nouvelles sessions
- **user_engagement** : Engagement actif sur votre site
- **scroll** : Quand les utilisateurs scrollent (profondeur de 90%)

### Événements Personnalisés Ajoutés

#### 1. **hero_cta_click**
- Déclenché quand : L'utilisateur clique sur le bouton "En savoir +" de la page d'accueil
- Catégorie : `engagement`
- Libellé : `Hero CTA Button`

#### 2. **offer_click**
- Déclenché quand : L'utilisateur clique sur n'importe quel bouton "En savoir +" d'une offre
- Catégorie : `offers`
- Libellé : Le nom spécifique de l'offre (ex : "Avis à l'unité", "3 Avis", "5 Avis")

#### 3. **instagram_follow_click**
- Déclenché quand : L'utilisateur clique sur le bouton Instagram
- Catégorie : `social`
- Libellé : `Instagram Follow Button`

#### 4. **campaign_visit**
- Déclenché quand : L'utilisateur arrive via une campagne marketing (paramètres UTM)
- Catégorie : `marketing`
- Données capturées : `utm_source`, `utm_medium`, `utm_campaign`

#### 5. **form_submission**
- Déclenché quand : L'utilisateur soumet avec succès le formulaire de contact
- Catégorie : `lead_generation`
- Libellé : `Contact Form`
- Données additionnelles : `newsletter_opted_in` (vrai/faux)

#### 6. **conversion**
- Déclenché quand : La soumission du formulaire est complétée (pour le suivi des conversions)
- Catégorie : `lead`
- Libellé : `Contact Form Completed`

---

## 🎯 Comment Utiliser Ceci pour les Campagnes Marketing

### Créer des URLs de Campagne

Utilisez les paramètres UTM pour suivre d'où vient votre trafic. Format :
```
https://www.moovabb.com/?utm_source=SOURCE&utm_medium=MEDIUM&utm_campaign=CAMPAGNE
```

### Exemples de Campagnes

#### Publicité Instagram
```
https://www.moovabb.com/?utm_source=instagram&utm_medium=paid_social&utm_campaign=lancement_janvier_2025
```

#### Story Instagram (Organique)
```
https://www.moovabb.com/?utm_source=instagram&utm_medium=social&utm_campaign=story_swipe_up
```

#### Newsletter Email
```
https://www.moovabb.com/?utm_source=newsletter&utm_medium=email&utm_campaign=annonce_lancement
```

#### Publicité Facebook
```
https://www.moovabb.com/?utm_source=facebook&utm_medium=paid_social&utm_campaign=hiver_2025
```

#### Google Ads
```
https://www.moovabb.com/?utm_source=google&utm_medium=cpc&utm_campaign=recherche_logement
```

#### Partenariat Influenceur
```
https://www.moovabb.com/?utm_source=nom_influenceur&utm_medium=social&utm_campaign=partenariat_Q1
```

### Guide des Paramètres UTM

- **utm_source** : D'où vient le trafic (ex : `instagram`, `facebook`, `google`, `newsletter`)
- **utm_medium** : Type de canal marketing (ex : `social`, `paid_social`, `email`, `cpc`)
- **utm_campaign** : Nom spécifique de la campagne (ex : `lancement_janvier_2025`, `promo_printemps`)
- **utm_content** (optionnel) : Différencier du contenu similaire (ex : `bouton_bleu`, `bouton_rouge`)
- **utm_term** (optionnel) : Mots-clés pour recherche payante (ex : `location+appartement`)

### Outil Gratuit de Création d'URL
Utilisez le [Campaign URL Builder de Google](https://ga-dev-tools.google/campaign-url-builder/) pour créer vos URLs de campagne.

---

## 📈 Consulter vos Données dans Google Analytics

### 1. Rapports en Temps Réel
**Admin → Temps réel**
- Voir les utilisateurs actifs en ce moment
- Visualiser sur quelles pages ils se trouvent
- Voir quelles campagnes génèrent du trafic MAINTENANT

### 2. Performance des Campagnes
**Rapports → Acquisition → Acquisition de trafic**
- Voir toutes les sources de trafic
- Comparer les performances des campagnes
- Voir quelles campagnes génèrent le plus de conversions

### 3. Événements Personnalisés
**Rapports → Engagement → Événements**
- Voir tous les événements personnalisés (hero_cta_click, offer_click, etc.)
- Visualiser le nombre d'événements et l'engagement des utilisateurs
- Suivre les taux de conversion

### 4. Visites de Campagne
**Rapports → Engagement → Événements → campaign_visit**
- Cliquer sur le nom de l'événement
- Voir la répartition par `utm_source`, `utm_medium`, `utm_campaign`
- Comparer quelles campagnes performent le mieux

### 5. Soumissions de Formulaire (Suivi des Leads)
**Rapports → Engagement → Événements → form_submission**
- Voir le total des soumissions de formulaire
- Visualiser le taux d'inscription à la newsletter
- Suivre par source de trafic

### 6. Créer des Rapports Personnalisés
**Explorer → Créer une exploration vide**

Exemple : Rapport d'Efficacité des Campagnes
1. Ajouter les dimensions : `Source de la session`, `Support de la session`, `Campagne de la session`
2. Ajouter les métriques : `Sessions`, `Utilisateurs`, `form_submission` (nombre d'événements), `Taux de conversion`
3. Filtrer par plage de dates
4. Exporter vers Google Sheets

---

## 🎨 Configurer les Conversions dans GA4

Pour suivre les soumissions de formulaire comme conversions officielles :

1. Allez dans **Admin → Événements**
2. Trouvez l'événement `form_submission`
3. Activez **Marquer comme conversion**
4. Faites la même chose pour l'événement `conversion`

Vous pourrez maintenant voir les taux de conversion dans tous vos rapports !

---

## 💡 Conseils de Stratégie Marketing

### Quoi Surveiller

1. **Sources de Trafic** : Quelle plateforme envoie le plus de visiteurs ?
   - Instagram vs Facebook vs Google Ads

2. **Engagement** : Quelles campagnes génèrent le plus d'engagement ?
   - Regarder les taux de hero_cta_click et offer_click par campagne

3. **Taux de Conversion** : Quelles campagnes convertissent le mieux ?
   - Soumissions de formulaire pour 100 visiteurs par campagne

4. **Intérêt pour les Offres** : Quel palier de prix est le plus populaire ?
   - Suivre les événements offer_click par libellé

5. **Intérêt pour la Newsletter** : Combien de leads s'inscrivent à la newsletter ?
   - Suivre le paramètre newsletter_opted_in dans form_submission

### Optimisation Basée sur les Données

- **Peu de trafic, haute conversion** : Augmenter le budget sur cette campagne
- **Beaucoup de trafic, faible conversion** : Améliorer le ciblage ou la page de destination
- **Offre populaire** : Considérer promouvoir davantage ce palier de prix
- **Fort engagement Instagram** : Concentrer plus de ressources là-bas
- **Faible inscription newsletter** : Considérer de meilleurs incitatifs

## 📱 Astuces Pro

1. **Raccourcir vos URLs** : Utiliser [bit.ly](https://bitly.com) ou similaire pour rendre les URLs de campagne plus propres pour la bio/stories Instagram
2. **Créer une Feuille de Suivi de Campagne** : Maintenir un Google Sheet avec :
   - Nom de la campagne
   - URL
   - Plateforme
   - Date de début
   - Budget
   - Objectifs
   - Métriques de performance
3. **Configurer des Rapports Hebdomadaires** : GA4 peut vous envoyer des rapports automatisés par email chaque semaine
4. **Mobile vs Desktop** : Vérifier la répartition par appareil dans GA4 pour optimiser pour votre audience
5. **Meilleurs Horaires de Publication** : Croiser les pics de trafic GA4 avec votre calendrier de publication
