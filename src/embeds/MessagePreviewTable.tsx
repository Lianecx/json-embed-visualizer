import React from 'react';
import MessagePreview, { MessagePreviewProps } from './MessagePreview';

export type MessagePreviewTableProps = {
    data: MessagePreviewProps['message'][],
}

class MessagePreviewTable extends React.Component<MessagePreviewTableProps> {

    render() {
        return <MessagePreview message={this.props.data[1]} />
    }
}

export default MessagePreviewTable;
