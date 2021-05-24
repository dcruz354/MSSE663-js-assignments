// Source code here
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

// create an observable stream - utilizing the of keyword
export const classification = ["KINGDOM", "PHYLUM", "CLASS", "ORDER", "FAMILY", "GENUS", "SPECIES"];
export const classificationStream = of("Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species");

// map over the values in the array
export const classificationToUpper = map((item: string) => item.toUpperCase());
export const toUpperClassificationStream = classificationToUpper(classificationStream);

// subscribe and output values to the console
export const result = toUpperClassificationStream.subscribe(item => console.log(item));