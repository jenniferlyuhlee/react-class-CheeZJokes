import React, { Component } from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

const App = () => {
  return(
    <div className="App">
      {/* <JokeList /> */}
      <JokeList />
    </div>
  )
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <JokeList />
//       </div>
//     );
//   }
// }

export default App;

