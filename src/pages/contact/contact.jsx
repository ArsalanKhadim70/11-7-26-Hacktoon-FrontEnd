import React, { useState } from "react";
import Header from "../../components/header/header";

const ContactScreen = () => {
    const [users, setUsers] = useState(['ahmed', 'ali']);

    const addData = () => {
        const lastVal = users.at(-1);
        const newVal = (lastVal == 'ahmed') ? ('ali') : ('ahmed');
        const cloneData = [...users];
        cloneData.push(newVal);
        setUsers(cloneData);
    };

    return (
        <div>
            <Header screenName="Contact" />

            <button onClick={addData}> Add Data </button>

            <ul>
                {
                    users?.map((item, index) => {
                        return <li key={index}> {item} </li>
                    })
                }
            </ul>
        </div>
    );
};

export default ContactScreen;