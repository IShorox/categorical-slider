import React, { Component } from 'react';
import CategoricalSlider from './components/CategoricalSlider';
import './App.css'

const marks = ['Category1', 'Category2', 'Category3', 'Category4']

const initialSelected = 'Category2'

function filterFn(value) {
  console.log(value);
}

class App extends Component {
  render() {
    return (
      <div className='App-cont'>
        <CategoricalSlider 
          marks={marks} 
          initialSelected={initialSelected}
          displayMarks={false}
          filterFn={filterFn}
          />
      </div>
    );
  }
}

export default App;
