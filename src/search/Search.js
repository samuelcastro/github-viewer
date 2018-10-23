import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import { applySpec } from 'ramda';
import styledComponent from 'styled-components';
import Grid from '@material-ui/core/Grid';

import {
  hasErrorSelector,
  errorMessageSelector,
  isLoadingSelector
} from './Search.selector';

import { Input, Notification } from './components';
import { searchRequestAction } from './Search.actions';
import { handlePasteSearch, handleEnterSearch } from './Search.helper';
import { searchContainerStyle, titleStyle } from './Search.style';

const Container = styledComponent(Grid)`
  ${searchContainerStyle}
`;

const Title = styledComponent.h1`
  ${titleStyle}
`;

// Exporting a non-connected component
export const Search = ({
  hasError,
  isLoading,
  errorMessage,
  dispatchSearch
}) => (
  <Container container spacing={24} justify="center" alignItems="center">
    <Grid item xs={6}>
      <Title>GitHub Issue Viewer</Title>
      <Input
        type="text"
        placeholder="Paste a link to a GitHub repo!"
        onPaste={handlePasteSearch(dispatchSearch)}
        onKeyPress={handleEnterSearch(dispatchSearch)}
        isLoading={isLoading}
      />
      <Notification message={errorMessage} open={hasError} type="danger" />
    </Grid>
  </Container>
);

Search.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
  dispatchSearch: PropTypes.func
};

Search.defaultProps = {
  hasError: false,
  isLoading: false,
  errorMessage: null,
  dispatchSearch: null
};

// mapping dispatch to props
const mapDispatchToProps = dispatch => ({
  dispatchSearch: url => dispatch(searchRequestAction({ url, redirect: true }))
});

// mapping state to prop with reselect for memoization
const mapStateToProps = applySpec({
  hasError: hasErrorSelector,
  errorMessage: errorMessageSelector,
  isLoading: isLoadingSelector
});

// Exporting a connected component
export default compose(
  setDisplayName('Search'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Search);
