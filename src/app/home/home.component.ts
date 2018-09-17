import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'Stage Guus Ekkelenkamp';
    desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula, massa in scelerisque rutrum, massa tellus finibus lacus, at gravida leo velit id ante. Vestibulum iaculis nulla id velit euismod venenatis. Curabitur sodales ut lacus eget fringilla. Cras viverra ipsum urna, quis finibus diam finibus ac. Suspendisse pulvinar nunc sed enim tempus, eget consectetur massa posuere. Fusce tincidunt dui ligula, at malesuada massa consequat posuere. Phasellus aliquet diam nec tincidunt lacinia. Etiam lorem diam, lobortis vel ligula eget, elementum dictum justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.';

    constructor() {
    }

    ngOnInit() {
    }

}
