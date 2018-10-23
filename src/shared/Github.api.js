import Http from 'axios';
import { stringify } from 'qs';
import { prop } from 'ramda';

const GITHUB_BASE_URL = 'https://api.github.com';

export const findIssues = (owner, repo, params, isPullRequest = false) => {
  const parsedParams = stringify(params);
  const type = isPullRequest ? 'pulls' : 'issues';
  const endPoint = `${GITHUB_BASE_URL}/repos/${owner}/${repo}/${type}?${parsedParams}`;

  return Http.get(endPoint).then(prop('data'));
};

export default findIssues;
