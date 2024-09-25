import './App.css'
import { useState } from 'react'

function App() {

  const [valorInput, setValorInput] = useState('')

  const handleBotaoClicar = (number) => {
    setValorInput((valorAntigo) => {
      if (number !== '0') {
        const novoValor = valorAntigo + number
        return novoValor.replace(/(^|[^\d])0+/g, '$1')
      }
      return valorAntigo + number
    });
  }

  const handleBotaoApagar = () => {
    setValorInput('')
  }

  const handleCalcular = () => {
    try {
      if (valorInput != '') {
        const expressao = valorInput
          .replace(/x/g,'*')
          .replace(/÷/g,'/')
          .replace(/,/g,'.')
          .replace(/(\s|^)(0+)/g, '')

        console.log("Expressão a ser avaliada:", expressao)
          
        setValorInput(String(eval(expressao)))
      }
    } catch (error) {
      console.error("Erro na avaliação:", error)
      setValorInput('Error')
    }
  }

  return (
    <>
        <div className='wrapper'>
          <input value={valorInput} placeholder='...' disabled/>
          <div className='divisao'>
            <button className='botao_numero botao_igual' onClick={handleCalcular}>=</button>
            <button className='botao_numero botao_operador' onClick={handleBotaoApagar}>C</button>
            <button className='botao_numero botao_operador' onClick={() => handleBotaoClicar('÷')}>÷</button>
            <button className='botao_numero botao_operador' onClick={() => handleBotaoClicar('x')}>x</button>
          </div>
          <div className='divisao'>
            <button className='botao_numero' onClick={() => handleBotaoClicar('7')}>7</button>
            <button className='botao_numero' onClick={() => handleBotaoClicar('8')}>8</button>
            <button className='botao_numero' onClick={() => handleBotaoClicar('9')}>9</button>
            <button className='botao_numero botao_operador' onClick={() => handleBotaoClicar('-')}>-</button>
          </div>
          <div className='divisao'>
            <button className='botao_numero' onClick={() => handleBotaoClicar('4')}>4</button>
            <button className='botao_numero' onClick={() => handleBotaoClicar('5')}>5</button>
            <button className='botao_numero' onClick={() => handleBotaoClicar('6')}>6</button>
            <button className='botao_numero botao_operador' onClick={() => handleBotaoClicar('+')}>+</button>
          </div>
          <div className='divisao'>
            <button className='botao_numero' onClick={() => handleBotaoClicar('1')}>1</button>
            <button className='botao_numero' onClick={() => handleBotaoClicar('2')}>2</button>
            <button className='botao_numero' onClick={() => handleBotaoClicar('3')}>3</button>
            <button className='botao_numero botao_operador' onClick={() => handleBotaoClicar('.')}>,</button>
          </div> 
          <div className='divisao'>
          <button className='botao_numero zero' onClick={() => handleBotaoClicar('0')}>0</button>
          </div>  
        </div>
    </>
  )
}

export default App
