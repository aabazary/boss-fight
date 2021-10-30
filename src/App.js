import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [userAbility, setUserAbility] = useState(null)
  const [bossAbility, setBossAbility] = useState(null)
  const [userHealth, setUserHealth] = useState(20)
  const [bossHealth, setBossHealth] = useState(100)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Battle In Progress')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['Bolt', 'Blast', 'Nova']

  const handleClick = (value) => {
    setUserAbility(value)    
    generatebossAbility()
  }

  const generatebossAbility = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setBossAbility(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userAbility + bossAbility
    //If the User chooses correctly
    if (userHealth > 0 && bossHealth > 0) {
      if (comboMoves === 'NovaBlast' || comboMoves === 'BoltNova' || comboMoves === 'BlastBolt') {
        const bossDamaged = bossHealth - 20
        setBossHealth(bossDamaged)
        setTurnResult('Your spell has Landed!')
        if (bossDamaged === 0){
          setResult('You have Defeated the Dragon!')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
      //If the User chooses incorrectly
      if (comboMoves === 'BlastNova' || comboMoves === 'NovaBolt' || comboMoves === 'BoltBlast') {
        const userDamaged = userHealth - 20
        setUserHealth(userDamaged)
        setTurnResult('Your Spell Missed, The Dragon Breathes Fire on you!')
        if (userDamaged === 0) {
          setResult('You have been Defeated')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
      //If its a tie
      if (comboMoves === 'BlastBlast' || comboMoves === 'BoltBolt' || comboMoves === 'NovaNova') {
        setTurnResult('You have missed, the dragon Laughs')
      }
    }
  }, [bossAbility, userAbility])

  return (
    <div className="App">
      <h1 className='heading'>Dragon Battle</h1>
      <div className='score'>
        <h1>Health: {userHealth}</h1>
        <h1>Dragon Health: {bossHealth}</h1>
      </div>

      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userAbility}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${bossAbility}.png`} alt=''></img>
        </div>
      </div>
      
      <div className='button-div'>
        {choices.map((choice, index) =>
          <button className='button' key={index} onClick={() => handleClick(choice)} disabled={gameOver}>
            {choice} 
          </button>
        )}
      </div>
      
      <div className='result'>
        <h1>{turnResult}</h1>
        <h1>{result}</h1>
      </div>
      
      <div className='button-div'>
        {gameOver && 
          <button className='button' onClick={() => reset()}>Restart Game?</button>
        }
      </div>
    </div>
  )
}

export default App