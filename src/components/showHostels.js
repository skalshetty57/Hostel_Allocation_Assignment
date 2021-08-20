import React, {useState} from 'react';
import HostelFloorPlan from '../components/hostelFloorPlan';

function ShowHostels  (props) {
    let hostelarr=['1','2','3','4','5','6'];
    let [hostelSelected,sethostelSelected]=useState(-1);
    let handleClick=(e)=>{
        let temp=Number(e.target.id);
        sethostelSelected(temp);
    }
    return (
        <>
            {
                hostelSelected===-1?
            (<div>
                <h1>Chose a Hostel</h1>
                <div>
                    {hostelarr.map((val)=>{
                        return <div onClick={(e)=>{handleClick(e)}} key={val} id={val}>{props.hostelType+val}</div>
                    })}
                </div>
            </div>):
            (
                <HostelFloorPlan hostelType={props.hostelType} hostelNumber={hostelSelected} />
            )
            }          
        </>

    )
}
export default ShowHostels;
