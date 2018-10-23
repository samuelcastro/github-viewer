import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

const TransitionRight = props => <Slide {...props} direction="right" />;

const Notification = props => (
  <Snackbar
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
    autoHideDuration={5000}
    TransitionComponent={TransitionRight}
    {...props}
  />
);

export default Notification;
