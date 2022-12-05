export default function camelCaseToSnakeCase(obj: Record<string, unknown>) {
    const snakeCaseObject = {};

    for (const field in obj) {
        snakeCaseObject[camelToUnderscore(field)] = obj[field];
    }

    return snakeCaseObject;
}

function camelToUnderscore(key) {
    return key.replace(/([A-Z])/g, '_$1').toLowerCase();
}
