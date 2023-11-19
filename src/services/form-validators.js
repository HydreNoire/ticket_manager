export class ValidatorService {

    static min(value, min) {
        if (value.length < min) {
            return `Please type at least ${min} letter(s)`
        }
    }

    static max(value, max) {
        if (value.length > max) {
            return `Please type no more than ${max} letter(s)`
        }
    }
}