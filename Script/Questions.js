let questions = [  
///////////////////////////////////////////////////////////HTML
{
  question: "What is the purpose of the 'head' section in HTML?",
  answer: "The 'head' section is used to contain metadata about the document, including the title, author, and keywords.",
  options: [
  "The 'head' section is used to define the structure and content of the document's body.",
  "The 'head' section is used to contain the main content of the document.",
  "The 'head' section is used to define the styling for the document.",
  "The 'head' section is used to define the scripts used in the document."
  ]
},
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
///////////////////////////////////////////////////////////CSS
{
  question: "What is the difference between 'display: block;' and 'display: inline;' in CSS?",
  answer: "'display: block;' will make an element take up the full width of its parent container, while 'display: inline;' will make an element take up only as much width as necessary.",
  options: [
  "'display: block;' will make an element take up only as much width as necessary, while 'display: inline;' will make an element take up the full width of its parent container.",
  "'display: block;' will make an element align vertically with other block-level elements, while 'display: inline;' will make an element align horizontally with other inline-level elements.",
  "'display: block;' will make an element stack vertically with other block-level elements, while 'display: inline;' will make an element stack horizontally with other inline-level elements.",
  "'display: block;' and 'display: inline;' are used to achieve the same effect in different contexts, and there is no inherent difference between them."
  ]
},
{
  question: "What is a CSS selector?",
  answer: "A CSS selector is a pattern that is used to select and style HTML elements based on their attributes, classes, or IDs.",
  options: [
  "A CSS selector is a function that is used to manipulate the styling of HTML elements.",
  "A CSS selector is a variable that is used to store styling information.",
  "A CSS selector is a keyword that is used to define a new CSS rule.",
  "A CSS selector is a pattern that is used to select and style HTML elements based on their content."
  ]
},
///////////////////////////////////////////////////////////Javascript
{
  question: "What is the difference between the '== ' and '=== ' operators in JavaScript?",
  answer: "The '== ' operator checks for value equality, while the '=== ' operator checks for both value and type equality.",
  options: [
  "The '== ' operator checks for both value and type equality, while the '=== ' operator checks for value equality only.",
  "The '== ' operator is used to assign values to variables, while the '=== ' operator is used for comparison.",
  "The '== ' operator checks for strict equality, while the '=== ' operator checks for loose equality.",
  "The '== ' operator is not a valid operator in JavaScript."
  ]
},
///////////////////////////////////////////////////////////C
{
  question: "What is the difference between a pointer and a reference in C?",
  answer: "A pointer can be re-assigned, while a reference cannot be re-assigned.",
  options: [
    "A pointer can be re-assigned, while a reference cannot be re-assigned.",
    "A reference can be used without being dereferenced, while a pointer cannot be used without being dereferenced.",
    "A reference is a type of pointer, while a pointer is not a type of reference.",
    "A pointer is a type of reference, while a reference is not a type of pointer."
  ]
},
{
  question: "What is the difference between ++i and i++ in C?",
  answer: "++i increments the value of i and then returns the incremented value, while i++ returns the value of i and then increments it.",
  options: [
    "++i increments the value of i and then returns the incremented value, while i++ returns the value of i and then increments it.",
    "++i and i++ are identical and can be used interchangeably.",
    "++i increments the value of i, while i++ returns the incremented value of i.",
    "++i returns the value of i and then increments it, while i++ increments the value of i and then returns the incremented value."
  ]
},
{
  question: "What is the difference between a static and a non-static variable in C?",
  answer: "A static variable retains its value between function calls, while a non-static variable does not.",
  options: [
    "A static variable retains its value between function calls, while a non-static variable does not.",
    "A non-static variable can only be accessed within the function it is declared in, while a static variable can be accessed by any function in the program.",
    "A static variable is allocated on the stack, while a non-static variable does not exist.",
    "A static variable gets no call functions."
  ]
},
{
  question: "What is a typedef in C?",
  answer: "A typedef is a keyword in C that allows you to create a new name for a data type.",
  options: [
    "A typedef is a function that returns a pointer to another function.",
    "A typedef is a variable that stores the address of a function that can be called later in the program.",
    "A typedef is a keyword in C that allows you to create a new name for a data type.",
    "A typedef is a special type of pointer that can be used to dynamically allocate memory for data types."
  ]
},
{
  question: "What is the difference between a stack and a heap in C?",
  answer: "In C, the stack is used for static memory allocation and dynamic memory allocation is done on the heap. The stack is typically faster than the heap but has less memory available, while the heap has more memory available but is slower than the stack.",
  options: [
    "In C, the stack is used for dynamic memory allocation and static memory allocation is done on the heap. The stack is typically slower than the heap but has more memory available, while the heap has less memory available but is faster than the stack.",
    "In C, both static and dynamic memory allocation are done on the heap. The stack and the heap are the same thing.",
    "In C, the stack is used for static memory allocation and dynamic memory allocation is done on the heap. The stack is typically faster than the heap but has less memory available, while the heap has more memory available but is slower than the stack.",
    "In C, both static and dynamic memory allocation are done on the stack. The heap is not used in C."
  ]
},
{
  question: "What is a recursive function in C?",
  answer: "A recursive function is a function that calls itself during its execution.",
  options: [
    "A recursive function is a function that executes only once.",
    "A recursive function is a function that calls another function during its execution.",
    "A recursive function is a function that can only be called from another function.",
    "A recursive function is a function that calls itself during its execution."
  ]
},
{
  question: "What is the difference between a macro and a function in C?",
  answer: "A macro is a preprocessor directive that replaces the text of the macro with its definition during the precompilation stage. A function is a block of code that can be called multiple times during the program's execution.",
  options: [
    "A macro is a block of code that can be called multiple times during the program's execution. A function is a preprocessor directive that replaces the text of the function with its definition during the precompilation stage.",
    "A macro is a preprocessor directive that replaces the text of the macro with its definition during the precompilation stage. A function is a special type of macro that can only be called once.",
    "A macro and a function are the same thing in C.",
    "A macro is a preprocessor directive that can be used to define variables, while a function is a block of code that performs a specific task."
  ]
},
{
  question: "What is a double pointer in C?",
  answer: "A double pointer is a pointer that points to another pointer.",
  options: [
    "A double pointer is a pointer that can point to two different memory locations at the same time.",
    "A double pointer is a pointer that is twice the size of a regular pointer.",
    "A double pointer is a special type of pointer that can be used to access elements of a two-dimensional array.",
    "A double pointer is a pointer that points to another pointer."
  ]
},
{
  question: "What is the difference between a struct and a union in C?",
  answer: "A struct is a collection of variables of different types that are stored at different memory locations, while a union is a collection of variables that share the same memory location.",
  options: [
  "A struct is a collection of variables of different types that are stored at different memory locations, while a union is a collection of variables that share the same memory location.",
  "A struct and a union are the same thing in C.",
  "A struct is a collection of variables of the same type that are stored at different memory locations, while a union is a collection of variables of different types that share the same memory location.",
  "A struct is a collection of variables that share the same memory location, while a union is a collection of variables of different types that are stored at different memory locations."
  ]
},
{
  question: "What is the difference between static and dynamic memory allocation in C?",
  answer: "Static memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at runtime and the allocated memory can be changed during program execution.",
  options: [
    "Static memory allocation is done at runtime and the allocated memory can be changed during program execution. Dynamic memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution.",
    "Static memory allocation is done at compile-time and allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at runtime and the allocated memory can be changed during program execution.",
    "Static memory allocation is done at runtime and the allocated memory remains the same throughout the program's execution. Dynamic memory allocation is done at compile-time and the allocated memory can be changed during program execution.",
    "Static memory allocation and dynamic memory allocation are the same thing in C."
  ]
},
{
  question: "What is a function pointer in C?",
  answer: "A function pointer is a variable that stores the address of a function that can be called later in the program.",
  options: [
    "A function pointer is a function that returns a pointer to another function.",
    "A function pointer is a pointer that points to a variable that stores a function.",
    "A function pointer is a variable that stores the address of a function that can be called later in the program.",
    "A function pointer is a special type of pointer that can be used to dynamically allocate memory for functions."
  ]
},
{
  question: "What is the difference between a structure and a union in C?",
  answer: "A structure is a collection of variables of different data types that are stored in separate memory locations. A union is a special data type that allows storing different data types in the same memory location.",
  options: [
    "A structure is a special data type that allows storing different data types in the same memory location. A union is a collection of variables of different data types that are stored in separate memory locations.",
    "A structure is a collection of variables of different data types that are stored in separate memory locations. A union is a special data type that allows storing different data types in the same memory location.",
    "A structure and a union are the same thing in C.",
    "A structure is a collection of variables of the same data type that are stored in separate memory locations. A union is a special data type that allows storing variables of different data types in the same memory location."
  ]
},
{
  question: "What is the difference between a stack and a queue in C?",
  answer: "A stack is a last-in-first-out (LIFO) data structure, while a queue is a first-in-first-out (FIFO) data structure.",
  options: [
  "A stack is a last-in-first-out (LIFO) data structure, while a queue is a first-in-first-out (FIFO) data structure.",
  "A stack and a queue are the same thing in C.",
  "A stack is a first-in-first-out (FIFO)",
  "A stack is both (LIFO) and (FIFO)."
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
  question: "What is wrong with the following C code?\n\nint main() {\n  int i;\n  for(i = 0; i < 5; i++)\n    int j = i;\n  return 0;\n}",
  answer: "The variable j is declared inside the for loop and is not accessible outside the loop.",
  options: [
    "The variable i is not declared before its use in the for loop.",
    "The variable j is declared outside the for loop and is not accessible inside the loop.",
    "The variable j is declared inside the for loop and is not accessible outside the loop.",
    "There is nothing wrong with the code."
  ]
},
{
  question: "What is wrong with the following C code?\n\nint main() {\n  char s[10];\n  s = \"hello\";\n  return 0;\n}",
  answer: "The array s is being assigned a string literal, which is not allowed in C.",
  options: [
    "The array s is not declared before its use.",
    "The array s is being assigned an integer value, which is not allowed in C.",
    "The array s is being assigned a character value, which is not allowed in C.",
    "The array s is being assigned a string literal, which is not allowed in C."
  ]
},
{
  question: "What is wrong with the following C code?\n\nint main() {\n  int i = 0;\n  while(i < 5);\n    i++;\n  return 0;\n}",
  answer: "The semicolon at the end of the while loop is causing an infinite loop.",
  options: [
    "The variable i is not declared before its use.",
    "The while loop is missing its condition.",
    "The variable i is not being incremented inside the while loop.",
    "The semicolon at the end of the while loop is causing an infinite loop."
  ]
},
{
  question: "What is wrong with the following code?\n\nint main() {\n    char str[5] = {'h', 'e', 'l', 'l', 'o'};\n    printf(\"%s\", str);\n    return 0;\n}",
  answer: "The string 'hello' in the char array str is not null-terminated, so the printf function will continue printing characters until it finds a null character in memory. This can cause unexpected behavior or a segmentation fault.",
  options: [
    "The printf function is missing a format specifier for the char array str.",
    "The char array str is not declared with the correct size to hold the string 'hello'.",
    "The string 'hello' in the char array str is not null-terminated, so the printf function will continue printing characters until it finds a null character in memory. This can cause unexpected behavior or a segmentation fault.",
    "The main function is missing a return statement."
  ]
},
{
  question: "What is wrong with the following code?\n\nint main() {\n    int a = 5;\n    int b = 0;\n    int c = a / b;\n    printf(\"%d\", c);\n    return 0;\n}",
  answer: "The code attempts to divide by zero, which is not allowed and will result in a runtime error.",
  options: [
    "The printf function is missing a format specifier for the variable c.",
    "The variable b is not initialized.",
    "The code attempts to divide by zero, which is not allowed and will result in a runtime error.",
    "The main function is missing a return statement."
  ]
},
{
  question: "What is wrong with the following code?\n\n#include <stdio.h>\n\nint main() {\n    int arr[3] = {1, 2, 3};\n    int i;\n    for (i = 0; i <= 3; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    return 0;\n}",
  answer: "The for loop in the code attempts to access an element of the array that is out of bounds (arr[3]), which can cause unexpected behavior or a segmentation fault.",
  options: [
    "The printf function is missing a format specifier for the variable i.",
    "The variable i should be initialized inside the for loop.",
    "The for loop in the code attempts to access an element of the array that is out of bounds (arr[3]), which can cause unexpected behavior or a segmentation fault.",
    "The main function is missing a return statement."
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
      question: `What is the output of the following code?\nprint(type(42j))`,
      answer: `<class 'complex'>`,
      options: [
        `<class 'int'>`,
        `<class 'float'>`,
        `<class 'complex'>`,
        `<class 'str'>`
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
