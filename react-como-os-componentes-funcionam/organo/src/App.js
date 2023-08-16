import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // debugger
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {
    console.log('Deletando colaborador');
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }

      return time;
    }));
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map((time, indice) =>
        <Time
          mudarCor={mudarCorDoTime}
          key={indice}
          time={time}
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador()}
        />
      )}
    </div>
  );
}

export default App;
