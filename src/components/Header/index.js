import { Link } from 'react-router-dom';
import styles from './index.module.css';
import { useSelector } from 'react-redux';


export default function Header() {
  const products = useSelector(store => store.products)

  return (
    <header className={styles.header}>
      <h1>Produtos</h1>
      <div className={styles.links}>
        <Link to='/new'>Criar produtos</Link>
        <Link to='/products'>Ver produtos</Link>
      </div>
      <span>
        Total de produtos: {products.length}
      </span>
    </header>
  )
}