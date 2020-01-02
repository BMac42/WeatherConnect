import { Component, OnInit, Input } from '@angular/core';
import { SkyconsService } from '../services/skycons.service';


const daysObject = [1, 2, 3, 4, 5];

@Component({
  selector: 'app-skycon',
  templateUrl: './skycon.component.html',
  styleUrls: ['./skycon.component.scss']
})

export class SkyconComponent implements OnInit {

  @Input() icon: string;
  @Input() id: any;

  constructor(private skycons: SkyconsService) {

   }

  ngOnInit() {

    setTimeout(() => {
      this.skycons.functions.add(this.id, this.skycons.getIcon(this.icon));
      this.skycons.functions.play();
    }, .1);
  }

}
