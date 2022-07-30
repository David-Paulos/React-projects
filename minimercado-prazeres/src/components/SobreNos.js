import React from 'react'
import Footer from '../components/Footer'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import '../css/SobreNos.css'
import aboutUsVideo from '../images/aboutus.mp4'
import aboutUsPoster from '../images/aboutus-poster.webp'

export default function SobreNos(){
    return (
        <div className="sobreNos">
            <div className="sobreNos__video-window">
                <video className="sobreNos__video" src={aboutUsVideo} type="video/mp4" autoPlay loop muted poster={aboutUsPoster}></video>
            </div>
            <h2 className="sobreNos__h2">Sobre Nós</h2>
            <p className="sobreNos__p">O nosso mercado familiar independente é especializado em encontrar os melhores produtos que a região de Trás-os-Montes em Portugal tem para oferecer e queremos partilhar consigo a nossa paixão pelos sabores portugueses e as nossas tradições.</p>
            <p className="sobreNos__p">Se nao encontrar o produto que procura no nosso <i>website</i> não hesite em contactar-nos e iremos dar o nosso melhor para encontrar o que deseja.</p>
            <h3 className="sobreNos__h3">Horário Laboral</h3>
            <ul className="sobreNos__ul">
                <li className="sobreNos__li">
                    <p className="sobreNos__li__p-day">De Segunda-Feira a Sexta-Feira</p>
                    <p className="sobreNos__li__p-hour">8:00h-13:00h | 14:30h-19:30h</p>
                </li>
                <li className="sobreNos__li">
                    <p className="sobreNos__li__p-day">Sábado</p>
                    <p className="sobreNos__li__p-hour">8:00h-13:30h </p>
                </li>
            </ul>
            <h3 className="sobreNos__h3">Contacto</h3>
            <p className="sobreNos__p">+351 914 881 185</p>
            <a href="tel:+351914881185" className="sobreNos__phoneButton"><LocalPhoneRoundedIcon className="sobreNos__phoneButton__icon"/></a>
            <h3 className="sobreNos__h3">Onde Estamos</h3>
            <p className="sobreNos__p">De momento estamos situados junto à antiga Escola da Praça das Eiras, até à reabertura do novo Mercado Municipal de Macedo de Cavaleiros. </p>
            <iframe className="sobreNos__map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d746.6254352109169!2d-6.9649304!3d41.5367324!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3ba59d8f5ff859%3A0x99cad3c031c0919c!2sR.%20Jo%C3%A3o%20de%20Deus%201%2C%205340-271%20Macedo%20de%20Cavaleiros!5e0!3m2!1spt-PT!2spt!4v1658849130196!5m2!1spt-PT!2spt"  style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <Footer />
        </div>
    )
}