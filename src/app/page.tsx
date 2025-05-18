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
        {/* 궤도 실선(ellipse SVG) 렌더링 부분 완전히 제거 */}
        {/* 행성 렌더링 */}
        {planets.slice(1).map((planet, idx) => {
          const { a, e } = ORBIT_DATA[idx + 1];
          const b = a * Math.sqrt(1 - e * e);
          const theta = (rotations[idx + 1] / 180) * Math.PI;
          // 초점 기준
          const x = a * Math.cos(theta) - a * e;
          const y = b * Math.sin(theta);
          // 행성 크기: 실제 지름 비율을 임의 스케일로 변환 (지구 40px 기준, 최소 16px, 최대 60px)
          const DIAMETERS = [4879, 12104, 12756, 6792, 142984, 120536, 51118, 49528];
          const EARTH_DIAMETER = 12756;
          const EARTH_SIZE = 40; // px
          const size = Math.max(16, Math.min(60, Math.round((DIAMETERS[idx] / EARTH_DIAMETER) * EARTH_SIZE)));
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
              <PlanetCard planet={planet} rotation={-rotations[idx + 1]} size={size} />
            </div>
          );
        })}
        {/* 태양은 항상 화면 중앙(초점) */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 4,
          }}
        >
          <PlanetCard planet={planets[0]} size={140} />
        </div>
      </div>
    </main>
  );
}