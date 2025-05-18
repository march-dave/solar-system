import PlanetCard from './components/PlanetCard';
import { planets } from './data/planets';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Solar System</h1>
      <div className={styles.solarSystem}>
        <div className={styles.sunCard}>
          <PlanetCard planet={planets[0]} />
        </div>
        <div className={styles.planetsRow}>
          {planets.slice(1).map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
        </div>
      </div>
    </main>
  );
}
