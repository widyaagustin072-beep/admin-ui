import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise from './latihan/Exercise.jsx'
import AtomButton from "./latihan/atoms/AtomButton.jsx";
import AtomLabel from './latihan/atoms/AtomLabel.jsx'
import AtomInput from './latihan/atoms/Atominput.jsx'
import AtomCard from './latihan/atoms/AtomCard.jsx'
import MoleculeFormField from './latihan/molecules/MoleculeFormField.jsx'
import OrganismLoginPanel from './latihan/organisms/OrganismLoginPanel.jsx'
import TemplateCenter from './latihan/templates/TemplateCenter.jsx'
import PageLogin from './latihan/pages/PageLogin.jsx'
import PageRegister from './latihan/pages/PageRegister.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageRegister />
  </StrictMode>,
)
