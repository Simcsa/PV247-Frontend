import * as React from 'react';
import * as PropTypes from 'prop-types';

const LogoutButton = ({ onClick }) => (
    <button
        type="button"
        className="btn btn-danger navbar-btn"
        onClick={onClick}
    >
        Logout
    </button>
);

LogoutButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export { LogoutButton };