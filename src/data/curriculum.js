// GoTeacher — Curriculum Data
export const chapters = [
  {
    id: 1, title: 'Hello, Go!', description: 'Your first steps with the Go programming language.',
    icon: '👋', lessons: [
      { id: '1.1', title: 'Why Go?', content: `## Why Learn Go?\n\nGo (or Golang) was created at Google in 2009 by Robert Griesemer, Rob Pike, and Ken Thompson. It was designed to be **simple, fast, and productive**.\n\n### Who Uses Go?\n- **Google** — many internal services\n- **Docker** & **Kubernetes** — written in Go\n- **Uber, Twitch, Dropbox** — backend services\n\n### Key Strengths\n- Compiles to a single binary — no runtime needed\n- Built-in concurrency with goroutines\n- Fast compilation\n- Simple, readable syntax\n- Excellent standard library`,
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Go is simple and powerful!\n\tfmt.Println("Welcome to Go!")\n\tfmt.Println("Let's start learning!")\n}`,
        qa: [
          { q: 'Is Go object-oriented?', a: 'Go is not a traditional OOP language. It has structs and methods but no classes or inheritance. It uses composition and interfaces instead.' },
          { q: 'How fast is Go compared to Python?', a: 'Go is typically 10-40x faster than Python for computation-heavy tasks, since Go compiles to native machine code.' }
        ]
      },
      { id: '1.2', title: 'Your First Program', content: `## Hello, World!\n\nEvery Go program starts with a \`package\` declaration. The \`main\` package is special — it defines an executable program.\n\n### The Structure\n\n\`\`\`go\npackage main    // Every executable needs this\n\nimport "fmt"    // Import the formatting package\n\nfunc main() {   // Entry point of the program\n    fmt.Println("Hello, World!")\n}\n\`\`\`\n\n### Try It!\nModify the code on the right to print your own message. Click **Run** to see the output!`,
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, World!")\n}`,
        qa: [
          { q: 'What does fmt stand for?', a: 'fmt stands for "format". It provides functions for formatted I/O, similar to printf in C.' },
          { q: 'Do I need semicolons?', a: 'No! Go automatically inserts semicolons at the end of lines. You should NOT add them manually.' }
        ]
      },
      { id: '1.3', title: 'Package & Imports', content: `## Packages\n\nGo code is organized into **packages**. Every file belongs to a package.\n\n- \`package main\` — makes an executable\n- Other packages are libraries\n\n### Imports\n\nUse \`import\` to bring in packages:\n\n\`\`\`go\nimport "fmt"         // single import\n\nimport (             // grouped import\n    "fmt"\n    "math"\n)\n\`\`\`\n\n### Try using the math package below!`,
        code: `package main\n\nimport (\n\t"fmt"\n\t"math"\n)\n\nfunc main() {\n\tfmt.Println("Pi is:", math.Pi)\n\tfmt.Println("Square root of 16:", math.Sqrt(16))\n}`,
        qa: [
          { q: 'What happens if I import a package but don\'t use it?', a: 'Go will refuse to compile! Unused imports are a compile error. This keeps your code clean.' },
          { q: 'Can I create my own packages?', a: 'Yes! We cover creating custom packages in Chapter 10.' }
        ]
      },
      { id: '1.4', title: 'Comments & Style', content: `## Comments in Go\n\nGo supports two types of comments:\n\n\`\`\`go\n// This is a single-line comment\n\n/* This is a\n   multi-line comment */\n\`\`\`\n\n### Go Style\n- Use \`gofmt\` to auto-format code\n- Opening braces go on the **same line**\n- Use camelCase for local variables\n- Use PascalCase for exported names`,
        code: `package main\n\nimport "fmt"\n\n// greet prints a personalized greeting\nfunc greet(name string) {\n\t/* This function demonstrates\n\t   comments and Go style */\n\tfmt.Println("Hello,", name, "!")\n}\n\nfunc main() {\n\tgreet("Gopher")\n\tgreet("World")\n}`,
        qa: [
          { q: 'What is gofmt?', a: 'gofmt is Go\'s official code formatter. It automatically formats your code to follow Go conventions. Most editors run it on save.' }
        ]
      },
      { id: '1.5', title: 'Chapter 1 Quiz', type: 'quiz', quizId: 'q1' }
    ]
  },
  {
    id: 2, title: 'Variables & Types', description: 'Learn about Go\'s type system, variables, and constants.',
    icon: '📦', lessons: [
      { id: '2.1', title: 'Declaring Variables', content: `## Variables in Go\n\nGo has several ways to declare variables:\n\n### Using \`var\`\n\`\`\`go\nvar name string = "Alice"\nvar age int = 25\nvar active bool = true\n\`\`\`\n\n### Short declaration \`:=\`\nInside functions, use the short form:\n\`\`\`go\nname := "Alice"   // type inferred\nage := 25\n\`\`\`\n\n> **Tip:** Use \`:=\` inside functions, \`var\` for package-level variables.`,
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Using var\n\tvar greeting string = "Hello"\n\n\t// Short declaration (preferred inside functions)\n\tname := "Gopher"\n\tage := 3\n\n\tfmt.Println(greeting, name)\n\tfmt.Println("Age:", age)\n}`,
        qa: [
          { q: 'When should I use var vs :=?', a: 'Use := inside functions for brevity. Use var for package-level variables or when you want to declare without initializing.' },
          { q: 'Can I redeclare a variable with :=?', a: 'Not exactly. But := can be used if at least one variable on the left side is new. This is called a "short variable redeclaration".' }
        ]
      },
      { id: '2.2', title: 'Basic Types', content: `## Go's Basic Types\n\n| Type | Description | Example |\n|------|-------------|----------|\n| \`int\` | Integer | \`42\` |\n| \`float64\` | Decimal number | \`3.14\` |\n| \`string\` | Text | \`"hello"\` |\n| \`bool\` | True/False | \`true\` |\n| \`byte\` | Alias for uint8 | \`'A'\` |\n| \`rune\` | Alias for int32 (Unicode) | \`'🎉'\` |`,
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tvar i int = 42\n\tvar f float64 = 3.14\n\tvar s string = "Go is awesome"\n\tvar b bool = true\n\n\tfmt.Printf("int: %d\\n", i)\n\tfmt.Printf("float: %.2f\\n", f)\n\tfmt.Printf("string: %s\\n", s)\n\tfmt.Printf("bool: %t\\n", b)\n\tfmt.Printf("type of i: %T\\n", i)\n}`,
        qa: [
          { q: 'What is the difference between float32 and float64?', a: 'float64 has double precision (more decimal places). Always use float64 unless you have a specific reason for float32.' }
        ]
      },
      { id: '2.3', title: 'Type Conversion', content: `## Type Conversion\n\nGo requires **explicit** type conversion. No implicit casting!\n\n\`\`\`go\nvar i int = 42\nvar f float64 = float64(i)   // int → float64\nvar s string = string(65)     // int → string (ASCII)\n\`\`\`\n\nUse \`strconv\` for string↔number conversions.`,
        code: `package main\n\nimport (\n\t"fmt"\n\t"strconv"\n)\n\nfunc main() {\n\t// Numeric conversions\n\tvar i int = 42\n\tvar f float64 = float64(i)\n\tfmt.Println("int to float:", f)\n\n\t// String conversions\n\ts := strconv.Itoa(i)  // int to string\n\tfmt.Println("int to string:", s)\n\n\tn, _ := strconv.Atoi("123")  // string to int\n\tfmt.Println("string to int:", n)\n}`,
        qa: [{ q: 'Why doesn\'t Go do implicit conversion?', a: 'Explicit conversions prevent subtle bugs. In many languages, implicit conversions cause unexpected behavior (like JavaScript\'s "1" + 1 = "11").' }]
      },
      { id: '2.4', title: 'Constants', content: `## Constants\n\nConstants are declared with \`const\`. They cannot be changed after declaration.\n\n\`\`\`go\nconst Pi = 3.14159\nconst AppName = "GoTeacher"\n\`\`\`\n\n### iota — Auto-incrementing Constants\n\`\`\`go\nconst (\n    Sunday = iota  // 0\n    Monday         // 1\n    Tuesday        // 2\n)\n\`\`\``,
        code: `package main\n\nimport "fmt"\n\nconst Pi = 3.14159\n\nconst (\n\tStatusPending = iota  // 0\n\tStatusActive          // 1\n\tStatusDone            // 2\n)\n\nfunc main() {\n\tfmt.Println("Pi:", Pi)\n\tfmt.Println("Pending:", StatusPending)\n\tfmt.Println("Active:", StatusActive)\n\tfmt.Println("Done:", StatusDone)\n}`,
        qa: [{ q: 'What is iota?', a: 'iota is a built-in counter that starts at 0 and increments for each constant in a const block. It resets in each new const block.' }]
      },
      { id: '2.5', title: 'Zero Values', content: `## Zero Values\n\nIn Go, variables declared without initialization get a **zero value**:\n\n| Type | Zero Value |\n|------|------------|\n| int | 0 |\n| float64 | 0.0 |\n| string | "" (empty) |\n| bool | false |\n| pointer | nil |`,
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tvar i int\n\tvar f float64\n\tvar s string\n\tvar b bool\n\n\tfmt.Printf("int: %d\\n", i)\n\tfmt.Printf("float: %f\\n", f)\n\tfmt.Printf("string: %q\\n", s)\n\tfmt.Printf("bool: %t\\n", b)\n}`,
        qa: [{ q: 'Why does Go have zero values?', a: 'Zero values ensure variables are always initialized to a safe, predictable value. This eliminates a whole class of "uninitialized variable" bugs.' }]
      },
      { id: '2.6', title: 'Chapter 2 Quiz', type: 'quiz', quizId: 'q2' }
    ]
  },
  {
    id: 3, title: 'Control Flow', description: 'Master conditionals, loops, and flow control in Go.',
    icon: '🔀', lessons: [
      { id: '3.1', title: 'If / Else', content: `## Conditionals\n\nGo's \`if\` statement doesn't need parentheses:\n\n\`\`\`go\nif x > 10 {\n    fmt.Println("big")\n} else if x > 5 {\n    fmt.Println("medium")\n} else {\n    fmt.Println("small")\n}\n\`\`\`\n\n### If with Init Statement\nGo has a unique feature — init statement in \`if\`:\n\`\`\`go\nif v := compute(); v > 10 {\n    fmt.Println(v)\n}\n\`\`\``,
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tage := 20\n\n\tif age >= 18 {\n\t\tfmt.Println("You are an adult")\n\t} else {\n\t\tfmt.Println("You are a minor")\n\t}\n\n\t// If with init statement\n\tif score := 85; score >= 90 {\n\t\tfmt.Println("Grade: A")\n\t} else if score >= 80 {\n\t\tfmt.Println("Grade: B")\n\t} else {\n\t\tfmt.Println("Grade: C")\n\t}\n}`,
        qa: [{ q: 'Why no parentheses around the condition?', a: 'Go removes unnecessary syntax. Braces {} are required, but parentheses () around conditions are not needed and discouraged.' }]
      },
      { id: '3.2', title: 'Switch', content: `## Switch Statements\n\nGo's switch is more powerful than most languages:\n- No \`break\` needed (no fall-through by default)\n- Cases can be expressions\n- Switch without a condition = cleaner if/else\n\n\`\`\`go\nswitch day {\ncase "Monday":\n    fmt.Println("Start of week")\ncase "Friday":\n    fmt.Println("Almost weekend!")\ndefault:\n    fmt.Println("Regular day")\n}\n\`\`\``,
        code: `package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc main() {\n\tday := time.Now().Weekday()\n\n\tswitch day {\n\tcase time.Saturday, time.Sunday:\n\t\tfmt.Println("It's the weekend!")\n\tdefault:\n\t\tfmt.Println("It's a weekday.")\n\t}\n\n\t// Switch without condition\n\thour := 14\n\tswitch {\n\tcase hour < 12:\n\t\tfmt.Println("Good morning!")\n\tcase hour < 17:\n\t\tfmt.Println("Good afternoon!")\n\tdefault:\n\t\tfmt.Println("Good evening!")\n\t}\n}`,
        qa: [{ q: 'Can I fall through in Go switch?', a: 'By default, no. But you can use the `fallthrough` keyword to explicitly fall through to the next case.' }]
      },
      { id: '3.3', title: 'For Loops', content: `## For — The Only Loop\n\nGo has only ONE loop keyword: \`for\`. But it's versatile!\n\n\`\`\`go\n// Classic for\nfor i := 0; i < 10; i++ { }\n\n// While-style\nfor condition { }\n\n// Infinite\nfor { }\n\`\`\``,
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Classic for loop\n\tfmt.Println("Classic:")\n\tfor i := 1; i <= 5; i++ {\n\t\tfmt.Print(i, " ")\n\t}\n\tfmt.Println()\n\n\t// While-style\n\tfmt.Println("While-style:")\n\tcount := 0\n\tfor count < 3 {\n\t\tfmt.Print(count, " ")\n\t\tcount++\n\t}\n\tfmt.Println()\n\n\t// Range over a string\n\tfmt.Println("Range:")\n\tfor i, ch := range "Go!" {\n\t\tfmt.Printf("%d:%c ", i, ch)\n\t}\n\tfmt.Println()\n}`,
        qa: [{ q: 'Why only one loop keyword?', a: 'Go values simplicity. The `for` keyword can express while loops, do-while, infinite loops, and range-based iteration — no need for separate keywords.' }]
      },
      { id: '3.4', title: 'Range', content: `## Range\n\nThe \`range\` keyword iterates over arrays, slices, maps, strings, and channels.\n\n\`\`\`go\nnums := []int{10, 20, 30}\nfor index, value := range nums {\n    fmt.Println(index, value)\n}\n\`\`\`\n\nUse \`_\` to discard a value you don't need.`,
        code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfruits := []string{"Apple", "Banana", "Cherry"}\n\n\t// Index and value\n\tfor i, fruit := range fruits {\n\t\tfmt.Printf("%d: %s\\n", i, fruit)\n\t}\n\n\t// Value only (discard index)\n\tfor _, fruit := range fruits {\n\t\tfmt.Println("I like", fruit)\n\t}\n\n\t// Range over a map\n\tscores := map[string]int{"Alice": 95, "Bob": 87}\n\tfor name, score := range scores {\n\t\tfmt.Printf("%s scored %d\\n", name, score)\n\t}\n}`,
        qa: [{ q: 'What does _ mean?', a: 'The blank identifier _ discards a value. Go requires you to use all declared variables, so _ lets you ignore values you don\'t need.' }]
      },
      { id: '3.5', title: 'Chapter 3 Quiz', type: 'quiz', quizId: 'q3' }
    ]
  },
  {
    id: 4, title: 'Functions', description: 'Functions, multiple returns, closures, and more.', icon: '⚡',
    lessons: [
      { id: '4.1', title: 'Defining Functions', content: `## Functions\n\nFunctions are central to Go. A function is declared using the \`func\` keyword.\n\n\`\`\`go\nfunc add(x int, y int) int {\n    return x + y\n}\n\`\`\`\n\n### Parameter Types\nNotice that the type comes **after** the variable name. When multiple consecutive parameters share a type, you can omit the type from all but the last:\n\n\`\`\`go\nfunc add(x, y int) int {\n    return x + y\n}\n\`\`\``,
        code: `package main\n\nimport "fmt"\n\n// A function that adds two integers\nfunc add(x, y int) int {\n\treturn x + y\n}\n\n// A function with no parameters or return value\nfunc sayHello() {\n\tfmt.Println("Hello from a function!")\n}\n\nfunc main() {\n\tsayHello()\n\tsum := add(42, 13)\n\tfmt.Println("42 + 13 =", sum)\n}`,
        qa: [
          { q: 'Why does the type come after the variable name?', a: "Go's designers felt it made reading the code left-to-right feel more natural, like reading a sentence: 'x and y are ints'." }
        ]
      },
      { id: '4.2', title: 'Multiple Returns', content: `## Multiple Return Values\n\nA unique feature of Go is that functions can return **multiple values**.\n\nThis is often used to return a result along with an error or a boolean indicating success.\n\n\`\`\`go\nfunc swap(x, y string) (string, string) {\n    return y, x\n}\n\`\`\`\n\nTo capture multiple returns, assign them to multiple variables:\n\n\`\`\`go\na, b := swap("hello", "world")\n\`\`\``,
        code: `package main\n\nimport "fmt"\n\n// swap returns two strings in reverse order\nfunc swap(x, y string) (string, string) {\n\treturn y, x\n}\n\n// divide returns the result and remainder\nfunc divide(a, b int) (int, int) {\n\treturn a / b, a % b\n}\n\nfunc main() {\n\ta, b := swap("hello", "world")\n\tfmt.Println(a, b)\n\n\tq, r := divide(10, 3)\n\tfmt.Printf("10 / 3 = %d with remainder %d\\n", q, r)\n}`,
        qa: [
          { q: 'Can I ignore one of the returned values?', a: 'Yes! Use the blank identifier _ to ignore a value: `q, _ := divide(10, 3)`' }
        ]
      },
      { id: '4.3', title: 'Named Returns', content: `## Named Return Values\n\nGo allows you to name your return values at the top of the function. These act like regular variables defined at the top of the function.\n\nA \`return\` statement without arguments returns the current values of the named return variables. This is known as a **"naked" return**.\n\n> **Tip:** Naked returns are okay in short functions, but can harm readability in long ones.`,
        code: `package main\n\nimport "fmt"\n\n// Returns are named x and y\nfunc split(sum int) (x, y int) {\n\tx = sum * 4 / 9\n\ty = sum - x\n\t// A \"naked\" return returns x and y automatically\n\treturn\n}\n\nfunc main() {\n\tfmt.Println(split(17))\n}`,
        qa: [
          { q: 'Should I always use named returns?', a: 'No. They are best used when they document the meaning of the return values (e.g., `func coords() (x, y int)`). Otherwise, explicit returns are clearer.' }
        ]
      },
      { id: '4.4', title: 'Variadic Functions', content: `## Variadic Functions\n\nFunctions can be called with any number of trailing arguments by using the \`...\` syntax.\n\n\`\`\`go\nfunc sum(nums ...int) {\n    // nums is treated as a slice of int\n}\n\`\`\`\n\nThis is how \`fmt.Println\` is implemented — it can take any number of arguments!`,
        code: `package main\n\nimport "fmt"\n\n// sum can take any number of int arguments\nfunc sum(nums ...int) {\n\ttotal := 0\n\tfor _, num := range nums {\n\t\ttotal += num\n\t}\n\tfmt.Printf("Sum of %v is %d\\n", nums, total)\n}\n\nfunc main() {\n\tsum(1, 2)\n\tsum(1, 2, 3)\n\n\t// You can also pass an existing slice by spreading it with ...\n\tnumbers := []int{1, 2, 3, 4, 5}\n\tsum(numbers...)\n}`,
        qa: [
          { q: 'Can a variadic parameter be the first parameter?', a: 'No, a variadic parameter must always be the final parameter in the function signature.' }
        ]
      },
      { id: '4.5', title: 'Closures', content: `## Anonymous Functions & Closures\n\nGo supports anonymous functions, which can form **closures**. A closure is a function value that references variables from outside its body.\n\nThe function may access and assign to the referenced variables; in this sense the function is "bound" to the variables.\n\n\`\`\`go\nfunc adder() func(int) int {\n    sum := 0\n    return func(x int) int {\n        sum += x\n        return sum\n    }\n}\n\`\`\``,
        code: `package main\n\nimport "fmt"\n\n// adder returns a closure that binds to its own 'sum' variable\nfunc adder() func(int) int {\n\tsum := 0\n\treturn func(x int) int {\n\t\tsum += x\n\t\treturn sum\n\t}\n}\n\nfunc main() {\n\t// Each call to adder() creates a new closure with its own 'sum'\n\tpos, neg := adder(), adder()\n\tfor i := 0; i < 5; i++ {\n\t\tfmt.Println(\n\t\t\tpos(i),\n\t\t\tneg(-2*i),\n\t\t)\n\t}\n}`,
        qa: [
          { q: 'What is a practical use of closures?', a: 'They are great for middleware in web servers, generators, and keeping state without needing a struct.' }
        ]
      },
      { id: '4.6', title: 'Chapter 4 Quiz', type: 'quiz', quizId: 'q4' }
    ]
  },
  { id: 5, title: 'Data Structures', description: 'Arrays, slices, maps, and structs.', icon: '🗂️', lessons: [
    { id: '5.1', title: 'Arrays', content: `## Arrays\n\nAn array is a numbered sequence of elements of a **fixed length**.\n\n\`\`\`go\nvar a [5]int\na[4] = 100\nfmt.Println(a)\n\`\`\`\n\nBecause their length is part of their type, arrays cannot be resized. For this reason, Go developers use **slices** much more often than arrays.`,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare an array of 5 integers (initialized to zero values)\n\tvar a [5]int\n\tfmt.Println("emp:", a)\n\n\t// Set a value\n\ta[4] = 100\n\tfmt.Println("set:", a)\n\tfmt.Println("get:", a[4])\n\n\t// Length of array\n\tfmt.Println("len:", len(a))\n\n\t// Declare and initialize\n\tb := [5]int{1, 2, 3, 4, 5}\n\tfmt.Println("dcl:", b)\n}`,
      qa: [
        { q: 'Can I change the size of an array later?', a: "No. An array's length is fixed and part of its type (e.g., `[5]int` is a different type than `[6]int`). Use slices for dynamic sizing." }
      ]
    },
    { id: '5.2', title: 'Slices', content: `## Slices\n\nSlices are much more common than arrays in Go. A slice is a dynamically-sized, flexible view into the elements of an array.\n\n\`\`\`go\nprimes := [6]int{2, 3, 5, 7, 11, 13}\nvar s []int = primes[1:4]\n\`\`\`\n\nYou can create slices using the \`make\` built-in function, which allocates a zeroed array and returns a slice that refers to that array:\n\n\`\`\`go\na := make([]int, 5)  // len(a)=5\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a slice with make\n\ts := make([]string, 3)\n\tfmt.Println("emp:", s)\n\n\ts[0] = "a"\n\ts[1] = "b"\n\ts[2] = "c"\n\tfmt.Println("set:", s)\n\tfmt.Println("get:", s[2])\n\n\t// Initialize with a slice literal\n\tt := []string{"g", "h", "i"}\n\tfmt.Println("dcl:", t)\n}`,
      qa: [
        { q: 'Do slices store data?', a: 'No, a slice does not store any data itself. It just describes a section of an underlying array.' }
      ]
    },
    { id: '5.3', title: 'Slice Operations', content: `## Slice Operations\n\nYou can append new elements to a slice using the \`append\` built-in function.\n\n\`\`\`go\nvar s []int\ns = append(s, 1)\ns = append(s, 2, 3, 4)\n\`\`\`\n\nYou can also slice a slice to create a new one:\n\n\`\`\`go\nl := s[2:5]  // includes s[2], s[3], s[4]\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\ts := make([]string, 3)\n\ts[0] = "a"\n\ts[1] = "b"\n\ts[2] = "c"\n\n\t// Append elements\n\ts = append(s, "d")\n\ts = append(s, "e", "f")\n\tfmt.Println("apd:", s)\n\n\t// Slice operator [low:high]\n\tl := s[2:5]\n\tfmt.Println("sl1:", l)\n\n\t// Slice up to high\n\tl = s[:5]\n\tfmt.Println("sl2:", l)\n\n\t// Slice from low\n\tl = s[2:]\n\tfmt.Println("sl3:", l)\n}`,
      qa: [
        { q: "What happens if append exceeds the underlying array's capacity?", a: 'Go automatically allocates a new, larger array and copies the elements over. The returned slice points to the new array.' }
      ]
    },
    { id: '5.4', title: 'Maps', content: `## Maps\n\nA map maps keys to values. It is Go's built-in hash table.\n\nThe zero value of a map is \`nil\`. A \`nil\` map has no keys, nor can keys be added. Use \`make\` to initialize a map.\n\n\`\`\`go\nm := make(map[string]int)\nm["answer"] = 42\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tm := make(map[string]int)\n\n\tm["k1"] = 7\n\tm["k2"] = 13\n\n\tfmt.Println("map:", m)\n\n\t// Get a value\n\tv1 := m["k1"]\n\tfmt.Println("v1:", v1)\n\n\t// Delete a key-value pair\n\tdelete(m, "k2")\n\n\t// Check if a key exists\n\tval, exists := m["k2"]\n\tfmt.Println("exists:", exists, "val:", val)\n\n\t// Map literal\n\tn := map[string]int{"foo": 1, "bar": 2}\n\tfmt.Println("literal:", n)\n}`,
      qa: [
        { q: 'Are maps ordered?', a: 'No, maps are unordered. When iterating over a map with a `range` loop, the iteration order is not guaranteed and can change from run to run.' }
      ]
    },
    { id: '5.5', title: 'Structs', content: `## Structs\n\nA \`struct\` is a collection of fields. They are useful for grouping data together to form records.\n\n\`\`\`go\ntype Vertex struct {\n    X int\n    Y int\n}\n\`\`\`\n\nStruct fields are accessed using a dot.\n\n\`\`\`go\nv := Vertex{1, 2}\nv.X = 4\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\ntype Person struct {\n\tName string\n\tAge  int\n}\n\nfunc main() {\n\t// Create a new struct\n\tp1 := Person{Name: "Alice", Age: 30}\n\tfmt.Println(p1)\n\n\t// Field names can be omitted if you know the order\n\tp2 := Person{"Bob", 25}\n\tfmt.Println(p2.Name)\n\n\t// Unspecified fields get zero values\n\tp3 := Person{Name: "Charlie"}\n\tfmt.Println(p3)\n}`,
      qa: [
        { q: 'Can structs have methods?', a: 'Yes! Go allows you to define methods on struct types, giving them object-oriented capabilities. We will learn this in Chapter 7.' }
      ]
    },
    { id: '5.6', title: 'Nested Structs', content: `## Nested & Anonymous Structs\n\nStructs can contain other structs. You can also define anonymous structs for single-use scenarios.\n\n\`\`\`go\ntype Contact struct {\n    Email string\n    Phone string\n}\n\ntype User struct {\n    Name    string\n    Contact Contact\n}\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\ntype Address struct {\n\tCity  string\n\tState string\n}\n\ntype User struct {\n\tName    string\n\tAge     int\n\tAddress Address\n}\n\nfunc main() {\n\tu := User{\n\t\tName: "Alice",\n\t\tAge:  30,\n\t\tAddress: Address{\n\t\t\tCity:  "New York",\n\t\t\tState: "NY",\n\t\t},\n\t}\n\n\tfmt.Println(u.Name, "lives in", u.Address.City)\n\n\t// Anonymous struct\n\tanon := struct {\n\t\tID   int\n\t\tData string\n\t}{\n\t\tID:   1,\n\t\tData: "secret",\n\t}\n\tfmt.Println("Anonymous:", anon)\n}`,
      qa: [
        { q: 'What is struct embedding?', a: 'If you omit the field name and just provide a type, it is called an embedded field. The fields of the embedded struct can be accessed directly on the parent struct.' }
      ]
    },
    { id: '5.7', title: 'Chapter 5 Quiz', type: 'quiz', quizId: 'q5' }
  ]},
  { id: 6, title: 'Pointers', description: 'Memory addresses, references, and pointer operations.', icon: '🎯', lessons: [
    { id: '6.1', title: 'What Are Pointers?', content: `## What Are Pointers?\n\nA pointer holds the **memory address** of a value. It's like a house address — it doesn't contain the people, but it tells you where they live.\n\nThe type \`*T\` is a pointer to a \`T\` value. Its zero value is \`nil\`.\n\n\`\`\`go\nvar p *int\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Declare an integer variable\n\ti := 42\n\t\n\t// Declare a pointer to an integer\n\tvar p *int\n\t\n\t// Point p to i (we will learn how in the next lesson)\n\t// For now, note that p's default value is nil\n\tfmt.Println("p is currently:", p)\n\tfmt.Println("i is:", i)\n}`,
      qa: [
        { q: 'Why are pointers useful?', a: 'They allow functions to mutate variables defined outside of them, and they can improve performance by passing addresses instead of copying large data structures.' }
      ]
    },
    { id: '6.2', title: 'Pointer Operators', content: `## The & and * Operators\n\nThe \`&\` operator generates a pointer to its operand (gets the memory address).\n\n\`\`\`go\ni := 42\np = &i  // p points to i\n\`\`\`\n\nThe \`*\` operator denotes the pointer's underlying value. This is known as "dereferencing" or "indirecting".\n\n\`\`\`go\nfmt.Println(*p) // read i through the pointer p\n*p = 21         // set i through the pointer p\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\ti, j := 42, 2701\n\n\tp := &i         // point to i\n\tfmt.Println(*p) // read i through the pointer\n\t*p = 21         // set i through the pointer\n\tfmt.Println(i)  // see the new value of i\n\n\tp = &j         // point to j\n\t*p = *p / 31   // divide j through the pointer\n\tfmt.Println(j) // see the new value of j\n}`,
      qa: [
        { q: 'Does Go have pointer arithmetic?', a: 'No. Unlike C or C++, Go has no pointer arithmetic (like `p++`). This makes Go pointers much safer.' }
      ]
    },
    { id: '6.3', title: 'Pointers & Functions', content: `## Passing by Value vs Pointer\n\nIn Go, arguments are passed **by value** (a copy is made). If a function needs to modify a variable, you must pass a pointer.\n\n\`\`\`go\nfunc addOne(p *int) {\n    *p = *p + 1\n}\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\n// Passed by value (receives a copy)\nfunc copyAddOne(val int) {\n\tval = val + 1\n}\n\n// Passed by pointer (receives the memory address)\nfunc pointerAddOne(p *int) {\n\t*p = *p + 1\n}\n\nfunc main() {\n\tx := 10\n\tcopyAddOne(x)\n\tfmt.Println("After copyAddOne:", x) // Still 10\n\n\tpointerAddOne(&x)\n\tfmt.Println("After pointerAddOne:", x) // Now 11\n}`,
      qa: [
        { q: 'When should I pass by pointer instead of by value?', a: 'Pass a pointer when the function needs to modify the receiver, or when the variable is a very large struct and copying it would be slow.' }
      ]
    },
    { id: '6.4', title: 'Chapter 6 Quiz', type: 'quiz', quizId: 'q6' }
  ]},
  { id: 7, title: 'Methods & Interfaces', description: 'OOP patterns in Go.', icon: '🔌', lessons: [
    { id: '7.1', title: 'Methods', content: `## Methods\n\nGo does not have classes. However, you can define methods on types.\n\nA method is just a function with a special **receiver** argument.\n\n\`\`\`go\ntype Vertex struct {\n    X, Y float64\n}\n\n// Abs is a method defined on Vertex\nfunc (v Vertex) Abs() float64 {\n    return math.Sqrt(v.X*v.X + v.Y*v.Y)\n}\n\`\`\``,
      code: `package main\n\nimport (\n\t"fmt"\n\t"math"\n)\n\ntype Vertex struct {\n\tX, Y float64\n}\n\n// Method with a value receiver\nfunc (v Vertex) Abs() float64 {\n\treturn math.Sqrt(v.X*v.X + v.Y*v.Y)\n}\n\nfunc main() {\n\tv := Vertex{3, 4}\n\tfmt.Println(v.Abs())\n}`,
      qa: [
        { q: 'Can I define a method on built-in types like int?', a: 'You can only declare a method with a receiver whose type is defined in the same package as the method. You cannot declare a method with a receiver whose type is defined in another package (which includes the built-in types such as int).' }
      ]
    },
    { id: '7.2', title: 'Receivers', content: `## Pointer Receivers\n\nYou can declare methods with pointer receivers.\n\nThis means the receiver type has the literal syntax \`*T\`.\n\nPointer receivers are useful for two reasons:\n1. To modify the value that its receiver points to.\n2. To avoid copying the value on each method call (more efficient for large structs).\n\n\`\`\`go\nfunc (v *Vertex) Scale(f float64) {\n    v.X = v.X * f\n    v.Y = v.Y * f\n}\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\ntype Vertex struct {\n\tX, Y float64\n}\n\n// Pointer receiver: modifies the original struct\nfunc (v *Vertex) Scale(f float64) {\n\tv.X = v.X * f\n\tv.Y = v.Y * f\n}\n\n// Value receiver: operates on a copy\nfunc (v Vertex) AddOne() {\n\tv.X++\n\tv.Y++\n}\n\nfunc main() {\n\tv := Vertex{3, 4}\n\t\n\tv.AddOne()\n\tfmt.Println("After AddOne:", v) // Values don't change!\n\n\tv.Scale(10)\n\tfmt.Println("After Scale:", v)  // Values change!\n}`,
      qa: [
        { q: 'Should I mix value and pointer receivers?', a: 'In general, all methods on a given type should have either value or pointer receivers, but not a mixture of both.' }
      ]
    },
    { id: '7.3', title: 'Interfaces', content: `## Interfaces\n\nAn **interface type** is defined as a set of method signatures.\n\nA value of interface type can hold any value that implements those methods.\n\n\`\`\`go\ntype Abser interface {\n    Abs() float64\n}\n\`\`\`\n\nInterfaces are implemented implicitly. There is no \`implements\` keyword. If a type has the methods, it implements the interface.`,
      code: `package main\n\nimport (\n\t"fmt"\n\t"math"\n)\n\ntype Shape interface {\n\tArea() float64\n}\n\ntype Circle struct {\n\tRadius float64\n}\n\nfunc (c Circle) Area() float64 {\n\treturn math.Pi * c.Radius * c.Radius\n}\n\ntype Rectangle struct {\n\tWidth, Height float64\n}\n\nfunc (r Rectangle) Area() float64 {\n\treturn r.Width * r.Height\n}\n\nfunc main() {\n\tvar s Shape\n\n\ts = Circle{Radius: 5}\n\tfmt.Printf("Circle Area: %.2f\\n", s.Area())\n\n\ts = Rectangle{Width: 4, Height: 5}\n\tfmt.Printf("Rectangle Area: %.2f\\n", s.Area())\n}`,
      qa: [
        { q: 'Why use interfaces?', a: 'Interfaces allow you to write functions that can accept multiple different types, as long as they all provide the required methods. This enables polymorphism.' }
      ]
    },
    { id: '7.4', title: 'Empty Interface', content: `## The Empty Interface\n\nThe interface type that specifies zero methods is known as the empty interface:\n\n\`\`\`go\ninterface{}\n// or any (in Go 1.18+)\n\`\`\`\n\nAn empty interface may hold values of **any type**.\n\nEmpty interfaces are used by code that handles values of unknown type (like \`fmt.Print\`).`,
      code: `package main\n\nimport "fmt"\n\nfunc describe(i interface{}) {\n\tfmt.Printf("(%v, %T)\\n", i, i)\n}\n\nfunc main() {\n\tvar i interface{}\n\tdescribe(i)\n\n\ti = 42\n\tdescribe(i)\n\n\ti = "hello"\n\tdescribe(i)\n\n\t// Go 1.18+ introduces 'any' as an alias for interface{}\n\tvar a any = true\n\tdescribe(a)\n}`,
      qa: [
        { q: 'Is empty interface like Object in Java?', a: 'Similar, but Go is not object-oriented in the same way. The empty interface simply means "a value that implements zero or more methods", which is true for all values.' }
      ]
    },
    { id: '7.5', title: 'Type Assertions', content: `## Type Assertions\n\nA type assertion provides access to an interface value's underlying concrete value.\n\n\`\`\`go\nt := i.(T)\n\`\`\`\n\nThis statement asserts that the interface value \`i\` holds the concrete type \`T\` and assigns the underlying \`T\` value to the variable \`t\`.\n\nTo test whether an interface value holds a specific type, a type assertion can return two values:\n\n\`\`\`go\nt, ok := i.(T)\n\`\`\``,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tvar i interface{} = "hello"\n\n\ts := i.(string)\n\tfmt.Println(s)\n\n\ts, ok := i.(string)\n\tfmt.Println(s, ok)\n\n\tf, ok := i.(float64)\n\tfmt.Println(f, ok)\n\n\t// This would panic if we didn't use the 'ok' variable:\n\t// f = i.(float64) // panic: interface conversion\n}`,
      qa: [
        { q: 'What happens if a type assertion fails?', a: 'If you use the two-value form (t, ok := i.(T)), it returns the zero value for T and ok becomes false. If you use the single-value form (t := i.(T)), it will trigger a panic.' }
      ]
    },
    { id: '7.6', title: 'Chapter 7 Quiz', type: 'quiz', quizId: 'q7' }
  ]},
  { id: 8, title: 'Error Handling', description: 'Go\'s unique approach to errors.', icon: '🛡️', lessons: [
    { id: '8.1', title: 'The error Interface', content: `## Errors in Go\n\nGo does not use exceptions (like \`try/catch\`). Instead, errors are returned as normal values.\n\n\`\`\`go\nfunc doSomething() (int, error) {\n    // ...\n}\n\`\`\`\n\nThe \`error\` type is a built-in interface:\n\`\`\`go\ntype error interface {\n    Error() string\n}\n\`\`\`\n\nA \`nil\` error denotes success; a non-nil error denotes failure.`,
      code: `package main\n\nimport (\n\t"fmt"\n\t"strconv"\n)\n\nfunc main() {\n\t// Atoi converts a string to an integer\n\ti, err := strconv.Atoi("42")\n\tif err != nil {\n\t\tfmt.Println("Couldn't convert number:", err)\n\t\treturn\n\t}\n\tfmt.Println("Converted successfully:", i)\n\n\t// Let's try to trigger an error\n\ti2, err2 := strconv.Atoi("not-a-number")\n\tif err2 != nil {\n\t\tfmt.Println("Error encountered:", err2)\n\t\treturn\n\t}\n\tfmt.Println("This won't print:", i2)\n}`,
      qa: [
        { q: 'Why no try/catch?', a: 'By forcing developers to check for errors explicitly at the call site, Go aims to make error handling more predictable and robust, avoiding hidden control flow paths.' }
      ]
    },
    { id: '8.2', title: 'Custom Errors', content: `## Creating Errors\n\nYou can create simple text errors using \`errors.New()\` or \`fmt.Errorf()\`. \n\n\`\`\`go\nreturn errors.New("something went wrong")\n\n// with formatting\nreturn fmt.Errorf("user %d not found", userID)\n\`\`\`\n\nYou can also define custom error types by implementing the \`error\` interface's \`Error() string\` method.`,
      code: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\n// Basic error\nvar ErrDivideByZero = errors.New("cannot divide by zero")\n\nfunc divide(a, b int) (int, error) {\n\tif b == 0 {\n\t\treturn 0, ErrDivideByZero\n\t}\n\treturn a / b, nil\n}\n\n// Custom error struct\ntype MyError struct {\n\tCode int\n\tMsg  string\n}\n\nfunc (e *MyError) Error() string {\n\treturn fmt.Sprintf("Error %d: %s", e.Code, e.Msg)\n}\n\nfunc run() error {\n\treturn &MyError{Code: 404, Msg: "Not Found"}\n}\n\nfunc main() {\n\t_, err := divide(10, 0)\n\tif err != nil {\n\t\tfmt.Println("Math error:", err)\n\t}\n\n\tif err := run(); err != nil {\n\t\tfmt.Println("Run error:", err)\n\t}\n}`,
      qa: [
        { q: 'Should I use errors.New or define a custom struct?', a: 'Use errors.New for simple cases where the message is enough. Use a custom struct when callers need to inspect error properties (like an error code) programmatically.' }
      ]
    },
    { id: '8.3', title: 'errors.Is & As', content: `## Inspecting Errors\n\nGo 1.13 introduced \`errors.Is\` and \`errors.As\` to handle **wrapped errors**.\n\nYou can wrap an error to add context using \`fmt.Errorf\` with the \`%w\` verb:\n\`\`\`go\nerr := doWork()\nreturn fmt.Errorf("work failed: %w", err)\n\`\`\`\n\nUse \`errors.Is(err, ErrTarget)\` to check if an error (or any error it wraps) matches a specific error value.\nUse \`errors.As(err, &target)\` to check if an error matches a specific type.`,
      code: `package main\n\nimport (\n\t"errors"\n\t"fmt"\n)\n\nvar ErrNotFound = errors.New("not found")\n\nfunc fetchUser() error {\n\t// Simulating an error, wrapping it with context\n\treturn fmt.Errorf("database query failed: %w", ErrNotFound)\n}\n\nfunc main() {\n\terr := fetchUser()\n\tfmt.Println("Error string:", err)\n\n\t// Check if the underlying error is ErrNotFound\n\tif errors.Is(err, ErrNotFound) {\n\t\tfmt.Println("We detected a not found error!")\n\t} else {\n\t\tfmt.Println("Some other error occurred.")\n\t}\n}`,
      qa: [
        { q: 'Why use %w instead of %v?', a: '%v just includes the string representation of the error. %w "wraps" it, allowing `errors.Is` and `errors.As` to unwrap it and inspect the original error.' }
      ]
    },
    { id: '8.4', title: 'Panic & Recover', content: `## Panic and Recover\n\n\`panic\` is similar to throwing an exception. It stops normal execution. It's used for **unrecoverable** errors (like an array out-of-bounds).\n\n\`recover\` is a built-in function that regains control of a panicking goroutine. It is only useful inside a \`defer\` function.\n\n> **Note:** Real Go code avoids panic. Normal errors should be returned. Use panic only for truly exceptional conditions.`,
      code: `package main\n\nimport "fmt"\n\nfunc safeDivision(a, b int) {\n\t// defer a function to recover from any panics\n\tdefer func() {\n\t\tif r := recover(); r != nil {\n\t\t\tfmt.Println("Recovered from panic:", r)\n\t\t}\n\t}()\n\n\tfmt.Printf("%d / %d = %d\\n", a, b, a/b)\n}\n\nfunc main() {\n\tfmt.Println("Starting...")\n\tsafeDivision(10, 2)\n\tsafeDivision(10, 0) // This would normally crash the program\n\tfmt.Println("Finished successfully!")\n}`,
      qa: [
        { q: 'When should I use panic?', a: 'Almost never in application logic. It is typically used for initialization errors (e.g., failed to compile a regex at startup) or indicating programming bugs (like an impossible switch case).' }
      ]
    },
    { id: '8.5', title: 'Chapter 8 Quiz', type: 'quiz', quizId: 'q8' }
  ]},
  { id: 9, title: 'Concurrency', description: 'Goroutines, channels, and concurrent patterns.', icon: '🚀', lessons: [
    { id: '9.1', title: 'Goroutines', content: `## Goroutines\n\nA *goroutine* is a lightweight thread managed by the Go runtime.\n\n\`\`\`go\ngo f(x, y, z)\n\`\`\`\n\nThis starts a new goroutine running \`f(x, y, z)\` concurrently with the calling function.\nGoroutines run in the same address space, so access to shared memory must be synchronized.`,
      code: `package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc say(s string) {\n\tfor i := 0; i < 3; i++ {\n\t\ttime.Sleep(100 * time.Millisecond)\n\t\tfmt.Println(s)\n\t}\n}\n\nfunc main() {\n\t// Start a new goroutine\n\tgo say("world")\n\t\n\t// This runs in the main goroutine\n\tsay("hello")\n\t\n\t// Notice how the outputs interleave!\n}`,
      qa: [
        { q: 'Are goroutines OS threads?', a: 'No, they are user-space threads managed by the Go runtime. They are much lighter than OS threads. You can easily run hundreds of thousands of goroutines simultaneously.' }
      ]
    },
    { id: '9.2', title: 'Channels', content: `## Channels\n\nChannels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another.\n\n\`\`\`go\nch := make(chan int)\n\nch <- v    // Send v to channel ch\nv := <-ch  // Receive from ch, and assign to v\n\`\`\`\n\nBy default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks.`,
      code: `package main\n\nimport "fmt"\n\nfunc sum(s []int, c chan int) {\n\ttotal := 0\n\tfor _, v := range s {\n\t\ttotal += v\n\t}\n\tc <- total // send total to c\n}\n\nfunc main() {\n\ts := []int{7, 2, 8, -9, 4, 0}\n\n\tc := make(chan int)\n\tgo sum(s[:len(s)/2], c) // Sum first half\n\tgo sum(s[len(s)/2:], c) // Sum second half\n\n\tx, y := <-c, <-c // receive from c\n\n\tfmt.Println(x, y, x+y)\n}`,
      qa: [
        { q: 'What happens if I receive from a channel but nobody is sending?', a: 'The receiving goroutine will block (pause execution) until a value is sent to the channel. If no value is ever sent, it causes a deadlock.' }
      ]
    },
    { id: '9.3', title: 'Buffered Channels', content: `## Buffered Channels\n\nChannels can be *buffered*. Provide the buffer length as the second argument to \`make\` to initialize a buffered channel.\n\n\`\`\`go\nch := make(chan int, 100)\n\`\`\`\n\nSends to a buffered channel block only when the buffer is full. Receives block when the buffer is empty.`,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\t// Create a channel with a buffer of up to 2 values\n\tch := make(chan int, 2)\n\n\t// We can send two values without a receiver immediately reading them\n\tch <- 1\n\tch <- 2\n\t\n\t// If we tried to send a 3rd value here, it would block/deadlock\n\t// ch <- 3 \n\n\tfmt.Println(<-ch)\n\tfmt.Println(<-ch)\n}`,
      qa: [
        { q: 'Why use a buffered channel?', a: 'Buffered channels are used when you have bursty workloads, allowing the sender to keep producing data even if the receiver is temporarily slow.' }
      ]
    },
    { id: '9.4', title: 'Select', content: `## Select\n\nThe \`select\` statement lets a goroutine wait on multiple communication operations.\n\nA \`select\` blocks until one of its cases can run, then it executes that case. It chooses one at random if multiple are ready.\n\n\`\`\`go\nselect {\ncase c <- x:\n    // x was sent to c\ncase <-quit:\n    // quit was received\n}\n\`\`\``,
      code: `package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc main() {\n\ttick := time.Tick(100 * time.Millisecond)\n\tboom := time.After(500 * time.Millisecond)\n\n\tfor {\n\t\tselect {\n\t\tcase <-tick:\n\t\t\tfmt.Println("tick.")\n\t\tcase <-boom:\n\t\t\tfmt.Println("BOOM!")\n\t\t\treturn\n\t\tdefault:\n\t\t\t// Runs if no other case is ready\n\t\t\tfmt.Print("    .")\n\t\t\ttime.Sleep(50 * time.Millisecond)\n\t\t}\n\t}\n}`,
      qa: [
        { q: 'What is the default case for?', a: 'The default case runs if no other channel is ready to send or receive. It allows you to perform non-blocking channel operations.' }
      ]
    },
    { id: '9.5', title: 'WaitGroups & Mutexes', content: `## Synchronization Primitives\n\nWhile channels are great for passing data, sometimes you just need to wait for things to finish or protect shared state.\n\n- **sync.WaitGroup**: Wait for a collection of goroutines to finish.\n- **sync.Mutex**: Provide mutual exclusion (locks) to protect shared variables from concurrent writes.`,
      code: `package main\n\nimport (\n\t"fmt"\n\t"sync"\n\t"time"\n)\n\n// SafeCounter is safe to use concurrently.\ntype SafeCounter struct {\n\tmu sync.Mutex\n\tv  map[string]int\n}\n\n// Inc increments the counter for the given key.\nfunc (c *SafeCounter) Inc(key string) {\n\tc.mu.Lock()\n\t// Lock so only one goroutine at a time can access the map c.v.\n\tc.v[key]++\n\tc.mu.Unlock()\n}\n\n// Value returns the current value of the counter for the given key.\nfunc (c *SafeCounter) Value(key string) int {\n\tc.mu.Lock()\n\tdefer c.mu.Unlock()\n\treturn c.v[key]\n}\n\nfunc main() {\n\tc := SafeCounter{v: make(map[string]int)}\n\tvar wg sync.WaitGroup\n\n\tfor i := 0; i < 1000; i++ {\n\t\twg.Add(1)\n\t\tgo func() {\n\t\t\tc.Inc("somekey")\n\t\t\twg.Done()\n\t\t}()\n\t}\n\n\twg.Wait() // wait for all 1000 goroutines to finish\n\tfmt.Println(c.Value("somekey"))\n}`,
      qa: [
        { q: 'Do I pass WaitGroup by value or pointer?', a: "Always pass a WaitGroup by pointer! If you pass it by value, the goroutine gets a copy and calling Done() won't affect the original WaitGroup in the main function." }
      ]
    },
    { id: '9.6', title: 'Patterns', content: `## Concurrency Patterns\n\nGo's concurrency primitives allow for elegant patterns like:\n- **Worker Pools**: Distribute work across a fixed number of goroutines.\n- **Fan-in/Fan-out**: Combine multiple channels into one, or split one into multiple.\n- **Pipelines**: Chain stages of processing where each stage runs in its own goroutine.\n\nLet's see a simple Worker Pool.`,
      code: `package main\n\nimport (\n\t"fmt"\n\t"time"\n)\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n\tfor j := range jobs {\n\t\tfmt.Println("worker", id, "started  job", j)\n\t\ttime.Sleep(time.Millisecond * 10)\n\t\tfmt.Println("worker", id, "finished job", j)\n\t\tresults <- j * 2\n\t}\n}\n\nfunc main() {\n\tconst numJobs = 5\n\tjobs := make(chan int, numJobs)\n\tresults := make(chan int, numJobs)\n\n\t// Start 3 workers\n\tfor w := 1; w <= 3; w++ {\n\t\tgo worker(w, jobs, results)\n\t}\n\n\t// Send jobs\n\tfor j := 1; j <= numJobs; j++ {\n\t\tjobs <- j\n\t}\n\tclose(jobs)\n\n\t// Collect results\n\tfor a := 1; a <= numJobs; a++ {\n\t\t<-results\n\t}\n}`,
      qa: [
        { q: 'What does close(chan) do?', a: 'It indicates that no more values will be sent on the channel. Receivers can use a `for range` loop to read from the channel until it is closed.' }
      ]
    },
    { id: '9.7', title: 'Chapter 9 Quiz', type: 'quiz', quizId: 'q9' }
  ]},
  { id: 10, title: 'Packages & Modules', description: 'Code organization and dependency management.', icon: '📦', lessons: [
    { id: '10.1', title: 'Creating Packages', content: `## Packages\n\nEvery Go program is made up of packages. Programs start running in package \`main\`.\n\nTo create a package, put a \`package\` declaration at the top of your source files:\n\n\`\`\`go\npackage mathutils\n\`\`\`\n\n**Exported Names**: In Go, a name is exported (visible outside the package) if it begins with a **capital letter**.\n- \`Pi\` is exported.\n- \`pi\` is unexported (private).`,
      code: `package main\n\nimport (\n\t"fmt"\n\t"math"\n)\n\nfunc main() {\n\t// math.Pi is exported because it starts with a capital 'P'\n\tfmt.Println(math.Pi)\n\t\n\t// If we tried to access math.pi, it would fail to compile\n\t// fmt.Println(math.pi) // cannot refer to unexported name\n}`,
      qa: [
        { q: 'Is there a public/private keyword in Go?', a: 'No, Go uses capitalization to determine visibility. Uppercase = public (exported), Lowercase = private (unexported).' }
      ]
    },
    { id: '10.2', title: 'Go Modules', content: `## Go Modules\n\nA module is a collection of related Go packages that are versioned together as a single unit.\n\nTo initialize a new module, use the \`go mod init\` command:\n\n\`\`\`bash\ngo mod init github.com/username/myproject\n\`\`\`\n\nThis creates a \`go.mod\` file, which tracks your dependencies and their versions.`,
      code: `package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("To use external modules, you run:")\n\tfmt.Println("go get github.com/gorilla/mux")\n\n\tfmt.Println("\\nThis downloads the package and updates go.mod and go.sum.")\n}`,
      qa: [
        { q: 'What is go.sum?', a: 'The go.sum file contains expected cryptographic hashes of the content of specific module versions. It ensures that dependencies have not been modified since you downloaded them.' }
      ]
    },
    { id: '10.3', title: 'Importing Packages', content: `## Imports\n\nYou import packages to use their exported identifiers.\n\n\`\`\`go\nimport (\n    "fmt"\n    "math/rand"\n)\n\`\`\`\n\nYou can also alias imports if there's a name collision, or use the blank identifier \`_\` to run a package's \`init\` function without importing its names.\n\n\`\`\`go\nimport (\n    "database/sql"\n    _ "github.com/lib/pq" // runs pq.init()\n)\n\`\`\``,
      code: `package main\n\nimport (\n\t"fmt"\n\t// aliasing the math/rand package to 'r'\n\tr "math/rand"\n)\n\nfunc main() {\n\tfmt.Println("My favorite number is", r.Intn(10))\n}`,
      qa: [
        { q: 'Can I have unused imports?', a: 'No. Go considers unused imports a compilation error. This keeps binaries clean and compilation fast. You can use tools like `goimports` to automatically manage them.' }
      ]
    },
    { id: '10.4', title: 'Chapter 10 Quiz', type: 'quiz', quizId: 'q10' }
  ]},
  { id: 11, title: 'Testing', description: 'Writing tests, benchmarks, and table-driven tests.', icon: '🧪', lessons: [
    { id: '11.1', title: 'Writing Tests', content: `## Testing in Go\n\nGo has a built-in testing framework provided by the \`testing\` package and the \`go test\` command.\n\nTo write a new test suite, create a file whose name ends in \`_test.go\`.\n\nInside, write functions that start with \`Test\` and take a pointer to \`testing.T\`:\n\n\`\`\`go\nfunc TestAbs(t *testing.T) {\n    got := math.Abs(-1)\n    if got != 1 {\n        t.Errorf("Abs(-1) = %f; want 1", got)\n    }\n}\n\`\`\``,
      code: `package main\n\n// Imagine this is in math_test.go\n\nimport (\n\t"fmt"\n\t"testing"\n)\n\n// Function we want to test\nfunc Add(a, b int) int {\n\treturn a + b\n}\n\n// Our test function\nfunc TestAdd(t *testing.T) {\n\tresult := Add(2, 3)\n\texpected := 5\n\t\n\tif result != expected {\n\t\tt.Errorf("Add(2, 3) = %d; expected %d", result, expected)\n\t}\n}\n\nfunc main() {\n\tfmt.Println("Run tests using the 'go test' command in your terminal!")\n\tfmt.Println("Example: go test -v")\n}`,
      qa: [
        { q: 'How do I run tests?', a: "You run the command `go test` in the directory containing the package. Use `go test -v` for verbose output, which lists every test that is run." }
      ]
    },
    { id: '11.2', title: 'Table-Driven Tests', content: `## Table-Driven Tests\n\nA common pattern in Go is "table-driven tests".\n\nYou define a slice of anonymous structs containing your inputs and expected outputs, then range over them.\n\nThis makes it very easy to add new test cases without writing repetitive test code.`,
      code: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n\t"testing"\n)\n\nfunc TestSplit(t *testing.T) {\n\t// Define the table of tests\n\ttests := []struct {\n\t\tinput    string\n\t\tsep      string\n\t\texpected int\n\t}{\n\t\t{"a/b/c", "/", 3},\n\t\t{"a/b/c", ",", 1},\n\t\t{"abc", "/", 1},\n\t}\n\n\t// Loop over the test cases\n\tfor _, tt := range tests {\n\t\tgot := len(strings.Split(tt.input, tt.sep))\n\t\tif got != tt.expected {\n\t\t\tt.Errorf("Split(%q, %q) returned %d pieces; expected %d",\n\t\t\t\ttt.input, tt.sep, got, tt.expected)\n\t\t}\n\t}\n}\n\nfunc main() {\n\tfmt.Println("Table-driven tests are the idiomatic way to test in Go!")\n}`,
      qa: [
        { q: 'What happens if one test case in the table fails?', a: "Using `t.Errorf`, the test framework logs the failure but continues executing the rest of the table. If you use `t.Fatalf`, it would stop the test function immediately." }
      ]
    },
    { id: '11.3', title: 'Benchmarks', content: `## Benchmarks\n\nThe \`testing\` package also supports benchmarking.\n\nWrite functions that start with \`Benchmark\` and take a \`*testing.B\`.\n\nThe framework will run the loop \`b.N\` times, adjusting \`b.N\` until the benchmark lasts long enough to be timed reliably.\n\n\`\`\`go\nfunc BenchmarkRandInt(b *testing.B) {\n    for i := 0; i < b.N; i++ {\n        rand.Int()\n    }\n}\n\`\`\`\n\nRun them with \`go test -bench=.\``,
      code: `package main\n\nimport (\n\t"fmt"\n\t"strings"\n\t"testing"\n)\n\n// Benchmark testing string concatenation\nfunc BenchmarkStringConcat(b *testing.B) {\n\tfor i := 0; i < b.N; i++ {\n\t\t_ = "hello" + " " + "world"\n\t}\n}\n\n// Benchmark using strings.Builder (usually much faster)\nfunc BenchmarkStringBuilder(b *testing.B) {\n\tfor i := 0; i < b.N; i++ {\n\t\tvar builder strings.Builder\n\t\tbuilder.WriteString("hello")\n\t\tbuilder.WriteString(" ")\n\t\tbuilder.WriteString("world")\n\t\t_ = builder.String()\n\t}\n}\n\nfunc main() {\n\tfmt.Println("Run benchmarks using: go test -bench=.")\n}`,
      qa: [
        { q: 'What does b.N mean?', a: "The Go test runner automatically adjusts `b.N` higher and higher until the benchmark runs for at least 1 second, giving an accurate average execution time." }
      ]
    },
    { id: '11.4', title: 'Chapter 11 Quiz', type: 'quiz', quizId: 'q11' }
  ]},
  { id: 12, title: 'Real Projects', description: 'Build real-world applications with Go.', icon: '🏗️', lessons: [
    { id: '12.1', title: 'CLI Tool', content: `## Building a CLI Tool\n\nGo is fantastic for building command-line tools because it compiles to a single static binary.\n\nThe \`flag\` package provides a simple way to parse command-line arguments.\n\n\`\`\`go\nwordPtr := flag.String("word", "foo", "a string")\nflag.Parse()\n\`\`\``,
      code: `package main\n\nimport (\n\t"flag"\n\t"fmt"\n)\n\nfunc main() {\n\t// Define flags: name, default value, and description\n\twordPtr := flag.String("word", "hello", "A word to print")\n\tnumPtr := flag.Int("n", 1, "Number of times to print")\n\tboolPtr := flag.Bool("caps", false, "Print in uppercase")\n\n\t// Parse the flags from the command line\n\tflag.Parse()\n\n\t// Use the flags (they are pointers!)\n\tword := *wordPtr\n\tif *boolPtr {\n\t\t// Note: we'd need the strings package for ToUpper in real code\n\t\tword = word + " (CAPS)" \n\t}\n\n\tfor i := 0; i < *numPtr; i++ {\n\t\tfmt.Println(word)\n\t}\n\t\n\tfmt.Println("\\nTry running this in a real terminal with: go run main.go -word=gopher -n=3 -caps")\n}`,
      qa: [
        { q: 'Can I use other CLI libraries?', a: "Yes, while the standard `flag` package is good, many Go developers use third-party libraries like `spf13/cobra` for complex CLI apps (like Kubernetes or Docker)." }
      ]
    },
    { id: '12.2', title: 'REST API', content: `## Building a REST API\n\nGo's \`net/http\` package is so powerful that you often don't need a heavy web framework.\n\nYou can create an HTTP server by registering handler functions to routes using \`http.HandleFunc\` and starting the server with \`http.ListenAndServe\`.\n\nJSON serialization is handled easily with the \`encoding/json\` package.`,
      code: `package main\n\nimport (\n\t"encoding/json"\n\t"fmt"\n\t"net/http"\n)\n\ntype Message struct {\n\tText   string \`json:"text"\`\n\tStatus string \`json:"status"\`\n}\n\nfunc apiHandler(w http.ResponseWriter, r *http.Request) {\n\t// Create our data\n\tmsg := Message{Text: "Hello, REST API!", Status: "success"}\n\t\n\t// Set headers\n\tw.Header().Set("Content-Type", "application/json")\n\tw.WriteHeader(http.StatusOK)\n\t\n\t// Encode the struct to JSON and write to the response\n\tjson.NewEncoder(w).Encode(msg)\n}\n\nfunc main() {\n\thttp.HandleFunc("/api/hello", apiHandler)\n\t\n\tfmt.Println("Server starting on port 8080...")\n\tfmt.Println("You would be able to visit http://localhost:8080/api/hello")\n\t\n\t// We commented this out so it doesn't run forever in the playground\n\t// http.ListenAndServe(":8080", nil)\n}`,
      qa: [
        { q: 'What are the backticks in the struct definition?', a: "Those are struct tags. They provide metadata that the `encoding/json` package uses to know what the keys should be named in the generated JSON." }
      ]
    },
    { id: '12.3', title: 'Web Server', content: `## Serving HTML\n\nBesides building JSON APIs, you can serve full HTML websites using the \`html/template\` package.\n\nGo templates allow you to embed variables, loops, and logic inside your HTML.\n\n\`\`\`html\n<h1>Hello, {{.Name}}!</h1>\n\`\`\``,
      code: `package main\n\nimport (\n\t"html/template"\n\t"net/http"\n\t"fmt"\n)\n\n// The data we want to pass to the template\ntype PageData struct {\n\tPageTitle string\n\tUsers     []string\n}\n\nfunc main() {\n\t// A simple HTML template string\n\t// In real apps, you'd load this from a file using template.ParseFiles()\n\ttmplString := \`\n\t<!DOCTYPE html>\n\t<html>\n\t<head><title>{{.PageTitle}}</title></head>\n\t<body>\n\t\t<h1>{{.PageTitle}}</h1>\n\t\t<ul>\n\t\t\t{{range .Users}}\n\t\t\t\t<li>{{.}}</li>\n\t\t\t{{end}}\n\t\t</ul>\n\t</body>\n\t</html>\n\t\`\n\n\ttmpl := template.Must(template.New("webpage").Parse(tmplString))\n\n\thttp.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n\t\tdata := PageData{\n\t\t\tPageTitle: "My Go Users",\n\t\t\tUsers:     []string{"Alice", "Bob", "Charlie"},\n\t\t}\n\t\ttmpl.Execute(w, data)\n\t})\n\n\tfmt.Println("Web server ready on port 8080...")\n\t// http.ListenAndServe(":8080", nil)\n}`,
      qa: [
        { q: 'Is html/template safe against XSS?', a: "Yes, `html/template` automatically escapes data to protect against Cross-Site Scripting (XSS) attacks. For plain text that doesn't need HTML escaping, you can use `text/template`." }
      ]
    },
    { id: '12.4', title: 'Database Access', content: `## Connecting to Databases\n\nGo provides a generic interface around SQL databases in the \`database/sql\` package.\n\nYou must also import a database driver (like Postgres, MySQL, or SQLite) as a blank import to register it.\n\n\`\`\`go\nimport (\n    "database/sql"\n    _ "github.com/lib/pq"\n)\n\`\`\`\n\nYou use \`db.Query\` for multiple rows, \`db.QueryRow\` for a single row, and \`db.Exec\` for inserts/updates.`,
      code: `package main\n\nimport (\n\t"fmt"\n\t// "database/sql"\n\t// _ "github.com/lib/pq"\n)\n\nfunc main() {\n\t// This is pseudocode since we don't have a real DB in the playground\n\tfmt.Println("Connecting to database...")\n\t\n\t/*\n\tconnStr := "user=pqgotest dbname=pqgotest sslmode=verify-full"\n\tdb, err := sql.Open("postgres", connStr)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tdefer db.Close()\n\n\t// Querying a single row\n\tvar name string\n\terr = db.QueryRow("SELECT name FROM users WHERE id = $1", 1).Scan(&name)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\t*/\n\n\tfmt.Println("Database connection established and query executed!")\n}`,
      qa: [
        { q: 'What does defer db.Close() do?', a: "It ensures that the database connection pool is properly closed when the function exits, preventing resource leaks." }
      ]
    },
    { id: '12.5', title: 'Chapter 12 Quiz', type: 'quiz', quizId: 'q12' }
  ]}
];

export function getChapter(id) {
  return chapters.find(c => c.id === Number(id));
}

export function getLesson(chapterId, lessonId) {
  const ch = getChapter(chapterId);
  return ch?.lessons.find(l => l.id === lessonId);
}

export function getAllLessonIds() {
  return chapters.flatMap(c => c.lessons.map(l => l.id));
}

export function getNextLesson(lessonId) {
  const all = chapters.flatMap(c => c.lessons);
  const idx = all.findIndex(l => l.id === lessonId);
  return idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
}

export function getPrevLesson(lessonId) {
  const all = chapters.flatMap(c => c.lessons);
  const idx = all.findIndex(l => l.id === lessonId);
  return idx > 0 ? all[idx - 1] : null;
}

export function getChapterForLesson(lessonId) {
  return chapters.find(c => c.lessons.some(l => l.id === lessonId));
}
