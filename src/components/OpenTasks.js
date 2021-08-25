import {connect} from "react-redux";
import '../App.css'
import {useState} from "react";
import MyModal from "./MyModal";
import {deleteOpenTask} from "../store/todo";

function OpenTasks({openTasks, deleteOpenTask}) {

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

    return <div className="col-md-2 text-center text-white mt-3">
        <div className="row bg-secondary p-3 rounded mb-3">
            <div className="col-md-2 offset-9 rounded bg-danger p-1">
                <h5>{openTasks.length}</h5>
            </div>
            <h2>Open</h2>
        </div>
        {openTasks.map(item => <div key={item.id} className={'row mt-1 bg-secondary text-white rounded p-3'}>
            <div className="col-md-10"><h5>{item.body}</h5></div>
            <div className="col-md-2">
                <div className="row cross" onClick={() => deleteOpenTask(item.id)}>❌</div>
                <div className="row pencil" onClick={() => onEdit(item.id)}>✏️</div>
            </div>
        </div>)}
        <div className="row mt-3">
            <button className={'btn btn-dark'} onClick={onAdd}>Add Open Task</button>
        </div>
        {modal ? <MyModal isOpen={modal} toggle={toggle} modalType={modalType} currentStatus={'open'} id={id}/> : ''}
    </div>
}

export default connect(state => ({openTasks: state.openTasks}), {deleteOpenTask})(OpenTasks)