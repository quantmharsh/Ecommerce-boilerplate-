import React, { useState, useEffect } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        if (!response.ok) throw new Error('Data could not be fetched!');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    // Here, you would add the product to your cart's state or context
  };

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product" onClick={() => handleProductClick(product)}>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="product-detail-card">
          <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '200px', height: '200px' }} />
          <h3>{selectedProduct.title}</h3>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.amount}</p>
          <p>Rating: {selectedProduct.rating} / 5</p>
          <button onClick={() => handleAddToCart(selectedProduct)}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default Products;
