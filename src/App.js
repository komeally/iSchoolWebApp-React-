import React from 'react';
import './App.css';
import getData from './utils/getData.js';
import PeopleTab from './components/people/PeopleTab';
import UndergradCollapse from './components/degrees/UndergradCollapse';
import GradAccordion from './components/degrees/GradAccordion';
import Minors from './components/minors/Minors';
import Employment from './components/employment/Employment';


class App extends React.Component {
  
  //mounting order of calls 1. constructor, 2. render 3.componentDidMount
  //order updating: 1. render, 2.componentDidMount
  constructor(props) {
    //by invoking super, I am defining 'this
    super(props);
    //in this main area, I am going to load the about information
    this.state={
      about:{},
      aboutLoaded:false
    };
  }

  componentDidMount() {
    //first, hard coded...
    /*
    this.setState({
      aboutLoaded: true,
      about:{title:"Hello there good looking", description: "this is fun"}
    });
    */
    //now with our cool getData function!
    getData('about/')
    .then((json) => {
      this.setState({
        about:json,
        aboutLoaded:true
      });
    }).catch((err) => {
      console.log(err);
    });
  } 
  
  render() {
    //bring in the vars
    const {about, aboutLoaded} = this.state;

    if(!aboutLoaded) return (
    <div className="App">
      <h1>Loading...</h1>
    </div>
    )

    return (
      <div className='App'>
        <h1>{about.title}</h1>
        <div>
          <p>{about.description}</p>
        </div>
        <div className='quoteBubble'>
          <p>{about.quote}</p>
          <p>--{about.quoteAuthor}</p>
        </div>    
        <hr/>
        {/* Here is space for our other components! */}
        <UndergradCollapse/>
        <GradAccordion/>
        <Minors/>
        <Employment/>
        <PeopleTab/>
      </div>
    )

  }
}

export default App;
