import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from '../shared/Input.jsx';
import { UpdatePane } from './UpdatePane.jsx';
import {
    validateNonEmptyness,
} from '../../utils/validation';
import * as formStates from '../../constants/formStates';

const getFormState = (dirty, valid, submitting ) => {
    if(!dirty) {
        return formStates.NOT_CHANGED;
    }

    if(!valid) {
        return formStates.INVALID;
    }

    if(submitting) {
        return formStates.SAVING_NOW;
    }

    return formStates.SAVEABLE;
};

const Details = ({ handleSubmit, valid, dirty, submitting }) => (
    <div className="panel panel-default">
        <div className="panel-body">
            <form onSubmit={handleSubmit}>
                <Field
                    type="email"
                    placeholder="exampleUser@example.com"
                    screenReaderName="E-mail"
                    glyphiconClassName="glyphicon-envelope"
                    readOnly
                    required
                    name="email"
                    component={Input}
                />
                <Field
                    type="text"
                    placeholder="Example User"
                    screenReaderName="Full name"
                    glyphiconClassName="glyphicon-user"
                    name="fullName"
                    required
                    component={Input}
                    validate={validateNonEmptyness("fullName")}
                />

                <UpdatePane formState={getFormState(dirty, valid, submitting)}/>
            </form>
        </div>
    </div>
);

Details.propTypes = {
    valid: PropTypes.bool.isRequired,
    dirty: PropTypes.bool.isRequired,
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export { Details };