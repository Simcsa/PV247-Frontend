import PropTypes from 'prop-types';
import React from 'react';
import SplitPane from 'react-split-pane';
import { Scrollbars } from 'react-custom-scrollbars';
import { Channels } from "../../containers/channels/Channels";
import { Messages } from "../../containers/messages/Messages";

export class Chat extends React.PureComponent {

    static propTypes = {
        fetchMessages: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.switchChannel = this.switchChannel.bind(this);
    }

    componentWillMount() {
        this.setState({channel: null});
    }

    componentDidMount() {
        this.interval = setInterval(() => this.state.channel && this.props.fetchMessages(this.state.channel.id, true), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    switchChannel(newChannel) {
        this.props.fetchMessages(newChannel.id, false);
        this.setState({channel: newChannel});
    }

    render() {
        return (
            <SplitPane split="vertical" defaultSize="25%">
                <Channels switchChannel={(newChannel) => this.switchChannel(newChannel)}/>
                <Scrollbars>
                    <Messages channel={this.state.channel}/>
                </Scrollbars>
            </SplitPane>
        );
    }
}
