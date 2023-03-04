import React from 'react';

 const Hello = () => {
     return(
         <div>
             <h1>HI ALL</h1>
         </div>
     )


//Without JSX
//return React.createElement('div', null, '<h1>HI ALL<\h1>')
//Output : <h1>HI ALL<\h1>

//return React.createElement(return React.createElement('h1', null, 'HI ALL'))
//Output : HI ALL in h1
//attribute given as null - contains key-value pairs eg. id:"hello" or className : "dummyclass"
 
 }
 

export default Hello