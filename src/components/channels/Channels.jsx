import PropTypes from 'prop-types';
import React from 'react';
import { ChannelPane } from './Channels.styles.js';
import { Loader } from "../../containers/shared/Loader";
import { Channel } from "../../containers/channels/Channel";

export class Channels extends React.PureComponent {

    static propTypes = {
        channels: PropTypes.array,
        isFetchingChannels: PropTypes.bool,
        isUpdatingChannels: PropTypes.bool,
        fetchChannels: PropTypes.func.isRequired,
        createChannel: PropTypes.func.isRequired,
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
                            (<Channel channel={ch} key={ch.id}/>)
                        )}
                    </ul>
                    <form className="form-inline">
                        <input
                            className="input-sm"
                            type="text"
                            style={{color: "black"}}
                            onChange={this.handleNewChannelChange}
                            placeholder="New channel"
                        />
                        <button
                            type="submit"
                            className="btn btn-danger btn-sm"
                            disabled={this.props.isUpdatingChannels}
                            onClick={this.createNewChannel}
                        >
                            Add channel
                        </button>
                    </form>
                </Loader>
            </ChannelPane>
        );
    }
}
