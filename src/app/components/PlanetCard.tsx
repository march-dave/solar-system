import React from 'react';
import Image from 'next/image';
import { Planet } from '../data/planets';
import styles from './PlanetCard.module.css';

export default function PlanetCard({ planet, rotation = 0, size = 40 }: { planet: Planet, rotation?: number, size?: number }) {
  return (
    <div className={`${styles.card} ${planet.name === 'Sun' ? styles.sun : ''}`}>
      {planet.name === 'Sun' ? (
        <svg width={size} height={size} viewBox="0 0 120 120">
          <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffbe6"/>
              <stop offset="60%" stopColor="#ffe066"/>
              <stop offset="85%" stopColor="#ffb700"/>
              <stop offset="100%" stopColor="#ff9900"/>
            </radialGradient>
            <filter id="sunGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="10" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* 바깥 glow */}
          <circle cx="60" cy="60" r="44" fill="#ffe066" opacity="0.45" filter="url(#sunGlow)" />
          {/* 태양 본체 */}
          <circle cx="60" cy="60" r="40" fill="url(#sunGradient)" filter="url(#sunGlow)" />
          {/* 중앙 밝은 코어 */}
          <circle cx="60" cy="60" r="18" fill="#fffbe6" opacity="0.7" />
        </svg>
      ) : (
        <Image src={planet.image} alt={planet.name} width={size} height={size} />
      )}
      <h3>{planet.name}</h3>
      <p>{planet.description}</p>
    </div>
  );
}
