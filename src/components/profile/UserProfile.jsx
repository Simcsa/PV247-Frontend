import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Loader } from "../../containers/shared/Loader";
import { Avatar } from "../../containers/profile/Avatar";
import { Details } from "../../containers/profile/Details";
import { StyledTitle } from "./UserProfile.styles";

class UserProfile extends React.PureComponent {
    static propTypes = {
        fetchProfileDetails: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.fetchProfileDetails();
    }

    render() {
        return (
            <div className="jumbotron col-xs-10 col-xs-push-1 col-md-6 col-md-push-3 col-lg-4 col-lg-push-4 text-center">
                <StyledTitle>User Profile</StyledTitle>
                <Loader stateLoadingSelector={state => state.profile.isFetchingAvatar}>
                    <Avatar />
                </Loader>
                <Loader stateLoadingSelector={state => state.profile.isFetchingDetails}>
                    <Details />
                </Loader>
            </div>
        );
    }
}

export { UserProfile };