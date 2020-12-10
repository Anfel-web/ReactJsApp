import React, { useState } from 'react';
import prixPromotionnn from './functions/prixPromotionnn';
import testt from './functions/testt';
import List from "./components/List";
import Exercice from "./components/Exercice";
function App() {
  const [quantityPortable, setQuantityPortable] = useState(0);
  const [quantityPc, setQuantityPc] = useState(0);
  const [value3, setValue3] = useState(0);
  const [pricePortable, setPricePortable] = useState(0);
  const [pricePc, setPricePc] = useState(0);
  const [priceChargeur, setPriceChargeur] = useState(0);
  const [cliquer, setCliquer] = useState(false);
  const [isAffichier, setIsAffichier] = useState(false);
  const [pcPromotion, setPcPromotion] = useState(0);
  const [portablePromotion, setPortablePromotion] = useState(0);
  const [chargeurPromotion, setChargeurPromotion] = useState(0);
  const prixPc = prixPromotionnn(pricePc, pcPromotion);
  const prixPortable = prixPromotionnn(pricePortable, portablePromotion);
  const prixChargeur = prixPromotionnn(priceChargeur, chargeurPromotion);
  const result = testt(quantityPortable, quantityPc, value3, prixPc, prixPortable, prixChargeur);
  console.log("portablePromotion", portablePromotion)
  const listString = ["saber", "anfel", "ayoub", "wiem"];
  const listNumber = [1, 2, 3, 4];

  const listPersons = [
      { name: "saber", age: 29, profession: "ingénieur" },
      { name: "anfel", age: 24 },
      { age: 29, name: "ayoub", profession: "yekhdem fi gabon" }
  ]
  const listsString = ["saber","anfel"];
  return (
    <div >

      <p>chabchouuub</p>

      <button onClick={() => {
        setQuantityPortable(quantityPortable + 1)
      }}>increment quantity</button>
      <p> {quantityPortable}</p>
      <input value={pricePortable} onChange={(e) => setPricePortable(e.target.value)} />
      <select value={portablePromotion} onChange={(e) => setPortablePromotion(e.target.value)}>
        <option value={10}>10 %</option>
        <option value={20}>20 %</option>
        <option value={30}>30 %</option>
        <option value={40}>40 %</option>
      </select>
      <button onClick={() => {
        setQuantityPortable(quantityPortable - 1)
      }}>decrement quantity</button>
      <br></br>

      <button onClick={() => {
        setQuantityPc(quantityPc + 1)
      }}>increment quantity</button>
      <p> {quantityPc}</p>
      <input value={pricePc} onChange={(e) => setPricePc(e.target.value)} />
      <input value={pcPromotion} onChange={(e) => setPcPromotion(e.target.value)} />
      <button onClick={() => {
        setQuantityPc(quantityPc - 1)
      }}>decrement quantity</button>
      <br></br>

      <button onClick={() => {
        setValue3(value3 + 1)
      }}>increment quantity</button>
      <p>{value3}</p>
      <input value={priceChargeur} onChange={(e) => setPriceChargeur(e.target.value)} />
      <input value={chargeurPromotion} onChange={(e) => setChargeurPromotion
        (e.target.value)} />
      <button onClick={() => {
        setValue3(value3 - 1)
      }}>decrement quantity</button>
      <br></br>

      <button
        onClick={() => {
          setCliquer(true);
        }
        }
        onMouseEnter={() => setIsAffichier(true)}
        onMouseLeave={() => setIsAffichier(false)}
      >
        affichage total
        </button>

      {isAffichier && (
        <div>
          il faut cliquer pour affichier le total
        </div>

      )}

      {cliquer && <p>{result}</p>}
      <hr />
      <List listString={listString} listNumber={listNumber} listPersons={listPersons}/>
      <hr/>
      <Exercice listsString={listsString}/>
    </div>
  );
}



export default App;