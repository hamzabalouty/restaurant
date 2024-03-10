import React, { useEffect, useState } from 'react';
import './Shop.css';
import { NavLink } from 'react-router-dom';
import { shopData } from "../../data";
import ReactPaginate from "react-paginate";


function Shop() {

  const [users, setUsers] = useState(shopData.slice(0, 10));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;


  const disproducts = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((item) => {
      return (
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
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const allCategory = [...new Set(shopData.map((i) => i.category))];

  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setUsers(shopData);
    } else {
      const newArr = shopData.filter((item) => item.category === cat);
      setUsers(newArr);
    }
  };

  const onFilter = (cat) => {
    filterbyCategory(cat);
  };

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
        {disproducts}
      </div>
      <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          activeClassName={"paginationActive"}
        />
    </div>
  )
}

export default Shop;