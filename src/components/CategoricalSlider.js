import { Slider } from 'antd';
import React, { Component } from 'react';
import "antd/dist/antd.css";
import PropTypes from 'prop-types';


  
  class CategoricalSlider extends Component {
    constructor(props) {
        super(props);
      }

      calculateItemsToDisplay() {
        const marks = this.props.marks;
        const marksObject = {};
        
        this.props.displayMarks ? Object.assign(marksObject, marks) : Object.assign(marksObject, marks.map((mark, index) => {
            if (index === 0 || index === marks.length-1)
                return mark;
        }))
        return marksObject;
      }

    render() {
        const initialIndex = this.props.marks.indexOf(this.props.initialSelected);
        const marksToDiplay = this.calculateItemsToDisplay();
        return (
    <div>
      <Slider 
        marks={marksToDiplay} 
        defaultValue={[initialIndex]} 
        max={this.props.marks.length-1} 
        tooltipVisible={this.props.displayMarks}
        onChange={(value) => this.props.filterFn(value)}/>
    </div>)
    }
  }
    
  CategoricalSlider.propTypes ={
    inputValues:  PropTypes.arrayOf(PropTypes.string),
    initialSelected: PropTypes.string,
    displayMarks: PropTypes.bool,
    filterFn: PropTypes.func,
  }

  export default CategoricalSlider;