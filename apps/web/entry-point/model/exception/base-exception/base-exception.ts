import { DomainException } from '../domain-exception/domain-exception';
import { ExceptionType } from '../domain-exception/exception-type/exception-type';

export class BaseException extends DomainException {
    constructor(exceptionType: ExceptionType) {
        super(exceptionType);
    }
}
