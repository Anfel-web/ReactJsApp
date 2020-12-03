import React from "react"

const List = () => {
    const listString = ["saber", "anfel", "ayoub", "wiem"];
    const listNumber = [1, 2, 3, 4];
    const listPersons = [
        { name: "saber", age: 29, profession: "ingénieur" },
        { name: "anfel", age: 24 },
        { age: 29, name: "ayoub", profession: "yekhdem fi gabon" }
    ]
    return (<div>
        <hr />
        <div>
            <p>affichage list string</p>

            {listString.map(string => {
                return <p>{string} </p>
            })}
        </div>
        <hr />
        <div>
            <p>affichage list person</p>

            {listPersons.map(obj => {
                return (<div>
                    <p>Name: {obj.name}</p>
                    {obj.age > 25 ? <p>cheref akber mel 25 Age: {obj.age}</p> : <p>sghir sgher mel 25 Age: {obj.age}</p>}
                    {obj.profession && <p>profession: {obj.profession}</p>}
                </div>)
            })}
        </div>
    </div>)
}

export default List;
