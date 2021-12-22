import React from 'react';

import './card.styles.css';

export const Card =(props)=>{
  
    return(  
        <div className="card-container">
        <img
         alt="monster"
         src={props.monster.images.small}
        />
        <h2>{props.monster.name}</h2>
        <div>
            <span STYLE="font-weight:bold">Attacks:</span>
                <span>{props.monster.attacks[props.monster.attacks.length-1].cost.map((attack,i)=>{
                    return (<span key={attack.id}>
                        {attack}{props.monster.attacks[props.monster.attacks.length-1].cost.length-1 !== i?',':''}</span>)})}               
            </span>
            <span STYLE="font-weight:bold" className='ss'>HP:{props.monster.hp}</span>
        </div>
        
        <div>
        <span STYLE="font-weight:bold">Abilities:</span>
            {props.monster.abilities?props.monster.abilities.map(ability=><span>{ability.name}</span>):'NA'}
       </div>
       
    </div>
    )
    
}