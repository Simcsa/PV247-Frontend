import * as React from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { UserProfile } from "../profile/UserProfile";
import { Chat } from "../../containers/app/Chat";

const Content = () => [
    <Route exact path={routes.ROOT} component={Chat} key="default" />,
    <Route path={routes.PROFILE} component={UserProfile} key="profile" />,
];

export { Content };