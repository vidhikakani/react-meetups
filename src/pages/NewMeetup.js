import React from 'react'
import { AddForm } from '../components/AddForm'
import { useNavigate } from 'react-router-dom'

export const NewMeetup = () => {
  const navigate = useNavigate()

  function addMeetupHandler(meetUpData) {
    fetch("https://meetup-react-47b50-default-rtdb.firebaseio.com/meetup.json",
      {
        method: 'Post',
        body: JSON.stringify(meetUpData),
      }
    ).then(()=>{
       navigate('/', {replace: true})
    })
    .catch((error) => alert("unable to submit data"))
  }

  return (
    <div>
      <AddForm addNewMeetUp={addMeetupHandler} />

    </div>
  )
}

