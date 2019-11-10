import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox/index';
import IntegrationReactSelect from './reactSelect/IntegrationReactSelect';
import IntegrationDownshift from './downshift/IntegrationDownshift';
import IntegrationAutosuggest from './autosuggest/IntegrationAutosuggest';

const AutoComplete = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title="Auto Complete" match={match}/>
            <div className="row mb-lg-4">
                <CardBox styleName="col-lg-6" childrenStyle="d-flex justify-content-center" heading="React Select">
                    <IntegrationReactSelect/>
                </CardBox>

                <CardBox styleName="col-lg-6" childrenStyle="d-flex justify-content-center" heading="Downshift">
                    <IntegrationDownshift/>
                </CardBox>
            </div>
            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center" cardStyle="text-center"
                         heading="React Autosuggest">
                    <IntegrationAutosuggest/>
                </CardBox>
            </div>
        </div>
    );
};

export default AutoComplete;
