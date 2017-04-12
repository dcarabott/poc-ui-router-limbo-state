import { Component, Input } from '@angular/core';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
    moduleId: module.id,
    selector: 'sd-app',
    templateUrl: 'app.component.html',
})
export class AppComponent {

    @Input() test: any;
}
