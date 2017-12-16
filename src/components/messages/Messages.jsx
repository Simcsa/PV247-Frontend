import * as Immutable from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { MessagePane } from './Messages.styles.js';
import { Message } from "../../containers/messages/Message";
import { Loader } from "../../containers/shared/Loader";
import { MessageForm, MessageTextarea } from "./Messages.styles";
import { MessageDiv } from "./Messages.styles";

export class Messages extends React.Component {

    static propTypes = {
        channel: PropTypes.object,
        channelOwnerName: PropTypes.string,
        messages: Immutable.List,
        isFetchingMessages: PropTypes.bool,
        isSendingMessage: PropTypes.bool,
        sendMessage: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.handleNewMessageChange = this.handleNewMessageChange.bind(this);
    }

    componentWillMount() {
        this.setState({newMessageValue: null});
    }

    handleNewMessageChange(event) {
        this.setState({newMessageValue: event.target.value});
    }

    render() {
        const noChannelChosenMessage = <h1>Click on a channel to see messages</h1>;

        if (!this.props.channel) {
            return (
                <MessagePane>
                    {noChannelChosenMessage}
                </MessagePane>
            )
        }

        return (
            <MessagePane>
                <h1>{this.props.channel.name}</h1>
                <p>{this.props.channelOwnerName} (owner)</p>
                <Loader stateLoadingSelector={state => state.messages.isFetchingMessages}>
                    <MessageForm className="form-inline">
                        <MessageTextarea
                            rows="3"
                            onChange={this.handleNewMessageChange}
                        />
                        &nbsp;
                        <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            disabled={this.props.isSendingMessage}
                            onClick={() => this.props.sendMessage(this.state.newMessageValue)}
                        >
                            Send
                        </button>
                    </MessageForm>
                    {this.props.messages && this.props.messages.map((m) =>
                        <MessageDiv key={m.id}>
                            <Message
                                message={m}
                                channelId={this.props.channel.id}
                            />
                        </MessageDiv>
                    )}

                </Loader>
            </MessagePane>
        );
    }
}
