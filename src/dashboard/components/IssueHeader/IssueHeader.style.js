import { colors, typography } from '../../../app/App.theme';

export const issueHeaderStyle = `
  position: relative;
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 16px 16px 16px 16px;
  background-color: ${colors.secondary};
  font-size: ${typography.fontSizeXL}
  font-weight: ${typography.fontWeightBold}
  color: ${colors.white};
`;

export const iconContainerStyle = `
  position: absolute;
  top: 10px;
  right: 10px;
`;
