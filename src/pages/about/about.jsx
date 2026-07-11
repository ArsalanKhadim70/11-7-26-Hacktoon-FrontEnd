import React, { useState } from "react";
import Header from "../../components/header/header";

const AboutScreen = () => {
    const [countState, setCountState] = useState(0);
    const [arr, setArr] = useState([]);

    let count = 0;

    // const incCount = () => {
    //     console.log(count);
    //     count = count + 1;
    // };

    const incCount = () => {
        setCountState(countState + 1);
        console.log(countState);
    };

    const decCount = () => {
        setCountState(countState - 1);
        console.log(countState);
    };

    return (
        <div>
            <Header screenName="About" />
            <h2> {`Count ${countState}`} </h2>
            <button
                onClick={incCount}
                disabled={countState >= 20}
            >
                Increment Count
            </button>
            <button
                onClick={decCount}
                disabled={countState <= 0}
            >
                Decrement Count
            </button>
        </div>
    );
};

export default AboutScreen;