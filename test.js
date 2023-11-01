// Javascript Array Inbuilt methods


// 1. length - returns the length of the array, length is the number of elements in the array
//syntax: array_name.length


// toString() - converts an array to a string of (comma separated) array values
// output : a single string


// var arr = [1,"hello",2,"world",3,"!"];
// console.log(arr.length); // 6
// console.log(arr.toString()); // " 1,hello,2,world,3,! "


// 2. join() - joins all array elements into a string ,
// input : array elements and  output: string
// syntax: array_name.join(seperator)  , note : separator is optional, if not specified, comma added between array elements
// if seperator is not specified, join() function behaves like toString() function




// var arr = [1,"hello",2,"world",3,"!"]
// console.log(arr.join(":-)"))


// var arr = [1,"hello",2,"world",3,"!",true,undefined,null]
// console.log(arr.join(":-)"))  // 1:-)hello:-)2:-)world:-)3:-)!:-)true:-):-)


// 3. pop() - removes/deletes last element of the array
// syntax : array_name.pop()


// var arr = [1,"hello",2,"world",3,"!"]
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr)


// push() - adds new element at the END of the array
// syntax : array_name.push(element)


// var arr = [1,"hello",2,"world",3,"!"]
// arr.push("new element")
// arr.push(67.09)
// console.log(arr)


// Question:
// var arr = [1,"hello",2,"world",3,"!",true,"helloi","vfbv",8,false]
// arr.push("new element")  // [1,"hello",2,"world",3,"!",true,"helloi","vfbv",8,false,"new element"]
// arr.pop() // ["new element",1,"hello",2,"world",3,"!",true,"helloi","vfbv",8,false]
// arr.pop() // ["new element",1,"hello",2,"world",3,"!",true,"helloi","vfbv",8]
// arr.push("o")  // ["new element",1,"hello",2,"world",3,"!",true,"helloi","vfbv",8,"o"]
// arr.pop()  // ["new element",1,"hello",2,"world",3,"!",true,"helloi","vfbv",8]
// arr.pop()  // ["new element",1,"hello",2,"world",3,"!",true,"helloi","vfbv"]
// arr.pop()  // ["new element",1,"hello",2,"world",3,"!",true,"helloi"]
// arr.pop()  //  ["new element",1,"hello",2,"world",3,"!",true]
// arr.pop() // ["new element",1,"hello",2,"world",3,"!"]
// arr.push("hjwvdd")  // ["new element",1,"hello",2,"world",3,"!","hjwvdd"]
// arr.push(true)  // ["new element",1,"hello",2,"world",3,"!","hjwvdd",true]
// arr.pop()  // ["new element",1,"hello",2,"world",3,"!","hjwvdd"]
// arr.pop()  // ["new element",1,"hello",2,"world",3,"!"]
// arr.pop()  // ["new element",1,"hello",2,"world",3]
// arr.pop()  // ["new element",1,"hello",2,"world"]
// arr.pop() // ["new element",1,"hello",2]
// arr.pop() // ["new element",1,"hello"]
// arr.pop()  // ["new element",1]
// arr.pop()  // ["new element"]
// arr.pop()  // []
// arr.push(4*9) // [36]
// console.log(arr)


// 4. shift() - removes/deletes first element of the array
// syntax : array_name.shift()


// var arr = [1,"hello",2,"world",3,"!"]
// arr.shift()  // ["hello",2,"world",3,"!"]
// arr.shift()  // [2,"world",3,"!"]
// console.log(arr)




// 5. unshift() - adds new element at the BEGINNING of the array
// syntax : array_name.unshift(element)


// var arr = [1,"hello",2,"world",3,"!"]
// arr.unshift("new element")
// arr.unshift(67.09)
// console.log(arr)




