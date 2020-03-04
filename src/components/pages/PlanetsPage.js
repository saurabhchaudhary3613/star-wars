import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlanets } from '../../actions/planetActions';
import PropTypes from 'prop-types';
import Planet from '../planet/Planet';
import Search from '../search/Search';

const PlanetsPage = props => {
  const { getPlanets } = props;
  const { planets } = props.planet;
  useEffect(() => {
    getPlanets();

    //eslint-disable-next-line
  }, []);

  if (planets === null) {
    return <p>No planets to show...</p>;
  }

  return (
    <Fragment>
      <Search />
      <ul className='collection with-header'>
        {planets.length === 0 ? (
          <p>No planets to show..</p>
        ) : (
          planets.map(planet => {
            return <Planet planet={planet} key={planet.name} />;
          })
        )}
      </ul>
    </Fragment>
  );
};
PlanetsPage.propTypes = {
  getPlanets: PropTypes.func.isRequired
};
const mapStateToProps = state => {
  return {
    planet: state.planet
  };
};
export default connect(mapStateToProps, { getPlanets })(PlanetsPage);
