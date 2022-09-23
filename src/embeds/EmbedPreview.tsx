import React from 'react';
import {
    DiscordEmbed,
    DiscordEmbedField,
    DiscordEmbedFields,
    DiscordMarkdown,
} from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css'
import { APIEmbed } from "discord-api-types/v10";

export type EmbedPreviewProps = {
    embed: Omit<APIEmbed, 'image' | 'thumbnail' | 'video' | 'provider' | 'type'> & { image?: string, thumbnail?: string, console?: string },
}

class EmbedPreview extends React.Component<EmbedPreviewProps> {

    render() {
        const embed = this.props.embed;

        return <DiscordEmbed
            authorIcon={embed.author?.icon_url}
            authorName={embed.author?.name}
            authorURL={embed.author?.url}
            borderColor={embed.color}
            embedTitle={embed.title}
            image={embed.image}
            footerIcon={embed.footer?.icon_url}
            thumbnail={embed.thumbnail}
            timestamp={embed.timestamp}
            url={embed.url}
        >
            <DiscordMarkdown>{embed.description}</DiscordMarkdown>
            <DiscordEmbedFields>
                {embed.fields?.map(field => <DiscordEmbedField fieldTitle={field.name} inline={field.inline}>
                    <DiscordMarkdown>{field.value}</DiscordMarkdown>
                </DiscordEmbedField>)}
            </DiscordEmbedFields>
            {embed.footer?.text ? <DiscordMarkdown slot="footer">{embed.footer?.text}</DiscordMarkdown> : null}
        </DiscordEmbed>
    }
}

export default EmbedPreview;
