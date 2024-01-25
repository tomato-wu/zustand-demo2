import { BearBox } from "./components/BearBox";
import { CatBox } from "./components/CatBox";
import { CatBox2 } from "./components/CatBox2";
import { CatController } from './components/CatController'
import {FoodBox } from "./components/FoodBox";

function App() {
  return (
    <div className="container">
      <h1>Zustand 例子</h1>
      <div>
        {/* 基本使用 */}
        <CatBox />
      </div>

      <br />
      {/* ================================================================================================== */}

      <div>
        <BearBox />
        <FoodBox />
        <br />
      </div>
      {/* ================================================================================================== */}
      <br />

      <div>
        <CatBox2 />
        <CatController />
      </div>
    </div>
  );
}

export default App;
