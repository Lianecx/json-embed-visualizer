import React from 'react';
import {APIButtonComponent, ButtonStyle,} from 'discord-api-types/v10';
import {DiscordButton} from '@discord-message-components/react';

export type ButtonPreviewProps = {
    button: Omit<APIButtonComponent, 'style' | 'type' | 'emoji'> & { style: string, type: string, emoji?: string, url?: string },
}

class ButtonPreview extends React.Component<ButtonPreviewProps> {

    render() {
        const button = this.props.button;

        return <DiscordButton
            disabled={button.disabled}
            image={button.emoji}
            type={ButtonStyle[button.style as keyof typeof ButtonStyle]}
            url={button.url}
        >
            {button.label}
        </DiscordButton>
    }
}

export default ButtonPreview;
