# fibonum-array

## Installation

~~~sh
npm install --save fibonum-array
~~~


## Usage

### This library provide two methods.

~~~js
import { getByElementCount, getByIndexValue } from 'fibonum-array'

let array = getByElementCount( params );  // Get Fibonacci Number As many elements as you specify
let number = getByIndexvalue( params );  // Get Fibonacci Number As Index number you specified
~~~


### Example:
~~~js
import { getByElementCount, getByIndexValue} from 'fibonum-array'
~~~

Get Fibonacci Number Array
~~~js
let array = new Array
array = getByElementCount(5);
console.log(array);
~~~
reult:
~~~js
[0, 1, 1, 2, 3, 5]
~~~

Get Fibonacci Number you specified
~~~js
let number = new Number
number = getByIndexValue(50);
console.log(number);
~~~
reult:
~~~js
12586269025
~~~

## License
MIT

## Keywords

fibonacci
fibonum