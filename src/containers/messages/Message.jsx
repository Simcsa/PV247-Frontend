import { connect } from 'react-redux';
import { Message } from "../../components/messages/Message";
import { deleteMessage } from "../../actions/messages/deleteMessage";

const mapStateToProps = (state, ownProps) => ({
    message: ownProps.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteMessage: () => dispatch(deleteMessage(ownProps.channelId, ownProps.message.id)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Message);

export { connectedComponent as Message };
