import React from 'react';
import ProductCard from './component/ProductCard';

const App = () => {
  return (
    <div>
      <h1>Product Showcase</h1>
      <ProductCard 
        title="Wireless Headphones"
        description="Noise-cancelling, over-ear headphones"
        price={199.99}
        imageUrl="https://example.com/headphones.jpg"
      />
    </div>
  );
};

export default App;