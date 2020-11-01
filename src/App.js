import React from "react";
import "./App.css";
import Articles from "./components/Articles";
import User from "./components/User";

function App() {
    return (
        <>
            <header className="App-header">
                <h1>React Skeletons</h1>
            </header>
            <main className="content">
                <Articles />
                <User />
            </main>
        </>
    );
}

export default App;
