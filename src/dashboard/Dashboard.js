import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDisplayName, compose } from 'recompose';
import { applySpec, pathOr } from 'ramda';
import styledComponents from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { getDashboadResults } from './Dashboard.selector';
import { IssueType } from './Dashboard.propTypes';
import { IssueList, Filters, Header } from './components';
import { Notification } from '../app/components';
import {
  hasErrorSelector,
  errorMessageSelector,
  isLoadingSelector
} from '../search/Search.selector';

const Container = styledComponents.div`
  flex-grow: 1;
`;

const MainContainer = styledComponents(Grid)`
  padding: 80px;
`;

const subTitleFromLocation = pathOr(null, ['state', 'url']);

// Exporting a non-connected Component
export const Dashboard = ({
  results,
  isLoading,
  hasError,
  errorMessage,
  location
}) => (
  <Container>
    <Header
      title="GitHub Issue Viewer"
      subTitle={subTitleFromLocation(location)}
      isLoading={isLoading}
    />
    <MainContainer
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Notification message={errorMessage} open={hasError} />
      <Filters />
      <IssueList results={results} />
    </MainContainer>
  </Container>
);

Dashboard.propTypes = {
  results: PropTypes.arrayOf(IssueType).isRequired,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  location: PropTypes.shape({
    state: PropTypes.shape({
      url: PropTypes.string
    })
  }).isRequired
};

Dashboard.defaultProps = {
  hasError: false,
  isLoading: false,
  errorMessage: null
};

const mapStateToProps = applySpec({
  results: getDashboadResults,
  hasError: hasErrorSelector,
  errorMessage: errorMessageSelector,
  isLoading: isLoadingSelector
});

// Exporting a connected component
export default compose(
  setDisplayName('Dashboard'),
  connect(mapStateToProps)
)(Dashboard);
