import { Route, Routes } from "react-router-dom";
import AppleTvHome from "./AppleTvHome";
import data from './mainItem.json';
import Collection from "./Collection";
import MLSSeasonPass from "./MLSSeasonPass";

export default function AllRoutes() {
    
    return <>
    <Routes>
      <Route path='/' element={<AppleTvHome />}/>
      <Route path='/season-pass' element={<MLSSeasonPass />}/>
      {
        data.map(item => {
            return <>
            <Route path={item.link} element= {<Collection item = {item} />}/>
            
            </>
        })
      }
    </Routes>
    </>
}