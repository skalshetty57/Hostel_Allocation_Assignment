import React, {useState} from 'react';

function HostelFloorPlan(props){
let roomArr=[1,2,3,4,10,-2,-1,5,9,8,7,6];
const [roomChoosen,setroomChoosen]=useState(false);
const [roomBooked,setroomBooked]=useState(false);
const [roomSelected,setroomSelected]=useState(0);
const [floorSelected,setfloorSelected]=useState(1);

let handleClick=(e)=>{
    setroomChoosen(true);
    setroomSelected(e.target.id);
}
let handleButtonClick=()=>{
    setroomBooked(true);
}
let handleModlClick=()=>{
    setroomBooked(false);
    setroomChoosen(false);
}
let handleChange=(e)=>{
    setfloorSelected(e.target.value);
}

return(
    <>
        <div>
            <h3>Choose a Floor</h3>
            <select onChnage={(e)=>{handleChange(e)}}>
                <option id="1F">1st Floor</option>
                <option id="2F">2st Floor</option>
                <option id="3F">3st Floor</option>
                <option id="4F">4st Floor</option>
                <option id="5F">5st Floor</option>
            </select>
            <div>
                {roomArr.map((val)=>{
                    if(val<0)
                        return <div id={val} key={val}>{val}</div>
                    return <div onClick={(e)=>{handleClick(e)}} id={val} key={val}>{val}</div>
                })}
            </div>
            {roomChoosen?<button onClick={handleButtonClick}>Book Room</button>:null}
        </div>
        {
            roomBooked?
            <>
                <div onClick={handleModlClick}>
                <div onClick={e=>e.stopPropagation()}>
                    <div>
                        
                        <h4>Sucess</h4>
                    </div>
                    <div>
                        <div>Your room has been successfully booked</div>
                        <div>Your room details are: </div>
                        <div>Hostel no: {props.hostelType+props.hostelNumber} </div>
                        <div>Floor no: {floorSelected} </div>
                        <div>Room no: {roomSelected} </div>
                        
                    </div>
                    <div>
                        <button onClick={handleModlClick}>Main menu</button>
                    </div>
                </div>
                </div>
            </>
            :(null)
        }
    </>
);
}
export default HostelFloorPlan;