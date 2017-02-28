import React from 'react';

//Controlled Component

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: "",
      engine: "https://www.google.com/search",
      query: "q",
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onEngineChange = this.onEngineChange.bind(this);
  }

  //Form handling in React
  onSearchChange(e){
    this.setState({
      search: e.target.value,
    })
  }

  onEngineChange(e){
    if(e.target.value == 'https://www.baidu.com/baidu'){
      this.setState({
        engine: e.target.value,
        query: 'word',
      })
    } else {
      this.setState({
        engine: e.target.value,
        query: 'q',
      })
    }
  }

// <img className="searchIcon" src={require('../imgs/search_icon.png')} />
// <input className="searchIcon" type="submit" value=""/>
  render() {

    return (
      <div className="searchBar flexbox">
        <select onChange={this.onEngineChange} className="searchEngines">
          <option value="https://www.google.com/search">-Google-</option>
          <option value="https://www.baidu.com/baidu">-Baidu-</option>
          <option value="https://www.youtube.com/search">-Youtube-</option>
        </select>

        <form className="flexbox flex-align-center" method="get" action={this.state.engine} target="_blank">
          <input id="search" name={this.state.query} type="text" placeholder="Search for..." required value={this.state.search} onChange={this.onSearchChange}/>
          <input className="searchIcon" type="image" src={require('../../imgs/search_icon.png')} alt="Submit Search" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
