import PropTypes from 'prop-types';
import React from 'react';
import { MessageDiv, MessageSenderSpan } from "./Message.styles";

export class Message extends React.PureComponent {

    static propTypes = {
        message: PropTypes.object,
        deleteMessage: PropTypes.func.isRequired,
    };

    render() {
        const date = new Date(this.props.message.createdAt);

        return (
            <MessageDiv>
                <p>
                    <MessageSenderSpan>
                        {this.props.message.createdBy}
                    </MessageSenderSpan>
                    &nbsp;
                    {date.toLocaleString()}
                    &nbsp;
                    <span onClick={this.props.deleteMessage}>
                        <i className="glyphicon glyphicon-trash"  aria-hidden="true" />
                    </span>
                </p>
                <p>
                    {this.props.message.value}
                </p>
            </MessageDiv>
        );
    }
}
