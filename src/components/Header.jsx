import React from 'react';
import { useUser } from 'reactfire';
import '../Style/style.css';

const Header = () => {
    const user = useUser();

    return (
        <header>
            <nav className="text-center mr-3 ">
                <h2 className="text-center">Hola<br /> {user.email}
                </h2>
            </nav>
        </header>
    )
}




export default Header;