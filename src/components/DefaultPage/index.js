import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import styles from './index.module.css';

export default function DefaultPage() {
  return (
    <div className={styles.content}>
      <main>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}