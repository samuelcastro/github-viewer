import { colors, typography } from '../../../app/App.theme';

export const headerStyle = `
  padding: 30px;
  color: ${colors.white};
  -webkit-box-shadow: 0 10px 20px -2px grey;
  -moz-box-shadow: 0 10px 20px -2px grey;
  box-shadow: 0 10px 20px -2px grey;
`;

export const subTitleStyle = `
  font-weight: ${typography.fontWeightLight};
  font-size: 1.0em;
`;

export const titleStyle = `
 font-weight: 700;
 font-size: 2.3em;
  @media (max-width: 700px) {
    font-size: 1.3em;
  }
`;

export const headerContainerStyle = `
  background-color: ${colors.primary};
`;

export const loadingStyle = {
  color: colors.white
};
