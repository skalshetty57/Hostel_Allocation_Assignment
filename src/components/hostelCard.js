import React from 'react'

function HostelCard  (props) {
    return (
        <>
            <div id={props.idx} onClick={(e) =>{props.onClick(e)}}>
                <img id={props.idx+"img"} src={props.imgurl} alt={props.hostelFor} />
                <div id={props.idx+"name"}>{props.hostelFor} Hostel</div>
            </div>
        </>
    )
}
export default HostelCard;