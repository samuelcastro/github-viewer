import { colors, typography } from '../../../app/App.theme';

export const issueContentStyle = `
  position: relative;
  border-radius: 0px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 16px 16px 16px 16px;
  background-color: ${colors.white};
  font-size: ${typography.fontSizeBase}
  font-weight: ${typography.fontWeightBase}
  color: ${colors.grayDark};
  max-width: 100%;
  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

export default issueContentStyle;
