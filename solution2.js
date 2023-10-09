
const array = [
    { id: "two", next: "three", value: null },
    { id: "three", next: null, value: null },
    { id: "one", next: "two", value: null }
]

const arrayProblem = (array) => {
    const arrayWithReferencedObjects = array.reduce((acc, item, index) => {
        const nextTemp = item.next;
        for (let j = 0; j < array.length; j++) {
            if (array[j].id === nextTemp) {
                acc[index].value = acc[j]
                acc[j].parent = acc[index]
                break
            }
        }
        return acc;
    }, structuredClone(array))

    let head= arrayWithReferencedObjects[0]
    for(obj of arrayWithReferencedObjects){
        if(!obj.hasOwnProperty('parent')){
            head = obj;
            break;
        }
    }

    let temp = head.value;
    while(temp!= null){
        delete temp.parent;
        temp = temp.value
    }

    return head;
}

const arrayProblem2 = (array) => {
    const depths = {}
    const max = 100000;
    const arrayWithReferencedObjects = array.reduce((acc, item, index) => {
        const nextTemp = item.next;
        const id = item.id;
        if(!depths.hasOwnProperty(id))
            depths[id] = max;
        depths[nextTemp] = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j].id === nextTemp) {
                acc[index].value = acc[j]
                break
            }
        }
        return acc;
    }, structuredClone(array))

    const resultId =  Object.keys(depths).find(key => depths[key] === max);
    for(obj of arrayWithReferencedObjects){
        if(obj.id === resultId)
            return obj
    }
}

console.log(arrayProblem2(array));