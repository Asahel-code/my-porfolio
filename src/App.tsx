import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './utils/routes';


const App = () => {

  return (
    <Router>
        <ChakraProvider>
          <Routes>
            {routes?.map((route, key) => (
              <Route
                key={key}
                path={route?.path}
                element={route?.element}
              />
            ))}
          </Routes>
        </ChakraProvider>
    </Router>
  )
}

export default App
