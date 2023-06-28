import './Botao.css'

const Botao = (props) => {
  return (
    <button className='botao'>
      {/* funciona como o slot */}
      {props.children} 
    </button>
  )
}

export default Botao;