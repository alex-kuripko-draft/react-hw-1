import Image from './components/image';
import Video from './components/video';

import './App.css';
import Paragraph from './components/paragraph';
import List from './components/list';

function App() {
    const listItems = ['Item 1', 'Item 2', 'Item 3'];

    return (
        <div className="App">
            <Paragraph text="Image:"/>
            <Image/>
            <Paragraph text="Video:"/>
            <Video/>
            <List ulItems={listItems} olItems={listItems}/>
        </div>
    );
}

export default App;
