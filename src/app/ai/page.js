"use client";

import { useState } from 'react';

export default function ai() {

    const [request, setRequest] = useState("")
    const [error, setError] = useState("");

    const submitRequest = async () => {
        if (!(request)) { //
            setError("Please enter a message");
            return;
        }

        try {
            //Send the POST request using fetch
            const textData = JSON.stringify({request: request});
            const response = await fetch('http://localhost:3000/api/airequest/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: textData
            });

            const data = await response.json();
            const textarea = document.createElement("textarea");

            textarea.rows = 5;
            textarea.cols = 40;
            textarea.disabled = true;
            if (!(data.response)) {
                textarea.value = "An error has occurered when communicaring with Mark"
            }
            textarea.value = data.response;

            const container = document.getElementById("main-content");

            container.appendChild(textarea);
        } catch (error) {
            setError(error);
        }
    }

    return (
        <div className="container">
            <nav className="menu">
                <h2>Menu</h2>
                <ul>
                    <li>Home</li>
                    <li>Mark Schemes</li>
                    <li>FAQ</li>
                </ul>
            </nav>
            <main className="main-content" id = "main-content">
                <h1>Rubric Builder</h1>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Enter your message here..."
                    name="name"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    required
                />
                <label className="query_label"> Ask Mark </label>
                <button type="button" className='ai-btn' onClick={submitRequest}>
                    Submit
                </button>
                <br></br>

            </main>
        </div>

    )
}