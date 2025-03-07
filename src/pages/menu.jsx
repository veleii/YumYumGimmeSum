import React from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/header";
import menuContent from '../components/menuContent'; 
import '../styles/stylePages/menu.scss';


export default function Menu() {
    return (
        <div className="menu">
            <Header />

            
            {menuContent()}  
        </div>
    );
}