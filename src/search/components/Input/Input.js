import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import Search from '@material-ui/icons/Search';
import { Loading } from '../../../app/components';
import {
  inputWrapStyle,
  inputTextStyle,
  labelStyle,
  searchIconStyle
} from './Input.style';
import { colors } from '../../../app/App.theme';

const InputWrap = styledComponents.div`
  ${inputWrapStyle}
`;

const InputText = styledComponents.input`
  ${inputTextStyle}
`;

const Label = styledComponents.label`
  ${labelStyle}
`;

const SearchIcon = styledComponents(Search)`
    ${searchIconStyle}
`;

export const Input = ({ isLoading, ...rest }) => (
  <InputWrap>
    <Label>
      {isLoading ? (
        <Loading color={colors.primary} />
      ) : (
        <SearchIcon fontSize="large" />
      )}
    </Label>
    <InputText {...rest} />
  </InputWrap>
);

Input.propTypes = {
  isLoading: PropTypes.bool
};

Input.defaultProps = {
  isLoading: false
};

export default Input;
