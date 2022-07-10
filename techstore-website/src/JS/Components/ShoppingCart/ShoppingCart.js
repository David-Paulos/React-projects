import React from 'react'
import '../../../CSS/Components/ShoppingCart/ShoppingCart.css'
import '../../../CSS/Components/Departments/Product.css'
import Footer from '../Footer'

export default function ShoppingCart(props){
    const {cartItems, onAdd, onRemove} = props
    
    const [user, setUser] = React.useState(() => JSON.parse(localStorage.getItem('user')) || [])
    
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    const taxPrice = itemsPrice * 0.20
    const shippingPrice = itemsPrice > 2000 ? 0 : 50
    const totalPrice = itemsPrice + taxPrice + shippingPrice

    React.useEffect(()=>{
        const userNameString = JSON.stringify(user)
        localStorage.setItem('user', userNameString)
    }, [user])

    function handleSubmit(e){
        e.preventDefault()
        const {name, value} = e.target.previousElementSibling
        if(value === ' ' || value === ''){return alert('You must enter a valid name.')}
        const capitalizedName = value[0].toUpperCase() + value.slice(1)
        setUser([{
                    [name]: capitalizedName
                }])
    }

    function removeUser(){
        setUser([])
    }

    return(
        <div className="shoppingCart">
            {user.length === 0 ? 
                <form className="shoppingCart__userRegister">
                    <h2 className="shoppingCart__userRegister__h2">Register with us</h2>
                    <input 
                        className="shoppingCart__userRegister__input"
                        placeholder="Your name here"
                        required
                        type="text"
                        maxLength={20}
                        name="userName"
                        id="userName"
                        aria-label="your name"
                    >    
                    </input>
                    <button 
                        className='shoppingCart__userRegister__button'
                        type="submit"
                        onClick={handleSubmit}
                    >Register</button>
                </form> : 
                <div className="shoppingCart__interface">
                <div className="shoppingCart__interface__welcomeArea">
                    <h2 className="shoppingCart__interface__welcomeArea__h2">Welcome back, {user[0].userName} !</h2>
                    <button 
                        className="shoppingCart__interface__welcomeArea__removeButton"
                        type="button" 
                        onClick={removeUser}
                        >Remove user</button>
                    <h3 className="shoppingCart__interface__welcomeArea__h3">Your cart</h3>
                </div>
                <div className="shoppingCart__interface__results">
                    {cartItems.length === 0 && <div className="shoppingCart__interface__emptyResults">
                    <h3 className="shoppingCart__interface__emptyResults__h3">Is Empty!</h3>
                    </div>}
                    {cartItems.map(item => {
                        return( 
                            <div className="product" key={item.id}>
                                <figure className="product__figure">
                                    <div className="product__figure__imgContainer">
                                        <img className="product__figure__img" src={item.image} alt={item.name}/>
                                    </div>
                                    <div className="product__figure__description">
                                        <h3 className="product__figure__h3">{item.name}</h3>
                                        <h4  className="product__figure__h4">£{item.price}.00</h4>
                                        <h4  className="product__figure__h4">Quantity: {item.qty} x £{item.price.toFixed(2)}</h4>
                                        <div className="product__figure__buttonContainer">
                                        <button className="product__figure__button-remove" onClick={() => onRemove(item)}>-</button>
                                        <button className="product__figure__button" onClick={() => onAdd(item)}>+</button>
                                        </div>  
                                    </div>  
                                </figure>
                            </div>
                        )
                    })}
                </div>
                    {cartItems.length !== 0 && (
                        <div className="shoppingCart__interface__totalAmount">
                            <h2 className="shoppingCart__interface__totalAmount__h2">Total</h2>
                            <ul className="shoppingCart__interface__totalAmount__ul">
                                <li className="shoppingCart__interface__totalAmount__li">
                                    <h3 className="shoppingCart__interface__totalAmount__h3">Price before tax:</h3>
                                    <h3 className="shoppingCart__interface__totalAmount__h3">{itemsPrice.toFixed(2)}</h3>
                                </li>
                                <li className="shoppingCart__interface__totalAmount__li">
                                    <h3 className="shoppingCart__interface__totalAmount__h3">Tax (20%):</h3>
                                    <h3 className="shoppingCart__interface__totalAmount__h3">{taxPrice.toFixed(2)}</h3>
                                </li>
                                <li className="shoppingCart__interface__totalAmount__li">
                                    <h3 className="shoppingCart__interface__totalAmount__h3">Shipping cost:</h3>
                                    <h3 className="shoppingCart__interface__totalAmount__h3">{shippingPrice.toFixed(2)}</h3>
                                </li>
                                <li className="shoppingCart__interface__totalAmount__li">
                                    <h3 className="shoppingCart__interface__totalAmount__h3">Total price:</h3>
                                    <h3 className="shoppingCart__interface__totalAmount__h3">{totalPrice.toFixed(2)}</h3>
                                </li> 
                            </ul>
                        </div>
                    )}
                    
                </div>
                } <Footer />   
        </div>
    )
}
