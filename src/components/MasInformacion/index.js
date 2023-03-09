import React from 'react';
import { Typography, Image } from 'antd';
import './styles.css'
import './responsive.css'
import mapa from "../../Images/mapa.jpg"
import { useEffect } from 'react';
const { Title, Paragraph } = Typography
const MasInformacion = () => {
    const LoadData=()=>{
        window.scroll(0, 0)
    }
    useEffect(()=>{LoadData()},[])
    return (

        <div className='Informacion'>
            <div className='titulo-Informacion'><Title>Informacion</Title></div>
            <div className='content-parrafo'>
            <Paragraph className='parrafo'>
            <div className=''><Title level={2}>Mochima</Title></div>
                Mochima, en nuestra lengua originaria significa “tierra de muchas aguas”. Es el nombre de un hermoso y gentil pueblo situado muy cerca de Cumaná, capital del estado Sucre; el de una bahía de siete kilómetros que embellece al pueblo y el de un gran Parque Nacional que va desde las cercanías de Cumaná hasta el Morro de Lechería, estado Anzoátegui.
            </Paragraph>
            <Paragraph className='parrafo'>
                Mochima, en nuestra lengua originaria significa “tierra de muchas aguas”. Es el nombre de un hermoso y gentil pueblo situado muy cerca de Cumaná, capital del estado Sucre; el de una bahía de siete kilómetros que embellece al pueblo y el de un gran Parque Nacional que va desde las cercanías de Cumaná hasta el Morro de Lechería, estado Anzoátegui.
            </Paragraph>
            <Paragraph className='parrafo'>
                El poblado de Mochima es un centro turístico por excelencia, con muchas posadas, restaurantes, comercios que expenden accesorios playeros y un muelle artesanal que sirve para embarcar en los botes a las personas que van a las playas cercanas, como lo son Playa La Gabarra, Playa Blanca, Playa Las Maritas, Playa Manare, Ensenada El Tigrillo, entre otras. Estas playas, en su gran mayoría, cuentan con servicios de restaurantes, toldos, sanitarios y paseos en banana.
            </Paragraph>
            <Paragraph className='parrafo'>
                Comentan los testimonios que han ido pasando de generación en generación, que la población de Mochima era un acogedor refugio de piratas en tiempos de la colonia.
            </Paragraph>
            <Paragraph className='parrafo'>
                El Parque Nacional Mochima está ubicado en el sector costero comprendido entre los estados Sucre y Anzoátegui, al nororiente de Venezuela y se extiende a lo largo de la costa en un área de 94.935 hectáreas. Fue el segundo en ser declarado como parque nacional en el país, el 19 de diciembre de 1973. Lo decretaron como tal con el propósito de proteger, defender y preservar los bosques de la sierra del Turimiquire, a más de 20 islas, las 121 playas, los 6 golfos, las 106 ensenadas, las 16 bahías, los 6 archipiélagos rocosos, los fondos marinos y los seductores paisajes de singular belleza.
            </Paragraph>
            <Paragraph className='parrafo'>
            En algunas de las playas se puede acampar. Para ello debes solicitar con anterioridad el permiso de INPARQUES, quienes se encuentran cercanos al muelle artesanal de la población. Mochima es uno de los más prestigiosos reservorios de aves y peces, además cuenta con uno de los ecosistemas marinos más fértiles del país. No es extraño ver a los delfines jugueteando y dando la bienvenida a los turistas que van paseando en los botes.
            </Paragraph>
            <Paragraph className='parrafo'>
            A nivel de la costa se deja apreciar la escasa vegetación sembrada por la mano de Dios, predominando los cactus, tunas, manglares, entre otras, que comparten el escenario con plantas sembradas por la mano del hombre. Mientras que en las altas montañas se encuentra el Turimiquire (nombre de nuestros antepasados que significa «El Trono de los Dioses») y hoy representa el manantial de oriente porque sirve su agua dulce a los estados Anzoátegui, Nueva Esparta y Sucre. En las montañas del Turimiquire se aprecia un gran verdor vegetal, orquídeas de una belleza excepcional y condiciones especiales para la siembra de tubérculos, café, frutas y otros rubros alimenticios.  
            </Paragraph>
            <Paragraph className='parrafo'>
            Es muy fácil llegar, a través de la carretera Cumaná - Puerto la Cruz (Troncal "T-009"), aproximadamente a 30 minutos de Cumaná, cruzando en sentido de la costa. Es una intersección que no se puede pasar sin tomarse en cuenta, ya que es bastante amplia y rodeada de estructuras donde se preparan exquisitas empanadas. Al bajar se debe tener mucha precaución, porque a pesar de ser una carretera en buenas condiciones, es muy angosta y la exuberante belleza de sus paisajes puede perturbar la atención del conductor.
            </Paragraph>
            <div className='parrafo'>
       
                <Title level={2}>Geolocalización:</Title>
          
                <Image src={mapa}/>
                </div>
           
            </div>
            
        </div>

    );
};

export default MasInformacion;