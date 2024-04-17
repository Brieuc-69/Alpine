import React from 'react';
import PHotoA110 from '../../Assets-TP-Alpine/images/sources-homepage/A110/Alpine-A110-1.jpg';
import { useSelector, useState } from 'react-redux';
import './Modele.css';
const Modele = () => { 

  const [Model, setModel] = useState(0);

  const monster = useSelector();

  const modeliserModel = () => {
   
  
    const newModel = `${Model} Edition`;
    setModel(newModel); 
  };

  return (
    <>
      <div className='text-center w-25 mx-auto my-5'>
        <h2>NOTRE NOUVEAU MODÈLE !</h2>
        <img src={PHotoA110} alt="A110" />
        <button onClick={modeliserModel}>Modéliser la Model</button>
        {Model && <p>Model modélisée : {Model}</p>}
      </div>
    </>
  );
};

export default Modele



