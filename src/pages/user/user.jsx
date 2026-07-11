import React from 'react';
import { useParams, useNavigate } from "react-router";
import users from '../../utils/dummy-users';

const CustomUser = () => {

    const { uid } = useParams();
    console.log('Params: ', uid);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

    return (
        <div>
            <h1> Custom User Screen! </h1>
            <h1> {`User: ${users?.find((item) => { return item.id == uid }).userName}`} </h1>
            <button onClick={handleNavigation}> Home </button>
        </div>
    );
};

export default CustomUser;