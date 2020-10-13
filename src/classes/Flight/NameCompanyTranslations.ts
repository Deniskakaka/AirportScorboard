import NameCompanyTranslation from "./NameCompanyTranslation";

export default class NameCompanyTranslations {
    collection: NameCompanyTranslation[] = []

    public addElement(obj: any): void {
        this.collection.push(obj)
    }

    public getNeedName(language: string): string {
        return this.collection.filter(i => i.locale === language)[0].name;
    }
}