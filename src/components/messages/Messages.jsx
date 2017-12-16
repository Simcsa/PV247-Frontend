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
        messages: Immutable.List,
        isFetchingMessages: PropTypes.bool,
        isSendingMessage: PropTypes.bool,
        sendMessage: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.handleNewMessageChange = this.handleNewMessageChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.channel && this.props.channel && nextProps.channel.id === this.props.channel.id
        && nextProps.messages.count() === this.props.messages.count()) {
            return false;
        }
        return true;
    }

    componentWillMount() {
        this.setState({newMessageValue: null});
    }

    handleNewMessageChange(event) {
        this.setState({newMessageValue: event.target.value});
    }

    render() {
        const noChannelChosenMessage = <h2>Messages - click on a channel to see messages</h2>;
        const channelMessage = this.props.channel && <h1>{this.props.channel.name}</h1>;

        return (
            <MessagePane>
                {this.props.channel ? channelMessage : noChannelChosenMessage}
                <Loader stateLoadingSelector={state => state.messages.isFetchingMessages}>
                    {this.props.channel &&
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
                    }
                    {this.props.messages && this.props.messages.map((m) =>
                        <MessageDiv>
                            <Message message={m} key={m.id}/>
                        </MessageDiv>
                    )}

                </Loader>
            </MessagePane>
        );
    }
}
