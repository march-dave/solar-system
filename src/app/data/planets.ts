export interface Planet {
  name: string;
  image: string;
  description: string;
  size: number;
}

export const planets: Planet[] = [
  {
    name: 'Sun',
    image: '/sun.svg',
    description: 'The star at the center of our solar system.',
    size: 160
  },
  {
    name: 'Mercury',
    image: '/mercury.svg',
    description: 'The smallest planet and closest to the Sun.',
    size: 30
  },
  {
    name: 'Venus',
    image: '/venus.svg',
    description: 'Venus has a thick, toxic atmosphere and is the hottest planet.',
    size: 70
  },
  {
    name: 'Earth',
    image: '/earth.svg',
    description: 'Our home planet, the only one known to support life.',
    size: 72
  },
  {
    name: 'Mars',
    image: '/mars.svg',
    description: 'A dusty, cold, desert world with a very thin atmosphere.',
    size: 50
  },
  {
    name: 'Jupiter',
    image: '/jupiter.svg',
    description: 'The largest planet with a giant storm known as the Great Red Spot.',
    size: 150
  },
  {
    name: 'Saturn',
    image: '/saturn.svg',
    description: 'Famous for its impressive ring system.',
    size: 140
  },
  {
    name: 'Uranus',
    image: '/uranus.svg',
    description: 'An ice giant with a unique sideways rotation.',
    size: 100
  },
  {
    name: 'Neptune',
    image: '/neptune.svg',
    description: 'An ice giant known for its strong winds and storms.',
    size: 98
  }
];
