function printName(name: string | undefined = 'Anonymous'): void {
  if (name === undefined) {
    console.log('Name is not provided. Using default value: Anonymous');
    name = 'Anonymous';
  }
  console.log(name);
}

printName(); // Prints 'Name is not provided. Using default value: Anonymous' followed by 'Anonymous'
printName(undefined); // Prints 'Name is not provided. Using default value: Anonymous' followed by 'Anonymous'
printName('John Doe'); // Prints 'John Doe' 