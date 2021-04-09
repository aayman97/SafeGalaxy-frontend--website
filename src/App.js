import './App.css';
import logo from './assets/logo.PNG'
import planet1 from './assets/planet1.png';
import planet2 from './assets/planet2.png';
import planet3 from './assets/planet3.png';

function App() {
    return (

        <div className='App'>
            <div className='NavBar'>
                <img src={logo} />
                <nav>
                    <ul>
                        <li><a href='#'>Roadmap</a></li>
                        <li><a href='#'>Team</a></li>
                        <li><a href='#'>White Paper</a></li>
                        <li><a href='#'>Buy Now</a></li>
                    </ul>
                </nav>
            </div>

            <div className="paragraph">
                <h6>Introducing SAFE<span>GALAXY</span></h6>
                <p>INTERGALACTIC <br></br>STATIC LIQUIDTY <br></br>PROTOCOL</p>
                <h4>Join thousands of other investors to go to  <br></br>infinity & beyond</h4>
                <button type="button" onclick="alert('Hello world!')">How to buy</button>
            </div>

            <div className="numbersAndData">
                <div className="stats">
                    <h3 className="numbers">18K+</h3>
                    <h3 className="data">Hodlers</h3>
                </div>
                <div className="stats">
                    <h3 className="numbers">$1.8M USD</h3>
                    <h3 className="data">Liquidty Generated</h3>
                </div>
                <div className="stats">
                    <h3 className="numbers">$29.9M USD</h3>
                    <h3 className="data">Market Cap</h3>
                </div>
                <div className="stats">
                    <h3 className="numbers">353T</h3>
                    <h3 className="data">Token Burned</h3>
                </div>
            </div>

            <div className="planets">
                <div className="planet">
                    <img src={planet1}></img>
                    <h5>Comm-UNITY Focus</h5>
                </div>

                <div className="planet">
                    <img src={planet2}></img>
                    <h5>Growth Mindset</h5>
                </div>

                <div className="planet">
                    <img src={planet3}></img>
                    <h5>Transperancy</h5>
                </div>
            </div>
        </div>

    );
}

export default App;