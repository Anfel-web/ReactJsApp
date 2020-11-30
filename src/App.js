import React ,{useState} from 'react';
import prixPromotionnn from './functions/prixPromotionnn';
import testt from './functions/testt';

function App() {
  const [quantityPortable,setQuantityPortable]=useState(0);
  const [quantityPc,setQuantityPc]=useState(0);
  const [value3,setValue3]=useState(0);
  const [pricePortable,setPricePortable]=useState(0);
  const [pricePc,setPricePc]=useState(0);
  const [priceChargeur,setPriceChargeur]=useState(0);
  const [cliquer,setCliquer]=useState(false);
  const [isAffichier,setIsAffichier]=useState(false);
  const [pcPromotion,setPcPromotion]=useState(0);
  const [portablePromotion,setPortablePromotion]=useState(0);
  const [chargeurPromotion,setChargeurPromotion]=useState(0);
  const prixPc= prixPromotionnn(pricePc,pcPromotion);
  const prixPortable= prixPromotionnn(pricePortable,portablePromotion);
  const prixChargeur=prixPromotionnn(priceChargeur,chargeurPromotion);
  const result= testt(quantityPortable,quantityPc,value3, prixPc,prixPortable,prixChargeur);
 
  
return (
    <div >
      <p>chabchouuub</p>
    
               <button onClick={() =>{
                  setQuantityPortable(quantityPortable+1)
                }}>increment quantity</button>
                <p> {quantityPortable}</p>
                <input value={pricePortable} onChange= {(e)=> setPricePortable(e.target.value)} />
                <input value={portablePromotion} onChange= {(e)=> setPortablePromotion(e.target.value)} />
                <button onClick={() => {
                  setQuantityPortable(quantityPortable -1)
                }}>decrement quantity</button>
               <br></br>

                <button onClick={() =>{
                  setQuantityPc(quantityPc +1)
                }}>increment quantity</button>
                <p> {quantityPc}</p>
                <input value={pricePc  } onChange= {(e)=> setPricePc(e.target.value)} />
                <input value={pcPromotion} onChange= {(e)=> setPcPromotion(e.target.value)} />      
                <button onClick={() => {
                  setQuantityPc(quantityPc -1)
                }}>decrement quantity</button>
                <br></br>

                <button onClick={() =>{
                  setValue3(value3 +1)
                }}>increment quantity</button>
                <p>{value3}</p>
                <input value={priceChargeur} onChange= {(e)=> setPriceChargeur(e.target.value)} />
                <input value={chargeurPromotion} onChange= {(e)=> setChargeurPromotion
                  (e.target.value)} />
                <button onClick={() => {
                  setValue3(value3 -1)
                }}>decrement quantity</button>
                 <br></br>

        <button
         onClick={() =>{
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

       <p>testt égale :{result}</p>

  </div>
  );
}



export default App;