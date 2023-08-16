import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({ time, colaboradores, aoDeletar, mudarCor}) => {
    const css = { backgroundColor: time.corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={{ backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input type='color' className='input-cor' value={time.cor} onChange={evento => mudarCor(evento.target.value, time.nome)} />
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                        colaborador={colaborador}
                        key={indice}
                        corDeFundo={time.cor}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section> 
        : ''
    )
}

export default Time