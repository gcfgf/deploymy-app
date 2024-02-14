import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 

isEven  = ""
count:number=0;
isNotdisable=false;
isNotdisable1=false

evenodd(){
if (this.count%2==0) {
  this.isEven = "Odd"

} else {
  this.isEven= "Even"
}


}


  inc(){

if(this.count>=20)
window.alert('Allows Below Twenty '),
this.isNotdisable = true;


else{
  this.evenodd()
  this.count++
  this.isNotdisable1 = false
 
}


  }
  dec(){
if(this.count<=0){
this.isNotdisable1 = true
window.alert('Allows Above Zero  ')
}
else{
  this.evenodd()
this.count--
this.isNotdisable=false;


}
 
  }
  res(){
    this.count=0 
    this.isNotdisable = false 
    this.isNotdisable1 = false
    this.isEven = " "
  }
}