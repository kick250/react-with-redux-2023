import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "./pages/New";
import Products from "./pages/Products";
import Header from "./components/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/new" element={<New />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<h1>Rota não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}