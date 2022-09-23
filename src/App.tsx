import React from 'react';
import './App.css';
import MessagePreviewTable, {MessagePreviewTableProps} from './embeds/MessagePreviewTable';
import messages from './assets/embeds.json';

class App extends React.Component {

    render() {

        //Loop recursively through messages until an object contains keys "embeds", "components" or "files"
        function findMessages(messages: object, currentPath: string): MessagePreviewTableProps['data'] {
            const found: MessagePreviewTableProps['data'] = [];
            for (const [k, message] of Object.entries(messages)) {
                if(!(typeof message === 'object')) continue;
                if ('embeds' in message || 'components' in message || 'files' in message) {
                    message.key = `${currentPath}.${k}`;
                    found.push(message);
                } else {
                    found.push(...findMessages(message, `${currentPath}.${k}`));
                }
            }
            return found;
        }

        const data = findMessages(messages, "keys");
        console.log(data);

        return <div className="App">
            <MessagePreviewTable data={data}/>
        </div>
    }
}

export default App;
