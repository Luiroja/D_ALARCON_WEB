import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./cart.css"
import { useDispatch, useSelector } from 'react-redux'
import { cartQuantitySelector, cartTotalSelector } from '../../redux/cartRedux'
import { MdAdd, MdRemove } from 'react-icons/md'
import { Badge } from '@mui/material'
import { FiShoppingCart } from 'react-icons/fi'
import { RiDeleteBin5Fill } from "react-icons/ri"
import { deleteProduct} from '../../redux/apiCalls'
import { clearCart } from '../../redux/cartRedux'

function Cart() {
    const dispatch = useDispatch();
    const cartQuantity= useSelector( cartQuantitySelector);
    const cartTotal = useSelector( cartTotalSelector);
    
   
    const products = useSelector((state ) => state.cart.products)
    
    
    const handleDeleteCart = (id) => {
    deleteProduct(id, dispatch)
    }

    const handleClearCart = () => {
        dispatch(
            clearCart({...products})
            )
    }


  return (
    <div className="containerCart">
        <Navbar/>
        <div className="wrapperCart">
            <h3 className="titleCart">TUS PEDIDOS</h3>
            <div className="topCart">
                <button className="topButtonCart"> AGREGAR OTRO PRODUCTO</button>
                <div className="topTexts">
                
                    <div className="topText">
                    <Badge badgeContent={cartQuantity} color="primary">Agregados al carrito  
                    <FiShoppingCart style={{ color: "gray", fontSize: 32 }}/>
                    </Badge>
                    </div>
                </div>
                <button 
                className="topButtonCart"
                onClick={handleClearCart}
                > Vaciar Carrito</button>
            </div>
            <div className="bottomCart">
                <div className="infoCart">

                    {products.map((product) =>(


            <div className="productCart">
            <div className="productCartDetails">
                <img src={product.img}  alt="" className='imgCart'/>
                <div className="detailsProduct">
                    <span className="productNameCart"><b>Producto:</b> {product.title} </span>
                    <span className="productIdCart"><b>ID:</b> {product._id} </span>
                    <div className="productColorCart"></div>
                    <span className="productSizeCart"><b>Tamaño: </b>{product.size}</span>
                </div>
            </div>
            <div className="priceDetailCart">
                <div className="priceAmountContainerCart">
                    
                    <MdRemove className='iconContainer'
                        />
                            <h3 className="amount"> {product.quantity} </h3>

                    <MdAdd className='iconContainer'
                        />
                </div>
                <div className="productPriceCart"> S/ {product.price}</div>
                <div className='productCartDetails'>
                    
                    <RiDeleteBin5Fill 
                        onClick={handleDeleteCart} 
                        style={{ color: "red", fontSize: 32 }}
                     />         

                </div>
            </div>
            </div>

                    ))}

                    <hr/>

                </div>

                <div className="summaryCart">
                <h3 className='summaryTitle'> RESUMEN DE COMPRA</h3>
                <div className="summaryItem">

                    
                    <span className='summaryItemText'><b>SUBTOTAL</b></span>
                    <span className='summaryItemPrice'> S/ {cartTotal}</span>
                </div>

                <div className="summaryItem">
                    <span className='summaryItemText'><b>TOTAL</b></span>
                    <span className='summaryItemPrice'> S/ {cartTotal}</span>
                </div>
                <button className='buttonCheckCart'>COMPRAR AHORA</button>
                </div>
               
                

            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Cart