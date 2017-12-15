import PropTypes from 'prop-types';
import React from 'react';
import { MessagePane } from './Messages.styles.jsx';

export class Messages extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <MessagePane>
                Messages
            </MessagePane>
        );
    }
}
