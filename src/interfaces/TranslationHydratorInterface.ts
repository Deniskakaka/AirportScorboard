import CollectionTranslation from "../classes/Flight/CollectionTranslation";

export  interface TranslationHydratorInterface {
    collection: CollectionTranslation;
    hydrateCollection(obj: object): object[]
}