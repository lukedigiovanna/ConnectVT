import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from '../store';
import { Bug } from "../models/bug";

function Dashboard() {
    // const navigate = useNavigate();)
    const bugs = useSelector((state: StoreState) => state.bugs);
    const dispatch = useDispatch();

    return (
        <main className="dashboard">
            <section>
                <h1>Main Page</h1>
                <p>
                    How did you get here?
                </p>
                <ul>
                    {
                        bugs.bugs.map((bug: Bug) => <li>{bug.description}</li>)
                    }
                </ul>
                <input>
                
                </input>
                <button 
                onClick={() => {
                    dispatch({
                        type: 'ADD_TODO',
                        todo: "Take out the trash"
                    })
                    console.log(todos);
                }}
                >
                    Add Todo
                </button>
            </section>
        </main>
    )
}

export default Dashboard;