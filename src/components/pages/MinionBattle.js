import React, { useEffect, useState } from 'react'

const MinionBattle = () => {
  const [userAbility, setUserAbility] = useState(null)
  const [minionAbility, setMinionAbility] = useState(null)
  const [userHealth, setUserHealth] = useState(20)
  const [minionHealth, setMinionHealth] = useState(10)
  const [turnResult, setTurnResult] = useState(null)
  const [result, setResult] = useState('Battle In Progress')
  const [gameOver, setGameOver] = useState(false)
  const choices = ['Bolt', 'Blast', 'Nova']

  const handleClick = (value) => {
    setUserAbility(value)    
    generateMinionAbility()
  }

  const generateMinionAbility = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setMinionAbility(randomChoice)
  }

  const reset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const comboMoves = userAbility + minionAbility
    //If the User chooses correctly
    if (userHealth > 0 && minionHealth > 0) {
      if (comboMoves === 'NovaBlast' || comboMoves === 'BoltNova' || comboMoves === 'BlastBolt') {
        const minionDamaged = minionHealth - 5
        setMinionHealth(minionDamaged)
        setTurnResult('Your spell has Landed!')
        if (minionDamaged <= 0){
          setResult('You have Defeated the Minion!')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
      //If the User chooses incorrectly
      if (comboMoves === 'BlastNova' || comboMoves === 'NovaBolt' || comboMoves === 'BoltBlast') {
        const userDamaged = userHealth - 5
        setUserHealth(userDamaged)
        setTurnResult('Your Spell Missed, The Minion attacks you!')
        if (userDamaged <= 0) {
          setResult('You have been Defeated')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
      //If its a tie
      if (comboMoves === 'BlastBlast' || comboMoves === 'BoltBolt' || comboMoves === 'NovaNova') {
        const minionDamaged = minionHealth - 2.5
        setMinionHealth(minionDamaged)
        setTurnResult('Your spell was not very effective!')
        if (minionDamaged <= 0){
          setResult('You have Defeated the Minion!')
          const gameOff = true
          setGameOver(gameOff)
        }
      }
    }
  }, [minionAbility, userAbility])

  return (
    <div className="App">
      <h1 className='heading'>Minion Battle</h1>
      <div className='score'>
        <h1>Health: {userHealth}</h1>
        <h1>Minion Health: {minionHealth}</h1>
      </div>

      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userAbility}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${minionAbility}.png`} alt=''></img>
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

export default MinionBattle