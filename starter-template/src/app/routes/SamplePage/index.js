import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';

class SamplePage extends React.Component {

    render() {
        return (
            <div className="app-wrapper">
                <ContainerHeader match={this.props.match} title="Sample Page"/>
                <div className="d-flex justify-content-center">
                    <h1>Start building your app. Happy Coding!</h1>
                </div>

            </div>
        );
    }
}

export default SamplePage;