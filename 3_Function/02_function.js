// console.log("Day 2 Of JavaScript");

// use loop condition 
// forEach(Function(element,index,array) {} ==> what you print 


const NumberValue = [300,100,200,400]

// .forEach()
const SumNumberValue = NumberValue.forEach((element,index,array) => {
    console.log(element,index,array);
} )
 

// Using variableName.map() ==> 

const ArrrayValue = [200,50,60,70,'Rajan']

ArrrayValue.forEach((el) => {
    console.log(el);

   
})

    // play with Array in the loop function 
    const herors = ['rajan','rampravesh','arvind','aman']
        herors.forEach((element) => {
         console.log(element.toUpperCase());

        }
    )
// using variable.map() ==> 

        herors.map((element)=> {
            console.log(element.toUpperCase());
        })



    // filterMehtod ==> variable.filter() ==> iska use kisi word ko find karne ke liye kiya jata hai 
    const HerosName = ['Ajay','Mithun','Sarukh','Bajrangi','akshay']

    const ArrayHerosName = HerosName.filter((element) => {
      return  element.endsWith('y')
        
    })
        console.log(ArrayHerosName);



    // Another Example  

        const MyFriend = ['Changer','subhash','prince','misraj','arman','raj','raja']

         const FindMyFriendwithFunction = MyFriend.filter((fr) => {
        //  fr.startsWith("ra");
         // return fr.startsWith('a');
            return fr.endsWith('h')
        })
            console.log(FindMyFriendwithFunction);
    
   

         // variable.reduce() ==> array ke under element ko add or all element addition 
        const CartBill = [100,120,300,400,80,1000] // Ans : ==> 2000

        const sumCartBill = CartBill.reduce((prev,cuev) => {
            return prev + cuev;
        })
            console.log(sumCartBill);

 

            const MallItem = [1,3,5,3,1,2,4,6,10];
   
            const CoustOfMallitem = MallItem.reduce((pre,cre) => {
             return pre + cre;
    
             })
                 console.log(CoustOfMallitem);

    // Using of Normal Function 

         MallItem.reduce((prv,crv) => {
         return prv + crv , 0 
     })
         console.log(MallItem);

         // using Variable.reduce() ==> method 
    const MyArayValue = MallItem.reduce((pv,rv) => {
        return pv + rv 
    })
        console.log(MyArayValue);



// variable.every() ==> typeCheck 

const GameScore = [220,350,260,300,400,200]

const GameScoreCheck = GameScore.every((element) => {
        typeof element === 'number'
})
console.log(GameScoreCheck);



// variabl.find() ==> find the value 

const score = [195,200,300,450,360,]

const findValueScore = score.find((el) => {
   return el > 200;
})
console.log(findValueScore);