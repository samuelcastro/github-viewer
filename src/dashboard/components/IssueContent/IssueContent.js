import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import CardContent from '@material-ui/core/CardContent';
import { issueContentStyle } from './IssueContent.style';

const CardContentComponent = styledComponents.div`
  ${issueContentStyle}
`;

export const IssueContent = ({ text }) => {
  const smallBody = text.length > 150 ? `${text.substring(0, 150)}...` : text;
  return (
    <CardContent
      component={() => (
        <CardContentComponent>
          {smallBody || 'No Description Provided'}
        </CardContentComponent>
      )}
    />
  );
};

IssueContent.propTypes = {
  text: PropTypes.string
};

IssueContent.defaultProps = {
  text: null
};

export default IssueContent;
