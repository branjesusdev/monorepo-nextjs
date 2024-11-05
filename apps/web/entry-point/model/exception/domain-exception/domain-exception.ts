import { ExceptionType } from './exception-type/exception-type';

export class DomainException extends Error {
    constructor(public exceptionType: ExceptionType | string) {
        super();
    }
}
