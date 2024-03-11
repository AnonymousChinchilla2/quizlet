import React from 'react';
import UserImg from "./user.png";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.contents}>
                <Link to="/" class='homeLink' className={styles.logo}>Flipplt</Link>

                <nav className={styles.navigation}>
                    <ul>
                        <li class='secondaryLinkButton'><Link to="/create" class='secondaryLink'>Create</Link></li>
                        <li class='secondaryLinkButton'><Link to="/study" class='secondaryLink'>Study</Link></li>
                        <li class='secondaryLinkButton'><Link to="/stats" class='secondaryLink'>Stats</Link></li>
                    </ul>
                </nav>

                <img src={UserImg} alt="User" style={{ width: 50 }} />
            </div>
        </header>
    );
}

export default Header;

