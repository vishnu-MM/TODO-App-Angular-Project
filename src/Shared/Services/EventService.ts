import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class EventService {
    private subject = new Subject();

    emit( eventName : string, payload : any ) { //! eventName removeTask, payload the value (name of the task)
        this.subject.next({ eventName, payload});
    }
    listen( eventName : string, callBack : (event : any) => void ) {
        this.subject.asObservable().subscribe(
            (nextObj : any) => {
                if ( eventName === nextObj.eventName )
                    callBack(nextObj.payload)
            }
        );
    }
}
// export default new EventService();