import React from 'react'

export const carouselData = [
  {
    id: 1,
    path: 'oblog',
    title: 'Oblog',
    resume: 'Création d\'un blog avec le CMS WordPress. Utilisation de composer, intégration du template personnalisé.',
    excerpt: 'Blog sur la vie étudiante d\'apprentis développeurs web. Développé en PHP, requêtage en SQL.',
    type: 'Blog',
    techno: ['WordPress'],
    technos: [
      {'type':'CMS', 'techno': 'Wordpress'},
      {'type':'CSS', 'techno': 'SASS'},
      {'type':'BACK', 'techno': 'PHP'},
    ],
    fonctionnalités: [
      'Recherche d\'articles',
    ],
    informations: [
      {'info': 'Développement WordPress'},
      {'info': 'Intégration template'},
      {'info': 'Accès rapide aux derniers articles'},
    ],
    role: ['Intégration','Développement'],
    home: 'oblog/oblog-home',
    image: "oblog/PC-Oblog",
    mac:'oblog/mac-oblog',
    mac2:'oblog/situation/situation-pc-oblog'
  },
  {
    id: 2,
    path:'derive',
    title: 'A la dérive',
    excerpt: 'Blog sur la vie étudiante d\'apprentis développeurs. Développé en PHP.',
    resume: 'Blog sur la vie étudiante d\'apprentis développeurs.',
    type: 'Blog',
    techno: ['PHP'],
    technos: [
      {'type':'CSS', 'techno': 'Bootstrap'},
      {'type':'BACK', 'techno': 'PHP'},
      {'type':'BDD', 'techno': 'MySQL'},
    ],
    fonctionnalités: [
      'Tri par catégorie et auteur',
      'Recherche de posts',
    ],
    informations: [
      {'info': 'Requête SQL, PDO'},
      {'info': 'Recherche de posts'},
      {'info': 'Tri des posts'},
    ],
    role: ['Intégration','Développement'],
    home: 'derive/derive-home',
    image: 'derive/PC-Derive',
    mac:'derive/situation/situation-pc-derive',
    ipad:"derive/situation/situation-tab-derive",
    phone: "derive/situation/situation-phone-derive",
    phone2: "derive/Phone-derive.jpg"
  },
  {
    id: 3,
    path:'omeal',
    title: `Omeal`,
    excerpt: 'Site communautaire sur les habitudes alimentaires',
    resume: 'Site communautaire rassemblant les diverses habitudes alimentaires. Vegans, végétariens, vous trouverez des personnes partageant le même régime. Une fois connecté, il est possible de proposer des recettes pour une communauté précise et s\'inscrire à un événement.',
    type: 'Site',
    techno: ['PHP'],
    technos: [
      {'type':'CSS', 'techno': 'Boostrap'},
      {'type':'JS', 'techno': 'Jquery'},
      {'type':'BACK', 'techno': 'PHP'},
      {'type':'BDD', 'techno': 'MySQL'},
    ],
    fonctionnalités: [
      'Inscription et connexion',
      'Création d\'une communauté',
      'Création d\'un événement',
      'Abonnement à un événement',
      'Géolocalisation et itinéraire d\'un événement'
    ],
    informations: [
      {'info': 'Requête SQL, PDO'},
      {'info': 'Architecture MVC'},
      {'info': 'Géolocalisation, Google Map API'},
    ],
    role: ['Intégration','Développement'],
    home: 'omeal/omeal-home',
    image: 'omeal/PC-omeal',
    mac:'omeal/situation/situation-pc-omeal',
    ipad:"omeal/situation/situation-tab-omeal",
    phone: "omeal/situation/situation-phone-omeal",
    phone2: "omeal/Phone-omeal.jpg"
  },
  {
    id: 4,
    path: 'recipes',
    title: 'Recipes',
    resume: 'Création d\'un site de recettes à partir d\'une API',
    excerpt: 'Site de recettes développé en ReactJS',
    type: 'Site',
    techno: ['React'],
    technos: [
      {'type':'Front', 'techno': 'React'},
      {'type':'CSS', 'techno': 'Stylus'},
      {'type':'BACK', 'techno': 'API'},
    ],
    fonctionnalités: [
      'Visualisation des recettes',
      'Affichage des ingrédients et de la recette indépendants',
    ],
    informations: [
      {'info': 'Routage React-Router'},
      {'info': 'Animations AnimeJS '},
      {'info': 'Utilisation Redux'},
    ],
    role: ['Design', 'Intégration','Développement'],
    home: 'recipes/recipes-home',
    image: "recipes/PC-recipes",
    mac:'recipes/situation-pc-recipes',
    ipad:"recipes/situation-tab-recipes",
    phone: "recipes/situation-phone-recipes",
    phone2: "recipes/Phone-recipes.png"
  },
];

