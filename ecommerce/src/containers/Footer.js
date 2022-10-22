import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShop,  faUser, faCircleInfo, faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer>
            <FontAwesomeIcon icon={faShop} />
            <h2>Shop</h2>
            <FontAwesomeIcon icon={faUser} />
            <h2>Account</h2>
            <FontAwesomeIcon icon={faCircleInfo} />
            <h2>Help</h2>
            <FontAwesomeIcon icon={faHeart} />
            <h2>Saved</h2>
        </footer>
    )
}

export default Footer;

