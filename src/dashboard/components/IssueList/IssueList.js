import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styledComponents from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Issue from '../Issue';
import { IssueType } from '../../Dashboard.propTypes';
import { issueListStyle } from './IssueList.style';

const ListContainer = styledComponents.div`
  ${issueListStyle}
`;

export const IssueList = ({ results }) => {
  const issues = map(
    ({ id, title, labels, state, base, body }) => (
      <CSSTransition timeout={500} classNames="fade" key={id}>
        <Issue
          title={title}
          state={base ? 'pull-request' : state}
          labels={labels}
          body={body}
        />
      </CSSTransition>
    ),
    results
  );

  return (
    <ListContainer>
      <Grid container spacing={24} alignItems="center" direction="row">
        <TransitionGroup component={null}>{issues}</TransitionGroup>
      </Grid>
    </ListContainer>
  );
};

IssueList.propTypes = {
  results: PropTypes.arrayOf(IssueType).isRequired
};

export default IssueList;
