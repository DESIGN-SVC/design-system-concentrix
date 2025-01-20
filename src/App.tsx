import { Content, Provider, Root, Trigger, Wrapper } from "./Toast";

function App() {
  return (
    <>
      <h1>Concentrix</h1>
      <Provider toastPosition="bottom-right">
        <Trigger>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Mostrar Toast 1
          </button>
        </Trigger>
        <Wrapper>
          <Root
            onRemove={() => {
              console.log("Removido");
            }}
            duration={10000}
          >
            <Content
              title={"Info Message asdasd"}
              message={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "
              }
            />
          </Root>
        </Wrapper>
      </Provider>
     
    </>
  );
}

export default App;
