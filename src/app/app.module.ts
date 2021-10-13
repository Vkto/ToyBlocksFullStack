import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodesComponent } from './nodes/nodes.component';
import { StatusComponent } from './status/status.component';
import { BlockComponent } from './block/block.component';
import { ApiService } from './services/api.service';
import { NodesBlocks } from './services/nodeBlocks.service';
import { NodesStore } from './services/nodesStore.service';
import {AngularFirestoreModule} from '@angular/fire/firestore'; 
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, NodeComponent, NodesComponent, StatusComponent, BlockComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AngularFirestoreModule.enablePersistence(), AngularFirestoreModule , CommonModule],
  bootstrap: [AppComponent], 
  providers: [
    ApiService,
    NodesBlocks,
    NodesStore  ,
    NodeComponent
  ],
  exports: [NodeComponent, NodesComponent, BlockComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA]
})
export class AppModule {}
