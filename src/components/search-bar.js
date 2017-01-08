import React, { Component } from 'react';

//all class-based components must have a render function
class SearchBar extends Component {
  //initializer method on the class
  constructor(props) {
    super(props);
    //state exists on any class-component
    this.state = { term: '' };
  }

  render() {
    //onChange is a special React property
    return (
      <div>
        <input onChange = { event => this.setState({ term: event.target.value }) } />
      </div>
    );
  }
}

export default SearchBar;
