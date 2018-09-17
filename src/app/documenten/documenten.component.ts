import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-documenten',
    templateUrl: './documenten.component.html',
    styleUrls: ['./documenten.component.css']
})
export class DocumentenComponent implements OnInit {
    title = 'Documenten';
    desc = 'Fusce rhoncus auctor quam at ornare. Vestibulum placerat convallis massa, at dignissim justo convallis nec. Aenean vehicula mauris ac congue convallis. Duis rhoncus lorem tortor, at blandit felis varius eu. Nam vel rutrum nunc. Donec porta, ligula ut tempus semper, mauris diam congue quam, non sollicitudin augue nulla sit amet quam. Sed euismod, est vehicula tempus lacinia, augue sapien sagittis augue, id egestas turpis mi non massa. Mauris finibus sagittis dui, semper finibus massa consequat in. Ut et risus ac nulla scelerisque molestie. Aenean viverra neque hendrerit neque semper sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam non metus urna. Nulla quis nibh at massa condimentum rhoncus. Aenean vel metus lectus. Aliquam neque mi, consectetur pellentesque vestibulum id, hendrerit ut mi. Curabitur vehicula suscipit ipsum, non faucibus libero.';

    constructor() {
    }

    ngOnInit() {
    }

}
