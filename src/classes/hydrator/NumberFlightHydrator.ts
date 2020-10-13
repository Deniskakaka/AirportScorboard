import {NumberFlightHydratorInterface} from "../../interfaces/NumberFlightHydratorInterface";

interface NumberInterface {
    codeShare: string;
}

export default class NumberFlightHydrator implements NumberFlightHydratorInterface {
    public hydrateNumberFlight(obj: NumberInterface[]): string {
        return obj.map(i => i.codeShare)[0];
    }
}