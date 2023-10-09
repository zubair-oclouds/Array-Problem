# Array Problem

## Code

```javascript
const array = [
  { id: "one", next: "two", value: null },
  { id: "two", next: "three", value: null },
  { id: "three", next: null, value: null },
][
  //Output should be like this

  ({
    id: "one",
    next: "two",
    value: {
      id: "two",
      next: "three",
      value: { id: "three", next: null, value: null },
    },
  },
  {
    id: "two",
    next: "three",
    value: { id: "three", next: null, value: null },
  },
  { id: "three", next: null, value: null })
];
```

clone this repository by this commmand: git clone https://github.com/zubair-oclouds/Array-Problem.git


```javascript
// Solution 2 output will be like this...

{
  id: 'one',
  next: 'two',
  value: {
    id: 'two',
    next: 'three',
    value: { id: 'three', next: null, value: null }
  }
}


```