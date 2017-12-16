import * as React from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { Chat } from "../../containers/app/Chat";
import { UserProfile } from "../../containers/profile/UserProfile";

const Content = () => [
    <Route exact path={routes.ROOT} component={Chat} key="default" />,
    <Route path={routes.PROFILE} component={UserProfile} key="profile" />,
];

export { Content };