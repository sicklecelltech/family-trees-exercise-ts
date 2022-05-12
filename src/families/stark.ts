import { Person } from "../personTypes";

export function createStarkTree(): Person {

    const eddardChildren :Person[] =[
        {name:"Rickon", children: [] },
        {name:"Bran", children: [] },
        {name:"Ayra", children: [] },
        {name:"Sansa", children: [] },
        {name:"Robb", children: [] },
        {name:"Jon", children: [] }
    ]

    const rickardsChildren :Person [] = [
        {name:"Benjen", children: [] },
        {name:"Lyanna", children: [] },
        {name:"Eddard", children: eddardChildren },
        {name:"Brandon", children: []}
    ]
    
    const topPerson :Person = { name: "Rickard",  children: rickardsChildren }

    return topPerson;
}