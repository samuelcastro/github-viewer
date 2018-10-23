import { parse } from 'qs';

export const parseLocation = ({ search, pathname }) => {
  const { state } = parse(search, { ignoreQueryPrefix: true });
  const [, , owner, name] = pathname.split('/');

  return { owner, name, state };
};

export default parseLocation;
