import * as React from 'react';
import { PROFILE, ROOT } from '../../constants/routes';
import { LogoutButton } from '../../containers/app/LogoutButton.jsx';
import { HeadInHelmet } from '../../containers/shared/HeadInHelmet.jsx';
import { Errors } from '../../containers/shared/Errors.jsx';
import { Link } from "react-router-dom";
import { Content } from "./Content";

const ContentLayout = () => (
    <div className="container-fluid">
        <div className="row">
            <HeadInHelmet />
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Chat Application</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to={`${ROOT}`}>Home</Link></li>
                        <li><Link to={`${PROFILE}`}>User Profile</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><LogoutButton /></li>
                    </ul>
                </div>
            </nav>
            <Errors />
            <Content />
        </div>
    </div>
);

export { ContentLayout };