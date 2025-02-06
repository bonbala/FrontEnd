import React, { memo, useState, useMemo, useEffect, useCallback } from 'react';

const ProductList = memo(({ products, handleOnclick }) => {
  console.log('ProductList re-render');
  return (
    <div>
      <h1>This is ProductList</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleOnclick}>Click function parent</button>
    </div>
  );
});

const ReactHooks = () => {
  const [count, setCount] = useState(0);

  const TypeMoney = ['VND', 'USD', 'EURO'];

  const productList = useMemo(() => TypeMoney, []); //return value

  //useCallback
  const handleOnclick = useCallback(() => {
    console.log('child clicked');
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className='btn btn-success' onClick={() => setCount(count + 1)}>
        Click
      </button>
      <ProductList products={productList} handleOnclick={handleOnclick} />
    </div>
  );
};

export default ReactHooks;