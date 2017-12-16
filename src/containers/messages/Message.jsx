import { connect } from 'react-redux';
import { Message } from "../../components/messages/Message";

const mapStateToProps = (state, ownProps) => ({
    message: ownProps.message,
});

const mapDispatchToProps = (dispatch) => ({
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(Message);

export { connectedComponent as Message };
