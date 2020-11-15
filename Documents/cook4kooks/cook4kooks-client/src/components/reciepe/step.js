import React from 'react';

const Step = ({id, text}) =>{
    return(
        <div>
            <h3>{`${id}. ${text}`}</h3>
            {/* <button onClick={timerChange} value={time}>start timer</button> */}
        </div>
    );
}

export default Step;