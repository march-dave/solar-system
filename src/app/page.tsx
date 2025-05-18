"use client";
import React, { useEffect, useState } from 'react';
import PlanetCard from './components/PlanetCard';
import { planets } from './data/planets';
import styles from './page.module.css';

// 각 행성의 이심률(e)과 장반경(a, px 단위로 임의 스케일)
const ORBIT_DATA = [
  { a: 120, e: 0.0 },    // 태양(고정)
  { a: 160, e: 0.206 },  // 수성
  { a: 210, e: 0.007 },  // 금성
  { a: 260, e: 0.017 },  // 지구
  { a: 310, e: 0.093 },  // 화성
  { a: 400, e: 0.048 },  // 목성
  { a: 480, e: 0.056 },  // 토성
  { a: 560, e: 0.047 },  // 천왕성
  { a: 640, e: 0.009 },  // 해왕성
];
const ORBIT_BASE_DURATION = 6; // seconds

export default function HomePage() {
  const [rotations, setRotations] = useState<number[]>(planets.map(() => 0));
  const [hold, setHold] = useState(false);
  useEffect(() => {
    if (hold) return;
    const start = Date.now();
    const interval = setInterval(() => {
      setRotations(planets.map((_, idx) => {
        if (idx === 0) return 0; // 태양은 회전 없음
        const duration = ORBIT_BASE_DURATION + (idx - 1) * 2;
        const elapsed = ((Date.now() - start) / 1000) % duration;
        return (elapsed / duration) * 360;
      }));
    }, 30);
    return () => clearInterval(interval);
  }, [hold]);

  return (
    <main className={styles.main}>
      <div style={{ position: 'absolute', top: 24, right: 32, zIndex: 10 }}>
        <button onClick={() => setHold(h => !h)} style={{ padding: '8px 18px', fontSize: '1.1em', borderRadius: 8, background: '#222', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px #0004' }}>
          {hold ? 'Resume' : 'Hold'}
        </button>
      </div>
      <div className={styles.solarSystemOrbit}>
        <div className={styles.sunCenter}>
          <PlanetCard planet={planets[0]} />
        </div>
        {/* 각 행성의 궤도(타원) 렌더링 */}
        {planets.slice(1).map((_, idx) => {
          const { a, e } = ORBIT_DATA[idx + 1];
          const b = a * Math.sqrt(1 - e * e); // 단축 반지름
          return (
            <svg
              key={"orbit-path-" + idx}
              className={styles.planetOrbitPath}
              width={a * 2}
              height={a * 2}
              style={{
                position: 'absolute',
                left: `calc(50% - ${a}px + ${a * e}px)`,
                top: `calc(50% - ${b}px)`,
                zIndex: 1,
                pointerEvents: 'none',
              }}
            >
              <ellipse
                cx={a}
                cy={b}
                rx={a}
                ry={b}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth={1}
                fill="none"
              />
            </svg>
          );
        })}
        {/* 행성 렌더링 */}
        {planets.slice(1).map((planet, idx) => {
          const { a, e } = ORBIT_DATA[idx + 1];
          const b = a * Math.sqrt(1 - e * e);
          const theta = (rotations[idx + 1] / 180) * Math.PI;
          // 타원 방정식: x = a*cos(t), y = b*sin(t) (중심 기준)
          const x = a * Math.cos(theta);
          const y = b * Math.sin(theta);
          return (
            <div
              key={planet.name}
              style={{
                position: 'absolute',
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: `translate(-50%, -50%)`,
                zIndex: 3,
              }}
            >
              <PlanetCard planet={planet} rotation={-rotations[idx + 1]} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
