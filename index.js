// "let studentRecords = [ {name: 'John', id: 123, marks : 98 }
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 }
//           {name: 'Wick', id: 115, marks : 75 } ] 

// // "Question 1 : We are interested in retrieving only the 
//name of the
// //  students and all the names should be in caps.

// let studentRecords = [ 
//     {name: 'John', id: 123, marks : 98 },
//     {name: 'Baba', id: 101, marks : 23 },
//     {name: 'yaga', id: 200, marks : 45 },
//     {name: 'Wick', id: 115, marks : 75 } ]
    
//     let res= studentRecords.map((value)=>{
//         return value.name.toUpperCase()
//     })
//     console.log(res);

//     "Question 2: Suppose we have the same dataset as above 
//     but this time we want to get the details of students
//      who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },
// {name: 'Wick', id: 115, marks : 75 }]"

// let studentRecords = [ 
//     {name: 'John', id: 123, marks : 98 },
//     {name: 'Baba', id: 101, marks : 23 },
//     {name: 'yaga', id: 200, marks : 45 },
//     {name: 'Wick', id: 115, marks : 75 } ]
     
//     let res = studentRecords.filter((cv)=>{
//         return cv.marks >50
//     })
//     console.log(res);

    // Question 3: Retrieve the details of students who
    //  scored more than 50 marks and have id greater than 120.


//     let studentRecords = [ 
//         {name: 'John', id: 123, marks : 98 },
//         {name: 'Baba', id: 101, marks : 23 },
//         {name: 'yaga', id: 200, marks : 45 },
//         {name: 'Wick', id: 115, marks : 75 } ]
         
//         let res = studentRecords.filter((cv)=>{
//             return cv.marks >50 && cv.id>120
            
//         })
// console.log(res);
        // let res=studentRecords.map((value)=>{
        //     value.marks >50
        //     value.id> 120
        // })
        // console.log(res);
    

        // Question 4: Consider the same scenario we have discussed 
        
        // above, but this time we would like to know the sum total
        //  of the marks of the students.

        // let studentRecords1 = [ 
        //     {name: 'John', id: 123, marks : 98 },
        //     {name: 'Baba', id: 101, marks : 23 },
        //     {name: 'yaga', id: 200, marks : 45 },
        //     {name: 'Wick', id: 115, marks : 75 } ]

        //     // let total = studentRecords1.map((cv)=>{
        //     //     return cv.marks +
        //     // })

        //     let total = studentRecords1.reduce((acc,cv)=>{
        //        return acc+cv.marks
        //     },1)
        //     console.log(total);

            // Question 5: This time we want to get only the names
            //  of the students who scored more than 50 marks 
            //  from the same dataset used above.


            // let studentRecords2 = [ 
            //     {name: 'John', id: 123, marks : 98 },
            //     {name: 'Baba', id: 101, marks : 23 },
            //     {name: 'yaga', id: 200, marks : 45 },
            //     {name: 'Wick', id: 115, marks : 75 } ]


            //     let result= studentRecords2.map((cv)=>cv.name)
            //     console.log(result);

     // Question 6: This time we are required to print the sum of 
  // marks of the students with id > 120.
    
                
            let studentRecords3 = [ 
                {name: 'John', id: 123, marks : 98 },
                {name: 'Baba', id: 101, marks : 23 },
                {name: 'yaga', id: 200, marks : 45 },
                {name: 'Wick', id: 115, marks : 75 } ]     
            let resu= studentRecords3.filter((cv)=>cv.id>120)
            //.reduce((acc,cv)=>{
             // return  acc+cv.marks
            //},2)
            let sd= studentRecords3.reduce((acc,cv)=>{
                return acc+cv.marks
            },2)
            console.log(resu);
            console.log(sd);
            
            // Question 7: This time we are required to print the total
            //  marks of the students with marks greater than 50 after a 
            //  grace of 15 marks has been added to those students who
            //   scored less than 50.


            let studentRecords4 = [ 
                {name: 'John', id: 123, marks : 98 },
                {name: 'Baba', id: 101, marks : 23 },
                {name: 'yaga', id: 200, marks : 45 },
                {name: 'Wick', id: 115, marks : 75 } ]
                  
                let grace = studentRecords4.map((cv)=>{
                    if (cv.marks <50) {
                        cv.marks+=15
                        
                    }
                    return cv
                }).filter((cv)=>cv.marks>50).reduce((acc,cv)=>acc+cv.marks,0)
                console.log(grace);


                

                // Create 6 objects , each object will have name, class, roll no as
                //  properties. Store these objects in an array of objects. 

                let studentRecords5 = [ 
                    {name: 'John', id: 123, marks : 98 },
                    {name: 'Baba', id: 101, marks : 23 },
                    {name: 'yaga', id: 200, marks : 45 },
                    {name: 'Wick', id: 115, marks : 75 } ]

                    // let obj=studentRecords5.reduce((acc,cv,arr)=>{
                    //    return acc+cv+arr.name.id.marks
                    // },1)
                    // console.log(obj);

                    // let obj = studentRecords5.map((cv,arr)=>
                    // arr.name)
                    // console.log(obj);

                    let obj1 =   {name: 'John', id: 123, marks : 98 }
                   let obj2=     {name: 'Baba', id: 101, marks : 23 }
                  let  obj3       =  {name: 'yaga', id: 200, marks : 45 }
                   let obj4= {name: 'Wick', id: 115, marks : 75 } 

                   let arr1 = []
                   arr1.push(obj1,obj2,obj3,obj4)
                   console.log(arr1);


                  