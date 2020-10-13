import React from 'react';
import {render} from '../functionRenderComponent';
import './tableFlying.scss';

export default class Departure extends React.Component<any, any> {
    state = {
        translate: 'time Departure'
    }


    render() {
        return (
            render(
                'departure',
                this.props.departure,
                this.props.language,
                this.props.searchString,
                this.props.location,
                this.props.setDate,
                this.props.date)
        )
    }
}