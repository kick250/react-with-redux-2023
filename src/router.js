import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "./pages/New";
import Products from "./pages/Products";
import EditProduct from "./pages/EditProduct";
import DefaultPage from "./components/DefaultPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<New />} />
          <Route path="/new" element={<New />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<EditProduct />} />
        </Route>
        <Route path="*" element={<h1>Rota não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  )
}