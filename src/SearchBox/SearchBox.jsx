import React from 'react';
import './SearchBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAction } from '../store/toggle';
import { setSelectedProduct } from '../store/itemSlice';

const SearchBox = ({ searchText, onProductClick }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(toggleAction.toggleSingleProduct());
    onProductClick(); // Call the callback to reset search text
  };

  return (
    <div className="whole-search-container d-flex justify-content-center position-fixed w-100 h-100">
      <div className="d-flex flex-column searchh pe-2">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="search-item d-flex px-4 py-3 gap-2"
              onClick={() => handleProductClick(product)}
            >
              <div className="img-box1">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-fit-contain w-100 h-100"
                />
              </div>
              <div className="d-flex flex-column justify-content-center search-content">
                <h6 className="text-white">{product.title}</h6>
                <h3 className="text-white">
                  <span className="text-success">$</span>
                  {product.price}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBox;