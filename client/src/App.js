import axios from 'axios';
import React from 'react';
import ReactPaginate from 'react-paginate'
import './App.css';
import MovieCard from './components/movieCard';
import Header from './components/header'

const url = 'http://localhost:5000/';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 10,
      currentPage: 0,
      searchBox: [],
      titles: [],
      searchText: ""
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getData() {
    axios({
      method: 'GET',
      url: url+'home'
    }).then(res => {
      // console.log(res.data)
      // setData(d.data.data)
      const data = res.data.data;
      const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
      const postData = slice.map((movie, index) => <MovieCard key={index} movie={movie} />)
      const titles = data.map(movie => movie.Title);

      this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData,
          titles
      });
    })
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.getData()
    });

  };

  componentDidMount() {
    this.getData();
  }

  handleChange(text) {
    this.setState({searchText: text});
    const moviesList = this.state.titles.filter((mov) =>
      mov.toLowerCase().startsWith(text.toLowerCase())
    );
    console.log(moviesList);
    this.setState({searchBox: moviesList})
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <div className="search">
        <input type="text" className="searchBar" placeholder="Seach for a movie..." 
          onChange={e => this.handleChange(e.target.value)
        } 
        />
        {this.state.searchBox.length > 0 && this.state.searchText ? 
          <div className="searchBox">
            {JSON.stringify(this.state.searchBox)}
          </div> 
        : null}
        </div>

        <div className="data">
          {this.state.postData}
        </div>
        <div className="pagination">
          <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
        </div>
      </div>
    );
  }
}

export default App;
