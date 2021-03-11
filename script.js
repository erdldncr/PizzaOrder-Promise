const addItemButton=document.querySelector('#add_btn')
const makeOrderButton=document.querySelector('#submit_btn')
const selectPizza=document.querySelector('select')

let pizzaTypes=[{'crust':500},{'sauce':1000},{'mushroom':1500},{'pepperoni':2000},{'cheese':2500},{'mozzarella':3000},{'pineapple':3500}];
let noOfPizza=0
let CookingDuration=[]
let pizzaNames=''


const addItem=async()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(noOfPizza<=10){
        noOfPizza++;
        pizzaNames+=selectPizza.value+', '
       let singlePizzaCookingDuration=pizzaTypes.filter(item=>item[selectPizza.value])[0][selectPizza.value]
        CookingDuration.push(singlePizzaCookingDuration)
        let longestCooking=Math.max(...CookingDuration)
        console.log(`You have to wait ${longestCooking/1000} seconds`)
        console.log(pizzaNames)
          resolve(pizzaNames)
    
      }else{
        reject('I can\'t accept more than 10 items')
      }


    },1000)
  })
 
}


const makeOrder=async (resolvedValue)=>{
  
  return new Promise((resolve,reject)=>{
    
      if(!resolvedValue.split(', ').includes('pineapple')){
        console.log('Your order is in the oven')
  
         resolve('Your pizza is ready '+resolvedValue)
      }else{
        reject('I don\'t like Pniapple')
    
    }
      


  })

}



addItemButton.addEventListener('click', addItem)

// makeOrderButton.addEventListener('click',makeOrder)

makeOrderButton.onclick=async()=>{
  try{
    const items= await addItem()
    const order= await makeOrder(items)
    console.log(order)
  }catch(reject){
    console.log(reject)
  }
}





