import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
    ];

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(cntr => (
                <BuildControl
                   key={cntr.label}
                   label={cntr.label}
                   added={() => props.ingredientAdded(cntr.type)}
                   removed={() => props.ingredientRemove(cntr.type)}
                   disabled={props.disabled[cntr.type]} />
            ))
        }
        <button disabled={!props.purchaseable} className="OrderButton">ORDER NOW</button>
    </div>    
);


export default buildControls;