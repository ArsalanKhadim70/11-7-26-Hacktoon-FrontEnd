// // JavaScript XML (JSX)...!

// import React from "react";
import Header from "../../components/header/header";

// const Home = () => {

//   const userName = 'M Ahmed';
//   // console.log(userName);

//   const handleTest = () => {
//     console.log(`Hello ${userName}`);
//   }

//   return (
//     <div>
//       <Header />
//       <h1
//         // style={{ color: "blue" }}
//       > B18 - class </h1>
//       <h2> Hello {userName} </h2>
//       <h3> {2 + 2} </h3>
//       <button onClick={handleTest}> Click Me </button>
//     </div>
//   );
// };

// export default Home;






// import React from 'react';
// import users from "../../utils/dummy-users";

// const Home = () => {

//   const isEdit = true;

//   return (
//     <div>
//       <Header screenName="Home" />
//       <h1> Conditional rendering in React! </h1>

//       {
//         (isEdit)
//         ?
//         ( <h3> Success </h3> )
//         :
//         ( <h3> Not Success </h3> )
//       }
//     </div>
//   );
// };

// export default Home;
























import React, { useState } from 'react';
import Navbar from "../../components/navbar/navbar";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header screenName="Home" />
      {/* <Navbar /> */}
      <h1> Performance Optimization in React! </h1>
      <h2> {count} </h2>

      <button onClick={() => setCount(count + 1)}> Testing </button>
    </div>
  );
};

export default Home;