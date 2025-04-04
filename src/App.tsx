import { Button } from "../packages/button/src";
import { Gear } from "../packages/icons/src";

function App() {
    return (
        <>
            <h1>Concentrix</h1>
            <Button.Root appearance='primary' size='large'>
                <Button.Icon>
                    <Gear />
                </Button.Icon>
                <Button.Text>Label</Button.Text>
            </Button.Root>
        </>
    );
}

export default App;
