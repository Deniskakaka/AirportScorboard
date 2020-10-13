import { NameAirportInterface } from "../../interfaces/NameAirportInterface";

export default class AirportTranslation implements NameAirportInterface {
    name: string;
    location: string;

    constructor(name: string, location: string) {
        this.name = name;
        this.location = location;
    }

    public getName() {
        return this.name;
    }
}