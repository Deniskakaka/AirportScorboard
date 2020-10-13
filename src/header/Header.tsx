import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

interface Props {
    setLanguage: (value: string) => void;
    setSearchString: (value: string) => void;
    date: string;
}


export default class Header extends React.Component<Props, any> {
    state = {
        value: '',
        check: 'arrival'
    }

    preventDefault(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    onChangeSearch = (event: any) => {
        this.setState({
            value: event.target.value
        })
    }

    onChangeLanguage = (event: any) => {
        if (event.target.value === 'Ukraine') {
            this.props.setLanguage('ua')
        } else {
            this.props.setLanguage(event.target.value.slice(0,2).toLocaleLowerCase())
        }
    }

    checkListShow = (event: any) => {
        this.setState({
            check: event.target.className
        })
    }

    search = () => {
        this.props.setSearchString(this.state.value)
    }

    render() {
        return (
            <div className='header-page'>
                <h1>SEARCH FLIGHT</h1>
                <form onSubmit={this.preventDefault}>
                    <input 
                        type='text'
                        placeholder='Airline, Destination or Flight #'
                        value={this.state.value}
                        onChange={this.onChangeSearch}/>
                    <button onClick={this.search}>SEARCH</button>
                </form>
                <select className='selectorLanguage' onChange={this.onChangeLanguage}>
                    <option>English</option>
                    <option>Russian</option>
                    <option>Ukraine</option>
                </select>
                <div>
                    <Link to={`/arrival?${this.props.date}`}>
                        <button className={this.state.check === 'arrival' ? 'arrival blue' : 'arrival'}
                                onClick={this.checkListShow}>
                            Arrival
                        </button>
                    </Link>
                    <Link to={`/departure?${this.props.date}`}>
                        <button className={this.state.check === 'departure' ? 'departure blue' : 'departure'}
                                onClick={this.checkListShow}>
                            Departure
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
};
