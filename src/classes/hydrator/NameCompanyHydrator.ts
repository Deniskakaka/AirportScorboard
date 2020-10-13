import { NameCompanyHydratorInterface } from "../../interfaces/NameCompanyHydratorInterface";
import NameCompanyTranslations from "../Flight/NameCompanyTranslations";
import NameCompanyTranslation from "../Flight/NameCompanyTranslation";

interface AirlineInterface {
    name: string;
    locale: string
}

export default class NameCompanyHydrator implements NameCompanyHydratorInterface {

    public hydrateEntity(obj: any): AirlineInterface {
        return new NameCompanyTranslation(obj.name, obj.locale);
    }

    public hydrateCollection(object: any): NameCompanyTranslations {
        let obj = new NameCompanyTranslations();
        Object.entries(object).forEach(element => {
            obj.addElement(this.hydrateEntity(element[1]))
        })
        return obj
    }
}