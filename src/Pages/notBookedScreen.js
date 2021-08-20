import React, {useState} from 'react'
import HostelCard from '../components/hostelCard'
import ShowHostels from '../components/showHostels'

function NotBookedScreen(props){
    const homeCardStyle={
        width:'50vw',
        height:'50vh',
        border: '3px solid black',
        borderRadius: '5px',
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center'
    }
    const [girlChosen,setgirlChosen]=useState(false);
    const [boyChosen,setboyChosen]=useState(false);

    let handleClick=(x)=>{
        let temp=x.target.id.slice(0,3);
        if(temp==="gir"){
            setgirlChosen(true);
            setboyChosen(false);
        }
        else if(temp==="boy"){
            setgirlChosen(false);
            setboyChosen(true);
        }
    }

    return (
        <>
            {girlChosen? (<ShowHostels hostelType="G" />) : (boyChosen?(<ShowHostels hostelType="B"/>):
            (<div >
                <div>
                    <div>
                        <h1>Choose your Hostel</h1>
                    </div>
                    <div>
                        <HostelCard idx="girlsHostel" hostelFor="Girls" cardColor="pink" imgurl="girl" onClick={handleClick}/>
                        <HostelCard idx="boysHostel" hostelFor="Boys" cardColor="blue" imgurl="boy" onClick={handleClick}/>
                    </div>
                </div>
            </div>
            )
            )
            }
        </>
    )
}

export default NotBookedScreen