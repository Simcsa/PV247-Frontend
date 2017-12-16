import { connect } from 'react-redux';
import { Channel } from '../../components/channels/Channel.jsx';
import { deleteChannel } from "../../actions/channels/deleteChannel";
import { renameChannel } from "../../actions/channels/renameChannel";

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    renameChannel: (channel, channelName) => dispatch(renameChannel(channel, channelName)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId)),
    switchChannel: (channel) => ownProps.switchChannel(channel),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Channel);

export { connectedComponent as Channel };
