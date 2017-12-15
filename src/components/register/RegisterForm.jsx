import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from '../shared/Input.jsx';
import { validateNonEmptyness } from "../../utils/validation";

const RegisterForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div>
            <Field
                component={Input}
                type="email"
                required
                name="email"
                screenReaderName="E-mail"
                glyphiconClassName="glyphicon-envelope"
                placeholder="exampleUser@example.com"
                validate={validateNonEmptyness}
            />
        </div>
        <div>
            <Field
                component={Input}
                required
                type="text"
                name="name"
                screenReaderName="Name"
                glyphiconClassName="glyphicon-user"
                placeholder="Example User"
                validate={validateNonEmptyness}
            />
        </div>
        <button className="btn btn-danger btn-lg" type="submit" >Register</button>
    </form>
);

RegisterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export { RegisterForm };