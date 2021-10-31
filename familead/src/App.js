import './App.css';

function App() {
  var front = "https://www.google.com/maps/embed/v1/search?q=";
  var back = "&key=AIzaSyAqtsSnyopgoCqC3XyE9H79maOdEgJfo3g";

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return (
    <div className="App">
      <header className="App-header">
        <form >
          <label>
            What are you looking for near you?<br></br>
            <h5>
              Examples: Restaurants, Coffee Shops, Bars, etc.
            </h5>
            <input type="text" name="search" id="searchbox" />
          </label>
          <input type="submit" value="Submit" id="submitButton" />
        </form>
        <iframe width="600" height="450" loading="lazy" allowFullScreen src={front + urlParams.get('search') + back}></iframe>
      </header>
    </div>
  );
}


export default App;
