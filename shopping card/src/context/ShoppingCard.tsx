import { useContext, createContext, ReactNode, useState } from "react";
import {ShoppingCart} from '../companents/ShoppingCart'


type ShoppingCardProviderProps = {
  children: ReactNode;
};

type ShoppingCardContext ={
  getCardSum :(id:number)=>number,
  increaseSum:(id:number)=>void,
  decreaseSum:(id:number)=>void,
  removeSum:(id:number)=>void,
  openCard:()=>void,
 closeCard:()=>void,
 cardSum:number,
 cardItem:Items[]
}

type Items={id:number,sum:number}

const ShoppingCardContext = createContext({} as ShoppingCardContext);

export function useShoppingCard() {
  return useContext(ShoppingCardContext);
}
export function ShoppingCardProvider({ children }: ShoppingCardProviderProps) {
const[cardItem,setCardItem]= useState<Items[]>([])
const [open,isOpen] = useState(false)
const cardSum = cardItem.reduce((sum,item) => sum + item.sum,0)

const openCard =()=>isOpen(true)
const closeCard =()=>isOpen(false)


// card sum
function getCardSum(id:number){
  return cardItem.find(item => item.id === id)?.sum || 0
}
// increase sum
function increaseSum(id:number){
  setCardItem(items=>{
    if(items.find(item=>item.id === id)==null){
      return [...items,{id, sum:1}]
    }
    else{ 
      return items.map(item=>{
        if(item.id===id){
          return {...item,sum:item.sum+1}
        }
        else{
          return item
        }
      })
    }
  })
}
// decrease sum
function decreaseSum(id:number){
  setCardItem(items=>{
    if(items.find(item=>item.id === id)?.sum ===1){
      return items.filter(item=>item.id !== id)
    }
    else{ 
      return items.map(item=>{
        if(item.id===id){
          return {...item,sum:item.sum-1}
        }
        else{
          return item
        }
      })
    }
  })
}
// remove sum
function removeSum(id:number){
  setCardItem(items=>{
    return items.filter(item=>item.id !==id )
  })
}

  return (
    <ShoppingCardContext.Provider value={{openCard,closeCard,getCardSum,increaseSum,decreaseSum, removeSum,cardItem,cardSum}}>
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCardContext.Provider>
  );
}
