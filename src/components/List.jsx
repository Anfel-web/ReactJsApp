import React, { useState } from "react"

const List = (props) => {
    const [listMoyenne,  setListMoyenne] = useState([9, 10, 5, 11, 7, 15])
    const moyGraterThen10 = listMoyenne.filter((moyenne) => moyenne >= 10);
   const sommeMoy  = moyGraterThen10.reduce( (total, currentValue) => total + currentValue, 

0 )
    console.log("moyGraterThen10", moyGraterThen10)
    const deleteElement = (element) => {
        const listMoyAfterDelete = listMoyenne.filter(moy => moy !== element)
        setListMoyenne(listMoyAfterDelete)
    }
    // ...spread

    
    return (
    <div>
        <>
        <p>list moyenne </p>
        {moyGraterThen10.map(i => <p>{i}</p>)}
        moyenne : {sommeMoy}
        <button onClick={() => deleteElement(15)} >delete element</button> 
        <button onClick={() => setListMoyenne([...listMoyenne, 20])} >add element to moyGraterThen10</button> 

        </>
        <hr />
        <div>
            <p>affichage list string</p>
            {props.listString.map(string => {
                return <p>{string}</p>
            })}
        </div>
        <hr />
        <div>
            <p>affichage list person</p>

            {props.listPersons.map(obj => {
                return (
                
                <div>
                    <p>name:
                        {obj.name}</p>
                    {obj.age > 25 ? <p>cheref akber mel 25 Age: {obj.age}</p> : <p>sghir sgher mel 25 Age: {obj.age}</p>}
                    {obj.profession && <p>profession: {obj.profession}</p>}
                </div>)
            })}
        </div>
        <hr />
        <div>
            <p>affichage list Number</p>
            {props.listNumber.map(number => <p>{number}</p>
            )
            }
            <hr />
        </div>
    </div>
    )
}

export default List;
