import Flight from "./Flight";

export default class CollectionFlights {
    collection: Flight[] = [];

    public addElement(obj: Flight): void {
        this.collection.push(obj)
    }

    public getCollection(): object[] {
        return this.collection
    }
}