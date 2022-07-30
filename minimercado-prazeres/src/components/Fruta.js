import React from 'react'
import ProductsDisplayer from '../components/ProductsDisplayer'
import Footer from '../components/Footer'
import frutaData from '../data/fruta'
import '../css/Products-pages.css'
import banner from '../images/Products-pages/products-pages-image-Fruit.webp'

export default function Fruta(){
    const frutaItems = frutaData.map(data => {
        return (
            <ProductsDisplayer 
                key={data.id}
                itemName={data.itemName}
                itemImage={data.itemImage}
            />
        )
    })
    return (
        <div className="products">
            <div className="products__banner__container">
                <img className="products__banner__image" src={banner} alt=""/>
            </div>
            <h2 className="products__title">Frutas</h2>
            <div className="products__displayer">
                {frutaItems}
            </div>
            <p className="products__warning">A disponibilidade de cada produto pode variar conforme as estações do ano.</p>
            <p className="products__warning">As imagens são meramente ilustrativas.</p>
            <Footer />
        </div>
    )
}