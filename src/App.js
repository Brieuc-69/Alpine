import React from "react";
import '../src/features/App.css';
import Header from '../src/components/Header/Header.jsx';
import Carrousel from "./components/Carrousel/Carrousel.jsx";
import AboutUs from "./components/About/AboutUs.jsx";
import Modele from "./components/Modele/Modele.jsx";
// import Formulaire from './components/FormulaireEmail';
// import Récapitulatif from './components/Recapitulatif';
// import configuration  from './components/SectionConfiguration';
// import Options from './components/SelectionOption';
// import Visualiseur from './components/VisualiseurVoiture';

  function App() {
  return (

<div className="App">
    <Header/>
    <Carrousel/>
    <div>
    <AboutUs/>
    </div>
    <div>
      <Modele/>
    </div>

    
</div>
  );
}

export default App;
