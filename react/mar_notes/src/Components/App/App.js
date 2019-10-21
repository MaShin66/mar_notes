// import React, { Component } from "react";
// // import { Query } from "react-apollo";
// // import { GET_NOTES } from "./queries";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <Query query={GET_NOTES}> { () => null } </Query> */}
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "../../Routes/Notes";
import Note from "../../Routes/Note";
import Add from "../../Routes/Add";
import Edit from "../../Routes/Edit";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/mar_notes/"} component={Notes} />
          <Route path={"/mar_notes/add"} component={Add} />
          <Route path={"/mar_notes/note/:id"} component={Note} />
          <Route path={"/mar_notes/edit/:id"} component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;