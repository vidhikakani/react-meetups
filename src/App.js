import { Route, Routes } from 'react-router-dom';

import { AllMeetups } from './pages/AllMeetups';
import { NewMeetup } from './pages/NewMeetup';
import { Favorites } from './pages/Favorites';
import { Layout } from './components/Layouts/Layout';
// import { AddForm } from './components/AddForm';


export const App = () => {
  return (

    <div>
      <Layout>
      {/* <AddForm /> */}
      <Routes>
        <Route path='/' exact element={<AllMeetups />} />
        <Route path='/new-meetup' element={<NewMeetup />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      </Layout>
    </div>
  )
}
