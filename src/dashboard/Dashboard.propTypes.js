import PropTypes from 'prop-types';

export const LabelType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  color: PropTypes.string
});

export const IssueType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  labels: PropTypes.arrayOf(LabelType)
});
