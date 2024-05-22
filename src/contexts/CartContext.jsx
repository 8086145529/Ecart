import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext()
function CartProvider({children}) {
  const [cart,setCart] = useState([])
  const [totalPrice,setTotalPrice] = useState(0)
  const [totalNum,setTotalNum] = useState(0)
  

// add item to cart
  const addToCart = (Product,id) => {
    // This line creates a new object newItem by spreading the properties of the Product object into it and adding a new property amount with a value of 1. This amount property is used to keep track of how many of this product are in the cart.Since we modify an object Product,we need to use {} to update that Product object with a key named amount 
    const newItem = {...Product,amount:1}
    // setCart(Product)
    // check if the item is already in the cart (so that id of that item in the cart,item.id),this returns that cart item if it already exist in the cart state
    const cartItem = cart.find((item)=>{
      return item.id === id;
    });
    // if cart item is already in the cart
    if(cartItem){
      // since you are modifying the quantity of existing items or adding new items to the cart, you should use map()
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        // Here we get that specific item and change the value of the amount key in it.
        return { ...item, amount: item.amount + 1 };
      }else{
        return item;
      }
    });
      // newCart is an array containing objects representing the items in the cart. It's updated by modifying the quantity of existing items or adding new items.
      setCart(newCart)
    }else{
      //newItem is an object representing a new item to be added to the cart. It includes properties copied from the Product object and an additional property amount initialized to 1
      setCart([...cart,newItem])
    }
  }

  // remove item from cart
 const removeFromCart = (id) => {
 const newCart= cart.filter((item)=> item.id !== id )// This newCart is a new array of items without that specific item.This is stored to the cart state which is mapped to get each cart item.so when the user clicks on the close icon,this new array shows.
 setCart(newCart)
 }
 
 // empty cart
 const emptyCart = () => {
  setCart([])
 }

 // increase amount
const increaseAmount = (id) => {
  const item = cart.find((item) => {
   return item.id=== id 
  })
  addToCart(item,id)

}

 // OR
// const increaseAmount = (item,id) => {
//   addToCart(item,id)
// }

 // decrease amount
 const decreaseAmount = (id) => {
  const cartItem = cart.find((item) =>{
    return item.id === id
  })
  if (cartItem) {
    const newCart = [...cart].map((item)=>{
      if(item.id === id){ //For the item with the specified id, it creates a new object with the same properties but decreases the amount property by 1.
       return {...item,amount:item.amount - 1}
      }else{
        return item  //If the item's id doesn't match the provided id, it returns the item unchanged.
      } 
      })
      setCart(newCart)   
  }
  if (cartItem.amount=== 1) {// it implies that the original cartItem had an amount of 1 before the decrement operation. In such a case, it removes the item from the cart.
    removeFromCart(id)
    
  }

 }

 // Total number of items in cart
useEffect(()=>{
  if(cart){
    const amount = cart.map((item)=>item.amount)
    const sum = amount.reduce((accumulator,currentAmount)=>{
     return accumulator + currentAmount
    },0)
    setTotalNum(sum)
    
  }
})


 // Total price
 useEffect(()=>{
  const total = cart.reduce((accumulator,cartItem)=>{
     return accumulator + cartItem.price * cartItem.amount
  },0)
  setTotalPrice(total)
 })



  return (
    <CartContext.Provider value={{cart,setCart,addToCart,removeFromCart,emptyCart,increaseAmount,decreaseAmount,totalNum,totalPrice}}>
    {children}
    </CartContext.Provider>
  )
}

export default CartProvider