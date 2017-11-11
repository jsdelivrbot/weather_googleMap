import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchWether from '../actions/index';

class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFromSubmit = this.onFromSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFromSubmit(e) {
    e.preventDefault();
    this.props.fetchWether(this.state.term);
    this.setState({ term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFromSubmit} className='input-group'>
        <input
          onChange={this.onInputChange}
          className='form-control'
          placeholder='Get a five-day forecast in your favorite cities'
          value = {this.state.term}
        />
        <span className='input-group-btn'>
          <button type='submit' className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchWether } , dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
