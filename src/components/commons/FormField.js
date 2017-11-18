import React from 'react'
import PropTypes from 'prop-types'
import { capitalize, replace } from 'lodash'

const sanitize = (string, target, term) => replace(capitalize(string), target, term)

const FormField = props => (
  <div className='field'>
    <label>
      <i className={`${props.icon} icon`}></i> {sanitize(props.name, '_', ' ')}
    </label>
    <input type={props.type} name={props.name} placeholder={props.placeholder} />
  </div>
)

FormField.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default FormField