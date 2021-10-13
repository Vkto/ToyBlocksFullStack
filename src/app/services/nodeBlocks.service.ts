import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from './store';
import { INode } from 'src/models/node.model';
import { State } from './state';
import { Block } from 'src/models/block.models';

@Injectable({
  providedIn: 'root'
})
export class NodesBlocks extends Store<INode[]> {
  constructor(private api: ApiService) {
    super(new State().list);
  }

  public async getStatus(nodeState: INode[]) {

    this._getBlocks(nodeState).subscribe((data) => {

        const newNodes = nodeState.map((itemNode) => ({
            ...itemNode,
            blocks  : data.find((itemData)=> itemNode.name === itemData.name).blocks,
        }))

      this.setState([...newNodes]);
    });
  }

  public _getBlocks(states: INode[]) {
    const block = states.map(node => {
      return this.api.get(`${node.url}/api/v1/blocks`).pipe(
        catchError(error =>
          of({
            block: false
          })
        ),
        map((block) => {
          return {
            ...node,
                blocks : block.data as Block[]
          };
        })
      );
    });

    return forkJoin(block);
  }
}
