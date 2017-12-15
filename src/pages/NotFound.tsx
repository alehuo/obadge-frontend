import * as React from 'react';

class NotFound extends React.Component {
    render() {
        let divStyle = {
            textAlign: 'center'
        };
        let textStyle = {
            fontSize: 30
        };
        return (
            <div style={divStyle}>
                <span style={textStyle}>404 Not Found</span>
            </div>
        );
    }
}

export default NotFound;