import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INode } from '../../models/node.model';
import { NodesBlocks } from '../services/nodeBlocks.service';
import { NodesStore } from '../services/nodesStore.service';

@Component({
  selector: 'app-node-list',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  expandedNodeURL: string = null;

store$: Observable<INode[]>
  constructor(public store: NodesStore, public nodeService: NodesStore, private blockService: NodesBlocks) {}

  ngOnInit() {
    this.nodeService.getStatus().then((itemNode =>  {
      this.blockService.getStatus(itemNode  )
    }));

    this.store$ = this.blockService.state$ ;
  }

  ToogleExpand(node: INode): void {
    this.expandedNodeURL = node.url === this.expandedNodeURL ? null : node.url;
  }

  isExpanded(node: INode): boolean {
    return this.expandedNodeURL === node.url;
  }

  setMessage(message: string): void {
    this.expandedNodeURL = message;
  }
}
