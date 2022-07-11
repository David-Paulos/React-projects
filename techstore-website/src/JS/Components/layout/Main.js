import React, { Fragment } from 'react'
import { Outlet, Link } from "react-router-dom"
import '../../../CSS/Components/layout/Main.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function Main(props){
    const {countCartItems} = props
    
    const [menuDisplay, setMenuDisplay] = React.useState({display: 'none'})
    
    const styles = {    
                    display: menuDisplay.display, 
                    minHeight: `${window.innerHeight}px`
                    }
    
    const navMenu = document.querySelector('nav')
    
    // COUNTDOWN
    React.useEffect(()=>{
        const countDate = new Date("december 1, 2022 00:00:00").getTime()
        setInterval(()=>{
            const now = new Date().getTime()
            const gap = countDate-now;
            const seconds = 1000
            const minutes = seconds*60
            const hours = minutes*60
            const days = hours*24
            const d = Math.floor(gap/(days))
            const h = Math.floor(gap%(days)/(hours))
            const m = Math.floor(gap%(hours)/(minutes))
            const s = Math.floor(gap%(minutes)/(seconds))
            document.getElementById('days').innerText=d
            document.getElementById('hours').innerText=h
            document.getElementById('minutes').innerText=m
            document.getElementById('seconds').innerText=s
        }, 1000)
    })

    function handleMenu(){
        setMenuDisplay(prevState => {
          return prevState.display === 'none' ? 
          {display: 'flex'} : {display: 'none'} 
        })
    }

    function closeMenu(){
        navMenu.classList.toggle('close')
        setTimeout(() =>{
            navMenu.classList.toggle('close')
            handleMenu()
        } ,440)
    }

    return(
        <Fragment>
            <header>
                <Link to="/"><h1>TECHSTORE</h1></Link>
                <Link to="Shopping-Cart">
                    <ShoppingBasketIcon  className="header__shoppingIcon" />
                    {countCartItems > 0 && <p className="header__shoppingIcon__amount">{countCartItems}</p>}
                </Link>
                <MenuRoundedIcon 
                    className="header__menuIcon"
                    onClick={handleMenu}>        
                </MenuRoundedIcon>
            </header>
            <div className="saleClock">
                <div className="saleClock__title">
                    <h2>SALE</h2>
                </div>
                <div className="saleClock__countdown">
                    <h2>Ends in</h2>
                    <div className="saleClock__countdown__numbers">
                        <div className="box">
                            <h3 id="days">.</h3>
                            <span>Days</span>
                        </div>
                        <div className="box">
                            <h3 id="hours">.</h3>
                            <span>Hours</span>
                        </div>
                        <div className="box">
                            <h3 id="minutes">.</h3>
                            <span>Min</span>
                        </div>
                        <div className="box">
                            <h3 id="seconds">.</h3>
                            <span>Sec</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav style={styles}>
                <CloseRoundedIcon 
                    className="nav__closeIcon"
                    onClick={closeMenu}/>
                <ul className="nav__ul">
                    <li className="nav__ul__li">
                        <Link 
                            to="/" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>Home</Link>
                    </li>
                    <li className="nav__ul__li">
                        <Link 
                            to="/Shopping-cart" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>Shopping cart</Link>
                    </li>
                    <li className="nav__ul__li">
                        <Link 
                            to="/Coffee-Machines" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>Coffee Machines</Link>
                    </li>
                    <li className="nav__ul__li">
                        <Link 
                            to="/Headphones" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>Headphones</Link>
                    </li>
                    <li className="nav__ul__li">
                        <Link 
                            to="/Laptops" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>Laptops</Link>
                    </li>
                    <li className="nav__ul__li">
                        <Link 
                            to="/Mobile-phones" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>Mobile phones</Link>
                    </li>
                    <li className="nav__ul__li">
                        <Link 
                            to="/TVs" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>TVs</Link>
                    </li>
                    <li className="nav__ul__li">
                        <Link 
                            to="/Vacuum-Cleaners" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>Vacuum Cleaners</Link>
                    </li>
                    <li className="nav__ul__li">
                        <Link 
                            to="/Washing-Machines" 
                            className="nav__ul__li__link"
                            onClick={closeMenu}>Washing Machines</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </Fragment>
    )
}