import React from 'react';
import { APISelectMenuComponent } from 'discord-api-types/v10';

export type SelectMenuPreviewProps = {
    selectMenu: Omit<APISelectMenuComponent, 'type'> & { type: 'SelectMenu' },
}

class SelectMenuPreview extends React.Component<SelectMenuPreviewProps> {

    render() {
        const selectMenu = this.props.selectMenu;

        // return <DiscordSelectMenu></DiscordSelectMenu>
        return <div className="select-menu"></div>
    }
}

export default SelectMenuPreview;
