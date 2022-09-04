import React from 'react';
import Button from './Button';
import "../index.css";

const Header = ({ showForm, changeTextAndColor }) => {
    return (
        <header className="header">
            <h2 className="app-header"> 📘 To Do List 📘 </h2>
            <Button onClick={showForm} 
                    color={changeTextAndColor ? 'red' : 'green'} 
                    text={changeTextAndColor ? 'Cerrar' : 'Agregar'} 
            />
        </header>
    )
}

export default Header;