import AirportTranslation from "./AirportTranslation";

export default class CollectionTranslation {
    collection: AirportTranslation[] = [];

    public getCollection(obj: AirportTranslation): void {
        this.collection.push(obj)

    }

    public getNeedName(language: string): AirportTranslation[] {
        return this.collection.filter(i => i.location === language)
    }

}