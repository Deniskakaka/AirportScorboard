import moment from "moment";
import React from "react";
import {Link} from "react-router-dom";
import Flight from "./classes/Flight/Flight";

export const render = (
    place: string,
    flights: Flight[],
    language: string,
    searchString: string,
    location: string,
    setDate: (value: string) => {},
    date: string,
) => {
    let list = searchString !== '' ? flights.filter(i => i.getNumberFlight() === searchString) : flights;

    return <div className='content-page'>
        <div className='checkDays'>
            <Link
                to={{pathname: `${location}`, search: moment().subtract(1, 'days').format('DD-MM-YYYY')}}
                onClick={() => setDate(moment().subtract(1, 'days').format('DD-MM-YYYY'))}>
                <div>
                    <span>{moment().subtract(1, 'days').format('DD/MM')}</span>
                    <span>Yesterday</span>
                </div>
            </Link>
            <Link
                to={{pathname: `${location}`, search: moment().format('DD-MM-YYYY')}}
                onClick={() => setDate(moment().format('DD-MM-YYYY'))}>
                <div>
                    <span>{moment().format('DD/MM')}</span>
                    <span>Today</span>
                </div>
            </Link>
            <Link
                to={{pathname: `${location}`, search: moment().add(1, 'days').format('DD-MM-YYYY')}}
                onClick={() => setDate(moment().add(1, 'days').format('DD-MM-YYYY'))}>
                <div>
                    <span>{moment().add(1, 'days').format('DD/MM')}</span>
                    <span>Tomorrow</span>
                </div>
            </Link>
        </div>
        {
            list.filter(element => moment(element.getTime()).format('DD-MM-YYYY') === date).map((i, index) => <div key={Math.random()} className='container'>
                <span className='container__terminal'>{i.getTerminal()}</span>
                <span className='container__time'>{language === 'en' ? moment(i.getActual()).format('hh:mm a') : moment(i.getActual()).format('hh:mm')}</span>
                <span className='container__nameAirport'>{i.getAirportTranslations().getNeedName(language)[index].getName()}</span>
                <span className='container__time'>{language == 'en' ? moment(i.getTime()).format('hh:mm a') : moment(i.getTime()).format('hh:mm') }</span>
                <div>
                    <img src={i.getLogoCompany()} className='container-logo__image'/>
                    <span className='container-logo__name'>{i.getCompanyNameTranslations().getNeedName(language)}</span>
                </div>
                <span className='container__numberAir'>{i.getNumberFlight()}</span>
            </div>)
        }
    </div>

}
