import React, { useEffect } from "react";
import ProductPanel from "../components/ProductPanel";
import UserPanel from "../components/UserPanel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  removeProduct,
  
} from "../redux/actions/products";

import {
  fetchUsers
} from "../redux/actions/user"


const AdminPanelContainer = () => {
  const productos = useSelector((state) => state.products);
  const usuarios= useSelector((state)=>state.user.users);

  const dispatch = useDispatch();

  

  
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchUsers());
    
    return () => {};
  }, []);

  const handleDelete = (id) => { 
    dispatch(removeProduct(id))
   }

  useEffect(() => {
    console.log(productos,usuarios);
    return () => {};
  }, [productos,usuarios]);

  return (
    <div className="container section">
      <div className="row">
        <ul className="tabs tabs-fixed-width tabs-swipe-demo z-depth-2 #880e4f pink darken-4">
          <li className="tab">
            <a className="active" href="#productos_tabla">
              Productos
            </a>
          </li>
          <li className="tab">
            <a href="#usuarios_tabla">Usuarios</a>
          </li>
        </ul>

        <div id="productos_tabla">
          <table className="striped grey lighten-4">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Imagen</th>
                <th>Disponible</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>
              {productos.products.map((producto, i) => {
                return <ProductPanel key={i} producto={producto} handleDelete={handleDelete} />;
              })}
            </tbody>
          </table>

          <Link
            class="waves-effect waves-light btn #880e4f pink darken-4"
            to="/newproduct"
          >
            {" "}
            Nuevo Producto{" "}
          </Link>
        </div>

        <div id="usuarios_tabla">
          <table class="striped grey lighten-4">
            <thead>
              <tr>
                <th>Email</th>
                <th>Rol</th>
                <th>Compras</th>
                <th>Carrito</th>
                <th>Comentarios</th>
                <th>Ratings</th>
                <th>Editar</th>
              </tr>
            </thead>
            {/* de donde me traigo los usuarios??? */}
             <tbody>
            {usuarios.map((users, i) => {
              return <UserPanel key={i} user={users} />;
            })}
          </tbody>  
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelContainer;
