import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {loggedIn} from "../utils/login-manager";

import '../constants/firebase';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        // // route to login page if not logged in.
        // if (!loggedIn) {
        //     navigate("/login");
        // }
    })

    useFirestoreConnect([
        { collection: 'test' }
    ])

    const users = useSelector((state: any) => state.firestore.ordered.test);

    return (
        <main className="dashboard">
            <section>
                <h1>Main Page</h1>
                <p>
                    How did you get here?
                </p>
                <p>
                    {users}
                </p>
            </section>
        </main>
    );

}

export default Dashboard;