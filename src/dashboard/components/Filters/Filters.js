import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName } from 'recompose';
import Grid from '@material-ui/core/Grid';
import styledComponents from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { parseLocation } from '../../../shared/Shared.helpers';
import { filtersStyle } from './Filters.style';
import { colors } from '../../../app/App.theme';

const Container = styledComponents.div`
  ${filtersStyle}
`;

const CustomLink = styledComponents(Link)`
  text-decoration: none;
  color: ${({ active }) => (active ? colors.primary : colors.grayDark)};
`;

const GridItem = styledComponents(Grid)`
  min-width: 100px
`;

export const Filter = ({ label, to, active }) => (
  <GridItem item xs={12} sm={6} md={3}>
    <CustomLink to={to} active={active ? 1 : 0}>
      {label}
    </CustomLink>
  </GridItem>
);

export const Filters = ({ match: { url }, location }) => {
  const { state } = parseLocation(location);
  const isAllState = !state || state === 'all';

  return (
    <Container>
      <Grid
        container
        spacing={8}
        direction="row"
        alignContent='center'
        justify="center"
        alignItems="center"
      >
        <Filter to={`${url}?state=all`} active={isAllState} label="All" />

        <Filter
          to={`${url}?state=open`}
          active={state === 'open'}
          label="Open"
        />

        <Filter
          to={`${url}?state=closed`}
          active={state === 'closed'}
          label="Closed"
        />

        <Filter
          to={`${url}?state=pull-request`}
          active={state === 'pull-request'}
          label="Pull Request"
        />
      </Grid>
    </Container>
  );
};

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool
};

Filter.defaultProps = {
  active: false
};

Filters.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string
  }).isRequired
};

// Exporting an enhanced component
export default compose(
  setDisplayName('Filters'),
  withRouter
)(Filters);
