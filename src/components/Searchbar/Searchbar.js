import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;

    if (query.trim() === '') {
      alert('Enter what you are looking');
      return;
    }
    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  handleValueChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={query}
              onChange={this.handleValueChange}
            />
          </form>
        </header>
      </>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
