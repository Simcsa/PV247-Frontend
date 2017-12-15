import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoginForm } from '../../components/login/LoginForm.jsx';
import { authenticateUser } from '../../actions/shared/authenticateUser';
import { reduxForm } from "redux-form";
import { LOGIN_FORM_NAME } from "../../constants/formNames";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: (details) => dispatch(authenticateUser(details.email, ownProps.from))
});

const formConfig = {
    form: LOGIN_FORM_NAME,
};

const stateEnhancer = connect(undefined, mapDispatchToProps);
const formEnhancer = reduxForm(formConfig);
const connectedComponent = stateEnhancer(formEnhancer(LoginForm));

connectedComponent.propTypes = {
    from: PropTypes.object.isRequired,
};

export { connectedComponent as LoginForm };
