const arrayProblem = (array) => {
    return array.reduce((acc, item, index) => {
        let nextTemp = item.next;
        for (let j = 0; j < array.length; j++) {
            if (array[j].id === nextTemp) {
                acc[index].value = acc[j]
                break
            }
        }
        return acc;
    }, structuredClone(array))
}

const array = [
    { id: "one", next: "two", value: null },
    { id: "two", next: "three", value: null },
    { id: "three", next: null, value: null }
]

console.log(arrayProblem(array));
console.log(JSON.stringify(arrayProblem(array)));