import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDisplayName, compose } from 'recompose';
import { applySpec } from 'ramda';
import styledComponents from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { getDashboadResults } from './Dashboard.selector';
import { IssueType } from './Dashboard.propTypes';
import { IssueList, Filters, Header } from './components';
import { Notification } from '../app/components';
import {parseLocation} from '../shared/Shared.helpers';
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

// Exporting a non-connected Component
export const Dashboard = ({
  results,
  isLoading,
  hasError,
  errorMessage,
  location
}) => {
  const { owner, name } = parseLocation(location);
  const subTitle = !isLoading ? `${owner}/${name}` : ''
  return (
    <Container>
      <Header
        title="GitHub Issue Viewer"
        subTitle={subTitle}
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
        <IssueList results={results} isLoading={isLoading} noResultsMessage="Not Resuls Found" />
      </MainContainer>
    </Container>
  )
};

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
