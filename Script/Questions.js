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
///////////////////////////////////////////////////////////C++
{
  question: "In C++, which of the following is a correct way to define a class template named 'MyClass' with two template parameters 'T' and 'U'?",
  answer: "template<class T, class U> class MyClass { /* class definition */ };",
  options: [
    "class MyClass<T, U> { /* class definition */ };",
    "template<typename T, typename U> class MyClass { /* class definition */ };",
    "template<class T, typename U> class MyClass { /* class definition */ };",
    "class MyClass { /* class definition */ };"
  ]
},
{
  question: "What is the difference between a const pointer and a pointer to const in C++?",
  answer: "A const pointer is a pointer whose value cannot be changed, whereas a pointer to const is a pointer that points to a constant object whose value cannot be changed.",
  options: [
    "There is no difference between them; both are pointers to const objects.",
    "A const pointer is a pointer to a constant object whose value cannot be changed, whereas a pointer to const is a pointer whose value cannot be changed.",
    "A const pointer is a pointer whose value and the value it points to cannot be changed, whereas a pointer to const is a pointer that points to a constant object whose value cannot be changed.",
    "A pointer to const is a pointer whose value and the value it points to cannot be changed, whereas a const pointer is a pointer to a constant object whose value cannot be changed."
  ]
},
{
  question: `What is the output of the following code?\nint main()\n{\n int i = 0;\n for(i = 0; i < 3; i++)\n cout << i << " ";\n return 0;\n}`,
  answer: "0 1 2 ",
  options: [
  "0 1 2 ",
  "1 2 3 ",
  "0 1 2 3 ",
  "1 2 3 4 "
  ]
},
{
  question: "What is the difference between pass by value and pass by reference in C++?",
  answer: "Pass by value creates a copy of the argument passed to the function, while pass by reference passes the memory address of the argument to the function.",
  options: [
  "Pass by value creates a copy of the argument passed to the function, while pass by reference passes the memory address of the argument to the function.",
  "Pass by value passes the memory address of the argument to the function, while pass by reference creates a copy of the argument passed to the function.",
  "Pass by value and pass by reference are the same thing in C++.",
  "Pass by reference creates a copy of the argument passed to the function, while pass by value passes the memory address of the argument to the function."
  ]
},
{
  question: "What is a destructor in C++?",
  answer: "A destructor is a special member function of a class that is called when an object of that class is destroyed.",
  options: [
  "A destructor is a special member function of a class that is called when an object of that class is destroyed.",
  "A destructor is a function that is used to allocate memory for an object of a class.",
  "A destructor is a function that is used to deallocate memory for an object of a class.",
  "A destructor is a function that is used to modify the properties of an object of a class."
  ]
},
{
  question: "What is function overloading in C++?",
  answer: "Function overloading is when multiple functions in a class have the same name but different parameter lists.",
  options: [
  "Function overloading is when multiple functions in a class have the same name but different parameter lists.",
  "Function overloading is when a single function can return multiple values.",
  "Function overloading is when a single function can take multiple arguments.",
  "Function overloading is when a single function can be called from multiple classes."
  ]
},
{
  question: "What is the output of the following code?\nint main()\n{\n int x = 5;\n cout << (++x) + (x++) << endl;\n return 0;\n}",
  answer: "11",
  options: [
  "10",
  "11",
  "12",
  "undefined behavior"
  ]
},
{
    question: "What is the difference between ++i and i++ in C++?",
    answer: "++i increments the value of i and then returns it, while i++ returns the value of i and then increments it.",
    options: [
    "Both increment the value of i and then return it.",
    "++i returns the value of i and then increments it, while i++ increments the value of i and then returns it.",
    "There is no difference between ++i and i++ in C++.",
    "++i and i++ are not valid operators in C++."
    ]
},
{
    question: "What is a lambda function in C++?",
    answer: "A lambda function is an anonymous function that can be used as a local function object.",
    options: [
    "A function that can only take a single argument.",
    "A function that can be used to allocate memory.",
    "A function that is declared with the keyword 'lambda'.",
    "An anonymous function that can be used as a local function object."
    ]
},
{
    question: "What is the difference between a pointer and a reference in C++?",
    answer: "A pointer can be reassigned to point to different memory locations, while a reference cannot be reassigned once it is initialized.",
    options: [
    "A reference can be dereferenced like a pointer, while a pointer cannot be dereferenced.",
    "A pointer and a reference are the same thing in C++.",
    "A pointer is a variable that stores the memory address of another variable, while a reference is an alias for another variable.",
    "A reference can be used to create dynamic objects, while a pointer cannot."
    ]
},
{
    question: "What is the difference between an abstract class and an interface in C++?",
    answer: "An abstract class can have implementation details and can have data members, while an interface only defines the signatures of its member functions.",
    options: [
    "An abstract class and an interface are the same thing in C++.",
    "An abstract class can only have pure virtual functions, while an interface can have both pure virtual functions and concrete implementations.",
    "An abstract class can be instantiated, while an interface cannot be instantiated.",
    "An interface can have data members, while an abstract class cannot have data members."
    ]
},
{
    question: "What is the difference between 'const' and 'constexpr' in C++?",
    answer: "'const' is used to specify that a variable's value cannot be modified, while 'constexpr' is used to specify that a variable's value can be computed at compile time.",
    options: [
    "'const' and 'constexpr' are the same thing in C++.",
    "'const' is used to specify that a variable's type cannot be modified, while 'constexpr' is used to specify that a variable's value cannot be modified.",
    "'constexpr' is used to specify that a function's return value can be computed at compile time, while 'const' is used to specify that a function's arguments cannot be modified.",
    "'const' is used to specify that a variable's value cannot be modified, while 'constexpr' is used to specify that a variable's value can be modified at runtime."
    ]
},
    ///////////////////////////////////////////////////////////////python
{
      question: "What is the output of the following code? \nprint(list(filter(lambda x: x < 5, [1, 2, 3, 4, 5, 6, 7])))",
      answer: "[1, 2, 3, 4]",
      options: [
        "[1, 2, 3, 4]",
        "[5, 6, 7]",
        "[1, 2, 3, 4, 5, 6, 7]",
        "Error"
      ]
},
{
      question: "What is the output of the following code? \nprint(list(map(lambda x: x**2, [1, 2, 3, 4, 5])))",
      answer: "[1, 4, 9, 16, 25]",
      options: [
        "[1, 4, 9, 16, 25]",
        "[2, 4, 6, 8, 10]",
        "[1, 2, 3, 4, 5]",
        "Error"
      ]
},
{
      question: "What is the output of the following code? \nprint(2 + 2 * 3)",
      answer: "8",
      options: [
        "6",
        "8",
        "10",
        "12"
      ]
},
{
      question: "What is the output of the following code? \nprint('1' + 2)",
      answer: "Error",
      options: [
        "3",
        "'3'",
        "Error",
        "'12'"
      ]
},
{
      question: "What is the output of the following code? \ndef my_func(a, b=2, c=3):\n    print(a, b, c)\nmy_func(1, c=5)",
      answer: "1 2 5",
      options: [
        "1 2 3",
        "1 3 5",
        "1 5 2",
        "Error"
      ]
},
{
      question: "What is the output of the following code? \nmy_list = [1, 2, 3, 4, 5]\nprint(my_list[1:-1])",
      answer: "[2, 3, 4]",
      options: [
        "[1, 2, 3, 4, 5]",
        "[2, 3, 4]",
        "[2, 3, 4, 5]",
        "Error"
      ]
},
{
      question: "What is the output of the following code? \ndef add_item(my_list):\n    my_list += [1]\n    return my_list\nlist1 = [1, 2, 3, 4]\nlist2 = add_item(list1)\nprint(list1, list2)",
      answer: "[1, 2, 3, 4, 1] [1, 2, 3, 4, 1]",
      options: [
        "[1, 2, 3, 4] [1, 2, 3, 4]",
        "[1, 2, 3, 4, 1] [1, 2, 3, 4]",
        "[1, 2, 3, 4] [1, 2, 3, 4, 1]",
        "Error"
      ]
},
{
      question: "What is the output of the following code?\n\nx = 10\ny = 5\nx, y = y, x\nprint(x, y)",
      answer: "5 10",
      options: [
        "10 5",
        "5 10",
        "15",
        "Syntax Error"
      ]
},
{
      question: "What is the result of the following code?\n\na = [1, 2, 3]\nb = a\na.append(4)\nprint(b)",
      answer: "[1, 2, 3, 4]",
      options: [
        "[1, 2, 3]",
        "[1, 2, 3, 4]",
        "[4, 3, 2, 1]",
        "Syntax Error"
      ]
},
{
      question: "What is the output of the following code?\n\nx = 5\ny = 2\nprint(x // y)",
      answer: "2",
      options: [
        "2.5",
        "2.0",
        "3",
        "Syntax Error"
      ]
},
{
      question: "What is the output of the following code?\n\nprint('hello'[::-1])",
      answer: "olleh",
      options: [
        "hello",
        "olleh",
        "h",
        "Syntax Error"
      ]
},
{
      question: "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(x[-2])",
      answer: "2",
      options: [
        "1",
        "2",
        "3",
        "Syntax Error"
      ]
},
{
      question: "What is the output of the following code?\n\nx = {'a': 1, 'b': 2}\nprint(x.get('c', 3))",
      answer: "3",
      options: [
        "1",
        "2",
        "3",
        "Syntax Error"
      ]
},
{
      question: "What is the output of the following code?\n\nx = 'hello'\nprint(x.upper().count('l'))",
      answer: "2",
      options: [
        "1",
        "2",
        "3",
        "Syntax Error"
      ]
},
{
      question: "What is the output of the following code?\n\nx = ['a', 'b', 'c']\nx[3:] = ['d']\nprint(x)",
      answer: "['a', 'b', 'c', 'd']",
      options: [
        "['a', 'b', 'c']",
        "['a', 'b', 'c', ' ', 'd']",
        "['a', 'b', 'c', 'd', ' ']",
        "Syntax Error"
      ]
},
{
      question: "What is the output of the following code?\n\nx = [1, 2, 3]\nprint(id(x))\nx += [4]\nprint(id(x))",
      answer: "The id of the list changes",
      options: [
        "The id of the list stays the same",
        "Syntax Error",
        "Runtime Error",
        "None of the above"
      ]
},
{
      question: "What is the output of the following code?\nprint(''.join(list(map(str, range(5))))[-1])",
      answer: "4",
      options: [
        "0",
        "1",
        "3",
        "4"
      ]
},
{
      question: "What is the output of the following code?\nprint(2 + 2 * 2)",
      answer: "6",
      options: [
        "4",
        "6",
        "8",
        "10"
      ]
},
{
      question: "What is the output of the following code?\nprint(type(42j))",
      answer: "<class 'complex'>",
      options: [
        "<class 'int'>",
        "<class 'float'>",
        "<class 'complex'>",
        "<class 'str'>"
      ]
},
{
      question: "What is the output of the following code?\nprint(bool(()))",
      answer: "False",
      options: [
        "True",
        "False",
        "Error",
        "None"
      ]
},
{
      question: "What is the output of the following code?\na = [1, 2, 3]\nprint(a[::-1])",
      answer: "[3, 2, 1]",
      options: [
        "[3, 2, 1]",
        "[1, 2, 3]",
        "[2, 1, 0]",
        "[0, 1, 2, 3]"
      ]
},
{
      question: "What is the output of the following code?\nimport math\nprint(math.ceil(-5.5))",
      answer: "-5",
      options: [
        "-5",
        "-6",
        "5",
        "6"
      ]
},
{
      question: "What is the output of the following code?\ndef test(a, b=[]):\n    b.append(a)\n    return b\nprint(test(1))\nprint(test(2))\nprint(test(3))",
      answer: "[1, 2, 3]",
      options: [
        "[1, 2, 3]",
        "[1, 2]",
        "[1, 3]",
        "[1]"
      ]
},
{
      question: "What is the output of the following code?\ndef outer():\n    x = 1\n    def inner():\n        print(x)\n    inner()\nouter()",
      answer: "1",
      options: [
        "0",
        "1",
        "Error",
        "None"
      ]
},
{
      question: "What is the output of the following code?\na = [1, 2, 3]\nb = a\nb += [4, 5]\nprint(a)",
      answer: "[1, 2, 3, 4, 5]",
      options: [
        "[1, 2, 3]",
        "[1, 2, 3, 4, 5]",
        "[1, 2, 3, [4, 5]]",
        "[1, 2, 3, [4], [5]]"
      ]
},
{
      question: "What is the output of the following code?\ndef foo(a, b, c):\n    print(a, b, c)\nt = (1, 2, 3)\nfoo(*t)",
      answer: "1 2 3",
      options: [
        "1 2 3",
        "1 (2, 3)",
        "1 1 2 3",
        "1 2 2 3"
      ]
},
{
      question: "What is the difference between a deep copy and a shallow copy in Python?",
      answer: "A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and recursively adds the copies of nested objects as well.",
      options: [
        "A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and copies the values of the original object.",
        "A shallow copy creates a new object and recursively adds the copies of nested objects as well. In contrast, a deep copy creates a new object which stores the reference of the original elements.",
        "A shallow copy creates a new object and copies the values of the original object. In contrast, a deep copy creates a new object and recursively adds the copies of nested objects as well.",
        "A shallow copy creates a new object which stores the reference of the original elements. In contrast, a deep copy creates a new object and creates a new reference for the nested objects."
      ]
},
{
      question: "What is a lambda function in Python?",
      answer: "A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one expression.",
      options: [
        "A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one statement.",
        "A lambda function is a large, named function in Python that can have any number of arguments, but can only have one expression.",
        "A lambda function is a small, anonymous function in Python that can have only one argument, and can only have one expression.",
        "A lambda function is a small, anonymous function in Python that can have any number of arguments, but can only have one expression."
      ]
},
{
      question: "What is the difference between a tuple and a list in Python?",
      answer: "A tuple is immutable, meaning it cannot be changed once created, whereas a list is mutable and can be changed.",
      options: [
        "A tuple is mutable, meaning it can be changed, whereas a list is immutable and cannot be changed.",
        "A tuple is ordered, meaning it maintains the order of its elements, whereas a list is unordered and does not maintain the order of its elements.",
        "A tuple is immutable, meaning it cannot be changed once created, whereas a list is mutable and can be changed.",
        "A tuple can only store elements of the same data type, whereas a list can store elements of different data types."
      ]
},
{
      question: "What is a decorator in Python?",
      answer: "A decorator is a design pattern in Python that allows a user to add new functionality to an existing object or function without modifying its structure.",
      options: [
        "A decorator is a function in Python that adds new functionality to an existing object or function by modifying its structure.",
        "A decorator is a design pattern in Python that allows a user to add new functionality to an existing object or function without modifying its structure.",
        "A decorator is a class in Python that adds new functionality to an existing object or function by modifying its structure.",
        "A decorator is a function in Python that replaces an existing object or function with a new one."
      ]
},
{
    question: "What is the difference between a tuple and a list in Python?",
    answer: "A tuple is immutable, while a list is mutable.",
    options: [
   "A tuple is ordered, while a list is not ordered.",
   "A tuple can contain any type of object, while a list can only contain objects of the same type.",
   "A tuple can be modified after creation, while a list cannot be modified.",
   "A tuple is immutable, while a list is mutable."
]
},
{
      question: "What is the output of the following code? \nprint(len('Python') + len([1, 2, 3]))",
answer: "9",
options: [
   "5",
   "6",
   "7",
   "9"
]
},
{
    question: "What is the output of the following code? \nprint([x * x for x in range(10) if x % 2 == 0])",
answer: "[0, 4, 16, 36, 64]",
options: [
   "[0, 2, 4, 6, 8]",
   "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]",
   "[1, 3, 5, 7, 9]",
   "[0, 4, 16, 36, 64]"
]
},
{
  question: "What is the output of the following code? \nprint('Python'[::-1])",
answer: "nohtyP",
options: [
   "P",
   "Py",
   "Pth",
   "nohtyP"
]
},
{
  question: "What does the 'pass' keyword do in Python?",
answer: "It is a null operation that does nothing.",
options: [
   "It stops the execution of the program.",
   "It raises an exception.",
   "It defines a function.",
   "It is a null operation that does nothing."
]
},
{
  "question": "What is the difference between 'is' and '==' in Python?",
  "answer": "'is' checks if two variables refer to the same object in memory, while '==' checks if two variables have the same value.",
  "options": [
    "'is' checks if two variables have the same value, while '==' checks if two variables refer to the same object in memory.",
    "'is' and '==' are interchangeable and mean the same thing.",
    "'is' and '==' are both used for type checking in Python.",
    "'is' and '==' are both used to compare two objects in Python."
  ]
},
{
  "question": "What is the output of the following code: ' '.join(['1', '2', '3', '4'])?",
  "answer": "'1 2 3 4'",
  "options": [
    "'1234'",
    "'1, 2, 3, 4'",
    "'1\n2\n3\n4'",
    "'1 2 3 4\n'"
  ]
},
{
  "question": "What is the difference between a list and a tuple in Python?",
  "answer": "A list is mutable (can be changed), while a tuple is immutable (cannot be changed).",
  "options": [
    "A list is ordered, while a tuple is not ordered.",
    "A list can only contain strings, while a tuple can contain any data type.",
    "A list is faster than a tuple for large data sets.",
    "A tuple is faster than a list for large data sets."
  ]
},
{
  "question": "What is the output of the following code: [x * x for x in range(5)]?",
  "answer": "[0, 1, 4, 9, 16]",
  "options": [
    "[0, 1, 2, 3, 4]",
    "[1, 2, 3, 4, 5]",
    "[0, 2, 4, 6, 8]",
    "[1, 4, 9, 16, 25]"
  ]
},
{
  "question": "What is the output of the following code: 'hello world'.split()?",
  "answer": "['hello', 'world']",
  "options": [
    "'hello world'",
    "['hello', 'world']",
    "'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'",
    "'helloworld'"
  ]
},
{
  "question": "What is the output of the following code: 10 / 3?",
  "answer": "3.3333333333333335",
  "options": [
    "3",
    "3.0",
    "3.333",
    "3.3333333333333335"
  ]
},
{
  "question": "What is the difference between 'append' and 'extend' in Python lists?",
  "answer": "'append' adds a single element to the end of a list, while 'extend' adds multiple elements to the end of a list.",
  "options": [
    "'append' adds multiple elements to the end of a list, while 'extend' adds a single element to the end of a list.",
    "'append' and 'extend' are interchangeable and do the same thing.",
    "'append' and 'extend' are used to remove elements from a list.",
    "'append' adds a single element to the end of a list, while 'extend' adds multiple elements to the end of a list."
  ]
}
];

////////To shuffle the the answers
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//////////To shuffle the questions
let quizarray = [];
for (let i = 0; i < 100; i++) {
  let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
  let shuffledOptions = shuffleArray(randomQuestion.options.slice());
  randomQuestion.options = shuffledOptions;
  quizarray.push(randomQuestion);
}
