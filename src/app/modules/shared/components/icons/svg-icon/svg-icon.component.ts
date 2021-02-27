import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @ViewChild('svgEl') svgEl: ElementRef;

  @Input()
  width: string;
  @Input()
  height: string;

  @Input()
  cor: string;

  @Input()
  id: string;

  constructor() {}

  ngOnInit(): void {}
}
