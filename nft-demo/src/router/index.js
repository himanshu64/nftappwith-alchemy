import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeComponents from '../components/home-components';
import MinterView from '../components/mint';
import CollectionView from '../components/collection';
import HomeLayout from '../layouts';


const AppRouter = () => {
    return (
        <BrowserRouter>
          <div>
           <HomeLayout>
            <div className="main-content">
             
                <Routes>
                 <Route element={<HomeComponents/>} path="/" exact={true} />
                 <Route exact path='/minter' element={<MinterView />}></Route>
                 <Route exact path='/collections' element={<CollectionView />}></Route>
                 <Route component={() => <Navigate to="/" />} />
                </Routes>
              
            </div>
            </HomeLayout>
          </div>
        </BrowserRouter>
      );
}

export default AppRouter;