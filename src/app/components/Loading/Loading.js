import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({ color, ...rest }) => (
  <CircularProgress size={30} style={{ color }} {...rest} />
);

export default Loading;
