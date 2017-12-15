import PropTypes from 'prop-types';
import React from 'react';

export class Channel extends React.PureComponent {

    static propTypes = {
        channel: PropTypes.object,
        deleteChannel: PropTypes.func.isRequired,
        renameChannel: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.toggleEditing = this.toggleEditing.bind(this);
        this.handleChannelRename = this.handleChannelRename.bind(this);
        this.renameChannel = this.renameChannel.bind(this);
    }

    componentWillMount() {
        this.setState({editing: false});
        this.setState({newChannelName: null});
    }

    toggleEditing() {
        this.setState({editing: !this.state.editing});
    }

    handleChannelRename(event) {
        this.setState({newChannelName: event.target.value});
    }

    renameChannel() {
        this.props.renameChannel(this.props.channel, this.state.newChannelName);
        this.toggleEditing();
    }

    render() {
        return (
            <li className="list-group-item-inverted">

                {!this.state.editing &&
                    <span>
                        {this.props.channel.name}
                        &nbsp;
                        <span onClick={() => this.toggleEditing()}>
                            <i className="glyphicon glyphicon-pencil" aria-hidden="true"/>
                        </span>
                    </span>
                }
                {this.state.editing &&
                    <span>
                        <input
                            className="input-sm"
                            type="text"
                            style={{color: "black"}}
                            onChange={this.handleChannelRename}
                            placeholder={this.props.channel.name}
                        />
                        <span onClick={() => this.renameChannel()}>
                            <i className="glyphicon glyphicon-ok" aria-hidden="true"/>
                        </span>
                    </span>
                }

                &nbsp;
                <span onClick={() => this.props.deleteChannel(this.props.channel.id)}>
                    <i className="glyphicon glyphicon-remove"  aria-hidden="true" />
                </span>
                <span className="pull-right" >
                    <span className="label label-danger">12</span>
                </span>
            </li>
        );
    }
}