export const packagings = [
  {
    'name': 'baby',
    'title': 'Baby',
    'main': 'mes-premieres-gommettes-animaux.jpg',
    'packagings': [
      {
        'name' : 'Gommettes Animaux',
        'image': 'mes-premieres-gommettes-animaux.jpg'
      },
      {
        'name' : 'Gommettes Géométriques',
        'image': 'mes-premieres-gommettes-geometriques.jpg'
      },
      {
        'name' : 'Ma Première Peinture',
        'image': 'ma-premiere-peinture.jpg'
      },
      {
        'name' : 'Mes Premiers Coloriages',
        'image': 'mes-premiers-coloriages.jpg'
      },
      {
        'name' : 'Mes Premiers Découpages',
        'image': 'mes-premiers-decoupages.jpg'
      },
      {
        'name' : 'Mes Premiers Timbres',
        'image': 'mes-premiers-timbres.jpg'
      },
      {
        'name' : 'Le Petit Artiste',
        'image': 'coffret-initiation-le-petit-artiste.jpg'
      },
    ],
  },
  {
    'name': 'dessin',
    'title': 'Dessin',
    'main': 'Scrapbooking.jpg',
    'packagings': [
      {
        'name' : 'Aqua Color',
        'image': 'aqua-color.jpg'
      },
      {
        'name' : 'Aqua Paint',
        'image': 'aqua-paint.jpg'
      },
      {
        'name' : 'Foil Art',
        'image': 'foil-art.jpg'
      },
      {
        'name' : 'Scrapbooking',
        'image': 'coffret-scrapbooking.jpg'
      },
      {
        'name' : 'Grafiboox',
        'image': 'grafiboo-x-de-voyage.jpg'
      },
      {
        'name' : 'Atelier de Peinture',
        'image': 'atelier-de-peinture.jpg'
      },
      {
        'name' : 'Tampons Pirates',
        'image': 'mallette-tampons-pirates-pm.jpg'
      },
      {
        'name' : 'Tampons Princesses',
        'image': 'mallette-tampons-princesses-pm.jpg'
      },
    ],
  },
  {
    'name': 'travelbox',
    'title': 'Travel Box',
    'main': 'Tampons Pirates.jpg',
    'packagings': [
      {
        'name' : 'Cartes A gratter',
        'image': 'travel-box-cartes-a-gratter.jpg'
      },
      {
        'name' : 'Gourmandises A Pailleter',
        'image': 'travel-box-gourmandises-a-pailleter.jpg'
      },
      {
        'name' : 'Mandala',
        'image': 'travel-box-mandala.jpg'
      },
      {
        'name' : 'Mosaix',
        'image': 'travel-box-mosaix.jpg'
      },
      {
        'name' : 'Tampons Pirates',
        'image': 'travel-box-tampons-pirates.jpg'
      },
      {
        'name' : 'Tampons Princesses',
        'image': 'travel-box-tampons-princesses.jpg'
      },
      {
        'name' : 'Tricotin',
        'image': 'travel-box-tricotin.jpg'
      },
    ],
  },
  {
    'name': 'modelage',
    'title': 'Modelage',
    'main': 'le-coiffeur.jpg',
    'packagings': [
      {
        'name' : 'Squeezy',
        'image': '5-pots-12-accessoires-dont-squeezy.jpg'
      },
      {
        'name' : 'Cupcakes',
        'image': 'carrousel-de-cupcakes.jpg'
      },
      {
        'name' : 'Fabrique de Friandises',
        'image': 'fabrique-de-friandises.jpg'
      },
      {
        'name' : 'Coiffeur',
        'image': 'le-coiffeur.jpg'
      },
      {
        'name' : 'Le Lièvre et La Tortue',
        'image': 'mallette-moulage-le-lievre-et-la-tortue-pm.jpg'
      },
      {
        'name' : 'Sweet Friends',
        'image': 'mallette-moulage-sweet-friends-pm.jpg'
      },
      {
        'name' : 'Mon Alphabet',
        'image': 'mon-alphabet.jpg'
      },
      {
        'name' : 'Terra Poterie',
        'image': 'terra-poterie.jpg'
      },
    ],
  },
  {
    'name': 'sciences',
    'title': 'Sciences',
    'main': 'creatures-gluantes.jpg',
    'packagings': [
      {
        'name' : 'Botaniste',
        'image': 'botaniste.jpg'
      },
      {
        'name' : 'Circuits Fous',
        'image': 'circuits-fous.jpg'
      },
      {
        'name' : 'Corps Humain',
        'image': 'corps-humain.jpg'
      },
      {
        'name' : 'Baumes A Lèvres',
        'image': 'creation-de-baumes-a-levres.jpg'
      },
      {
        'name' : 'Créatures Gluantes',
        'image': 'creatures-gluantes.jpg'
      },
      {
        'name' : 'Découverte des Parfums',
        'image': 'decouverte-des-parfums.jpg'
      },
      {
        'name' : 'Horribles Champignons',
        'image': 'horribles-champignons.jpg'
      },
      {
        'name' : 'Kitchen Lab',
        'image': 'kitchen-lab.jpg'
      },
      {
        'name' : 'Savant Fou',
        'image': 'savant-fou.jpg'
      },
    ],
  },
  {
    'name': 'recharges',
    'title': 'Recharges',
    'main': 'recharge-bougies.jpg',
    'packagings': [
      {
        'name' : 'Recharge Bougies',
        'image': 'recharge-bougies.jpg'
      },
      {
        'name' : 'Recharge Pain Argile',
        'image': 'recharge-pain-d-argile.jpg'
      },
      {
        'name' : 'Recharge Pate A Sel',
        'image': 'recharge-pate-a-sel.jpg'
      },
      {
        'name' : 'Recharge Platre',
        'image': 'recharge-platre.jpg'
      },
    ],
  },
  {
    'name': 'girl',
    'title': 'Girl',
    'main': 'mon-atelier-de-couture.jpg.jpg',
    'packagings': [
      {
        'name' : 'Atelier de Couture',
        'image': 'mon-atelier-de-couture.jpg'
      },
      {
        'name' : 'Atelier de Stylisme',
        'image': 'atelier-de-stylisme.jpg'
      },
      {
        'name' : 'Secret Box',
        'image': 'secret-box.jpg'
      },
      {
        'name' : 'Bijoux Création',
        'image': 'bijoux-creation.jpg'
      },
    ],
  },
  {
    'name': 'bougies',
    'title': 'Bougies',
    'main': 'super-candellissimo.jpg',
    'packagings': [
      {
        'name' : 'Super Candellissimo',
        'image': 'super-candellissimo.jpg'
      },
      {
        'name' : 'Bougies Féeriques',
        'image': 'bougies-feeriques.jpg'
      },
      {
        'name' : 'Atelier de Bougies',
        'image': 'atelier-de-bougies.jpg'
      },
    ],
  },
];

export default { carouselData, packagings };
