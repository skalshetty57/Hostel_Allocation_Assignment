import React, {useState} from 'react';
import HomeCard from '../components/homeCard';
import NotBookedScreen from './notBookedScreen';

function Home(props){
    
    
    const [isRoombooked, setisRoombooked]=useState(false);

  return(
    <>
      {
        isRoombooked ? (<HomeCard />) : (<NotBookedScreen />)
      }

    </>
  );

}
export default Home;