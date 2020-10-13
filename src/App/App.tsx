import React, { useEffect, useState } from "react";
import Header from '../header/Header';
import { Switch, Route, useLocation } from "react-router";
import './app.scss';
import { getListFlying } from "../Redux/actionReduser";
import { connect } from "react-redux";
import DataHydrator, {DepartureInterface} from "../classes/hydrator/FlightHydrator";
import Arrival from '../flying/Arrival';
import Departure from "../flying/Departure";
import ArrivalInterface from '../classes/hydrator/FlightHydrator';
import moment from "moment";
import TranslationHydrator from "../classes/hydrator/TranslationHydrator";
import NameCompanyHydrator from "../classes/hydrator/NameCompanyHydrator";
import LogoCompanyHydrator from "../classes/hydrator/LogoCompanyHydrator";
import NumberFlightHydrator from "../classes/hydrator/NumberFlightHydrator";

const App = (props: { listArrival: [], listDeparture: [], getListFlying: typeof getListFlying }) => {
    const [language, setLanguage] = useState<string>('en');
    const [searchString, setSearchString] = useState<string>('');
    const [date, setDate] = useState<string>(moment().format('DD-MM-YYYY'));
    let location = useLocation().pathname;

    useEffect(() => {
        props.getListFlying()
    }, []);

    return (
        <div className='main-page'>
            <Header
                setLanguage={setLanguage}
                setSearchString={setSearchString}
                date={date}
            />
            <Switch>
                <Route exact path='/arrival'>
                    <Arrival
                        arrival={
                            new DataHydrator(
                                new TranslationHydrator(),
                                new NameCompanyHydrator(),
                                new LogoCompanyHydrator(),
                                new NumberFlightHydrator())
                                .hydrateCollectionObject<ArrivalInterface>(props.listArrival !== undefined ? props.listArrival : [])
                        }
                        language={language}
                        searchString={searchString}
                        location={location}
                        setDate={setDate}
                        date={date}
                    />
                </Route>
                <Route path='/departure'>
                    <Departure
                        departure={new DataHydrator(
                            new TranslationHydrator(),
                            new NameCompanyHydrator(),
                            new LogoCompanyHydrator(),
                            new NumberFlightHydrator())
                            .hydrateCollectionObject<DepartureInterface>(props.listDeparture !== undefined ? props.listDeparture : [])}
                        language={language}
                        searchString={searchString}
                        location={location}
                        setDate={setDate}
                        date={date}
                    />
                </Route>
            </Switch>
        </div>
    )
};

const mapStateToProps = (state: any) => {
    return {
        listArrival: state.fly.list.arrival,
        listDeparture: state.fly.list.departure
    }
}

const mapDispatchToProps = {
    getListFlying: getListFlying
}

export default connect(mapStateToProps, mapDispatchToProps)(App);