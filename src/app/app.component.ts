import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    title = 'app';
    items: any;
    obj: any;
    constructor(
        public db: AngularFireDatabase
    ) {
        this.db.list('userData').valueChanges().subscribe(val => {
            this.items = val;
            console.log(val);
        });
    }
    // ngOnInit() {
    //     console.log('JSON.stringify(this.items) =>', this.items);
    // }
}
