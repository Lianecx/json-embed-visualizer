import React from 'react';
import MessagePreview, { MessagePreviewProps } from './MessagePreview';
import {
    DiscordDefaultOptions,
    DiscordMessages,
    DiscordOptionsContext,
} from "@discord-message-components/react";

export type MessagePreviewTableProps = {
    data: (MessagePreviewProps['message'] & { key: string })[],
}

const options = {
    ...DiscordDefaultOptions,
    profiles: {
        mclinker: {
            author: 'MC Linker',
            avatar: 'https://cdn.discordapp.com/avatars/712759741528408064/6fe20c64903d6d39cd6fa2005fa694ee.png',
            roleColor: '#70A02C',
            bot: true,
        },
    },
};

class MessagePreviewTable extends React.Component<MessagePreviewTableProps> {

    render() {

        return <DiscordOptionsContext.Provider value={options}>
            <DiscordMessages>
                {this.props.data.map(message => <MessagePreview path={message.key} key={message.key} message={message} />)}
            </DiscordMessages>
        </DiscordOptionsContext.Provider>
    }
}

export default MessagePreviewTable;
