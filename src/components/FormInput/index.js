import styles from './index.module.css';


export default function FormInput({label, placeholder, value, onChange, required, type='text'}) {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input type={type} required={required} value={value} placeholder={placeholder} onChange={onChange}/>
    </div>
  )
}