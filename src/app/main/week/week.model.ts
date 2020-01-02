import { Input, Component, OnInit } from '@angular/core';
import { SkyconsService } from 'src/app/services/skycons.service';

@Component({
  selector: 'app-week-model',
  templateUrl: './week-model.html',
  styleUrls: ['./week.component.scss']
})

export class WeekObjectComponent implements OnInit {
  @Input() public date: any[];
  @Input() public hi: any[];
  @Input() public low: any[];
  @Input() public icon: any[];

  constructor(private skycons: SkyconsService) {
    // this.date = date;
    // this.hi = hi;
    // this.low = low;
    // this.icon = icon;
  }

  ngOnInit(){
  }
}

