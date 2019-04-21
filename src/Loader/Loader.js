import React from 'react';
import './loader.scss';


class Loader extends React.Component {
    render() {
        return (
            <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        );
    }
}

export default Loader;