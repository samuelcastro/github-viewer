import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'ramda';
import styledComponents from 'styled-components';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import CardActions from '@material-ui/core/CardActions';

import { LabelType } from '../../Dashboard.propTypes';
import { cardIssueStyle } from './Issue.style';
import { Label, IssueHeader, IssueContent } from '..';

const CardIssue = styledComponents(Card)`
  ${cardIssueStyle}
`;

export const Issue = ({ title, labels, state, body }) => {
  const labelList = map(
    ({ id, name }) => <Label key={id} name={name} />,
    labels
  );

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <CardIssue>
        <IssueHeader title={title} state={state} />
        <IssueContent text={body} />
        <CardActions>{labelList}</CardActions>
      </CardIssue>
    </Grid>
  );
};

Issue.propTypes = {
  title: PropTypes.string.isRequired,
  labels: PropTypes.arrayOf(LabelType),
  state: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

Issue.defaultProps = {
  labels: []
};

export default Issue;
