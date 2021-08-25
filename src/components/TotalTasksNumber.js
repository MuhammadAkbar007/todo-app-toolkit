import {connect} from "react-redux";

function TotalTasksNumber({openTasks, inProgressTasks, completedTasks}) {
    return <div className={'row'}>
        <div className="col-md-12 bg-dark mt-5 text-white text-center rounded p-2">
            <h3> Umumiy tasklar soni :<span
                className={'text-warning'}>{openTasks.length + inProgressTasks.length + completedTasks.length}</span>
            </h3>
        </div>
    </div>
}

export default connect(state => ({
    openTasks: state.openTasks,
    inProgressTasks: state.inProgressTasks,
    completedTasks: state.completedTasks
}))(TotalTasksNumber)