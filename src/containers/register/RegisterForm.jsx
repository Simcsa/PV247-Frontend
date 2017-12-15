import * as PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { RegisterForm } from '../../components/register/RegisterForm.jsx';
import { REGISTER_FORM_NAME } from "../../constants/formNames";
import { registerUser } from "../../actions/shared/registerUser";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (userDetails) => dispatch(registerUser(userDetails.email, userDetails.name, ownProps.from))
});

const formConfig = {
    form: REGISTER_FORM_NAME,
};

const stateEnhancer = connect(undefined, mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(RegisterForm));

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired,
};

export { connectedComponent as RegisterForm };
