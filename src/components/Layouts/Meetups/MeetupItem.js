import React from 'react'
import classes from './MeetupItem.module.css'
import { Cards } from '../../Ui/Cards';
import {useContext} from 'react';
import FavoritesContext from '../../../Store/favorite-context';

export const MeetupItem = (props) => {

  const favoriteCtx = useContext(FavoritesContext);
  
  const isItemFavorite = favoriteCtx.itemIsFavorite(props.id)
  
  function ToggleFavoriteStatusHandler (){
    if (isItemFavorite){
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        image:props.image,
        title:props.title,
        address:props.address,
        description:props.description,
      });
    }
  }

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
        <button onClick={ToggleFavoriteStatusHandler}>{isItemFavorite ? "Remove from Favorite": "To Favorite"}</button>
      </div>
    </li>
    </Cards>

    )
}
// import { useContext } from 'react';

// import Card from '../ui/Card';
// import classes from './MeetupItem.module.css';
// import FavoritesContext from '../../store/favorites-context';

// function MeetupItem(props) {
//   const favoritesCtx = useContext(FavoritesContext);

//   const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

//   function toggleFavoriteStatusHandler() {
//     if (itemIsFavorite) {
//       favoritesCtx.removeFavorite(props.id);
//     } else {
//       favoritesCtx.addFavorite({
//         id: props.id,
//         title: props.title,
//         description: props.description,
//         image: props.image,
//         address: props.address,
//       });
//     }
//   }

//   return (
//     <li className={classes.item}>
//       <Cards>
//         <div className={classes.image}>
//           <img src={props.image} alt={props.title} />
//         </div>
//         <div className={classes.content}>
//           <h3>{props.title}</h3>
//           <address>{props.address}</address>
//           <p>{props.description}</p>
//         </div>
//         <div className={classes.actions}>
//           <button onClick={toggleFavoriteStatusHandler}>
//             {itemIsFavorite ? 'Remove from Favorite' : 'To Favorite'}
//           </button>
//         </div>
//       </Cards>
//     </li>
//   );
// }

// export default MeetupItem;