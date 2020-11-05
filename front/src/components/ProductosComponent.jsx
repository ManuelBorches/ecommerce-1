import React from 'react';
import {Link} from 'react-router-dom'
import SoloProductoComponent from './SoloProductoComponent';


const ProductosComponent = ({producto}) => {
    return ( 
            
            

            <div className='col s4 m3'>
                <div className="card hoverable">
                    <div className="card-image ">
<<<<<<< HEAD
                        <img src={producto.imgURL}/>
                        <Link to='/products/:id' component={SoloProductoComponent} producto={producto} className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4"><i class="material-icons">shopping_basket</i></Link>
                        <a className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4"><i class="material-icons">shopping_basket</i></a>
=======
                        <img src={producto.imgURL} alt=""/>
                        <a className="btn-floating halfway-fab waves-effect waves-light #880e4f pink darken-4">
                        <i class="material-icons">shopping_basket</i></a>
>>>>>>> b3e9fbcf8f59ad7000b5764c03c21c07d5bec6c2
                    </div>
              
                    <div className="card-content">
                        <span className="card-title">{producto.nombre}</span>
                        <p>{producto.descripcion}</p>
                    </div>
                    <div className="card-action center">
                        <a href="#idModal" className='btn modal-trigger red'>Detalles</a>
                    </div>
                </div>
            </div>
           
    );
}
 
export default ProductosComponent;