import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert'
import Button from 'material-ui/Button'
import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';

class SweetAlerts extends React.Component {
    onConfirm = () => {
        this.setState({
            basic: false,
            withDes: false,
            success: false,
            warning: false,
            custom: false,
            html: false,
            prompt: false,
            password: false,
            style: false,
        });
    };
    deleteFile = () => {
        this.setState({
            warning: false
        })
    };
    onCancelDelete = () => {
        this.setState({
            warning: false
        })
    };
    onCancel = () => {
        this.setState({
            custom: false,
            prompt: false
        })
    };

    constructor() {
        super();
        this.state = {
            basic: false,
            withDes: false,
            success: false,
            warning: false,
            custom: false,
            html: false,
            prompt: false,
            password: false,
            style: false,
        };
    }

    render() {
        const {basic, withDes, success, warning, custom, html, prompt, password, style} = this.state;
        return (
            <div>
                <ContainerHeader title="Sweet Alerts" match={this.props.match}/>

                <div className="row mb-md-4">
                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">
                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({basic: true})
                        }}>Basic</Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({withDes: true})
                        }}>With Description</Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({success: true})
                        }}>Success</Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({warning: true})
                        }}>Warning</Button>
                    </CardBox>
                </div>
                <div className="row mb-md-4">
                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({custom: true})
                        }}>Custom</Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({html: true})
                        }}>Html Tag</Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({prompt: true})
                        }}>Prompt</Button>
                    </CardBox>

                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({password: true})
                        }}>Password Prompt</Button>
                    </CardBox>
                </div>

                <div className="row mb-md-4">
                    <CardBox styleName="col-lg-3 col-sm-6" cardStyle="py-sm-5" childrenStyle="text-center">

                        <Button variant="raised" color="primary" onClick={() => {
                            this.setState({style: true})
                        }}>Custom Style</Button>
                    </CardBox>

                </div>
                <SweetAlert show={basic} title="Here's a message!" onConfirm={this.onConfirm}/>
                <SweetAlert show={withDes} title="Here's a message!" onConfirm={this.onConfirm}>
                    It's pretty, isn't it?
                </SweetAlert>
                <SweetAlert show={success} success title="Good job!" onConfirm={this.onConfirm}>
                    You clicked the button!
                </SweetAlert>
                <SweetAlert show={warning}
                            warning
                            showCancel
                            confirmBtnText="Yes, delete it!"
                            confirmBtnBsStyle="danger"
                            cancelBtnBsStyle="default"
                            title="Are you sure?"
                            onConfirm={this.deleteFile}
                            onCancel={this.onCancelDelete}
                >
                    You will not be able to recover this imaginary file!
                </SweetAlert>
                <SweetAlert show={custom}
                            custom
                            showCancel
                            confirmBtnText="Yes"
                            cancelBtnText="No"
                            confirmBtnBsStyle="primary"
                            cancelBtnBsStyle="default"
                            customIcon="http://via.placeholder.com/256x256"
                            title="Do you like thumbs?"
                            onConfirm={this.onConfirm}
                            onCancel={this.onCancel}
                >
                    You will find they are up!
                </SweetAlert>
                <SweetAlert show={html}
                            title={<span>HTML <small>Title</small>!</span>}
                            onConfirm={this.onConfirm}
                >
                    <span>A custom <span style={{color: '#F8BB86'}}>html</span> message.</span>
                </SweetAlert>
                <SweetAlert show={prompt}
                            input
                            showCancel
                            cancelBtnBsStyle="default"
                            title="An input!"
                            inputPlaceHolder="Write something"
                            onConfirm={this.onConfirm}
                            onCancel={this.onCancel}
                >
                    Write something interesting:
                </SweetAlert>
                <SweetAlert show={password}
                            input
                            required
                            inputType="password"
                            title="Enter Password"
                            validationMsg="You must enter your password!"
                            onConfirm={this.onConfirm}
                />
                <SweetAlert show={style}
                            title="Yay!"
                            style={{backgroundColor: '#434F5A', color: '#ffffff'}}
                            onConfirm={this.onConfirm}
                >
                    It's blue!
                </SweetAlert>
            </div>
        )
    }
}

export default SweetAlerts;
