import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import HomeSwiper from './HomeSwiper'
import Servicos from './Servicos'
import Footer from '../Footer'
import '../../css//PaginaPrincipal/PaginaPrincipal.css'
import fumeiroPng from '../../images/paginaPrincipal-redirections/fumeiro.webp'
import queijoPng from '../../images/paginaPrincipal-redirections/queijo.webp'
import vegetaisPng from '../../images/paginaPrincipal-redirections/vegetais.webp'
import frutaPng from '../../images/paginaPrincipal-redirections/fruta.webp'
import melPng from '../../images/paginaPrincipal-redirections/mel.webp'

export default function PaginaPrincipal(){
    return (
        <div className="paginaPrincipal">
            <HomeSwiper />
            <Servicos />
            <div className="paginaPrincipal__backgroundImage1">
                <div className="backgroundImage1__textContainer">
                    <h3 className="backgroundImage1__text">Da Quinta para a sua Mesa</h3>
                </div> 
            </div>
            <h2 className="paginaPrincipal__redirections__title">Os Nossos Produtos</h2>
            <div className="paginaPrincipal__redirections">
                <Link to="/Fumeiro-Regional">
                    <figure className="redirections__figure">
                        <div className="redirections__figure__imgContainer">
                            <img src={fumeiroPng} alt="" className="redirections__figure__img"/>
                        </div>
                        <figcaption className="redirections__figure__figcaption">
                            <p className="redirections__figure__p">Fumeiro Regional</p>
                        </figcaption>
                    </figure>
                </Link>
                <Link to="/Queijos-regionais">
                    <figure className="redirections__figure">
                        <div className="redirections__figure__imgContainer">
                            <img src={queijoPng} alt="" className="redirections__figure__img"/>
                        </div>
                        <figcaption className="redirections__figure__figcaption">
                            <p className="redirections__figure__p">Queijos Regionais</p>
                        </figcaption>
                    </figure>
                </Link>
                <Link to="/Vegetais">
                    <figure className="redirections__figure">
                        <div className="redirections__figure__imgContainer">
                            <img src={vegetaisPng} alt="" className="redirections__figure__img"/>
                        </div>
                        <figcaption className="redirections__figure__figcaption">
                            <p className="redirections__figure__p">Vegetais</p>
                        </figcaption>
                    </figure>
                </Link>
                <Link to="/Fruta">
                    <figure className="redirections__figure">
                        <div className="redirections__figure__imgContainer">
                            <img src={frutaPng} alt="" className="redirections__figure__img"/>
                        </div>
                        <figcaption className="redirections__figure__figcaption">
                            <p className="redirections__figure__p">Frutas</p>
                        </figcaption>
                    </figure>
                </Link>
                <Link to="/Outros-Produtos-Regionais">
                    <figure className="redirections__figure">
                        <div className="redirections__figure__imgContainer">
                            <img src={melPng} alt="" className="redirections__figure__img"/>
                        </div>
                        <figcaption className="redirections__figure__figcaption">
                            <p className="redirections__figure__p">Outros Produtos Regionais</p>
                        </figcaption>
                    </figure>
                </Link>  
            </div>
            <Footer />
        </div>
       
    )
}