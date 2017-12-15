import { connect } from 'react-redux';
import { Channels } from '../../components/channels/Channels.jsx';
import { fetchChannels } from "../../actions/channels/fetchChannels";
import { createChannel } from "../../actions/channels/createChannel";

const mapStateToProps = (state) => ({
    channels: state.channels.channelsList,
    isFetchingChannels: state.channels.isFetchingChannels,
    isUpdatingChannels: state.channels.isUpdatingChannels,
});

const mapDispatchToProps = (dispatch) => ({
    fetchChannels: () => dispatch(fetchChannels()),
    createChannel: (channelName) => dispatch(createChannel(channelName)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Channels);

export { connectedComponent as Channels };
