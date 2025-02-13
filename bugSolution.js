function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a === null || b === null) {
    return 0; // Handle non-numeric or null values
  }
  return a + b; 
}