// var arr = [1,"hello",2,"world",3,"!"]
// arr.pop() // [1,"hello",2,"world",3]
// arr.shift() // ["hello",2,"world",3]
// arr.unshift("jh") // ["jh",hello",2,"world",3]
// arr.push("new element") // ["jh",hello",2,"world",3,"new element"]
// arr.shift() // [hello",2,"world",3,"new element"]
// arr.push("new element 4") //[hello",2,"world",3,"new element","new element 4"]
// arr.unshift("new element 5") // ["new element 5",hello",2,"world",3,"new element","new element 4"]
// arr.pop() //["new element 5",hello",2,"world",3,"new element"]
// arr.pop() //  ["new element 5",hello",2,"world",3]
// arr.pop() // ["new element 5",hello",2,"world"]
// arr.push("ju") // ["new element 5",hello",2,"world","ju"]
// arr.shift() // [hello",2,"world","ju"]
// console.log((arr.join("uu"))) // "hellouu2uuworlduuju"




// 6. concat() - merge 2 arrays together
// input : 2 arrays output : 1 single array
// syntax : arr1.concat(arr2)


// var arr1 = ["hello", true , 4]
// var arr2 = ["hi", false , 7]


// // [ "hi", false , 7 , "hello", true , 4 ]


// var newarray = arr2.concat(arr1)
// console.log(newarray)


// // spread operator does a Similar job like concat function , its like -->   ...
// var arr1 = ["hello", true , 4]
// var arr2 = ["hi", false , 7]
// var newarray = [...arr2,...arr1]  // syntax
// console.log(newarray) // [ "hi", false , 7 , "hello", true , 4 ]
// var newarray = [arr2,arr1]
// console.log(newarray) //[[ "hi", false , 7] , ["hello", true , 4 ]]


// newarray is array of array (2D array)


//  7. flat() --> faltten / removes square brackets / makes array of arrays into a single simple array
// internal square brackets are removed
// input : [[ "hi", false , 7] , ["hello", true , 4 ]]
// output : [ "hi", false , 7 , "hello", true , 4 ]


// syntax: array_name.flat()


// var arr = [[ "hi", false , 7] , ["hello", true , 4 ]]
// console.log(arr.flat())


// 8. slice()  -- it is for slicing / taking out a subpart from an array
// input : array
// output : subpart of the array


//syntax : array_name.slice(index1,index2)  adding second index is optional
// index 2's element is not considered


// var array = ["hello","world",0]
// var sliced_array = array.slice(1,2)
// console.log(sliced_array)
// adding a negative number in index 2 will make the subpart selection towards right and dont select the element at the second index
  //          0    1    2    3     4            5            6   -- positive indexes
// var arr = ["hello",2,"world",3,"new element","new element 4",55]
  //         -7    -6   -5   -4        -3         -2            -1  -- negative indexes


// console.log(arr.slice(1,-4))




//hw
// var arr = ["hello",2,"world",3,"new element","new element 4"]
// arr.slice(4,6)  //output?
// arr.slice(2,-1) //output?
// var array = arr.slice(2)
// var array1 = array.slice(3,-1)  //output?






// splice()
// second parameter tells delete that many number of elements from where you are currently standing
// It updates the original array
// remove elements from any index of an array
// var arr = ["Banana","orange" ,"apple", "Mango","water melon"]
// arr.splice(-4,2,"kiwi","lemon","guava")  
// console.log(arr) // ["Banana","kiwi","lemon" , "guava", "Mango","water melon"]




//       slice                     |                      splice
//does not update original array   |        It does update the original array










//  STRING METHODS INBUILT METHODS




// 1.length
// var str ="hello"
// console.log(str.length)


// 2 concat


// var str1 = "j"
// var str2 = "u"
// console.log(str1+str2)
// console.log(str1.concat(str2))




// slice ()
//          01234
// var str1 = "hel o"
// console.log(str1.slice(2,4));


// var str = "hello world"
// console.log(str.slice(4,4))


// split()
// var str = "a,b*,4*5222"
// console.log(str.split("*"))




// substring()
// negative numbers are treated as zero
// var str = "hello world"
// console.log(str.substring(-5,7))
// console.log(str.slice(-5,7))


// toUpperCase()
// it creates a new string and dont modify the old string
// var str = "ggg"
// var newt = str.toUpperCase()
// console.log(newt)


//toLowerCase()
// var str = "GGG"
// var newt = str.toLowerCase()
// console.log(newt)


// charCodeAt()  -- ascii value of the element at that index
// A - 65 a - 97
// var str = "aello"
// console.log(str.charCodeAt(0))




//charAt()  -- element at that index
// var y="opi"
// console.log(y.charAt(2))















