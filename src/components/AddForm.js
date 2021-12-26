import React from "react";
import { Cards } from "./Ui/Cards";
import { useRef } from "react";
import classes from './AddForm.module.css'



export const AddForm = (props) => {
    const titleinputref = useRef()
    const imageinputref = useRef()
    const addressinputref = useRef()
    const descriptioninputref = useRef()
    



    function submithandler (event) {
     event.preventDefault();
     const enteredTitleValue = titleinputref.current.value;
     const enteredImageValue = imageinputref.current.value;
     const enteredAddressValue = addressinputref.current.value;
     const enteredDescriptionValue = descriptioninputref.current.value;

     const meetUpData = {
         title: enteredTitleValue,
         image: enteredImageValue,
         address : enteredAddressValue,
         description : enteredDescriptionValue,
     };
     
     props.addNewMeetUp (meetUpData)


    }
    return (
        <Cards>
            <form className={classes.form} onSubmit={submithandler}>
                <h1>Add New Meetup Form</h1>
                <div className={classes.control}>

                    <label htmlFor="title">Meetup Title:</label>
                    <input type='text' required id="title"  ref={titleinputref}/>
                </div>
                <div className={classes.control}>

                    <label htmlFor="image">Meetup Image:</label>
                    <input type='url' required id="image" ref ={imageinputref} />
                </div>
                <div className={classes.control}>

                    <label htmlFor="address">Meetup Address:</ label>
                    <input type='text' required id="address" ref={addressinputref} />
                </div>
                 <div className={classes.control}>

                    <label htmlFor="description">Meetup Description:</ label>
                    <textarea type='text' required rows="5" ref= {descriptioninputref}/>
                </div>
                <div className={classes.actions}>
                <button > Submit </button>
                </div>
            </form>
        </Cards>
    )
}
