export interface Planet {
  name: string;
  image: string;
  description: string;
}

export const planets: Planet[] = [
  {
    name: 'Mercury',
    image: '/mercury.svg',
    description: 'The smallest planet and closest to the Sun.'
  },
  {
    name: 'Venus',
    image: '/venus.svg',
    description: 'Venus has a thick, toxic atmosphere and is the hottest planet.'
  },
  {
    name: 'Earth',
    image: '/earth.svg',
    description: 'Our home planet, the only one known to support life.'
  },
  {
    name: 'Mars',
    image: '/mars.svg',
    description: 'A dusty, cold, desert world with a very thin atmosphere.'
  },
  {
    name: 'Jupiter',
    image: '/jupiter.svg',
    description: 'The largest planet with a giant storm known as the Great Red Spot.'
  },
  {
    name: 'Saturn',
    image: '/saturn.svg',
    description: 'Famous for its impressive ring system.'
  },
  {
    name: 'Uranus',
    image: '/uranus.svg',
    description: 'An ice giant with a unique sideways rotation.'
  },
  {
    name: 'Neptune',
    image: '/neptune.svg',
    description: 'An ice giant known for its strong winds and storms.'
  }
];
