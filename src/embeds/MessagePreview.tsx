import React from 'react';
import { DiscordButtons, DiscordMessage} from '@discord-message-components/react';
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
    path: string,
}

class MessagePreview extends React.Component<MessagePreviewProps> {

    render() {
        const message = this.props.message;
        const embeds = message.embeds;
        const buttons = message.components?.filter(component => ComponentType[component.type as keyof typeof ComponentType] === ComponentType.Button);
        const selectMenus = message.components?.filter(component => ComponentType[component.type as keyof typeof ComponentType] === ComponentType.SelectMenu);

        return <DiscordMessage profile="mclinker">
            {<div slot="embeds">
                {embeds?.map((embed, i) => <EmbedPreview path={`${this.props.path}.${i}`} key={`${this.props.path}.embeds.${i}`} embed={embed} />)}
            </div>}
            {buttons ? <DiscordButtons><div slot="actions">
                {/*//@ts-ignore*/}
                {buttons?.map((button, i) => <ButtonPreview path={`${this.props.path}.components.${i}`} key={`${this.props.path}.components.${i}`} button={button} />)}
            </div></DiscordButtons> : null}
            {selectMenus ? <div className="discord-select-menus"><div slot="actions">
                {/*@ts-ignore*/}
                {selectMenus?.map((selectMenu, i) => <SelectMenuPreview path={`${this.props.path}.components.${i}`} key={`${this.props.path}.components.${i}`} selectMenu={selectMenu} />)}
            </div></div> : null}

        </DiscordMessage>
    }
}

export default MessagePreview;
