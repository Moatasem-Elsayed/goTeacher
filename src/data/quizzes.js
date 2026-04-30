// GoTeacher — Quiz Data
export const quizzes = {
  q1: {
    title: 'Chapter 1: Hello, Go!',
    questions: [
      { q: 'What package must an executable Go program have?', options: ['package app', 'package main', 'package go', 'package exec'], correct: 1, explanation: 'Every executable Go program must have `package main` with a `main()` function.' },
      { q: 'Which function is the entry point of a Go program?', options: ['func start()', 'func init()', 'func main()', 'func run()'], correct: 2, explanation: 'The `main()` function in `package main` is the entry point.' },
      { q: 'What package provides Println?', options: ['io', 'os', 'fmt', 'log'], correct: 2, explanation: 'The `fmt` (format) package provides Println, Printf, and other I/O functions.' },
      { q: 'Which company created Go?', options: ['Microsoft', 'Apple', 'Google', 'Facebook'], correct: 2, explanation: 'Go was created at Google in 2009.' }
    ]
  },
  q2: {
    title: 'Chapter 2: Variables & Types',
    questions: [
      { q: 'What is the short variable declaration operator?', options: ['=', '==', ':=', '::'], correct: 2, explanation: ':= declares and initializes a variable with type inference.' },
      { q: 'What is the zero value of a string?', options: ['nil', '0', 'null', '"" (empty string)'], correct: 3, explanation: 'The zero value of a string is an empty string "".' },
      { q: 'What does iota do in a const block?', options: ['Creates a string', 'Auto-increments from 0', 'Creates a float', 'Generates random values'], correct: 1, explanation: 'iota starts at 0 and auto-increments for each constant in the block.' },
      { q: 'Does Go allow implicit type conversion?', options: ['Yes, always', 'No, never', 'Only for numbers', 'Only in functions'], correct: 1, explanation: 'Go requires explicit type conversion. This prevents subtle bugs.' }
    ]
  },
  q3: {
    title: 'Chapter 3: Control Flow',
    questions: [
      { q: 'How many loop keywords does Go have?', options: ['3 (for, while, do)', '2 (for, while)', '1 (for)', '4 (for, while, loop, each)'], correct: 2, explanation: 'Go has only `for`. It can be used as a classic for, while, or infinite loop.' },
      { q: 'Does Go switch need break statements?', options: ['Yes, always', 'No, cases don\'t fall through', 'Only for int cases', 'Only in loops'], correct: 1, explanation: 'Go switch cases don\'t fall through by default. Use `fallthrough` keyword if needed.' },
      { q: 'What does _ do in a range loop?', options: ['Stops the loop', 'Skips an iteration', 'Discards a value', 'Creates a pointer'], correct: 2, explanation: 'The blank identifier _ discards a value you don\'t need.' },
      { q: 'Can if statements have an init statement?', options: ['No', 'Yes', 'Only with switch', 'Only in main()'], correct: 1, explanation: 'Go supports `if v := compute(); v > 0 { }` syntax.' }
    ]
  },
  q4: {
    title: 'Chapter 4: Functions',
    questions: [
      { q: 'Where does the type go when defining a function parameter?', options: ['Before the name', 'After the name', 'Inside parentheses', 'It is optional'], correct: 1, explanation: 'In Go, the type comes after the variable name, e.g., `x int`.' },
      { q: 'Can a function return multiple values?', options: ['No', 'Yes, up to 2', 'Yes, any number', 'Only if they are the same type'], correct: 2, explanation: 'Go functions can return multiple values, commonly used for returning a result and an error.' },
      { q: 'What is a "naked" return?', options: ['Returning without parentheses', 'Returning without compiling', 'A return statement without arguments', 'Returning nil'], correct: 2, explanation: 'A naked return automatically returns the current values of the named return variables.' },
      { q: 'Where must a variadic parameter (...) be placed?', options: ['At the beginning', 'Anywhere', 'At the end', 'Only in the main function'], correct: 2, explanation: 'A variadic parameter must be the final parameter in the function signature.' }
    ]
  },
  q5: {
    title: 'Chapter 5: Data Structures',
    questions: [
      { q: 'Can an array in Go change its size?', options: ['Yes', 'No', 'Only with the append function', 'Only if it is of type int'], correct: 1, explanation: 'Arrays in Go have a fixed size that is part of their type. Use slices for dynamic sizing.' },
      { q: 'What built-in function is used to create a map or a slice?', options: ['new', 'create', 'make', 'alloc'], correct: 2, explanation: 'The `make` function allocates and initializes slices, maps, and channels.' },
      { q: 'Are maps guaranteed to maintain insertion order?', options: ['Yes', 'No', 'Only if keys are strings', 'Only for small maps'], correct: 1, explanation: 'Maps are unordered in Go. Iterating over them produces a random order.' },
      { q: 'How do you access a field within a struct?', options: ['Using brackets []', 'Using an arrow ->', 'Using a dot .', 'Using a double colon ::'], correct: 2, explanation: 'Struct fields are accessed using dot notation (e.g., `user.Name`).' }
    ]
  },
  q6: {
    title: 'Chapter 6: Pointers',
    questions: [
      { q: 'What is a pointer in Go?', options: ['A memory address', 'A special struct', 'An integer', 'A string reference'], correct: 0, explanation: 'A pointer holds the memory address of a value.' },
      { q: 'What operator is used to get the memory address of a variable?', options: ['*', '&', '$', '#'], correct: 1, explanation: 'The & operator generates a pointer to its operand.' },
      { q: 'What does the * operator do when placed before a pointer variable?', options: ['Multiplies the pointer', 'Dereferences the pointer', 'Creates a new pointer', 'Deletes the pointer'], correct: 1, explanation: 'The * operator dereferences the pointer to access or modify its underlying value.' },
      { q: 'Does Go support pointer arithmetic (like p++)?', options: ['Yes, always', 'Yes, but only in unsafe mode', 'No', 'Only for arrays'], correct: 2, explanation: 'Unlike C or C++, Go has no pointer arithmetic. This makes it much safer.' }
    ]
  },
  q7: {
    title: 'Chapter 7: Methods & Interfaces',
    questions: [
      { q: 'How does Go implement classes?', options: ['Using the class keyword', 'Using structs and methods with receivers', 'Using the object keyword', 'Go does not support object-oriented patterns at all'], correct: 1, explanation: 'Go doesn\'t have classes. Instead, you define methods on types (usually structs) using receivers.' },
      { q: 'Why use a pointer receiver for a method?', options: ['To modify the value the receiver points to', 'To avoid copying large structs', 'Both A and B', 'To make the method accessible from other packages'], correct: 2, explanation: 'Pointer receivers allow methods to modify the original struct and avoid copying data on every call.' },
      { q: 'How does a type implement an interface in Go?', options: ['By using the implements keyword', 'By inheriting from the interface', 'Implicitly, by having all the methods required by the interface', 'By defining the interface within the struct'], correct: 2, explanation: 'Go uses structural typing. If a type implements all the methods of an interface, it implicitly implements the interface.' },
      { q: 'What does a type assertion t, ok := i.(T) do?', options: ['Converts T to type i', 'Checks if interface i holds the concrete type T', 'Asserts that T is an interface', 'Creates a new interface'], correct: 1, explanation: 'It tests whether the interface value i holds the specific concrete type T, returning the value and a boolean success flag.' }
    ]
  },
  q8: {
    title: 'Chapter 8: Error Handling',
    questions: [
      { q: 'How does Go typically handle errors?', options: ['Using try/catch blocks', 'Throwing exceptions', 'Returning an error value as the last return value', 'Crashing the program'], correct: 2, explanation: 'Go functions return an error as a normal return value, usually the last one.' },
      { q: 'What is the underlying type of the built-in error?', options: ['A struct', 'A string', 'An interface with an Error() string method', 'A boolean'], correct: 2, explanation: 'The built-in error is an interface.' },
      { q: 'When checking wrapped errors, what function should you use instead of == ?', options: ['errors.Check', 'errors.Is', 'errors.Equals', 'errors.Contains'], correct: 1, explanation: 'errors.Is unpacks wrapped errors to see if any error in the chain matches the target.' },
      { q: 'When is it appropriate to use panic()?', options: ['For handling missing files', 'For user input validation errors', 'For unrecoverable programmer errors or initialization failures', "Whenever you don't want to write an if err != nil check"], correct: 2, explanation: 'Panic should be used very sparingly, only for truly exceptional and unrecoverable situations.' }
    ]
  },
  q10: {
    title: 'Chapter 10: Packages & Modules',
    questions: [
      { q: 'How does Go know if a function or variable is exported (public)?', options: ['By using the public keyword', 'If it is defined in the main package', 'If its name starts with a capital letter', 'If it is declared outside of a function'], correct: 2, explanation: 'In Go, capitalization determines visibility. Names starting with a capital letter are exported.' },
      { q: 'What is the purpose of the go.mod file?', options: ['It contains compiled object code', 'It tracks module dependencies and their versions', 'It is a configuration file for the Go compiler', 'It lists the exported functions in the module'], correct: 1, explanation: 'The go.mod file defines the module and its dependency requirements.' },
      { q: 'What happens if you have an unused import in your Go file?', options: ['It throws a runtime exception', 'The compiler ignores it', 'It causes a compilation error', 'It slows down the program slightly'], correct: 2, explanation: 'Go is strict about unused imports and variables; they result in a compilation error.' },
      { q: 'What does a blank import (import _ "package") do?', options: ['It imports all exported names', 'It aliases the package to an underscore', "It runs the package's init() function without importing any names", 'It marks the import as optional'], correct: 2, explanation: "A blank import is used solely for the side-effects of a package's init function." }
    ]
  },
  q11: {
    title: 'Chapter 11: Testing',
    questions: [
      { q: 'What is the naming convention for a test file in Go?', options: ['test_filename.go', 'filename_test.go', 'filename.test', 'testing_filename.go'], correct: 1, explanation: 'Test files must end in _test.go to be recognized by the go test tool.' },
      { q: 'What signature must a test function have?', options: ['func TestName()', 'func TestName(t testing.T)', 'func TestName(t *testing.T)', 'func Test(name string, t *testing.T)'], correct: 2, explanation: 'A test function must start with Test and take a pointer to testing.T.' },
      { q: 'What is a table-driven test?', options: ['A test that reads from a database table', 'A test that prints output in a tabular format', 'A test that loops over a slice of structs containing inputs and expected outputs', 'A test that runs exclusively on data tables'], correct: 2, explanation: 'Table-driven tests use a slice of anonymous structs to run the same test logic over multiple inputs.' },
      { q: 'How does the benchmark framework determine how many times to run the loop (b.N)?', options: ['You configure it in a config file', 'It always runs exactly 1000 times', 'It automatically adjusts b.N until the benchmark runs long enough to be timed reliably', 'It asks the user before running'], correct: 2, explanation: 'The framework automatically adjusts b.N to get a statistically significant measurement.' }
    ]
  },
  q12: {
    title: 'Chapter 12: Real Projects',
    questions: [
      { q: 'Which standard library package is typically used to parse command-line arguments?', options: ['os/exec', 'fmt', 'flag', 'cli'], correct: 2, explanation: 'The `flag` package implements command-line flag parsing.' },
      { q: 'How do you specify the JSON key for a struct field in Go?', options: ['Using a comment above the field', 'By naming the field exactly as the JSON key', 'Using a struct tag (e.g., `json:"key"`)', 'By registering it with the json package'], correct: 2, explanation: 'Struct tags allow you to attach metadata to fields, which the `encoding/json` package reads to determine key names.' },
      { q: 'Which package is recommended for serving HTML to prevent XSS attacks?', options: ['text/template', 'html/template', 'net/http', 'fmt'], correct: 1, explanation: 'The `html/template` package provides data-driven templates for generating HTML output safe against code injection.' },
      { q: 'Why is defer db.Close() a best practice?', options: ['It speeds up the query', 'It ensures the connection is closed when the function finishes, preventing resource leaks', 'It commits the current transaction', 'It creates a backup of the database'], correct: 1, explanation: '`defer` ensures that cleanup code runs reliably, which is crucial for managing finite resources like database connections.' }
    ]
  }
};
