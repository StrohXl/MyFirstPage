import React from 'react';
import Header from '../Header'
import Paquetes from '../Packages';
import Servicies from '../Services'
import { useEffect } from 'react';
const Home = () => {
    const LoadData=()=>{
        window.scroll(0, 0)
        //holas 
     //   
       // <Paquetes/> //
    }
    useEffect(()=>{LoadData()},[])
    return (
        <div>
            <Header/>
            <Servicies/>
            
        </div>
    );
};

export default Home;