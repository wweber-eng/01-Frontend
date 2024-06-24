import { from, Observable, timeout } from 'rxjs';
import { map} from 'rxjs/operators';

let numbers = [1, 5, 10];

let source = new Observable(subscriber => {
  
  let index = 0;

  let productValue = () =>{
   subscriber.next(numbers[index++]);
   
   if(index < numbers.length){
      setTimeout(productValue, 1000);
   }
   else{
    subscriber.complete();
   }
  }
  
  productValue();

})

source.pipe(
  map( (n: number) => n * 2)
).subscribe({
  next: (x:number) => {
    console.log(x)
  },
  error: (e:Error) => {console.log(e)},
  complete: () => {console.log('Complete')},

})
