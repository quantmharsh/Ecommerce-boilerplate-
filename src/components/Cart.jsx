import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [favourite, setFavourite] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch('http://localhost:3000/favourites');
        const data = await response.json();
        setFavourite(data);
      } catch (error) {
        console.error('Error fetching favourites:', error);
      }
    };

    fetchFavourites();
  }, []);

  return (
    <div>
      <h1>Favourite Products</h1>
      <ul>
        {favourite.map(fav => (
          <li key={fav.id}>Product ID: {fav.productId}</li>
          // Render more product details as needed
        ))}
      </ul>
    </div>
  );
};

export default Cart;
