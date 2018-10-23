import { hot } from 'react-hot-loader';
import dashboard from './Dashboard';
import reducer from './Dashboard.reducer';
import saga from './Dashboard.saga';

export { reducer, saga };

// Hot Module Replacement:
export default hot(module)(dashboard);
