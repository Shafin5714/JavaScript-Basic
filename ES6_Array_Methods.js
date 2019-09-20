// Array With Objects
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  for(let i=0;i<companies.length;i++)
  {
      console.log(companies[i].name);
  }
//   ForEach (loop Through array)

companies.forEach(function(company){
    console.log(company.name);
});

// filter

// let canDrink=[];
// for(i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink);

const canDrink =ages.filter(function(age){
    if(age>=21){
        return true;
    }
});
console.log(canDrink);

// using arrow function
const drink= ages.filter(age=>age>=21);
console.log(drink);



// filter retail companies
const retailCompanies =companies.filter(comp=> comp.category==='Retail');
console.log(retailCompanies);

// get 80s companies
const eightCompanies =companies.filter(com=> com.start<=1990 && com.start>=1979);
console.log(eightCompanies);

// get companies that lasted 10 years
const lastedTenYears=companies.filter(c=>(c.end-c.start)>=10);
console.log(lastedTenYears);

// map

// works for each element 

// create array of company names
const companyName= companies.map(companyn=>companyn.name);
console.log(companyName);

const testMap =companies.map(cp=>`${cp.name} [${cp.start}-${cp.end}]`);

console.log(testMap)

const ageMap =ages.map(age=>Math.sqrt(age)).map(age=>age*2);
console.log(ageMap);



// sort

const sortedCompanies = companies.sort((c1,c2)=>(c1.start>c2.start ? 1:-1));
console.log(sortedCompanies);


// sort ages
const sortedAges= ages.sort((c1,c2)=>(c1-c2));
console.log(sortedAges);


// reduce

let ageSum=0;
for (let i = 0; i < ages.length; i++) {
    ageSum=ageSum+ages[i];
    
}
console.log(ageSum);

//array.reduce( function(total, currentValue, currentIndex, arr), initialValue )

const sumAge =ages.reduce(function(total,age){
    return total+age;
},0);

console.log(sumAge);

// using arrow function
const sumAge2 =ages.reduce((total,age)=>total+age,0);

console.log(sumAge2);


const totalYears= companies.reduce((total,company1)=>total+(company1.end-company1.start),0);
console.log(totalYears);

// Combine 
const combined =ages.map(agen=>agen*2)
.filter(agen=>agen>=40).sort((a,b)=>a-b).reduce((a,b)=>a+b,0);
console.log(combined);