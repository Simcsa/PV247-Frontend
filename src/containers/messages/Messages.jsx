import { connect } from 'react-redux';
import { Messages } from "../../components/messages/Messages";
import { sendMessage } from "../../actions/messages/sendMessage";

const mapStateToProps = (state, ownProps) => ({
    channel: ownProps.channel,
    messages: state.messages.messagesList,
    isFetchingMessages: state.messages.isFetchingMessages,
    isSendingMessages: state.messages.isSendingMessages,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendMessage: (value) => dispatch(sendMessage(ownProps.channel.id, value)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Messages);

export { connectedComponent as Messages };
