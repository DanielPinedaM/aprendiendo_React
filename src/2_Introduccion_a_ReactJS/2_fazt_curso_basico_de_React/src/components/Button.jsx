/* eslint-disable react/prop-types */

import PropTypes from 'prop-types';

// tipos de datos de los props
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// valor por defecto de los props
Button.defaultProps = {
  name: 'usuario',
};

export function Button({ text, name /*name = 'usuario'*/ }) {
  return (
    <>
      <button>
        {text && String(text).trim() !== '' && typeof text === 'string'
          ? text
          : 'no hay prop text o la prop text no es de tipo string'}
      </button>
      <br />
      <button>
        {text} - {name}
      </button>
      <br /> <br />
    </>
  );
}
