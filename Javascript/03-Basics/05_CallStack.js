/* =====================================================================
   JS TUTORIAL 25 - How does JavaScript execute code + Call Stack
   Chai aur Code (Hitesh Choudhary)
   Run: node notes25.js   (also try pasting in browser console)
   ===================================================================== */


// ---------------------------------------------------------------------
// 1. BIG IDEA
// ---------------------------------------------------------------------
// - JS is single-threaded and synchronous: it runs ONE line at a time, top to bottom.
// - Everything in JS runs inside an "Execution Context" (EC).
// - Whatever you write in a file (outside any function) is the GLOBAL scope,
//   and it runs inside the Global Execution Context.
// - JS first creates this context, then runs your code inside it.


// ---------------------------------------------------------------------
// 2. THE 3 TYPES OF EXECUTION CONTEXT (from the slide)
// ---------------------------------------------------------------------
// (a) Global Execution Context (Global EC)
//     - Created first, for the whole file/program ( { } = your code -> Global EC ).
//     - Gives you `this`.
//         browser -> this === window
//         node    -> this === {} (module.exports) at file top level
//     - There is only ONE global EC.
//
// (b) Function Execution Context
//     - A NEW EC is created every time a function is CALLED (not when declared).
//     - Calling the same function twice = two separate, fresh contexts.
//
// (c) Eval Execution Context
//     - Created for code run through eval("..."). Rarely used, not recommended
//       (security + performance problems). Just know that it exists.

console.log(this);                         // Global EC's `this`
console.log(this === globalThis);          // false in node (module scope), window in browser


// ---------------------------------------------------------------------
// 3. TWO PHASES OF EVERY EXECUTION CONTEXT
// ---------------------------------------------------------------------
// Phase 1: MEMORY CREATION PHASE (a.k.a. creation phase)
//     - JS scans the code and allocates memory.
//     - var is hoisted and initialized to `undefined`.
//     - let and const bindings are created but remain in the temporal dead zone
//       until execution reaches their declarations.
//     - Functions  -> stored with their whole definition.
//     - Global EC also sets up `this`.
//
// Phase 2: EXECUTION PHASE
//     - Code runs line by line.
//     - Variables get their real values assigned.
//     - Function definitions are skipped (already stored).
//     - A function CALL creates a new Function EC (which again has both phases).


// ---------------------------------------------------------------------
// 4. THE EXAMPLE (walk through it step by step)
// ---------------------------------------------------------------------
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

console.log(result1, result2);   // 15 12

/*
  ---------- GLOBAL EC ----------
  MEMORY CREATION PHASE:
    this    -> window / global
    val1    -> undefined
    val2    -> undefined
    addNum  -> { function definition stored }
    result1 -> undefined
    result2 -> undefined

  EXECUTION PHASE (line by line):
    val1 = 10
    val2 = 5
    function addNum -> nothing to run (already stored)
    result1 = addNum(val1, val2)
         -> function CALL => new Function EC created
         ---------- FUNCTION EC (first call) ----------
         Think of it as a mini program with its own variable environment + execution thread.
         MEMORY CREATION:  num1 -> undefined, num2 -> undefined, total -> undefined
         EXECUTION:        num1 = 10, num2 = 5, total = 15, return total
         -> value 15 is returned to result1 (to Global EC)
         -> this Function EC is DELETED (popped from call stack) after return
    result1 = 15
    result2 = addNum(10, 2)
         -> brand NEW Function EC (fresh memory, nothing reused from before)
         MEMORY CREATION:  num1, num2, total -> undefined
         EXECUTION:        num1 = 10, num2 = 2, total = 12, return 12
         -> deleted after return
    result2 = 12
  Program ends -> Global EC is removed.
*/


// ---------------------------------------------------------------------
// 5. CALL STACK
// ---------------------------------------------------------------------
// - JS needs a way to keep track of which context is running and where to return.
//   That tool is the CALL STACK.
// - It is a STACK data structure: LIFO = Last In, First Out (like a pile of plates).
// - Rules:
//     1. Program starts -> Global EC is pushed first (bottom of the stack).
//     2. Function called -> its Function EC is pushed on top.
//     3. Function returns / finishes -> its EC is popped off.
//     4. The EC on TOP is the one currently running.
//     5. When everything is done, the Global EC is popped and the stack is empty.
//
// Stack while running the example above:
//   [Global]                    <- start
//   [Global, addNum(val1,val2)] <- 1st call
//   [Global]                    <- returned, popped
//   [Global, addNum(10,2)]     <- 2nd call
//   [Global]                    <- returned, popped
//   []                          <- end

// Nested calls: the last function called finishes FIRST (LIFO)
function one() {
  console.log("one start");
  two();                 // pushes two on top of one
  console.log("one end");
}
function two() {
  console.log("two start");
  three();               // pushes three on top of two
  console.log("two end");
}
function three() {
  console.log("three runs");
  console.trace("current call stack");  // prints the stack: three <- two <- one <- global
}
one();
// Output order: one start, two start, three runs, (trace), two end, one end
// Stack growth:  [Global, one] -> [Global, one, two] -> [Global, one, two, three]
// Then it unwinds: three pops, then two, then one.


// ---------------------------------------------------------------------
// 6. STACK OVERFLOW (call stack has a limit)
// ---------------------------------------------------------------------
// A function that keeps calling itself with no stop condition keeps pushing
// contexts until the stack is full -> "Maximum call stack size exceeded".
function infinite() { infinite(); }
try {
  infinite();
} catch (err) {
  console.log(err instanceof RangeError, err.message); // true "Maximum call stack size exceeded"
}


// ---------------------------------------------------------------------
// 7. HOW TO SEE THE CALL STACK YOURSELF
// ---------------------------------------------------------------------
// Browser: DevTools -> Sources tab -> add a breakpoint (or write `debugger;`),
//           then watch the "Call Stack" panel on the right while stepping
//           through code (Step over / Step into / Step out).
// Node:    console.trace() prints it; or run `node inspect file.js`.


// ---------------------------------------------------------------------
// 8. QUICK SUMMARY
// ---------------------------------------------------------------------
// - JS = single thread, synchronous execution (runs one thing at a time).
// - 3 ECs: Global (this), Function (per call), Eval (avoid).
// - Each EC: memory creation phase -> execution phase.
// - var starts as undefined; let and const remain in the temporal dead zone;
//   function declarations are initialized with their definitions.
// - Every function call = new EC (Variable Environment + Execution Thread); it is deleted after return.
// - Call Stack = LIFO stack that tracks active ECs; Global EC sits at the bottom.