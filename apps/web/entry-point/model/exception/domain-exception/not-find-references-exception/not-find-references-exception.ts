import { DomainException } from '../domain-exception';
import { ExceptionType } from '../exception-type/exception-type';

export class NotFindReferencesException extends DomainException {
    constructor() {
        super(ExceptionType.NOT_FIND_REFERENCES);
    }
}
