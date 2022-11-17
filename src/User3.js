


import React from 'react'

// const User3 = ({name}) => {  /*props with destraction*/ 
//   return (<>
//     <div>User3  from function</div>
//     <h1> my name is {name}</h1>
//     </>
//   )
// }


const User3 = (props) => {  /*props*/ 
  return (<>
    <div>User3  from function</div>
    <h1> my name is {props.name}and im aged  {props.age}</h1>
    </>
  )
}
export default User3