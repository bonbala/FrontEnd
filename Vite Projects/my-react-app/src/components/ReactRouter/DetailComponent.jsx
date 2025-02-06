import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ThemeContext } from '../../Store/Context';

const DetailComponent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { listShoes } = useContext(ThemeContext);

  const handleGetProduct = () => {
    console.log('listShoes:', listShoes);
    console.log('id:', id);

    if (!listShoes || listShoes.length === 0) {
      console.error('Product list is empty or not loaded');
      return;
    }

    const productDetail = listShoes.filter((p) => p.id === Number(id));
    console.log('productDetail:', productDetail);

    if (productDetail.length > 0) {
      setProduct(productDetail[0]);
    } else {
      alert('Product not found');
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, [listShoes, id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default DetailComponent;
