import { connect } from 'react-redux';
import { Chat } from "../../components/app/Chat";
import { fetchMessages } from "../../actions/messages/fetchMessages";

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
    fetchMessages: (channelId, isReload) => dispatch(fetchMessages(channelId, isReload)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Chat);

export { connectedComponent as Chat };
