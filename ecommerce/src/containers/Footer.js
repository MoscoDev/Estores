import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShop,  faUser, faCircleInfo, faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <Footer>
            <h2><FontAwesomeIcon icon={faShop} />Shop</h2>
            <h2><FontAwesomeIcon icon={faUser} />Account</h2>
            <h2><FontAwesomeIcon icon={faCircleInfo} />Help</h2>
            <h2><FontAwesomeIcon icon={faHeart} />Saved</h2>
        </Footer>
    )
}

export default Footer;

