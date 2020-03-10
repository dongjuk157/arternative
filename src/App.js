import React from 'react';
import axios from 'axios';
import Movie from './Movie';

/*function Food({name}){
  return (
    <div>
      <h1>I like {name} </h1>
    </div>
  )
}
Food.propTypes={
  name: PropTypes.string.isRequired
}
const foodILike =[
  {
    id: 1,
    name: "kimchi"
  },
  {
    id:2,
    name: "toast"
  },
  {
    id:3,
    name: "kimchi toast"
  }
]
function renderFood(dish){
  return(
    <Food key={dish.id} name= {dish.name} />
  );
}

function App() {
  return (
    <div className="App">
       {foodILike.map(renderFood)}
    </div>
  );
}
*/
class App extends React.Component{
  state = {
    isLoading: true,
    movies:[]
  };
  getMovies=async()=>{
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({movies, isLoading:false});
  };
  componentDidMount() {
    this.getMovies();
  }
  render(){
    const{isLoading, movies}=this.state;
    return (
      <div>
        {isLoading
          ? "Loading..." 
          : movies.map(movie=>(
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
              />
          )
        )}</div>
    );
  }
}
export default App;
