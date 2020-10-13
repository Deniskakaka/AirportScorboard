import React from 'react';
import { render } from '../functionRenderComponent';
import './tableFlying.scss';

export default class Arrival extends React.Component<any, any> {
    state = {
        translate: 'time Departure'
    }

    render() {
        return (
            render(
                'arrival',
                this.props.arrival,
                this.props.language,
                this.props.searchString,
                this.props.location,
                this.props.setDate,
                this.props.date
                )
        )
    }
}
