import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import styles from './index.module.css';
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navegate = useNavigate();
  const products = useSelector(state => state.products);

  function goToUpdate(product) {
    navegate(`/products/${product.id}`);
  }

  return (
    <div>
      <h2 style={{textAlign: 'center', margin: 24}}>Lista de produtos</h2>
      <div className={styles.products}>
        {
          products.map(product => {
            return <ProductCard onClick={goToUpdate} product={product} key={product.id} />
          })
        }
      </div>
    </div>
  )
}