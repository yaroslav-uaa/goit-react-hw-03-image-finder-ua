import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  handleValueChange = e => {
    this.setState({ value: e.currentTarget.value });
  };

  render() {
    const { value } = this.state;
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
              value={value}
              onChange={this.handleValueChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
