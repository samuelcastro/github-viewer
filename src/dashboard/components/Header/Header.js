import React from 'react';
import PropTypes from 'prop-types';
import styledComponents from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Loading } from '../../../app/components';
import {
  headerStyle,
  subTitleStyle,
  titleStyle,
  headerContainerStyle
} from './Header.styles';
import { colors } from '../../../app/App.theme';

const HeaderContainer = styledComponents.div`
  ${headerContainerStyle}
`;

const Title = styledComponents(Grid)`
  ${titleStyle}
`;

const SubTitle = styledComponents(Grid)`
  ${subTitleStyle}
`;

const HeaderWrapper = styledComponents.div`
  ${headerStyle}
`;

export const Header = ({ title, subTitle, isLoading }) => (
  <HeaderContainer>
    <HeaderWrapper>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        alignContent='center'
      >
        <Title item>{title}</Title>
        <SubTitle item>{subTitle}</SubTitle>
        {isLoading && <Loading size={50} color={colors.white} />}
      </Grid>
    </HeaderWrapper>
  </HeaderContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  isLoading: PropTypes.bool
};

Header.defaultProps = {
  subTitle: null,
  isLoading: false
};

Header.displayName = 'Header';

export default Header;
