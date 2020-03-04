import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchPlanets } from '../../actions/planetActions';

const Search = ({ searchPlanets }) => {
  let timeout;
  const search = e => {
    clearTimeout(timeout);
    const textValue = e.target.value;

    // Make a new timeout set to go off in 500ms
    timeout = setTimeout(function() {
      searchPlanets(textValue);
    }, 500);
  };
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Planets...'
              required
              onChange={search}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};
Search.propTypes = {
  searchPlanets: PropTypes.func.isRequired
};

export default connect(null, { searchPlanets })(Search);
