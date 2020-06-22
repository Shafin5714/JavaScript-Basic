 //ES5

 var john =['John',26];
 var name =john[0];
 var age = john[1]
 console.log(age);
 
 
 //ES6
 const [name2 ,year]=['John',26]
 console.log(name2);
 
 
 ///Using in Objects
 
 const obj ={
     firstName:'John',
     lastName:'Smith'
 };
 const {firstName,lastName}=obj;
 console.log(firstName);
 console.log(lastName);
 
 //Using different names
 
 const{firstName:a ,lastName:b}=obj;
 console.log(a);


 const product ={
    label: 'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined
}
const {label:productLabel,price,stock,salePrice }= product //renamed the variable label:product label
//we can rename the variable we can use different name

console.log(productLabel);

 
 
 //in function
 
 function calculateAge(year2){
     var age2 =new Date().getFullYear()-year2;
     return [age2,65-age2]  //returning 2 values use array
 }
 
 const [currentAge ,yearsLeft]=calculateAge(1990);
 
 console.log(currentAge);
 console.log(yearsLeft);
 
 

//  nested objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  
  
  const {today:{low:lowToday,high:highToday}} = LOCAL_FORECAST
    
  console.log(lowToday);
  console.log(highToday);
  
  
const profileInfo = ({name,age,nationality,Location})=>{
    console.log(name,age,nationality,Location);
}

 let profileData = {
     name:"Shafin",
     age:25,
     nationality:"Bangladeshi",
     Location:"Dhaka,Bangladesh"
 }
 profileInfo(profileData)

 