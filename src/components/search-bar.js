import React, { Component } from 'react';

//all class-based components must have a render function
class SearchBar extends Component {
  render() {
    return <input onChange = { event => console.log(event.target.value) } />;
    //onChange is a special React property
  }
}

export default SearchBar;
