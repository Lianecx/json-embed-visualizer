import React from 'react';
import {
    DiscordEmbed,
} from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css'

export type EmbedPreviewProps = {
    embed: {
        author?: {
            name: string,
            icon_url: string,
            url: string,
        },
        color?: number,
        title?: string,
        description?: string,
        fields?: {
                name: string,
                value: string,
        }[],
    },
}

class EmbedPreview extends React.Component<EmbedPreviewProps> {

    render() {
        const embed = this.props.embed;

        return <DiscordEmbed authorIcon={embed.author?.icon_url} authorName={embed.author?.name} borderColor={embed.color} embedTitle={embed.title} >
                    {embed.description}
                </DiscordEmbed>
    }
}

export default EmbedPreview;
