import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  // Import 'Switch' instead of 'Routes'
import LoginPage from './pages/LoginPage'; // Adjust path if necessary

function App() {
  return (
    <Router>
      <Switch> {/* Use Switch instead of Routes */}
        <Route path="/login" component={LoginPage} />  {/* Use 'component' instead of 'element' */}
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;
