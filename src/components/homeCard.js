import React from 'react'

function HomeCard(props){
    const homeCardStyle={
        width:'50vw',
        height:'50vh',
        border: '3px solid black',
        borderRadius: '5px',
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center'
    }

    return (
        <>
            <div >
                <div style={homeCardStyle}>Welcome {props.userName} </div>
            </div>
        </>
    )
}

export default HomeCard
