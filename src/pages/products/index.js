import ProductCard from "../../components/ProductCard";
import styles from './index.module.css';

export default function Products() {
  const products = [
    { id: 1696900341151, name: 'Teclado', price: '99.99', imageLink: 'https://www.maxprint.com.br/media/catalog/product/cache/be322f506c99293c8d8d29e0228f7b6c/6/0/60000140.1.jpeg'},
    { id: 1696900341152, name: 'Teclado', price: '99.99', imageLink: 'https://www.maxprint.com.br/media/catalog/product/cache/be322f506c99293c8d8d29e0228f7b6c/6/0/60000140.1.jpeg'},
    { id: 1696900341153, name: 'Teclado', price: '99.99', imageLink: 'https://www.maxprint.com.br/media/catalog/product/cache/be322f506c99293c8d8d29e0228f7b6c/6/0/60000140.1.jpeg'},
    { id: 1696900341154, name: 'Teclado', price: '99.99', imageLink: 'https://www.maxprint.com.br/media/catalog/product/cache/be322f506c99293c8d8d29e0228f7b6c/6/0/60000140.1.jpeg'}
  ];

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