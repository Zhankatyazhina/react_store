import React from 'react';
import styles from '../../styles/Footer.module.css';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import LOGO from "../../images/logo.svg";

const Footer = ()=>{
    return(
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={LOGO} alt="Stuff"/>
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by <span style={{color:"purple", fontSize:"bold"}}>Zhanel</span>
            </div>
        </section>
    )
}

export default Footer;