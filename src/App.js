import { 
  createBrowserRouter,
   Route, 
   createRoutesFromElements,
   RouterProvider
  } from "react-router-dom";

import Movies from "./components/Movies";
import TvShows from "./components/TvShows";
import Trending from "./components/Trending";
import RootLayout from "./components/RootLayout";


import ContainerContextProvider from "./components/ContainerContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
    <Route path="/" element={<Movies /> }/>
    <Route path="TvShows" element={<TvShows /> }/>
     <Route path="Trending" element={<Trending /> }/>
  </Route>
  )
)

function App() {
 
  return (
  
   <ContainerContextProvider>
    <div className="App">
      <RouterProvider router={router}/>
    </div>  
    </ContainerContextProvider>
  );
}

export default App;
