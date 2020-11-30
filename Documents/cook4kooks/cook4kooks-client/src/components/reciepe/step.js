import React from 'react';

const Step = ({number, text}) =>{
    return(
        <div>
            <h4>{`${number}. ${text}`}</h4>
            {/* <button onClick={timerChange} value={time}>start timer</button> */}
        </div>
    );
}

export default Step;