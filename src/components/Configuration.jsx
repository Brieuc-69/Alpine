import { configureStore } from '@reduxjs/toolkit';
import modeliserVoitureReducer from '../components/Modele/Modele.jsx';

const store = configureStore({
  reducer: {
    modeliserVoiture: modeliserVoitureReducer,
  },

});

export default store;
