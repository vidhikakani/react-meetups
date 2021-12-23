import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

export const MainNavigation = ({DUMMY_DATA}) => {
    const onClick =()=>{
        console.log (DUMMY_DATA)
    }
    return (

        <header className={classes.header}>
            <div className={classes.logo}> My React App </div> 
            <ul>

                <li className={classes.li}><Link to='/' className={classes.link} onClick={onClick} > All Meetups </Link></li>
                <li><Link to='/new-meetup' className={classes.link}> My New Meetup </Link></li>
                <li><Link to='/favorites' className={classes.link}> My Favorites </Link></li>
                </ul>
        </header>
    

    )
}
