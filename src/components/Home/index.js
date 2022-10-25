import React from 'react';
import Header from '../Header'
import Paquetes from '../Packages';
import Servicies from '../Services'

const Home = () => {
    return (
        <div>
            <Header/>
            <Servicies/>
            <Paquetes/>
            
        </div>
    );
};

export default Home;