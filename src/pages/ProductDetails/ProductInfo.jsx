import React, { useContext } from 'react'
import { FaRegHeart, FaRegStarHalfStroke, FaShare, FaStar } from 'react-icons/fa6'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../components/context/CartContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function ProductInfo({product}) {

    const {cartItems , addToCart , addToFavorites , favorites , removeFromFavorites }  = useContext(CartContext)

     const isInCart = cartItems.some(i=> i.id === product.id);

     const navigate = useNavigate()

     const handleAddToCart = () => {
     addToCart(product) 

     toast.success(
      <div className="toast_wrapper">
        <img  src={product.images[0]} alt="" className='toast_img' />

        <div className="toast_content">
          <strong>{product.title}</strong>
          added to Cart
          <div>
            <button className='btn' onClick={() => navigate('/cart')}>View Cart</button>
          </div>
        </div>
      </div>
      ,{duration : 3500}
     )

  }

  
  //favorites

   const isInFav = favorites.some(i=> i.id === product.id);

  const handleAddToFav = ()=> {
    if(isInFav) {
      removeFromFavorites(product.id)
       toast.error(`${product.title} removed From Favorites `)

    }else{
       addToFavorites(product)
    toast.success(`${product.title} added To favorites`)

    }
   
  }
  

  return (
     <div className="details_item">
           <h1 className="name">{product.title}</h1>
           <div className="stars">
             <FaStar />
             <FaStar />
             <FaStar />
             <FaStar />
             <FaRegStarHalfStroke />
           </div>

           <p className="price">$ {product.price}</p>

           <h5>
             Availabilty: <span>{product.availabilityStatus}</span>
           </h5>
           <h5>
             brand: <span>{product.brand}</span>
           </h5>
           <p className="desc">{product.description}</p>
           <h5>
             rating: <span>{product.rating}</span>
           </h5>
           <h5 className="stock">
             {" "}
             <span>
               Hurry Up! Only {product.stock} Products left in stock{" "}
             </span>
           </h5>
           <button onClick={handleAddToCart} className= {`btn ${isInCart ? 'in-cart' : ''}`}>
             {isInCart ? "item in cart" : "Add to cart"}         <TiShoppingCart />
           </button>

           <div className="icons">
             <span className={`${isInFav ? "in-fav" : ""}`} onClick={handleAddToFav}>
               <FaRegHeart />
               </span>
            
             <span>
               <FaShare />
             </span>
           </div>
         </div>
  )
}

export default ProductInfo
