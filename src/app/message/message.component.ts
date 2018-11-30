import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  /**
   * Angular 只会绑定到组件的公共属性
   * @param messageService message
   */
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
