import { Checkbox } from "../packages/checkbox/src";


function App() {
    return (
        <>
            <h1>Concentrix</h1>
            <Checkbox.Root>
                <Checkbox.Input id="default"/>
                <Checkbox.Label htmlFor="default">Default</Checkbox.Label>
            </Checkbox.Root>
        </>
    );
}

export default App;
