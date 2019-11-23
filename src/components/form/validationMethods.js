class AbstractValidation {
    constructor(message) {
        this.message = message
    }
    validate (value) {
        return true
    }
}

class NotNull extends AbstractValidation {
    validate (value) {
        if (value === null || value === undefined) {
            return false
        }

        if (value.trim()) {
            return true;
        }
        return false;
    }
}

class NumberRequired {
    constructor(message) {
        this.message = message        
    }
    validate (value) {
        if (value === null || value === undefined) {
            return false
        }
        if (!isNaN(value)) {
            return true;
        }
        return false;
    }
}

let notNull = new NotNull("input required");
let numberRequired = new NumberRequired("number required");


export {notNull, numberRequired};