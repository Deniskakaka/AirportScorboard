import NameCompanyTranslations from "./NameCompanyTranslations";
import CollectionTranslation from "./CollectionTranslation";

export default class Flight {
    ID: number;
    private readonly _actual: string;
    private readonly _timeShedule: any;
    private readonly _CompanyNameTranslations: object;
    private readonly _airportTranslations: any;
    private readonly _NumberFlight: string;
    private readonly _terminal: string;
    private readonly _logosCompany: string;

    constructor(
        actual: string,
        airLineTranslations: any,
        timeShedule: string,
        airLineName: object,
        terminal: string,
        logosCompany: string,
        numberFlight: string
    ) {
        this._actual = actual;
        this._airportTranslations = airLineTranslations;
        this._timeShedule = timeShedule;
        this._CompanyNameTranslations = airLineName;
        this._terminal = terminal;
        this._logosCompany = logosCompany;
        this._NumberFlight = numberFlight
    }

    public getTerminal() {
        return this._terminal
    }

    public getActual() {
        return this._actual
    }

    public getTime() {
        return this._timeShedule
    }

    public getCompanyNameTranslations() {
        return this._CompanyNameTranslations as NameCompanyTranslations
    }

    public getAirportTranslations() {
        return this._airportTranslations as CollectionTranslation
    }

    public getLogoCompany() {
        return this._logosCompany
    }

    public getNumberFlight() {
        return this._NumberFlight
    }
}