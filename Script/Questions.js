let questions = [
{
  question: "What does HTML stand for?",
  answer: "Hyper Text Markup Language",
  options: 
  [
    "Hyper Text Preprocessor",
    "Hyper Text Markup Language",
    "Hyper Text Multiple Language",
    "Hyper Tool Multi Language"
  ]
},
{
  question: "What is the issue with the following Java code?\n\nint x = 5;\nwhile (x > 0) {\n System.out.println(x);\n}",
  answer: "There is no issue with the code.",
  options: 
  [
    "There is no issue with the code.",
    "The code will enter an infinite loop.",
    "The code will not compile.",
    "The code will throw an exception."
  ]
},
{
  question: "What is the difference between == and === in JavaScript?",
  answer: "The == operator compares two values for equality, allowing type coercion if necessary, while the === operator compares two values for equality without allowing type coercion.",
  options: 
  [
    "The == operator compares two values for equality without allowing type coercion, while the === operator compares two values for equality, allowing type coercion if necessary.",
    "The == operator compares two values for strict equality, while the === operator compares two values for loose equality.",
    "The == operator compares two values for strict equality, while the === operator compares two values for strict equality.",
    "The == operator compares two values for equality, allowing type coercion if necessary, while the === operator compares two values for equality without allowing type coercion."
  ]
},
{
  question: "What is a promise in JavaScript?",
  answer: "A promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future, either with a value or with an error.",
  options: 
  [
    "A promise is a function that returns a value.",
    "A promise is an object that represents a value that may not be available yet, and may never be resolved.",
    "A promise is an object that represents a value that is immediately available.",
    "A promise is an object that represents a value that may not be available yet, but will be resolved at some point in the future, either with a value or with an error."
  ]
},
{
  question: "What is the difference between let and var in JavaScript?",
  answer: "The main difference between let and var is that let is block-scoped, while var is function-scoped. This means that a variable declared with let inside a block (like a loop or an if statement) is only visible within that block, while a variable declared with var inside a function is visible throughout the entire function.",
  options: [
    "The main difference between let and var is that let is function-scoped, while var is block-scoped.",
    "The main difference between let and var is that let is block-scoped, while var is function-scoped. This means that a variable declared with let inside a block (like a loop or an if statement) is only visible within that block, while a variable declared with var inside a function is visible throughout the entire function.",
    "The main difference between let and var is that let is block-scoped, while var is globally-scoped.",
    "The main difference between let and var is that let is globally-scoped, while var is block-scoped."
  ]
},
{
    question: "What is the difference between const and let in JavaScript?",
    answer: "The main difference between const and let is that const variables cannot be reassigned after they are declared, while let variables can be reassigned.",
    options: [
      "The main difference between const and let is that let variables cannot be reassigned after they are declared, while const variables can be reassigned.",
      "The main difference between const and let is that const variables are globally-scoped, while let variables are block-scoped.",
      "The main difference between const and let is that let variables are function-scoped, while const variables are block-scoped.",
      "The main difference between const and let is that const variables cannot be reassigned after they are declared, while let variables can be reassigned."
    ]
},
{
    question: "What is closure in JavaScript?",
    answer: "A closure is a function that has access to variables in its outer (enclosing) function's scope chain.",
    options: [
      "A closure is a function that has access to global variables.",
      "A closure is a function that has access to variables in the scope of the function it was defined in.",
      "A closure is a function that has no access to any variables outside of its own scope.",
      "A closure is a function that has access to variables in its outer (enclosing) function's scope chain."
    ]
},
{
    question: "What is the difference between map() and forEach() in JavaScript?",
    answer: "The main difference between map() and forEach() is that map() returns a new array with the results of calling a provided function on every element in the array, while forEach() does not return anything and simply calls a provided function on each element in the array.",
    options: [
      "The main difference between map() and forEach() is that forEach() returns a new array with the results of calling a provided function on every element in the array, while map() does not return anything and simply calls a provided function on each element in the array.",
      "The main difference between map() and forEach() is that map() modifies the original array, while forEach() does not modify the original array.",
      "The main difference between map() and forEach() is that map() returns a new array with the results of calling a provided function on every element in the array, while forEach() does not return anything and simply calls a provided function on each element in the array.",
      "The main difference between map() and forEach() is that map() and forEach() do exactly the same thing."
    ]
},    
{
  question: "What is the output of the following code: console.log(typeof null)?",
  answer: "object",
  options: [
    "undefined",
    "null",
    "object",
    "boolean"
  ]
},  
{
  question: "What is the result of 2 + '2' in JavaScript?",
  answer: "The result is '22', because JavaScript will convert the number 2 to a string and concatenate the two strings together.",
  options: [
    "The result is 4, because JavaScript will convert the string '2' to a number before adding it to 2.",
    "The result is '2 + 2', because JavaScript will treat both values as strings and concatenate them together.",
    "The result is undefined, because the code contains a type error.",
    "The result is '22', because JavaScript will convert the number 2 to a string and concatenate the two strings together."
  ]
},  
{
  question: "What is the difference between a list and a tuple in Python?",
  answer: "Lists are mutable, while tuples are immutable",
  options: [
    "Tuples are ordered collections, while lists are unordered collections",
    "Tuples are mutable, while lists are immutable",
    "Lists are mutable, while tuples are immutable",
    "Lists and tuples are the same thing in Python"
  ]
},
{
  question: "What is the difference between 'range' and 'xrange' in Python?",
  answer: "'range' generates a list in memory, while 'xrange' generates an iterator",
  options: [
    "'range' generates a list in memory, while 'xrange' generates an iterator",
    "'range' and 'xrange' are the same thing in Python",
    "'range' and 'xrange' are both used for generating random numbers",
    "'range' is used for arithmetic operations, while 'xrange' is used for logical operations"
  ]
},
{
  question: "What is the difference between 'is' and '==' in Python?",
  answer: "'is' checks if two objects are the same object in memory, while '==' checks if two objects have the same value",
  options: [
    "'is' checks if two objects are the same object in memory, while '==' checks if two objects have the same value",
    "'is' and '==' are the same thing in Python",
    "'is' and '==' are both used for assigning values to variables",
    "'is' is used for arithmetic operations, while '==' is used for logical operations"
  ]
},    
{
  question: "What is the issue with the following Java code?\n\nint[] arr = {1, 2, 3};\nSystem.out.println(arr[3]);",
  answer: "The code will throw an ArrayIndexOutOfBoundsException.",
  options: [
    "The code will output '0'.",
    "The code will output 'null'.",
    "The code will not compile.",
    "The code will throw an ArrayIndexOutOfBoundsException."
  ]
},

{
  question: `What is the issue with the following Java code?\n\nint x = 10;\nif (x = 5) {\n System.out.println("x is 5");\n}`,
  answer: "The code will not compile.",
  options: [
    "The code will output 'x is 5'.",
    "The code will output 'x is not 5'.",
    "The code will not compile.",
    "The code will throw an exception."
  ]
},

{
  question: `What is the issue with the following Java code?\n\npublic class Main {\n public static void main(String[] args) {\n System.out.println("Hello World!")\n }\n}`,
  answer: "The code will not compile due to a missing semicolon in the System.out.println() statement.",
  options: [
    "The code will output 'Hello World!'.",
    "The code will not compile due to a missing parentheses in the System.out.println() statement.",
    "The code will not compile due to a missing curly brace at the end of the class.",
    "The code will not compile due to a missing semicolon in the System.out.println() statement."
  ]
},

{
  question: `What is the issue with the following Java code?\n\npublic class Main {\n public static void main(String[] args) {\n int x = 5;\n if (x == 5);\n {\n System.out.println("x is 5");\n }\n }\n}`,
  answer: "The code will output 'x is 5' regardless of the value of x.",
  options: [
    "The code will output 'x is 5' regardless of the value of x.",
    "The code will output nothing.",
    "The code will not compile.",
    "The code will throw an exception."
  ]
},
{
    question: "What is the difference between the call() and apply() methods in JavaScript?",
    answer: "Both methods are used to call a function with a specified this value, but the difference is in how you pass arguments to the function. The call() method takes the arguments as separate values, while the apply() method takes the arguments as an array.",
    options: [
      "Both methods are used to call a function with a specified this value, but the difference is in how you pass arguments to the function. The call() method takes the arguments as an array, while the apply() method takes the arguments as separate values.",
      "Both methods are used to call a function with a specified this value, but the difference is in how you pass arguments to the function. The call() method takes the arguments as an object, while the apply() method takes the arguments as an array.",
      "Both methods are used to call a function with a specified this value, but the difference is in how you pass arguments to the function. The call() method takes the arguments as separate values, while the apply() method takes the arguments as an array.",
      "Both methods are used to call a function with a specified this value, but the difference is in how you pass arguments to the function. The call() method takes the arguments as an array, while the apply() method takes the arguments as separate values."
    ]
},
{
    question: "What is a closure in JavaScript?",
    answer: "A closure is a function that has access to variables in its outer (enclosing) function's scope chain, even after the outer function has returned.",
    options: [
      "A closure is a function that returns another function.",
      "A closure is a function that has access to variables in its inner function's scope chain.",
      "A closure is a function that has access to variables in its outer (enclosing) function's scope chain, even after the outer function has returned.",
      "A closure is a function that can be used to bind a particular value to the this keyword."
    ]
},
{
    question: "What is a higher-order function in JavaScript?",
    answer: "A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result.",
    options: [
      "A higher-order function is a function that takes one or more objects as arguments, or returns an object as its result.",
      "A higher-order function is a function that takes one or more arrays as arguments, or returns an array as its result.",
      "A higher-order function is a function that takes one or more functions as arguments, or returns a function as its result.",
      "A higher-order function is a function that takes one or more strings as arguments, or returns a string as its result."
    ]
},
    {
    question: "What is the difference between synchronous and asynchronous programming in JavaScript?",
    answer: "The main difference between synchronous and asynchronous programming is that synchronous programming is blocking, meaning that each line of code is executed one at a time and the next line won't execute until the current one has finished, while asynchronous programming is non-blocking, meaning that multiple lines of code can be executed at the same time.",
    options: [
      "The main difference between synchronous and asynchronous programming is that synchronous programming is non-blocking, meaning that multiple lines of code can be executed at the same time, while asynchronous programming is blocking, meaning that each line of code is executed one at a time and the next line won't execute until the current one has finished.",
      "The main difference between synchronous and asynchronous programming is that synchronous programming is globally-scoped, meaning that variables can be accessed from any part of the code, while asynchronous programming is function-scoped, meaning that variables can only be accessed within the function they were declared in.",
      "The main difference between synchronous and asynchronous programming is that synchronous programming is function-scoped, meaning that variables can only be accessed within the function they were declared in, while asynchronous programming is globally-scoped, meaning that variables can be accessed from any part of the code.",
      "The main difference between synchronous and asynchronous programming is that synchronous programming is blocking, meaning that each line of code is executed one at a time and the next line won't execute until the current one has finished, while asynchronous programming is non-blocking, meaning that multiple lines of code can be executed at the same time."
    ]
    },
    {
    question: "What is the difference between == and === in JavaScript?",
    answer: "The main difference between == and === is that == performs type coercion if the operands are of different types, while === does not perform type coercion and requires that the operands be of the same type to be considered equal.",
    options: [
      "The main difference between == and === is that == does not perform type coercion and requires that the operands be of the same type to be considered equal, while === performs type coercion if the operands are of different types.",
      "The main difference between == and === is that == only compares the values of the operands, while === compares both the values and the types of the operands.",
      "The main difference between == and === is that == always returns true, while === returns false if the operands are of different types.",
      "The main difference between == and === is that == performs type coercion if the operands are of different types, while === does not perform type coercion and requires that the operands be of the same type to be considered equal."
    ]
    },
    {
      question: "What is the difference between == and === in JavaScript?",
      answer: "The == operator checks for equality with type coercion, while the === operator checks for equality without type coercion.",
      options: [
        "The == operator checks for equality without type coercion, while the === operator checks for equality with type coercion.",
        "The == operator checks for inequality without type coercion, while the === operator checks for inequality with type coercion.",
        "The == operator checks for inequality with type coercion, while the === operator checks for inequality without type coercion.",
        "The == operator checks for equality with type coercion, while the === operator checks for equality without type coercion."
      ]
      },
      {
      question: "What is the result of the following code: console.log(+'3' + 4)?",
      answer: "The result is 7, because the unary plus operator converts the string '3' to a number before adding it to the number 4.",
      options: [
        "The result is '34', because JavaScript will treat both values as strings and concatenate them together.",
        "The result is 7, because the binary plus operator concatenates the string '3' with the number 4.",
        "The result is 3, because the unary plus operator converts the string '3' to a number and ignores the number 4.",
        "The result is 7, because the unary plus operator converts the string '3' to a number before adding it to the number 4."
      ]
      },
      {
      question: "What is the difference between let and var in JavaScript?",
      answer: "The let keyword declares a block-scoped variable, while the var keyword declares a function-scoped variable.",
      options: [
        "The let keyword declares a function-scoped variable, while the var keyword declares a block-scoped variable.",
        "The let keyword declares a globally-scoped variable, while the var keyword declares a function-scoped variable.",
        "The let keyword declares a block-scoped variable, while the var keyword declares a function-scoped variable.",
        "The let keyword declares a function-scoped variable, while the var keyword declares a function-scoped variable."
      ]
      },
      {
      question: "What is the result of the following code: console.log(2 ** 3)?",
      answer: "The result is 8, because the double asterisk operator (), also known as the exponentiation operator, raises the left operand to the power of the right operand.",
      options: [
        "The result is 5, because the double asterisk operator (), also known as the exponentiation operator, multiplies the left operand by the right operand.",
        "The result is 6, because the double asterisk operator (), also known as the exponentiation operator, adds the left operand to the right operand.",
        "The result is 8, because the double asterisk operator (), also known as the exponentiation operator, raises the left operand to the power of the right operand.",
        "The result is 0.125, because the double asterisk operator (**), also known as the exponentiation operator, raises the right operand to the power of the left operand."
      ]
      },
      {
        question: "What is the difference between let and var in JavaScript?",
        answer: "Variables declared with var are function-scoped, while variables declared with let are block-scoped.",
        options: [
          "Variables declared with var are block-scoped, while variables declared with let are function-scoped.",
          "Variables declared with let are always hoisted to the top of the function, while variables declared with var are hoisted to the top of the global scope.",
          "Variables declared with var are function-scoped, while variables declared with let are block-scoped.",
          "There is no difference between let and var in JavaScript."
        ]
        },
        {
          question: "What is the difference between a list and a tuple in Python?",
          answer: "Lists are mutable, while tuples are immutable.",
          options: [
            "Tuples are ordered, while lists are unordered.",
            "Tuples can store values of different types, while lists can only store values of the same type.",
            "Lists are faster to access than tuples.",
            "Lists are mutable, while tuples are immutable."
          ]
          },
          {
            question: "How does Python's garbage collection system work?",
            answer: "Python's garbage collector periodically frees memory that is no longer being used by the program.",
            options: [
              "Python's garbage collector manually frees memory that is no longer being used by the program.",
              "Python's garbage collector automatically deallocates memory as soon as it is no longer being used by the program.",
              "Python's garbage collector never frees memory, which can lead to memory leaks.",
              "Python's garbage collector periodically frees memory that is no longer being used by the program."
            ]
          },
          {
            question: "How can you check the memory usage of a Python program?",
            answer: "You can use the built-in 'memory_profiler' module or a third-party package like 'psutil'.",
            options: [
              "You can use the built-in 'memory' module to check the program's memory usage.",
              "You can use the built-in 'gc' module to check the program's memory usage.",
              "You can use the built-in 'memory_profiler' module or a third-party package like 'psutil'.",
              "You can use the 'psutil' package to check the program's memory usage."
            ]
          },
          {
            question: "How can you implement a singleton design pattern in Python?",
            answer: "You can use a metaclass or a decorator to ensure that only one instance of a class is ever created.",
            options: [
              "You can use a static method to ensure that only one instance of a class is ever created.",
              "You can use a class method to ensure that only one instance of a class is ever created.",
              "You can use a metaclass or a decorator to ensure that only one instance of a class is ever created.",
              "You can use a module-level variable to ensure that only one instance of a class is ever created."
            ]
          },
          {
            question: "What is the difference between the 'is' and '==' operators in Python?",
            answer: "The 'is' operator tests for object identity, while the '==' operator tests for object equality.",
            options: [
              "The 'is' operator tests for object equality, while the '==' operator tests for object identity.",
              "The 'is' operator tests for object reference equality, while the '==' operator tests for object value equality.",
              "The 'is' operator tests for object value equality, while the '==' operator tests for object reference equality.",
              "The 'is' operator tests for object identity, while the '==' operator tests for object equality."
            ]
          },
        {
        question: "What does NaN stand for in JavaScript?",
        answer: "NaN stands for 'Not a Number', and is a special value that represents an unrepresentable value resulting from an invalid mathematical operation.",
        options: [
          "NaN stands for 'Number and Null', and is a special value that represents a missing value in a mathematical operation.",
          "NaN stands for 'Not a Null', and is a special value that represents an undefined or null value resulting from a mathematical operation.",
          "NaN stands for 'Not a Number', and is a special value that represents an unrepresentable value resulting from an invalid mathematical operation.",
          "NaN stands for 'Number and NaN', and is a special value that represents a numeric value resulting from a mathematical operation involving NaN."
        ]
        },
        {
        question: "What is the difference between synchronous and asynchronous code in JavaScript?",
        answer: "Synchronous code is executed sequentially and blocks further execution until it completes, while asynchronous code is executed non-sequentially and allows for other code to execute while it waits for a response.",
        options: [
          "Synchronous code is executed non-sequentially and allows for other code to execute while it waits for a response, while asynchronous code is executed sequentially and blocks further execution until it completes.",
          "Synchronous code is executed sequentially and blocks further execution until it completes, while asynchronous code is executed non-sequentially and allows for other code to execute while it waits for a response.",
          "Synchronous code is executed non-sequentially and blocks further execution until it completes, while asynchronous code is executed sequentially and allows for other code to execute while it waits for a response.",
          "There is no difference between synchronous and asynchronous code in JavaScript."
        ]
        },
        {
        question: "What is the difference between the == and === operators in JavaScript?",
        answer: "The == operator compares values for equality after doing type conversions if necessary, while the === operator compares both the values and the types of the operands for equality without doing any type conversion.",
        options: [
          "The == operator compares both the values and the types of the operands for equality without doing any type conversion, while the === operator compares values for equality after doing type conversions if necessary.",
          "The == operator compares values for equality without doing any type conversion, while the === operator compares both the values and the types of the operands for equality after doing type conversions if necessary.",
          "The == operator compares values for equality after doing type conversions if necessary, while the === operator compares both the values and the types of the operands for equality without doing any type conversion.",
          "There is no difference between the == and === operators in JavaScript."
        ]
        },
        {
          question: "What is the output of the following code: console.log(2 * '3' + 3 * '2')?",
          answer: "12",
          options: [
          "9",
          "12",
          "15",
          "18"
          ]
          },
          
          {
          question: "What does the following code return: ['10', '20', '30'].map(parseInt)?",
          answer: "[10, NaN, NaN]",
          options: [
          "[10, 20, 30]",
          "[NaN, NaN, NaN]",
          "[10, NaN, NaN]",
          "[undefined, undefined, undefined]"
          ]
          },
          
          {
          question: "What is the output of the following code: console.log(0.1 + 0.2 == 0.3)?",
          answer: "false",
          options: [
          "true",
          "false",
          "NaN",
          "undefined"
          ]
          },
          {
          question: "What is the output of the following code: console.log(typeof NaN)?",
          answer: "number",
          options: [
          "undefined",
          "null",
          "number",
          "NaN"
          ]
          },
          {
          question: "What is the output of the following code: console.log(3 > 2 > 1)?",
          answer: "false",
          options: [
          "true",
          "false",
          "undefined",
          "NaN"
          ]
          },
          
          {
          question: "What is the output of the following code: console.log('2' + '2' - '2')?",
          answer: "20",
          options: [
          "2",
          "20",
          "22",
          "NaN"
          ]
          },   
          {
            question: "What is the output of the following code: console.log(2 * '3' + 3 * '2')?",
            answer: "12",
            options: [
            "9",
            "12",
            "15",
            "18"
            ]
            },
            
            {
            question: "What does the following code return: ['10', '20', '30'].map(parseInt)?",
            answer: "[10, NaN, NaN]",
            options: [
            "[10, 20, 30]",
            "[NaN, NaN, NaN]",
            "[10, NaN, NaN]",
            "[undefined, undefined, undefined]"
            ]
            },
            {
            question: "What is the output of the following code: console.log(0.1 + 0.2 == 0.3)?",
            answer: "false",
            options: [
            "true",
            "false",
            "NaN",
            "undefined"
            ]
            },
            {
            question: "What is the output of the following code: console.log(typeof NaN)?",
            answer: "number",
            options: [
            "undefined",
            "null",
            "number",
            "NaN"
            ]
            },
            {
            question: "What is the output of the following code: console.log(3 > 2 > 1)?",
            answer: "false",
            options: [
            "true",
            "false",
            "undefined",
            "NaN"
            ]
            },
            {
            question: "What is the output of the following code: console.log('2' + '2' - '2')?",
            answer: "20",
            options: [
            "2",
            "20",
            "22",
            "NaN"
            ]
            },
    {
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet"
      ]
  },
    {
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor"
      ]
  },
    {
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language"
      ]
  },
    {
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language"
      ]
  }
];

let quizarray = [];

for(let i=0; i<100; i++){
  let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  quizarray.push(randomQuestion);
}
