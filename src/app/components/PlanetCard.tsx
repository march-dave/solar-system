import React from 'react';
import Image from 'next/image';
import { Planet } from '../data/planets';
import styles from './PlanetCard.module.css';

export default function PlanetCard({ planet, rotation = 0 }: { planet: Planet, rotation?: number }) {
  return (
    <div className={`${styles.card} ${planet.name === 'Sun' ? styles.sun : ''}`}>
      {planet.name === 'Sun' ? (
        <svg width={120} height={120} viewBox="0 0 120 120">
          <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbe6"/>
              <stop offset="80%" stopColor="#ffe066"/>
              <stop offset="100%" stopColor="#ffb700"/>
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="40" fill="url(#sunGradient)" />
        </svg>
      ) : (
        <Image src={planet.image} alt={planet.name} width={120} height={120} />
      )}
      <h3 style={{ transform: `rotate(${rotation}deg)` }}>{planet.name}</h3>
      <p style={{ transform: `rotate(${rotation}deg)` }}>{planet.description}</p>
    </div>
  );
}
