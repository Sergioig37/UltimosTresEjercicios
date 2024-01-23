import React from 'react'
import ReactDOM from 'react-dom/client'
import { BotonDeshabilita } from './BotonDeshabilita'
import { EsconderOcultar } from './EsconderOcultar'
import { VinculaElementos } from './VinculaElementos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <EsconderOcultar/>
    
    {/** <BotonDeshabilita/>
    <VinculaElementos/>*/}
  </React.StrictMode>,
)
