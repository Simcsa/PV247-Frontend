import PropTypes from 'prop-types';
import React from 'react';
import * as Immutable from 'immutable';
import { ChannelPane } from './Channels.styles.jsx';
import { Loader } from "../../containers/shared/Loader";

export class Channels extends React.PureComponent {

    static propTypes = {
        channelsList: Immutable.List,
        isFetchingChannels: PropTypes.bool,
        fetchChannels: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.fetchChannels();
    }

    render() {
        return (
            <ChannelPane>
                <Loader stateLoadingSelector={state => state.channels.isFetchingChannels}>
                    <h3>Channels</h3>
                    {this.props.channelsList && this.props.channelsList.map((channel) => channel.name)}
                    <button className="btn btn-danger btn-sm" type="button">Add channel</button>
                </Loader>
            </ChannelPane>
        );
    }
}
