import { useCatStore } from "../stores/catStore";

export const CatBox = () => {
  const bigCats = useCatStore((state) => state.cats.bigCats);
  const smallCats = useCatStore((state) => state.cats.smallCats);
  const increaseBigCats = useCatStore((state) => state.increaseBigCats);
  const increaseSmallCats = useCatStore((state) => state.increaseSmallCats);
  const summary = useCatStore((state) => state.summary);

  // 这里打印两遍是因为 React 在开发模式的严格模式会导致组件渲染两次，以便检测潜在的问题
  console.log(summary());

  return (
    <div className="box">
      <h1>Cat Box</h1>
      <p>big cats: {bigCats}</p>
      <p>small cats: {smallCats}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>add big cats</button>
        <button onClick={increaseSmallCats}>add small cats</button>
      </div>
    </div>
  );
};
