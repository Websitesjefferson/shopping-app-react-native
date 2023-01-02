import React, { useState, createContext } from 'react'


export const CartContext = createContext({});

function CartProvider({ children }){
  const [cart, setCart] = useState([]);
  const [result, setResult] = useState(0)

  function addItemCart(ItemNew){

    const listItem = cart.findIndex( item => item.id === ItemNew.id)

    if(listItem !== - 1){

      let CartList = cart;

      
      CartList[listItem].amount = CartList[listItem].amount + 1;

      CartList[listItem].total =  CartList[listItem].amount * CartList[listItem].price;


      setCart(CartList)
      ResultCart(CartList)

      

      return

    }

    const data = {
      ...ItemNew,
      amount: 1,
      total: ItemNew.price
    }

    setCart(Products => [...Products, data])
    ResultCart([...cart, data])
    

  }

  function removeItemCart(product){

    const indexItem = cart.findIndex( item => item.id === product.id)

     if(cart[indexItem]?.amount > 1){

      let cartList = cart;

      
      cartList[indexItem].amount = cartList[indexItem].amount - 1;

      cartList[indexItem].total =  cartList[indexItem].total - cartList[indexItem].price;


      setCart(cartList)
      ResultCart(cartList)
      return

    }
    const removeItem = cart.filter(item => item.id !== product.id)
    setCart(removeItem)
    ResultCart(removeItem)

  }

  function ResultCart(items){
    let myCart = items;
    let Result = myCart.reduce((acc, obj) => {  return acc + obj.total }, 0)

    setResult(Result.toFixed(2))


  }

  return(
    <CartContext.Provider
      value={{
        cart,
        result,
        addItemCart,
        removeItemCart
        
      }}
    >
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider;