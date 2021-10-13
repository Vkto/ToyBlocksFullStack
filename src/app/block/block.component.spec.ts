import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { BlockComponent } from './block.component';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'

describe('BlockComponent', () => {
  let component: BlockComponent;
  let fixture: ComponentFixture<BlockComponent>;
  let httpClient: HttpClient; 
  let httpTestingController: HttpTestingController

  beforeEach(async(() => {
    TestBed.configureTestingModule({ imports: [ HttpClientTestingModule ] })
     httpClient = TestBed.get(HttpClient)
     httpTestingController = TestBed.get(HttpTestingController)
  }));


  it('should create', () => {
    const service: BlockComponent = TestBed.get(BlockComponent)
    expect(service).toBeTruthy();
  });
});
