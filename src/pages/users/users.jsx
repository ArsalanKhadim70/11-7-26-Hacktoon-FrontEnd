import React from 'react';
import users from '../../utils/dummy-users';
import { useNavigate } from "react-router";

const Users = () => {

    const navigate = useNavigate();

    const viewUser = (uid) => {
        console.log('Uid: ', uid);
        navigate(`/users/${uid}/details`);
    };

    return (
        <div>
            <h1> Users Screen! </h1>

            <ul>
                {
                    users?.map((item, index) => {
                        return (
                            <li key={index} style={{ marginTop: 10 }}>
                                {item?.userName}
                                <button onClick={() => viewUser(item?.id)}> View user </button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Users;