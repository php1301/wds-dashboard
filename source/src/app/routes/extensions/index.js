import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import DragNDrop from './routes/dragnDrop'
import SweetAlert from './routes/sweetAlert'
import Notification from './routes/notification'

const Extensions = ({match}) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/dnd`}/>
            <Route path={`${match.url}/dnd`} component={DragNDrop}/>
            <Route path={`${match.url}/sweet-alert`} component={SweetAlert}/>
            <Route path={`${match.url}/notification`} component={Notification}/>
        </Switch>
    </div>
);

export default Extensions;
