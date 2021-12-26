import React from 'react'
import classes from './Cards.module.css'

export const Cards = (props) => {
    return (
        <div className={classes.card}>
          {props.children}  
        </div>
    )
}
