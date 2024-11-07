import "./App.css";
import Iframe from "./Common/Iframe";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Search Everything</p>
                <Iframe src="https://www.google.com/webhp?igu=1" />
            </header>
        </div>
    );
}

export default App;
