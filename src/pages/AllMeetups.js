import React from 'react'
import MeetupList from '../components/Layouts/Meetups/MeetupList';
import { useState, useEffect } from 'react';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

export const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadedState, setIsLoadingState] = useState([])

  useEffect (()=>{
    fetch("https://meetup-react-47b50-default-rtdb.firebaseio.com/meetup.json",
    ).then(response => {
        return response.json();
      }).then((data) => {
        const meetups = [];

        for (const key in data){
          const meetup= {
            id:key,
            ...data[key]
          };
          meetups.push(meetup)

        }
        setIsLoading (false);
        setIsLoadingState(meetups)
      }).catch((error)=> {
        alert("Unable to get data");
        setIsLoading (false);
      });
  },[])

    

  if (isLoading) {
    return (
      <section>
        <p>loading..</p>
      </section>
    )
  }


  return (
    <div>
      <MeetupList meetups={isLoadedState} />
    </div>
  )
}
