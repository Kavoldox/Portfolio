import React from 'react'

const carouselData = [
  {
    id: 1,
    path: 'oblog',
    title: 'Oblog',
    resume: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier.',
    type: 'Blog',
    techno: ['WordPress'],
    home: 'derive/oblog-home',
    mac:'derive/mac-oblog',
    image: "oblog/PC-Oblog",
    ipad:"derive/ipad-derive",
    phone: "derive/phone-derive",
  },
  {
    id: 2,
    path:'derive',
    title: 'A la dérive',
    resume: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier. To start, we create two layers of circles inside an SVG, then we animate those two layers by translating the Y value with a keyframe animation. We apply the animation to each layer instead of individual elements and reuse the same animation for both layers.',
    type: 'Blog',
    techno: ['PHP'],
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
    resume: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier. To start, we create two layers of circles inside an SVG, then we animate those two layers by translating the Y value with a keyframe animation. We apply the animation to each layer instead of individual elements and reuse the same animation for both layers. By simply giving them different durations, we can add some depth to our scene.',
    type: 'Blog',
    techno: ['PHP'],
    home: 'derive/omeal-home',
    mac:'omeal/mac-derive',
    image: 'omeal/PC-omeal',
    ipad:"omeal/ipad-omeal",
    phone: "omeal/phone-omeal",
  },
]

export default carouselData;
