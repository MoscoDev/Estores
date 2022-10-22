import React from "react"
import pic6 from "./Pictures/pic6.jpg"
import styles from "./Stores.module.css"

const Stores = () => {
    return (
        <>
            <div className={styles.store1}>
                <div className="retailer">
                    <img src={pic6} alt="stores" />
                    <div className="text">
                        <h1> Location: Ajah, Lagos <br/> Name: Nao Supermarket <br /> About: We sell all sort of provisions, any kind of perfumes and deodorants and varieties of kitchen utensils </h1>
                    </div>
                </div>
                <div>
                    <img src={pic6} alt="stores" />
                    <div className="text">
                        <h1> Location: Lekki Phase 1, Lagos <br /> Name: Tech Heads <br /> About: We sell every kind of gadjets you can think of, game console included.</h1>
                    </div>
                </div>
            </div>
            <div className={styles.house}>
                <img src={pic6} alt="stores" />
                <div></div>
                <div>
                    <img src={pic6} alt="stores" />
                </div>
            </div>
        </>
    )
}

export default Stores;

