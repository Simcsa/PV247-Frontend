import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Input } from "../shared/Input";
import { Field } from "redux-form";
import { validateNonEmptyness } from "../../utils/validation";

const LoginForm = ({ handleSubmit }) => (
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
                validate={validateNonEmptyness("email")}
            />
        </div>
        <button className="btn btn-primary btn-lg" type="submit" >Log in</button>
    </form>
);

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export { LoginForm };