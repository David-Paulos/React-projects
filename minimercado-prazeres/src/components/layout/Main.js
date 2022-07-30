import React, {Fragment} from 'react'
import { Outlet, Link } from "react-router-dom"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import '../../css/layout/Main.css';

export default function Main() {
  const [navDisplay, setNavDisplay] = React.useState(false)

  const styles = {
    display: navDisplay?'flex':'none',
    height: `${window.innerHeight}px`
  }
  
  function handleMenu(){
    setNavDisplay(prevState => !prevState)
  }

  function closeMenu(){
    document.querySelector('.nav').classList.toggle('close')
    setTimeout(() => {
      document.querySelector('.nav').classList.toggle('close')
      handleMenu()
    }, 440)
  }
  return (
    <Fragment>
      <header className="header">
        <Link to="/"><h1 className="header__h1">Mini Mercado Prazeres</h1></Link>
        <MenuRoundedIcon className="header__menuIcon"
                          onClick={handleMenu}
        />
      </header>
      <nav className="nav"
            style={styles}>
        <CloseRoundedIcon className="nav__closeIcon"
                          onClick={closeMenu}
        />
        <ul className="nav__ul">
            <li className="nav__ul__li">
                <Link className="nav__ul__li-link"
                        to="/"
                        onClick={closeMenu}>Página Principal</Link>
            </li>
            <li className="nav__ul__li">
                <Link className="nav__ul__li-link"
                        to="/Sobre-Nos"
                        onClick={closeMenu}>Sobre Nós</Link>
            </li>
            <li className="nav__ul__li">
                <Link className="nav__ul__li-link"
                        to="/Fumeiro-Regional"
                        onClick={closeMenu}>Fumeiro Regional</Link>
            </li>
            <li className="nav__ul__li">
                <Link className="nav__ul__li-link"
                        to="/Queijos-Regionais"
                        onClick={closeMenu}>Queijos Regionais</Link>
            </li>
            <li className="nav__ul__li">
                <Link className="nav__ul__li-link"
                        to="/Vegetais"
                        onClick={closeMenu}>Vegetais</Link>
            </li>
            <li className="nav__ul__li">
                <Link className="nav__ul__li-link"
                        to="/Fruta"
                        onClick={closeMenu}>Frutas</Link>
            </li>
            <li className="nav__ul__li">
                <Link className="nav__ul__li-link"
                        to="/Outros-Produtos-Regionais"
                        onClick={closeMenu}>Outros Produtos Regionais</Link>
            </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
    
  )
}
