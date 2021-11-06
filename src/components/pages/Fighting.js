import React from 'react';
import BossBattle from './BossBattle';
import { Link } from 'react-router-dom';
import MinionBattle from './MinionBattle';

const Fighting = () =>{
  return (
    <div>
      <h3>Fighting</h3>
      <button>
        <Link to="/BossBattle">Boss Battle</Link>
        </button>
        <button>
       <Link to="/MinionBattle">Minion Battle</Link>
        </button>
    </div>
  );
}
export default Fighting;