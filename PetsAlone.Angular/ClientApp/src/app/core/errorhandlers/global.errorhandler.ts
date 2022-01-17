import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log(error);
        alert('An Unexpected error has occured. Please try again.')
    }

}
