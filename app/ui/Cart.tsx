'use client'

import { useCart } from '../providers/CartProvider'

export default function Cart() {
  const { cartItems, isOpen, setIsOpen } = useCart()

  return (
    <div className="cart" style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="cart-body">
        <div className="cart-title">Корзина</div>
        <div className="cart-total">
          Общая сумма: <span>0</span> руб
        </div>

        <div className="cart-wrapper">
          <pre>
            {cartItems.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </pre>

          <div id="cart-empty">Ваша корзина пока пуста</div>
        </div>
        <button className="btn btn-primary cart-confirm">Оформить заказ</button>
        <div className="cart-close" onClick={() => setIsOpen(false)}></div>
      </div>
    </div>
  )
}
