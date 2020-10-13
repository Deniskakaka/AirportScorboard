import Flight from "../Flight/Flight";
import {TranslationHydratorInterface} from "../../interfaces/TranslationHydratorInterface";
import CollectionFlights from "../Flight/CollectionFlights";
import { NameCompanyHydratorInterface } from "../../interfaces/NameCompanyHydratorInterface";
import { LogoCompanyHydratorInterface } from "../../interfaces/LogoCompanyHydratorInterface";
import {NumberFlightHydratorInterface} from "../../interfaces/NumberFlightHydratorInterface";

export const isOfType = <T>(
    varToBeChecked: any,
    propertyToCheckFor: keyof T
): varToBeChecked is T =>
    (varToBeChecked as T)[propertyToCheckFor] !== undefined;

export interface ArrivalInterface {
    ID: number;
    actual: string;
    timeToStand: string;
    'airportFromID.city'?: string;
    'airportFromID.city_en'?: string;
    'airportFromID.city_ru'?: string;
    airline: object;
    codeShareData: string;
    term: string;
}

export interface DepartureInterface {
    ID: number;
    actual: string;
    timeToStand: string;
    'airportToID.city'?: string;
    'airportToID.city_en'?: string;
    'airportToID.city_ru'?: string;
    airline: object;
    codeShareData: string;
    term: string
}

type UnionPlace = ArrivalInterface | DepartureInterface

export default class FlightHydrator {

    private translationHydrator: TranslationHydratorInterface;
    private nameCompanyHydrator: NameCompanyHydratorInterface;
    private logoCompanyHydrator: LogoCompanyHydratorInterface;
    private numberFlightHydrator: NumberFlightHydratorInterface;

    public constructor(
        hydratorTranslation: TranslationHydratorInterface,
        hydratorNameCompany: NameCompanyHydratorInterface,
        hydratorLogoCompany: LogoCompanyHydratorInterface,
        hydratorNumberFlight: NumberFlightHydratorInterface)
    {
        this.translationHydrator = hydratorTranslation;
        this.nameCompanyHydrator = hydratorNameCompany;
        this.logoCompanyHydrator = hydratorLogoCompany;
        this.numberFlightHydrator = hydratorNumberFlight;
    }

    public hydrateEntity<T>(object: UnionPlace): Flight {
        return new Flight(
            object.actual,
            this.translationHydrator.hydrateCollection(object),
            object.timeToStand,
            this.nameCompanyHydrator.hydrateCollection(object.airline),
            object.term,
            this.logoCompanyHydrator.getLogo(object.airline),
            this.numberFlightHydrator.hydrateNumberFlight(object.codeShareData),
        )
    }

    public hydrateCollectionObject<T>(object: UnionPlace[]): any {
        let obj = new CollectionFlights()
        object.forEach(element => {
            return obj.addElement(this.hydrateEntity<T>(element))
        })
        return obj.getCollection()
    }
}