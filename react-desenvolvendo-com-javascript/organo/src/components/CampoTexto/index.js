import { useState } from 'react';
import './CampoTexto.css';

// outra forma de declarar o componente
const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`
  
  const [valor, setValor] = useState('')

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
    console.log(valor)
  }

  return (
    <div className='campo-texto'>
      <label>{props.label}</label>
      <input
        required={props.obrigatorio}
        placeholder={placeholderModificada}
        value={props.valor}
        onChange={aoDigitado}
      />
    </div>
  )
};

export default CampoTexto;