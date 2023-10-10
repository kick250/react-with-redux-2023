import { Link } from 'react-router-dom';
import styles from './index.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Produtos</h1>
      <div className={styles.links}>
        <Link to='/new'>Criar produtos</Link>
        <Link to='/products'>Ver produtos</Link>
      </div>
    </header>
  )
}