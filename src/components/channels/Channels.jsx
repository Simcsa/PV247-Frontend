import PropTypes from 'prop-types';
import React from 'react';
import { ChannelPane } from './Channels.styles.js';
import { Loader } from "../../containers/shared/Loader";
import { Channel } from "../../containers/channels/Channel";
import { ChannelForm, ChannelInput } from "./Channels.styles";

export class Channels extends React.PureComponent {

    static propTypes = {
        channels: PropTypes.array,
        isFetchingChannels: PropTypes.bool,
        isUpdatingChannels: PropTypes.bool,
        fetchChannels: PropTypes.func.isRequired,
        createChannel: PropTypes.func.isRequired,
        switchChannel: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.handleNewChannelChange = this.handleNewChannelChange.bind(this);
        this.createNewChannel = this.createNewChannel.bind(this);
    }

    componentWillMount() {
        this.props.fetchChannels();
        this.setState({newChannelName: null});
    }

    handleNewChannelChange(event) {
        this.setState({newChannelName: event.target.value});
    }

    createNewChannel() {
        this.props.createChannel(this.state.newChannelName);
    }

    render() {
        return (
            <ChannelPane>
                <Loader stateLoadingSelector={state => state.channels.isFetchingChannels}>
                    <h2>Channels</h2>
                    <ul className="list-group">
                        {this.props.channels && this.props.channels.map((ch) =>
                            (<Channel switchChannel={(newChannel) => this.props.switchChannel(newChannel)} channel={ch} key={ch.id}/>)
                        )}
                    </ul>
                    <ChannelForm className="form-inline">
                        <ChannelInput
                            className="input-sm"
                            type="text"
                            onChange={this.handleNewChannelChange}
                            placeholder="New channel"
                        />
                        &nbsp;
                        <button
                            type="submit"
                            className="btn btn-default btn-sm"
                            disabled={this.props.isUpdatingChannels}
                            onClick={this.createNewChannel}
                        >
                            Add channel
                        </button>
                    </ChannelForm>
                </Loader>
            </ChannelPane>
        );
    }
}
