import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import styles from './index.module.css';

export default function Products() {
  const products = useSelector(state => state.products);

  return (
    <div>
      <h2 style={{textAlign: 'center', margin: 24}}>Lista de produtos</h2>
      <div className={styles.products}>
        {
          products.map(product => {
            return <ProductCard product={product} key={product.id}/>
          })
        }
      </div>
    </div>
  )
}