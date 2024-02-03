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

  const handleAddToFavourites = async (product) => {
    try {
      const response = await fetch('http://localhost:3000/favourites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          // Include any other product details you deem necessary
        }),
      });
      if (response.ok) {
        console.log('Product added to favourites successfully');
        // Optionally, update UI or state to reflect the change
      } else {
        console.error('Failed to add product to favourites');
      }
    } catch (error) {
      console.error('Error adding product to favourites:', error);
    }
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
          <button onClick={() => handleAddToFavourites(selectedProduct)}>Add to Favourites</button>

        </div>
      )}
    </div>
  );
};

export default Products;
