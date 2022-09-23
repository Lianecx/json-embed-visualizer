import React from 'react';
import { DiscordButtons, DiscordMessage } from '@discord-message-components/react';
import '@discord-message-components/react/dist/style.css'
import EmbedPreview, { EmbedPreviewProps } from './EmbedPreview';
import { ComponentType } from "discord-api-types/v10";
import ButtonPreview, { ButtonPreviewProps } from './ButtonPreview';
import SelectMenuPreview, { SelectMenuPreviewProps } from './SelectMenuPreview';

export type MessagePreviewProps = {
    message: {
        embeds?: EmbedPreviewProps['embed'][],
        components?: (ButtonPreviewProps['button'] | SelectMenuPreviewProps['selectMenu'])[],
        console?: string,
    },
    key: string,
}

class MessagePreview extends React.Component<MessagePreviewProps> {

    render() {
        const message = this.props.message;
        const embeds = message.embeds;
        const buttons = message.components?.filter(component => ComponentType[component.type as keyof typeof ComponentType] === ComponentType.Button);
        const selectMenus = message.components?.filter(component => ComponentType[component.type as keyof typeof ComponentType] === ComponentType.SelectMenu);

        return <DiscordMessage profile="mclinker">
            {/*{embeds?.map((embed, i) => <EmbedPreview key={`${this.props.key}.${i}`} embed={embed} />)}*/}
            {/*@ts-ignore*/}
            {/*{buttons ? <DiscordButtons>{buttons?.map((button, i) => <ButtonPreview key={`${this.props.key}.${i}`} button={button} />)}</DiscordButtons> : null}*/}
            {/*@ts-ignore*/}
            {/*{selectMenus ? <div>{selectMenus?.map((selectMenu, i) => <SelectMenuPreview key={`${this.props.key}.${i}`} selectMenu={selectMenu} />)}</div> : null}*/}
        </DiscordMessage>
    }
}

export default MessagePreview;
