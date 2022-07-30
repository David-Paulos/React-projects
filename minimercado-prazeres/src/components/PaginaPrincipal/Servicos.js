import React from 'react'
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded'
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded'
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded'
import AgricultureRoundedIcon from '@mui/icons-material/AgricultureRounded'
import '../../css/PaginaPrincipal/Servicos.css'

export default function Servicos(){
    return (
        <div className="servicos">
            <ul className="servicos__ul">
                
                <li className="servicos__li">
                    <AgricultureRoundedIcon className="servicos__icon"/>
                    <p className="servicos__p">Produtos 100% biológicos</p>
                </li>
                <li className="servicos__li">
                    <ThumbUpOffAltRoundedIcon className="servicos__icon"/>
                    <p className="servicos__p">Compre com confiança produtos sempre frescos</p>
                </li>
                <li className="servicos__li">
                    <SupportAgentRoundedIcon className="servicos__icon"/>
                    <p className="servicos__p">Faça as suas encomendas por telefonema</p>
                </li>
                <li className="servicos__li">
                    <ShoppingBasketRoundedIcon className="servicos__icon"/>
                    <p className="servicos__p">Levante as suas encomendas no local</p>
                </li>
            </ul>
        </div>
    )
}