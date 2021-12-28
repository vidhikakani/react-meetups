import React from 'react'
import FavoritesContext from '../Store/favorite-context'
import MeetupList from '../components/Layouts/Meetups/MeetupList'
import { useContext } from 'react'

export const Favorites = () => {
  const favoritCtx= useContext(FavoritesContext);
  

let content;

  if (favoritCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
