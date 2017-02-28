import React, { Component } from 'react';
import { Link } from 'react-router';

class Travel extends Component {
  constructor(){
    super();
    this.state = {
      showMsg1: 'hide-content',
      showContent: 'hide-content',
      hideArrow: 'false',
    };

    this.showContent = this.showContent.bind(this);
  }
  // This message is animated with 3 seconds fade in and a 1 seconds delay
  componentDidMount(){

      this.setState({
        showMsg1: 'travel-msg'
      });
  }

  showContent(e){
    this.setState({
      showContent: 'travel-content',
    })
  }


  render() {
    // if (this.state.showContent == 'travel-content'){
    //   let elements = document.querySelector('.travel-content > a');
    //    elements.style['width'] = screen.width / 5;
    //   console.log(elements);
    // }
    // let width = screen.width;

    return (
      <div className="main-content travel">
        <h1 className={this.state.showMsg1}>Keep Discovering...</h1>
        <div className={this.state.showContent} >
          <Link to="/travel/italy" className="italy-home"><h2>Italy</h2></Link>
          <Link to="/travel/france" className="france-home"><h2>France</h2></Link>
          <Link to="/travel/holland" className="holland-home"><h2>Holland</h2></Link>
          <Link to="/travel/turkey" className="turkey-home"><h2>Turkey</h2></Link>
        </div>
        <span onClick={this.showContent} className="arrow">explore</span>
        {this.props.children}
      </div>
    );
  }
}

export default Travel;
