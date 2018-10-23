import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import styledComponents from 'styled-components';
import { Closed, PullRequest } from './icons';
import { issueHeaderStyle, iconContainerStyle } from './IssueHeader.style';

const iconMap = {
  closed: <Closed width={20} />,
  'pull-request': <PullRequest width={20} />
};

const IconMap = ({ state }) => iconMap[state] || null;

const IssueHeader = styledComponents.div`
  ${issueHeaderStyle}
`;

const IconContainer = styledComponents.div`
  ${iconContainerStyle}
`;

export const CardIssueHeader = ({ title, state }) => {
  const smallTitle =
    title.length > 80 ? `${title.substring(0, 70)} ...` : title;

  return (
    <CardHeader
      component={() => (
        <IssueHeader>
          <IconContainer>
            <IconMap state={state} />
          </IconContainer>
          {smallTitle}
        </IssueHeader>
      )}
    />
  );
};

CardIssueHeader.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};

export default CardIssueHeader;
