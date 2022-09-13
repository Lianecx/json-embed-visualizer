import React from 'react';
import {
    DiscordOptionsContext,
    DiscordDefaultOptions,
} from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css'
import EmbedPreview, { EmbedPreviewProps } from './EmbedPreview';

export type MessagePreviewProps = {
    message: {
        embeds: EmbedPreviewProps['embed'][],
        // components: ComponentPreviewProps[],
    },
}

class MessagePreview extends React.Component<MessagePreviewProps> {

    render() {
        const message = this.props.message;

        return  <DiscordOptionsContext.Provider value={DiscordDefaultOptions}>
            {
                message.embeds.map(embed => <EmbedPreview embed={embed} />)
            }
        </DiscordOptionsContext.Provider>;
    }
}

export default MessagePreview;
