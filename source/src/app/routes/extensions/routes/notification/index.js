import React from 'react';
import 'react-notifications/src/notifications.scss';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';

class Example extends React.Component {
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    };

    render() {
        return (
            <div>
                <ContainerHeader title="Notification" match={this.props.match}/>

                <div className="row">
                    <CardBox styleName="col-12" heading="React Notification" childrenStyle="text-center">
                        <div>
                            <button className='btn btn-info'
                                    onClick={this.createNotification('info')}>Info
                            </button>
                            <button className='btn btn-success'
                                    onClick={this.createNotification('success')}>Success
                            </button>
                            <button className='btn btn-warning'
                                    onClick={this.createNotification('warning')}>Warning
                            </button>
                            <button className='btn btn-danger'
                                    onClick={this.createNotification('error')}>Error
                            </button>
                        </div>

                    </CardBox>
                </div>

                <NotificationContainer/>
            </div>
        );
    }
}

export default Example;