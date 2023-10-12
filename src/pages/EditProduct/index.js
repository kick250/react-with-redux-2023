import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import ProductForm from "../../components/ProductForm";
import { updateProduct } from "../../store/reducers/products";

export default function EditProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(({products}) =>
    products.find(product => product.id === parseInt(productId))
  );

  function onSave(product) {
    dispatch(updateProduct(product));
  }

  return (
    <ProductForm product={product} onSave={onSave}/>
  )
}