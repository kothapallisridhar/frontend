import Counter from "../Counter";
function AppProps() {
  function abc() {
    alert("edupoly");
  }
  return (
    <div className="border border-5 p-3 m-2 border-success">
      <h1>This is App</h1>
      <button onClick={() => alert("Edupoly")}>Parent</button>
      <Counter step={10} a={abc}>
        100
      </Counter>
      <Counter step={5} a={abc}>
        200
      </Counter>
    </div>
  );
}
export default AppProps;
