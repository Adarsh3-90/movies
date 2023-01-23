
import './App.css';
import Header from  './components/Header';
import Movies from './components/Movies';
import movie from './components/movie.json';

function App() {
  return (
    <div className="App">
    <Header/>

    <div className="main">
      {
        movie.map((element) => {
          return(
           <Movies 
                  title={element.Title}
                   year={element.year}
                   img={element.Poster} 
                   /> 
          )
        })
      }
      <Movies/>
    </div>
    </div>
  );
}

export default App;
