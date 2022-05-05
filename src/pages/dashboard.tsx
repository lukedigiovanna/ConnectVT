import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { store } from '../store';

function Dashboard() {
    // const navigate = useNavigate();

    return (
        <main className="dashboard">
            <section>
                <h1>Main Page</h1>
                <p>
                    How did you get here?
                </p>
                <ul>
                    {
                        store.getState().todos.map((todo: string) => <li>{todo}</li>)
                    }
                </ul>
                <input>
                
                </input>
                <button 
                onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        todo: "Take out the trash"
                    })
                    console.log(store.getState());
                }}
                >
                    Add Todo
                </button>
            </section>
        </main>
    )
}

export default Dashboard;