import TotalTasksNumber from "./components/TotalTasksNumber";
import OpenTasks from "./components/OpenTasks";
import InProgressTasks from "./components/InProgressTasks";
import CompletedTasks from "./components/CompletedTasks";

function App() {
    return (
        <div className="container">
            <TotalTasksNumber/>
            <div className="row">
                <OpenTasks/>
                <InProgressTasks/>
                <CompletedTasks/>
            </div>
        </div>
    );
}

export default App;