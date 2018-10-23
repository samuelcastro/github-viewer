import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import { colors, typography } from '../../../app/App.theme';

const LabelWrapper = styledComponents.div`
  color: ${colors.white};
  background-color: ${colors.primary};
  min-width: 30px;
  padding: 5px;
  margin-left: 5px;
  font-size: ${typography.fontSizeBase};
  border-radius: 5px;
`;

export const Label = ({ name }) => <LabelWrapper>{name}</LabelWrapper>;

Label.propTypes = {
  name: PropTypes.string
};

Label.defaultProps = {
  name: null
};

export default Label;
