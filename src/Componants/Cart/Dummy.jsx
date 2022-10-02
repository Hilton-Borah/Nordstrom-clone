// import React, { useEffect, useState } from 'react'



// function Dummy() {
//     const [count,setCount] = useState(0)

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (count<2){
//                 setCount(seconds => seconds + 1);
//             } else {
//                 setCount(0)

//             }
//         }, 2000);
//         return () => clearInterval(interval);
//       }, []);
//   return (
//     <div>
//       <img src={array[count]} alt="" />
//     </div>
//   )
// }

// export default Dummy


// import React, { useState, useEffect } from 'react';

// const IntervalExample = () => {
//   let [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//         setSeconds(seconds => seconds + 1);
//     }, 1000);
//     return () => clearInterval(interval);
// }, []);

// if (seconds===2){
//     // seconds=0
//     setSeconds(seconds => seconds - 1);
// }
// if (seconds===0){
//     seconds===1
//     // setSeconds(seconds => seconds + 1);
// }
// console.log(seconds)
//   return (
//     <div className="App">
//       <header className="App-header">
//         {seconds} seconds have elapsed since mounting.
//       </header>
//     </div>
//   );
// };

// export default IntervalExample;


// import React, { useState, useEffect } from 'react';
// import { Slide } from 'react-slideshow-image';
// import './Dummy.css';
// import 'react-slideshow-image/dist/styles.css'


// const images = ["./images/nord2.png", "./images/nord3.png","./images/nord4.png"]




// const Example = () => {

//     return (
//         <Slide>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[0]})` }}>
//                 </div>
//             </div>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[1]})` }}>
//                 </div>
//             </div>
//             <div className="each-slide-effect">
//                 <div style={{ 'backgroundImage': `url(${images[2]})` }}>
//                 </div>
//             </div>
//         </Slide>
//     );
// };



// export default Example;
import { Button, useToast, Wrap, WrapItem } from '@chakra-ui/react'
import { useState } from 'react'

 export default function ToastStatusExample() {
    const toast = useToast()
    const status = ['error']
    const [a,sa] = useState(true)
  
    return (
        // {

        // }
      <Wrap>
          <WrapItem>
            <Button
              onClick={() =>
                toast({
                  title: `Doesnot match any card details`,
                  status: status,
                  isClosable: true,
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
      </Wrap>
    )
  }
