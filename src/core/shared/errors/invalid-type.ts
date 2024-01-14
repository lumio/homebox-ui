export default class InvalidType extends Error {
    constructor(expectedType: string) {
        super(`Value must be of type ${expectedType}`);
    }
}
