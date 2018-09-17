import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
    title = 'Mijn stage';
    desc = 'Pellentesque egestas orci at quam laoreet pharetra. Suspendisse nec ex eu elit aliquam vulputate. Aenean vel mauris nec dui convallis hendrerit a id quam. Nam ut enim et erat ultricies ultricies nec in ante. Vivamus ac ligula quis ipsum efficitur iaculis sed at ligula. Morbi luctus suscipit sapien, et rutrum sapien eleifend ac. Donec consequat turpis quis lectus dictum tincidunt. Phasellus eu egestas erat, nec tempus dui. In et diam ac ligula viverra fringilla in eu tortor. Aenean nulla erat, blandit sed arcu iaculis, sollicitudin luctus tellus. Quisque eu egestas diam. Ut accumsan pharetra nulla ac dapibus. Morbi rhoncus quam ultricies, iaculis dolor et, faucibus enim.';
  constructor() { }

  ngOnInit() {
  }

}
