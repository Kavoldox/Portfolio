import React from 'react'

const carouselData = [
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
      {'type':'CSS', 'techno': 'SASS'},
      {'type':'BACK', 'techno': 'PHP'},
      {'type':'BDD', 'techno': 'MySQL'},
    ],
    fonctionnalités: [
      'Tri par catégorie et auteur',
      'Recherche de posts',
    ],
    informations: [
      {'info': 'Requête SQL, PDO'},
      {'info': 'Burger Menu'},
      {'info': 'Recherche de posts'},
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
    title: `MealOclock`,
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
]

export default carouselData;
