export interface NameCompanyHydratorInterface {
    hydrateEntity(obj: object): object;
    hydrateCollection(object: object): object;
}