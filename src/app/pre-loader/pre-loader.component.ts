import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pre-loader',
  templateUrl: './pre-loader.component.html',
  styleUrls: ['./pre-loader.component.scss']
})
export class PreLoaderComponent implements OnInit {

  @Input() loadCheck = true;

  constructor() { }

  ngOnInit() {
  }

}
