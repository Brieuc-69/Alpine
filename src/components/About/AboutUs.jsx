import React from 'react';
import A110 from '../../Assets-TP-Alpine/video/210611_A110_X_FelipePantone_Main_Edit_45s-1680x951px.mp4';
import './About.css';


function Accueil() {
  return (
    <>
  
    <div className='text-center w-25 mx-auto my-5'>
      <h2>MADE BY RACERS</h2>
      <p className='mt-4'>
      En 1955, Jean Rédélé, entrepreneur passionné, fonde Alpine sur trois piliers : agilité, élégance, esprit de compétition. 
Conçue par des pilotes pour ceux qui veulent maîtriser l’asphalte, la légende Alpine s’est érigée à travers des victoires mythiques, et un engagement sportif sans limite.
Depuis 2016, à travers notre nouvelle gamme A 110, nous continuons à gravir tous les échelons du sport automobile. Demain, nous voulons réinventer la sportivité automobile avec des technologies innovantes issues de la Formule 1, pour des pilotes passionnés.
</p>
   
   <div className='video-div'>

 <video controls className='video' autoPlay muted>
    <source src={A110}/>

      </video>
   </div>
    </div> 
    {/* <Gallery />
    <div className='text-center w-25 mx-auto my-5'>
      <h3 className='text-primary'>MODÈLES</h3>
      <h2 className='mt-4 '>
      LES SENSATIONS DE LA PISTE AU QUOTIDIEN
      </h2>
    </div>  */}
    </>
  )
}

export default Accueil;
