import { colors } from '../../../app/App.theme';

export const issueListStyle = `
  flex-grow: 1;
  .fade-enter {
    opacity: 0.01;
  }
  
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  
  .fade-exit {
    opacity: 1;
  }
  
  .fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }
`;

export const noResulsStyle = `
  padding-top: 100px;
  color: ${colors.primary}
`
