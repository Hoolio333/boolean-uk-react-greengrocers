const CartItem = ({ cartItem, updateCartItem }) => {
  return (
    <li>
      <img
        className="cart--item-icon"
        src={`/assets/icons/${cartItem.item.id}.svg`}
        alt={cartItem.item.id}
      />
      <p>{cartItem.item.name}</p>
      <button
        className="quantity-btn remove-btn center"
        onClick={() => {
          cartItem.quantity--
          updateCartItem(cartItem)
        }}
      >
        -
      </button>
      <span className="quantity-text center">{cartItem.quantity}</span>
      <button
        onClick={() => {
          cartItem.quantity++
          updateCartItem(cartItem)
        }}
        className="quantity-btn add-btn center"
      >
        +
      </button>
    </li>
  )
}

export default CartItem
