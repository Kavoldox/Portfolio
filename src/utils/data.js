import React from 'react'

const carouselData = [
  {
    id: 1,
    path: 'oblog',
    title: 'Oblog',
    resume: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier.',
    excerpt: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier.',
    type: 'Blog',
    techno: ['WordPress'],
    technos: [
      {'type':'CMS', 'techno': 'Wordpress'},
      {'type':'CSS', 'techno': 'SASS'},
      {'type':'BACK', 'techno': 'PHP'},
      {'type':'BDD', 'techno': 'MySQL'},
    ],
    fonctionnalités: [
      'Recherche',
    ],
    informations: [
      {'info': 'Développement WordPress'},
      {'info': 'Intégration template'},
      {'info': 'Recherche'},
    ],
    role: ['Intégration','Développement'],
    home: 'oblog/oblog-home',
    mac:'oblog/mac-oblog',
    image: "oblog/PC-Oblog",
    ipad:"derive/ipad-derive",
    phone: "derive/phone-derive",
  },
  {
    id: 2,
    path:'derive',
    title: 'A la dérive',
    excerpt: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier.',
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
    mac:'derive/mac-derive',
    image: 'derive/PC-Derive',
    ipad:"derive/ipad-derive",
    phone: "derive/phone-derive",
  },
  {
    id: 3,
    path:'omeal',
    title: `MealOclock`,
    excerpt: 'Site communautaire sur les habitudes alimentaires',
    resume: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier. To start, we create two layers of circles inside an SVG, then we animate those two layers by translating the Y value with a keyframe animation. We apply the animation to each layer instead of individual elements and reuse the same animation for both layers. By simply giving them different durations, we can add some depth to our scene.',
    type: 'Blog',
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
    mac:'omeal/mac-omeal',
    image: 'omeal/PC-omeal',
    ipad:"omeal/ipad-omeal",
    phone: "omeal/Phone-omeal",
  },
]

export default carouselData;
