import {ArrivalInterface, DepartureInterface, isOfType} from "./FlightHydrator";
import {TranslationHydratorInterface} from "../../interfaces/TranslationHydratorInterface";
import AirportTranslation from "../Flight/AirportTranslation";
import CollectionTranslation from "../Flight/CollectionTranslation";

export default class TranslationHydrator implements TranslationHydratorInterface{
     collection: CollectionTranslation = new CollectionTranslation();

    public hydrateCollection(obj: object): any {
            if (isOfType<ArrivalInterface>(obj, "airportFromID.city"))
                this.collection.getCollection(new AirportTranslation(obj['airportFromID.city'] as string, 'ua'))

            if (isOfType<DepartureInterface>(obj, 'airportToID.city'))
                this.collection.getCollection(new AirportTranslation(obj['airportToID.city'] as string, 'ua'))

            if (isOfType<ArrivalInterface>(obj, "airportFromID.city_ru"))
                this.collection.getCollection(new AirportTranslation(obj['airportFromID.city_ru'] as string, 'ru'))

            if (isOfType<DepartureInterface>(obj, 'airportToID.city_ru'))
                this.collection.getCollection(new AirportTranslation(obj['airportToID.city_ru'] as string, 'ru'))

            if (isOfType<ArrivalInterface>(obj, "airportFromID.city_en"))
                this.collection.getCollection(new AirportTranslation(obj['airportFromID.city_en'] as string,'en'))

            if (isOfType<DepartureInterface>(obj, 'airportToID.city_en'))
                this.collection.getCollection(new AirportTranslation(obj['airportToID.city_en'] as string, 'en'))

        return this.collection;
    }
}