import PropTypes from 'prop-types';
import React from 'react';
import { MessagePane } from './Messages.styles.js';

export class Messages extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <MessagePane>
                <h3>Messages</h3>
            </MessagePane>
        );
    }
}
