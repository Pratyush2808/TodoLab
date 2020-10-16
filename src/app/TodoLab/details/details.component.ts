import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  title:string;
  description:string;
  item_date:Date;
  todoList:any;
  todoObject:any;


  constructor() {
    this.title='';
    this.description='';
    this.item_date= new Date();
    this.todoList=[];
   }
  addItem(event){
    this.todoObject={
      id:this.todoList.length+1,
      title:this.title,
      description:this.description,
      item_date:this.item_date,
    }
    this.todoList.push(this.todoObject);
    this.title='';
    this.description='';
    event.preventDefault();
  }
  ngOnInit(): void {
  }

}
