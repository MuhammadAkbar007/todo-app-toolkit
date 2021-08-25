import {connect} from "react-redux";
import {useState} from "react";
import MyModal from "./MyModal";
import {deleteCompletedTask} from "../store/todo";

function CompletedTasks({completedTasks, deleteCompletedTask}) {

    const [modal, setModal] = useState(false)
    const [modalType, setModalType] = useState('')
    const [id, setId] = useState(0)

    function toggle() {
        setModal(prev => !prev)
    }

    function onAdd() {
        setModal(true)
        setModalType('add')
    }

    function onEdit(id) {
        setId(id)
        setModalType('edit')
        setModal(true)
    }

    return <div className="col-md-2 offset-3 text-center text-white mt-3">
        <div className="row bg-success rounded p-3 mb-3">
            <div className="col-md-2 offset-9 rounded bg-danger p-1">
                <h5>{completedTasks.length}</h5>
            </div>
            <h2>Completed</h2>
        </div>
        {completedTasks.map(item => <div key={item.id} className={'row mt-1 bg-success text-white rounded p-3'}>
            <div className="col-md-10"><h5>{item.body}</h5></div>
            <div className="col-md-2">
                <div className="row cross" onClick={() => deleteCompletedTask(item.id)}>❌</div>
                <div className="row pencil" onClick={() => onEdit(item.id)}>✏️</div>
            </div>
        </div>)}
        <div className="row mt-3">
            <button className={'btn btn-dark'} onClick={onAdd}>Add Completed Task</button>
        </div>
        {modal ?
            <MyModal isOpen={modal} toggle={toggle} modalType={modalType} currentStatus={'completed'} id={id}/> : ''}
    </div>
}

export default connect(state => ({completedTasks: state.completedTasks}), {deleteCompletedTask})(CompletedTasks)