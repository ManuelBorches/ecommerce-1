import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidenav from './Sidenav';
import { useDispatch } from 'react-redux';


import { fetchProduct, fetchProducts } from '../redux/actions/products'

const useInput = (name) => {
  const [value, setValue] = useState("");
  const onChange = ({ target: { value } }) => setValue(value);
  return { value, onChange, name };
}

const NavBar = () => {
  const input = useInput("search")
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    if (input.value === "") dispatch(fetchProducts())
    else dispatch(fetchProduct(input.value))
  }
  return (
    //NABVAR //
    <div className="App">
      <nav>
        <div className="nav-wrapper #880e4f pink darken-4">
          <a href="/shopping" className="brand-logo center">Lenceria</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html"><i className="material-icons">search</i></a></li>
            <li className="input-field">
              <form onSubmit={handleSubmit}>
                <input {...input} type="text" id="autocomplete-input" class="autocomplete" placeholder="Busqueda" />
              </form>
            </li>
          </ul>
          <ul className="lefth hide-on-med-and-down">
            <li>
              <Link to="/login"><i className="material-icons prefix">person_outline</i></Link>
            </li>
            <li>
              <Link to="/signup"><i className="material-icons prefix">group_add</i></Link>
            </li>
            <li><Link to="/">Productos</Link></li>
            <li><Link to="/" ><Sidenav /></Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


export default NavBar;