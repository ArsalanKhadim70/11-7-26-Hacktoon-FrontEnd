import React, { useEffect, useState } from 'react';

const Services = () => {

    const [count, setCount] = useState(0);
    // const [input, setInput] = useState('');

    // const [timeVal, setTimeVal] = useState(new Date().toLocaleTimeString());

    // const testing = () => {
    //     console.log('xyz');
    // }

    // // Example 1:
    // useEffect(() => {
    //     console.log('Example no 1 is working!');
    // });

    // Example 2:
    // useEffect(() => {
    //     console.log('Example no 2 is working!');
    //     testing();
    // }, []);

    // Example 3:
    // useEffect(() => {
    //     console.log('Example no 3 is working!');
    // }, [count]);

    // Example 3:
    // useEffect(() => {
    //     console.log('Example no 3 tooo is working!');
    // }, [input]);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         let newDate = new Date().toLocaleTimeString();
    //         setTimeVal(newDate);
    //     }, 1000);

    //     return () => {
    //         console.log('Timer');
    //         clearInterval(timer);
    //     }
    // }, []);

    useEffect(() => {
        // setInterval(() => {
        //     let updatedCount = count + 1;
        //     setCount(updatedCount);
        // }, 1000);

        setTimeout(() => {
            let updatedCount = count + 1;
            setCount(updatedCount);

            if (count == 10) {
                setCount(1);
            }
        }, 1000);
    }, [count]);

    return (
        <div>
            <h1> Services </h1>
            <h2> {`Count ${count}`} </h2>
            {/* <button onClick={() => setCount(count + 1)}> Inc Count </button> */}

            {/* <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            /> */}

            {/* <h1> {timeVal} </h1> */}
        </div>
    );
};

export default Services;