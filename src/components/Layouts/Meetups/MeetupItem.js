import React from 'react'
import classes from './MeetupItem.module.css'
import { Cards } from '../../Ui/Cards';

export const MeetupItem = (props) => {
    return (
        <Cards>
        <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorites</button>
      </div>
    </li>
    </Cards>

    )
}
