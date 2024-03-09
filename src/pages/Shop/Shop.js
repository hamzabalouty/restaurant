import React, { useEffect, useState } from 'react';
import './Shop.css';
import { NavLink } from 'react-router-dom';
import { shopData } from "../../data";


function Shop() {

  const [itemsData, setItemsData] = useState(shopData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = itemsData.slice(firstPostIndex, lastPostIndex);

  //get all cat uniqe
  const allCategory = [...new Set(shopData.map((i) => i.category))];

  //filter by category
  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(shopData);
    } else {
      const newArr = shopData.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };

  //to filter by category
  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='shop'>
      <div className='shop-title'>
        <h3>Shop</h3>
      </div>
      <ul className="shop-cat-btns">
        {allCategory.map((cat) => (
          <li>
            <NavLink className="navlink-btn" onClick={() => onFilter(cat)}>
                {cat}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='cards-container'>
        {currentPosts.map((item) => (
          <div className='card-box' key={item.id}>
            <img src={item.image} alt='image'/>
            <div className='price-overlay'>
              <p>${item.price}</p>
            </div>
            <div className='card-content'>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              <button className='addtocart-card'>Add To Cart</button>
            </div>
          </div>
        ))}
          
      </div>
    </div>
  )
}

export default Shop;