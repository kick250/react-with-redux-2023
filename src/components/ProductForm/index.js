import { useState } from "react"
import FormInput from "../FormInput";
import styles from './index.module.css';

export default function ProductForm({ onCreate }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0.0)
  const [imageLink, setImageLink] = useState('')

  function onSave(event) {
    event.preventDefault();
    const product = {
      id: Date.now(),
      name,
      price,
      imageLink
    }
    onCreate(product)
  }

  return (
    <form onSubmit={onSave} className={styles.form}>
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