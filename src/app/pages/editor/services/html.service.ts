import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor() { }

  doneEvent(event : MouseEvent) : void {
    event.preventDefault();
    event.stopPropagation();
  }

  generateId(ids: string[], elementId : string) : string {
    let id = elementId + "-" + ids.length;
    ids.push(id);
    return id;
  }
}
