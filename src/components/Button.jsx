import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

const base =
  'rounded-lg p-4 text-sm font-medium text-white to-orange from-tomato bg-dark ';

const styles = {
  primary:
    base +
    `enabled:bg-gradient-to-r enabled:shadow-xl enabled:shadow-tomato/40`,
  hover: base + `hover:bg-gradient-to-r hover:shadow-xl hover:shadow-tomato/40`,
};

function Button({ children, onClick, disabled, type }) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
