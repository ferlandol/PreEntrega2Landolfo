import CartWidget from "./CartWidget";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { searchProducts } from "../asyncMock"

function NavBar({ cartCount, title }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      try {
        const products = await searchProducts(term);
        setResults(products);
        navigate('/results', { state: { results: products } });
      } catch (error) {
        console.error("Error al buscar productos:", error);
        setResults([]);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/category/remeras"
              >
                Remeras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/pantalones">
                Pantalones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/camperas">
                Camperas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Buscar productos..."
              className="form-control me-2"
            />
            <CartWidget cartCount={cartCount} />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;