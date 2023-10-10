import styles from './index.module.css';


export default function ProductCard({product}) {
  return (
    <div className={styles.card}>
      <img src={product.imageLink} alt={product.name} />
      <h3>{product.name}</h3>
      <h4>{product.price}</h4>
    </div>
  )
}