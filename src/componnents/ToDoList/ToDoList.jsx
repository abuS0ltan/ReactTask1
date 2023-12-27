import {React,useState,Component} from 'react'
import './toDoList.css';
import ToDo from '../ToDo/ToDo.jsx';
export class ToDoList extends Component {
    task= ["React Task","Sport","Reading the Holy Quran","Reading Book"];
  render() {
    return (
      <div>
        <h1 className='title'>
            Task For this day
        </h1>
        <div className="tasks">
            {
            this.task.map((ele,index)=>{
                return(
                    <ToDo taskName={ele}key={index}/>
                )
            })
            }
        </div>
    </div>
    )
  }
}

export default ToDoList