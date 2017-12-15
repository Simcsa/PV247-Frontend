import PropTypes from 'prop-types';
import React from 'react';
import SplitPane from 'react-split-pane';
import { Channels } from "../../containers/channels/Channels";
import { Messages } from "../messages/Messages";

export class Chat extends React.PureComponent {

    static propTypes = {

    };

    render() {
        return (
            <SplitPane split="vertical" defaultSize="20%">
                <Channels/>
                <Messages/>
            </SplitPane>
        );
    }
}
