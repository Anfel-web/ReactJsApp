import React , {useState} from "react"

const Exercice =() => {
    const [listsString, setListsString] = useState (["saber","anfel","wiem"]);
    const [ajouter,setAjouter]=useState();
    
    const deleteElement = (element)=> {
        const listDelete = listsString.filter(list =>list !== element)
        setListsString(listDelete)
    }
    return (
        <div>
            <p>affichage  la list string</p>
            {listsString.map(string => {
    return (<div><p>{string}</p><button onClick={() =>deleteElement(string)}>delete element</button></div>
            )})}
            
            <input value={ajouter} onChange= {(e)=> setAjouter(e.target.value)} />
            <button onClick={() => setListsString([...listsString,ajouter])} >add element to  listsString</button>
            
        <div>
        {listsString.length === 0 ? <p>empty list</p> : <div>{listsString.map(string => {
                return (<div><p>{string}</p><button onClick={() => deleteElement(string
                    )}>delete element</button></div>
            )   
            }
            )}</div>}
        </div>
              

        
    </div>
          )
}

export default Exercice;
