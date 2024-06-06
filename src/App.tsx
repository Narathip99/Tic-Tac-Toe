import Board from "./components/Board";

const App = () => {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">TIC-TAC-TOE</h1>
        <Board />
      </div>
    </div>
  );
};

export default App;
