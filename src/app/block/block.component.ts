import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Block } from 'src/models/block.models';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
@Injectable({
  providedIn: "root"
})
export class BlockComponent implements OnInit {

  @Input() block:Block;
  ngOnInit() {
  }

}
