import React from 'react'

const carouselData = [
  {
    path: 'oblog',
    title: 'Oblog',
    resume: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier. To start, we create two layers of circles inside an SVG, then we animate those two layers by translating the Y value with a keyframe animation. We apply the animation to each layer instead of individual elements and reuse the same animation for both layers. By simply giving them different durations, we can add some depth to our scene.',
    type: 'Blog',
    techno: ['WordPress'],
    image: "oblog/PC-Oblog",
    ipad:"derive/ipad-derive",
    phone: "derive/phone-derive",
  },
  {
    path:'derive',
    title: 'A la dérive',
    resume: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier. To start, we create two layers of circles inside an SVG, then we animate those two layers by translating the Y value with a keyframe animation. We apply the animation to each layer instead of individual elements and reuse the same animation for both layers. By simply giving them different durations, we can add some depth to our scene.',
    type: 'Blog',
    techno: ['PHP'],
    image: 'derive/PC-Derive',
    ipad:"derive/ipad-derive",
    phone: "derive/phone-derive",
  },
  {
    path:'omeal',
    title: `MealOclock`,
    resume: 'The snow is created using an SVG and the technique is very similar to the way we created the bubbles earlier. To start, we create two layers of circles inside an SVG, then we animate those two layers by translating the Y value with a keyframe animation. We apply the animation to each layer instead of individual elements and reuse the same animation for both layers. By simply giving them different durations, we can add some depth to our scene.',
    type: 'Blog',
    techno: ['PHP'],
    image: 'omeal/PC-omeal',
    ipad:"omeal/ipad-omeal",
    phone: "omeal/phone-omeal",
  },
]

export default carouselData;
