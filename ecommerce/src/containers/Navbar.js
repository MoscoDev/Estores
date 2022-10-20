import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.css"

const Navbar = () => {
    return(
        <>
            <div className={styles.Nav}>
                <div className="menu-btn">
                    <span className="menu-btn_burger"></span>
                </div>
                <div className="Top">
                    <h3>Store</h3>
                    <div className="icons">
                        <h4><FontAwesomeIcon icon={faMagnifyingGlass} /></h4>
                        <h4><FontAwesomeIcon icon={faCartShopping} /></h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;













