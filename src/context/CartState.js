import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const incrementQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        const newQuantity = product.quantity + 1;
        const price = newQuantity * product.product_variations[0].price;

        return { ...product, quantity: newQuantity, price: price };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const decrementQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        const newQuantity = product.quantity - 1;
        const price = newQuantity * product.product_variations[0].price; // Assuming price is stored in product_variations array
        return { ...product, quantity: newQuantity, price: price };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((item) => item.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        incrementQuantity,
        decrementQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume the context
export const useData = () => useContext(CartContext);
