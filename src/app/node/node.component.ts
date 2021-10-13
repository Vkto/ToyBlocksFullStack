import { Component, Input, Output, EventEmitter, Injectable, OnInit } from '@angular/core';
import { INode } from '../../models/node.model';

@Component({
  selector: 'app-node-item',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
@Injectable({
  providedIn:'root'
})
export class NodeComponent implements  OnInit{
  @Input() node: INode;
  @Output() ToogleExpand = new EventEmitter<Node>();
  @Input() expanded: boolean;

  handleToogleExpand(node: Node): void {
    this.ToogleExpand.emit(node);
  }
  ngOnInit(){

  }
}
