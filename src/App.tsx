import React from 'react';
import './App.css';
import MessagePreviewTable from './embeds/MessagePreviewTable';
import messages from './assets/embeds.json';

function App() {
    return <div className="App">
        <MessagePreviewTable data={messages} />
    </div>
}

export default App;
