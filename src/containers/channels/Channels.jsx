import { connect } from 'react-redux';
import { Channels } from '../../components/channels/Channels.jsx';
import { fetchChannels } from "../../actions/channels/fetchChannels";

const mapStateToProps = (state) => ({
    channels: state.channels.channelsList,
    isFetchingChannels: state.channels.isFetchingChannels,
});

const mapDispatchToProps = (dispatch) => ({
    fetchChannels: () => dispatch(fetchChannels())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Channels);

export { connectedComponent as Channels };
