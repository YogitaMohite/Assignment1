let a = ["Yogita",
         "Siddhi",
         "Vedika",
         "Shravani",
         "Pragati"
];

/*let myReturnType = a.forEach((element,index)=>console.log(index + ":" +element));//he ky return krt nahi foreach
console.log(typeof myReturnType);*/
/*let result =a.map((element,index)=> {return (index+1)+ ": element"});
console.log(result);*/ 
/*let result =a.map((element,index)=>  index + "->" + element);
console.log(result);*/
let result =a.map((element,index)=>  index + "->" + element.charAt(0).toUpperCase() + element.substring(1));
console.log(result); 

