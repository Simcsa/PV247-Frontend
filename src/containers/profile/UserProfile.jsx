import { connect } from 'react-redux';
import { fetchProfileDetails } from '../../actions/profile/fetchProfileDetails';
import { UserProfile } from "../../components/profile/UserProfile";

const mapDispatchToProps = (dispatch) => ({
    fetchProfileDetails: () => dispatch(fetchProfileDetails())
});

const stateEnhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = stateEnhancer(UserProfile);

export { connectedComponent as UserProfile };
