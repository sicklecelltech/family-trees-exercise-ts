import { Person } from "./personTypes";


export function logAllPeopleInTree(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
    //array of all names
    const stackOfPeople:Person[] =[];
    //push the name of the top person
    stackOfPeople.push(topPerson)

    //while array.length is not 0
    while (stackOfPeople.length!==0){
    // check if the children element is empty
        if (stackOfPeople[0].children.length > 0){
            //loop through array and record all names
            for (let child of stackOfPeople[0].children ){
                stackOfPeople.push(child)
            }          
        }
    //consolelog first elemet of the array
    //remove the first element 
        console.log(stackOfPeople[0].name)
        stackOfPeople.splice(0,1)
    }
   
}


export function logAllPeopleInTreeWithQueue(topPerson: Person): void {
    console.log("TODO!  First person is " + topPerson.name);
}

