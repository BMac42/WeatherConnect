import { Component, OnInit, Input } from '@angular/core';
import { SkyconsService } from '../services/skycons.service';

@Component({
  selector: 'app-skycon',
  templateUrl: './skycon.component.html',
  styleUrls: ['./skycon.component.scss']
})
export class SkyconComponent implements OnInit {

  @Input() icon: string;

  constructor(private skycons: SkyconsService) { }

  ngOnInit() {
    this.skycons.functions.add('sky', this.skycons.getIcon(this.icon));
    this.skycons.functions.play();

    console.log(this.icon);
  }

}
