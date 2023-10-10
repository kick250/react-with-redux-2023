import { useDispatch } from "react-redux";
import ProductForm from "../../components/ProductForm";
import { addProduct } from "../../store/reducers/products";

export default function New() {
  const dispatch = useDispatch();

  function onCreate(product) {
    dispatch(addProduct(product))
  }

  return (
    <div>
      <h2 style={{textAlign: 'center', margin: 24}}>Cadastro de produto</h2>
      <ProductForm onCreate={onCreate}/>
    </div>
  )
}