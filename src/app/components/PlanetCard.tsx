import Image from 'next/image';
import { Planet } from '../data/planets';
import styles from './PlanetCard.module.css';

export default function PlanetCard({ planet }: { planet: Planet }) {
  return (
    <div className={styles.card}>
      <Image src={planet.image} alt={planet.name} width={120} height={120} />
      <h3>{planet.name}</h3>
      <p>{planet.description}</p>
    </div>
  );
}
