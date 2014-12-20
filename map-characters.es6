import mapToProperties from "./bower_components/map-to-properties/map-to-properties.es6";

export default function mapCharacters(string, object) {
    if(!typeof(sring) === "string") {
        throw new TypeError("mapCharacters: expects argument 0 to be a string");
    }
    if(!typeof(object) === "object") {
        throw new TypeError("mapCharacters: expects argument 1 to be an object");
    }

    const mapped = mapToProperties(string.toArray(), object);

    if(mapped.every(Boolean)) {
        return mapped.implode("");
    }
    return undefined;
};
