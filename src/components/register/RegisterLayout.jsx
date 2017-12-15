import * as React from 'react';
import * as routes from '../../constants/routes';
import { HeadInHelmet } from '../../containers/shared/HeadInHelmet.jsx';
import { Loader } from '../../containers/shared/Loader.jsx';
import { Errors } from '../../containers/shared/Errors.jsx';
import { Link } from "react-router-dom";
import { RegisterForm } from "../../containers/register/RegisterForm";
import { LOGIN } from "../../constants/routes";

const RegisterLayout = ({ from }) => {
    const originalLocation = from || { pathname: routes.LOGIN };

    return [
        <HeadInHelmet key="head" />,
        <div className="container" key="form">
            <div className="row">
                <div className="jumbotron col-xs-10 col-xs-push-1 col-md-6 col-md-push-3 col-lg-4 col-lg-push-4 text-center">
                    <Loader stateLoadingSelector={state => state.shared.isRegistering}>
                        <h1>Chat Application</h1>
                        <h2>PV247</h2>
                        <div>
                            <RegisterForm from={originalLocation} />
                        </div>
                    </Loader>
                    <Link to={`${LOGIN}`}>Already registered? Log in.</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sx-push-3 col-sx-6 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3">
                    <Errors key="errors" />
                </div>
            </div>
        </div>,
    ];
};

export { RegisterLayout };