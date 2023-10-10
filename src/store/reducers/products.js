import { createSlice } from '@reduxjs/toolkit'


const products = [
  { id: 1696900341154, name: 'Teclado', price: '99.99', imageLink: 'https://www.maxprint.com.br/media/catalog/product/cache/be322f506c99293c8d8d29e0228f7b6c/6/0/60000140.1.jpeg'},
  { id: 1696900341155, name: 'Mouse', price: '99.99', imageLink: 'https://m.media-amazon.com/images/I/61LCFzww5cL._AC_UF894,1000_QL80_.jpg'},
];

const productsSlice = createSlice({
  name: 'products',
  initialState: products,
  reducers: {
    addProduct: (state, {payload}) => {
      state.push(payload);
    }
  }
})

export const { addProduct }  = productsSlice.actions;

export default productsSlice;