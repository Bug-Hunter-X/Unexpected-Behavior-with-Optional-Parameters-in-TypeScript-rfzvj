# Unexpected Behavior with Optional Parameters in TypeScript

This example demonstrates a potential issue with optional parameters in TypeScript functions.  When an optional parameter is omitted or explicitly passed as `undefined`, the function still executes without throwing an error, but may produce unexpected results if not handled correctly.

The issue is that the default value of the optional parameter `name` is undefined, which leads to the function printing 'undefined' rather than an error, potentially hiding a logic error within your code.  Properly handling optional parameters is crucial for robust applications.

## Solution

The solution involves adding explicit checks for undefined values within the function, and potentially using a default parameter value to improve readability and avoid unexpected behavior.