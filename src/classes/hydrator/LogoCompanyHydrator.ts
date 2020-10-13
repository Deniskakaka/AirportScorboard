import { LogoCompanyHydratorInterface } from "../../interfaces/LogoCompanyHydratorInterface";

interface LogoInterface {
    'en':{logoSmallName: string}
}

export default  class LogoCompanyHydrator implements LogoCompanyHydratorInterface{

    public getLogo(obj: LogoInterface): string {
        return obj.en.logoSmallName
    }
}