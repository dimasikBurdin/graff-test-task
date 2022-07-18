import React from "react";
import './footer.css';
import { InfoContainer } from "./infoContainer";
import mapImage from './mapImage.svg';
import blackLogo from './logoBlackIcon.svg';

export const Footer:React.FC = React.memo(() => {
    return <div className="footer-container">
        <div className="footer-info-container">
            <div className="footer-info-container-help">
                <img className="footer-info-logo" src={blackLogo} alt='лого' />
                <div className="footer-info-contacts-container">
                    <InfoContainer 
                        label="Адрес"
                        data={[
                            {value: 'ул. Строительная, 11, Екатеринбург'},
                            {value: 'hello@saturn.pro', href: 'hello@saturn.pro'},
                            {value: '+ 7 922 555 1234'}                        
                        ]}
                    />
                    <InfoContainer 
                        label="Соцсети"
                        data={[
                            {value: 'Telegram', href: 'https://web.telegram.org/k/'},
                            {value: 'Twitter', href: 'https://twitter.com/?lang=ru'},
                            {value: 'Pinterest', href: 'https://www.pinterest.ru/'}                   
                        ]}
                    />                
                </div>
            </div>            
        </div>
        <div className="footer-map-container">
            <img className="footer-map-image" src={mapImage} alt="карта, где мы находимся" />
            <span className="footer-map-marker"></span>
        </div>
    </div>
})
