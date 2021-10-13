import { TestBed } from '@angular/core/testing';
import  {HttpClient} from '@angular/common/http'
import { async, ComponentFixture } from '@angular/core/testing';


import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NodeComponent } from './node.component';
import { StatusComponent } from '../status/status.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BlockComponent } from '../block/block.component';

describe('NodeComponent ', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockComponent, NodeComponent, StatusComponent ],
      imports:[HttpClientTestingModule], schemas: [CUSTOM_ELEMENTS_SCHEMA   ] })
      const fixture = TestBed.createComponent(NodeComponent); 
      const drift = fixture.debugElement.componentInstance; 

      drift.node = {
          url: "string",
          onlinee: false,
          name: "string",
          loading: true,
          status: "string",
          blocks: []
      }
httpClient  = TestBed.get(HttpClient)
httpTestingController = TestBed.get(HttpTestingController   )
  }));

  

  it('should create', () => {
      const service: NodeComponent = TestBed.get(NodeComponent)
    expect(service ).toBeTruthy();
  });
});
