import PropTypes from 'prop-types';
import React from 'react';
import { GlyphiconSpan, MessageDiv, MessageSenderSpan } from "./Message.styles";

export class Message extends React.PureComponent {

    static propTypes = {
        message: PropTypes.object,
        deleteMessage: PropTypes.func.isRequired,
        upvoteMessage: PropTypes.func.isRequired,
        downvoteMessage: PropTypes.func.isRequired,
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
                    <GlyphiconSpan onClick={this.props.deleteMessage}>
                        <i className="glyphicon glyphicon-trash"  aria-hidden="true" />
                    </GlyphiconSpan>

                    <GlyphiconSpan onClick={this.props.upvoteMessage}>
                        <i className="glyphicon glyphicon-thumbs-up"  aria-hidden="true" />
                    </GlyphiconSpan>
                    <span className="label label-primary">{this.props.message.upvoteCount}</span>

                    <GlyphiconSpan onClick={this.props.downvoteMessage}>
                        <i className="glyphicon glyphicon-thumbs-down"  aria-hidden="true" />
                    </GlyphiconSpan>
                    <span className="label label-primary">{this.props.message.downvoteCount}</span>
                </p>
                <p>
                    {this.props.message.value}
                </p>
            </MessageDiv>
        );
    }
}
