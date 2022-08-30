import React from "react";
import '../App.css';


function Footer() {

    const year = new Date().getFullYear()

    return <div>
        <footer>
            <p>Bruna Mello - {year}</p>
        </footer>
    </div>
}

export default Footer;