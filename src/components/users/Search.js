import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormButton } from './Search.styles';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter a value in the Search', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} action='' className='form'>
          <input
            type='text'
            className=''
            name='text'
            id=''
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <FormButton
            type='submit'
            className='btn-block btn btn-dark'
            value='Search'
          />
          {showClear && (
            <button className='btn btn-block btn-light' onClick={clearUsers}>
              Clear
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default Search;
