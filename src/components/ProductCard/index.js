import styles from './index.module.css';


export default function ProductCard({product, onClick}) {
  return (
    <div className={styles.card} onClick={() => onClick(product)}>
      <img src={product.imageLink} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <h4>R$ {parseFloat(product.price).toFixed(2)}</h4>
      </div>
    </div>
  )
}