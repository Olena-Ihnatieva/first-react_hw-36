import React from 'react';
import '../styles/main.css'
import Content from "./Content";
import Sidebar from "./Sidebar";


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='main'>
                <Sidebar />
                <Content />
            </div>
        )
    }
}

export default Main;