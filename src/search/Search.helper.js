import { curry } from 'ramda';

export const handlePasteSearch = curry((dispatchSearch, { clipboardData }) => {
  dispatchSearch(clipboardData.getData('Text'));
});

export const handleEnterSearch = curry(
  (dispatchSearch, { key, target: { value } }) => {
    if (key === 'Enter') dispatchSearch(value);
  }
);
