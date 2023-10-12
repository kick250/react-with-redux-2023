import { useState } from "react"
import FormInput from "../FormInput";
import styles from './index.module.css';

export default function ProductForm({ onSave, product }) {
  const productId = product?.id
  const [name, setName] = useState(product?.name || '');
  const [price, setPrice] = useState(product?.price || 0.0);
  const [imageLink, setImageLink] = useState(product?.imageLink || '');

  function onSubmit(event) {
    event.preventDefault();
    const product = {
      id: productId || Date.now(),
      name,
      price,
      imageLink
    }
    onSave(product)
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <FormInput
        label='Name'
        placeholder='Nome do produto'
        value={name}
        required={true}
        onChange={({target}) => setName(target.value)}
      />
      <FormInput
        label='Preço'
        placeholder='Preço do produto'
        value={price}
        required={true}
        onChange={({target}) => setPrice(target.value)}
        type="number"
      />
      <FormInput
        label='Imagem'
        placeholder='Link da imagem'
        value={imageLink}
        required={true}
        onChange={({target}) => setImageLink(target.value)}
      />
      <button>Salvar</button>
    </form>
  )
}