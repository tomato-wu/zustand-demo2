import { BearBox } from "./components/BearBox";
import { CatBox } from "./components/CatBox";
import { CatBox2 } from "./components/CatBox2";
import { CatController } from './components/CatController'
import {FoodBox } from "./components/FoodBox";

function App() {
  return (
    <div className="container">
      <h1>Zustand Tutorial</h1>
      <div>
        <CatBox />
        {/* <BearBox /> */}
        {/* <CatBox2 /> */}
        {/* <CatController /> */}
        {/* <FoodBox /> */}
      </div>
    </div>
  );
}

export default App;
