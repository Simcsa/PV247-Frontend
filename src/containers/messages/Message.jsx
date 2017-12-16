import { connect } from 'react-redux';
import { Message } from "../../components/messages/Message";
import { deleteMessage } from "../../actions/messages/deleteMessage";
import { upvoteMessage } from "../../actions/messages/upvoteMessage";
import { downvoteMessage } from "../../actions/messages/downvoteMessage";

const mapStateToProps = (state, ownProps) => ({
    message: ownProps.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    upvoteMessage: () => dispatch(upvoteMessage(ownProps.channelId, ownProps.message)),
    downvoteMessage: () => dispatch(downvoteMessage(ownProps.channelId, ownProps.message)),
    deleteMessage: () => dispatch(deleteMessage(ownProps.channelId, ownProps.message.id)),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Message);

export { connectedComponent as Message };
