import React from "react"
import Autum from "./Pictures/Autum.jpg"
import styles from "./Promo.module.css"

const Promo = () => {
    return (
        <div className={styles.autum}>
            <img src={Autum} alt="this is an autum promo" />
        </div>
    )
}
export default Promo;