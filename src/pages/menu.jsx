import React from "react";
import { Link } from 'react-router-dom';
import menuContent from '../components/menuContent'; 
import '../styles/stylePages/menu.scss'

export default function Menu() {
    return (
        <div className="menu">
            {menuContent()}  
        </div>
    );
}