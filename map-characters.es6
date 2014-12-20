export default function mapCharacters(string, object) {
    if(!typeof(sring) === "string") {
        throw new TypeError("mapCharacters: expects argument 0 to be a string");
    }
    if(!typeof(object) === "object") {
        throw new TypeError("mapCharacters: expects argument 1 to be an object");
    }

    const mapped = [for (chr of string.toArray()) object[chr]];

    if(mapped.every(Boolean)) {
        return mapped.implode("");
    }
    return undefined;
};
