import './styles/reset.css'
import './styles/index.css'
import { useState } from 'react'

// import initialStoreItems from './store-items'
import storeItems from './store-items'
import StoreItem from './StoreItem'
import CartItem from './CartItem'
import Total from './Total'

const initialStoreItems = storeItems

export default function App() {
  // Setup state here...
  const [storeItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  const addToCart = item => {
    const itemInCart = cartItems.find(cI => cI.item.id === item.id)
    if (itemInCart) {
      itemInCart.quantity++
      setCartItems([...cartItems])
    } else {
      const cartItem = { item: item, quantity: 1 }
      setCartItems(cartItems => [...cartItems, cartItem])
    }
  }

  const updateCartItem = cartItem => {
    console.log(cartItem)
    if (cartItem.quantity === 0) {
      // remove cart item from cart
      const newCartItems = cartItems.filter(item => {
        return item.item.id !== cartItem.item.id
      })
      setCartItems(newCartItems)
    } else {
      setCartItems([...cartItems])
    }
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(storeItem => {
            return (
              <StoreItem
                key={storeItems.id}
                storeItem={storeItem}
                addToCart={addToCart}
              />
            )
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(cartItem => {
              return (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  updateCartItem={updateCartItem}
                />
              )
            })}
          </ul>
        </div>
        <div className="total-section">
          <Total cart={cartItems} />
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
