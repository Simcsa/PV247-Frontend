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
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Chat Application</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><Link to={`${ROOT}`}>Home</Link></li>
                        <li><Link to={`${PROFILE}`}>User Profile</Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><LogoutButton /></li>
                    </ul>
                </div>
            </nav>
            <Content />
            <div className="col-sm-12 col-md-9 col-lg-push-1 col-lg-5">
                <div className="form-group"/>
                <Errors />
            </div>
        </div>
    </div>
);

export { ContentLayout };