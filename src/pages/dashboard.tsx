import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {loggedIn} from "../utils/login-manager";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        // // route to login page if not logged in.
        // if (!loggedIn) {
        //     navigate("/login");
        // }
    })

    return (
        <main className="dashboard">
            <section>
                <h1>Main Page</h1>
                <p>
                    How did you get here?
                </p>
            </section>
        </main>
    );

}

export default Dashboard;