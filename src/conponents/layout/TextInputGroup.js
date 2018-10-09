import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// const TextInputGroup = (props) => {
//   return (
//     <div className="form-group">
//       <label htmlFor={props.name}>{props.label}</label>
//       <input
//         name={props.name}
//         type={props.type}
//         className="form-control form-control-lg"
//         placeholder={props.placeholder}
//         value={props.value}
//         onChange={props.onChange}
//       />
//     </div>
//   );
// };

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        className={classNames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
