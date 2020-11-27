import { colors, typography } from '../../../app/App.theme';

export const inputWrapStyle = `
  width: 100%;
  position: relative;
  background-color: transparent;
  margin-bottom: 17px;
`;

export const inputTextStyle = `
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  font-size: ${typography.fontSizeXL};
  color: ${colors.gray};
  line-height: ${typography.lineHeightBase};
  height: 60px;
  padding: 0 20px 0 62px;
  &::placeholder {
     color: ${colors.gray};
     font-weight: ${typography.fontWeightBold};
     font-family: ${typography.fontFamilyBase};
     font-size: ${typography.fontSizeXL};

     @media screen and (max-width: 600px) {
      font-size: ${typography.fontSizeS};
    }

  &:focus {
    border: none;
    box-shadow: none;
  }

  &:active {
    border: none;
    box-shadow: none;
  }
  
`;

export const labelStyle = `
  height: 100%;
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  top: 0;
  left: 17px;
`;

export const searchIconStyle = `
  max-width: 100%;
  color: ${colors.gray};
`;
