import PlanetCard from './components/PlanetCard';
import { planets } from './data/planets';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Solar System</h1>
      <div className={styles.grid}>
        {planets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </main>
  );
}
