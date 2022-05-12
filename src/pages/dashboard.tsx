import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from '../store';
import { Bug } from "../models/bug";
import { Comment } from '../models/comment';
import { fetchBugs } from "../store/bugs/effect";
import { fetchComments } from "../store/comments/effect";

function Dashboard() {
    // const navigate = useNavigate();)
    const bugs = useSelector((state: StoreState) => state.bugs);
    const state = useSelector((state: StoreState) => state);
    const comments = useSelector((state: StoreState) => state.comments);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchBugs()(dispatch, () => state, undefined);
        fetchComments()(dispatch, () => state, undefined);
    }, []);

    const [numbers, setNumbers] = React.useState([1]);

    return (
        <main className="dashboard">
            <section>
                <h1>Main Page</h1>
                <ul>
                    {
                        bugs.isLoading ? <li>Loading...</li> :
                        bugs.bugs.map((bug: Bug) => <li key={bug.id}>{bug.description}</li>)
                    }
                </ul>

                {
                    comments.isLoading ? <p>Loading...</p> :
                    comments.comments.map((comment: Comment) => <p key={comment.id}>{comment.body}</p>)
                }

                <input>
                
                </input>
                <button 
                onClick={() => {

                }}
                >
                    Add Todo
                </button>

                <button onClick={() => {
                    setNumbers([...numbers, numbers.length + 1]);
                }}> Add Number </button>
                <button onClick={() => {
                    setNumbers(numbers.slice(0, numbers.length - 1));
                }}> Remove Number </button>
                <button onClick={() => {
                    setNumbers(numbers.map(number => number * number));
                }}> Double Numbers </button>
                
                <ul>
                    {
                        numbers.map(number => <li key={number}>{number}</li>)
                    }
                </ul>

            </section>
        </main>
    )
}

export default Dashboard;