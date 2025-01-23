import { Toast } from "./Toast";

function App() {
  return (
    <div>
      <Toast.Provider
        toastPosition="top-right"
        onRemove={() => {
          console.log("Removido");
        }}
      >
        <Toast.Trigger asChild>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Mostrar Toast 1
          </button>
        </Toast.Trigger>
        <Toast.Root duration={10000}>
          <Toast.Content>
            <Toast.Close />
            <Toast.Title>Info Message</Toast.Title>
            <Toast.Description>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum
            </Toast.Description>
            <Toast.Confirm onConfirm={() => console.log("OK")}>
              Eu concordo
            </Toast.Confirm>
          </Toast.Content>
        </Toast.Root>
      </Toast.Provider>
    </div>
  );
}

export default App;
