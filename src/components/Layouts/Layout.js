import React from 'react'
import classes from './Layout.module.css'
import {MainNavigation} from './MainNavigation'

export const Layout = (props) => {
    return (
        <div>
        <MainNavigation />
        <div className={classes.main}>
            
            {props.children}
        </div>
        </div>
    )
}
