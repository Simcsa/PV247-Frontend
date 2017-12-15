import * as React from 'react';
import * as routes from '../../constants/routes';
import { HeadInHelmet } from '../../containers/shared/HeadInHelmet.jsx';
import { LoginForm } from '../../containers/login/LoginForm.jsx';
import { Loader } from '../../containers/shared/Loader.jsx';
import { Errors } from '../../containers/shared/Errors.jsx';
import { Link } from "react-router-dom";
import { REGISTER } from "../../constants/routes";

const LoginLayout = ({ from }) => {
    const originalLocation = from || { pathname: routes.ROOT };

    return [
        <div className="container" key="form">
            <div className="row">
                <div className="jumbotron col-xs-10 col-xs-push-1 col-md-6 col-md-push-3 col-lg-4 col-lg-push-4 text-center">
                    <Loader stateLoadingSelector={state => state.shared.isAuthenticating}>
                        <h1>Chat Application</h1>
                        <h2>PV247</h2>
                        <div>
                            <LoginForm from={originalLocation} />
                        </div>
                    </Loader>
                    <Link to={`${REGISTER}`}>New users are welcome. Register.</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sx-push-3 col-sx-6 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3">
                    <Errors key="errors" />
                </div>
            </div>
        </div>,
        <HeadInHelmet key="head" />,
    ];
};

export { LoginLayout };