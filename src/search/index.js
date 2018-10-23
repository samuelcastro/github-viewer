import { hot } from 'react-hot-loader';
import search from './Search';
import reducer from './Search.reducer';
import saga from './Search.saga';

export { reducer, saga };

// Hot Module Replacement:
export default hot(module)(search);
