import React, { Children, createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {
   
   const [cartItems , SetCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : []
   })


   //increaseQuantity


  const increaseQuantity = (id) => {
    SetCartItems(prevItems => prevItems.map(item =>
      item.id === id ? {...item , quantity: item.quantity + 1} :item
    ))
  }


  //decreaseQuantity

  const decreaseQuantity = (id) => {
    SetCartItems(prevItems => prevItems.map(item =>
      item.id === id && item.quantity > 1 ?
      {...item, quantity: item.quantity -1 }: item
    ))
  }


  //removeFromCart

  const removeFromCart = (id) => {
    SetCartItems(prevItems => prevItems.filter(item => item.id !==id))
  }









   const addToCart = (item) => {
    SetCartItems((prevItems) => [...prevItems , {...item, quantity: 1}])
   }

   useEffect(() => {
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
   }, [cartItems])



  return (
    <CartContext.Provider value={{cartItems , addToCart , increaseQuantity , decreaseQuantity , removeFromCart}} >

      {children}

    </CartContext.Provider>
  )
}
