import PropTypes from 'prop-types';

const Button = ({ onLoadMore }) => (
  <button type="button" className="Button" onClick={() => onLoadMore()}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

export default Button;
