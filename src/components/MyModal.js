import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {useState} from "react";
import {connect} from "react-redux";
import {
    addOpenTask,
    addInProgressTask,
    addCompletedTask,
    editOpenTask,
    editInProgressTask,
    editCompletedTask
} from "../store/todo";

function MyModal({
                     isOpen,
                     toggle,
                     modalType,
                     currentStatus,
                     id,
                     addOpenTask,
                     addInProgressTask,
                     addCompletedTask,
                     editOpenTask,
                     editInProgressTask,
                     editCompletedTask
                 }) {

    const [inputVal, setInputVal] = useState('')
    const [selectVal, setSelectVal] = useState('')

    function onSubmit() {
        switch (modalType) {
            case 'add':
                if (currentStatus === 'open') addOpenTask(inputVal)
                if (currentStatus === 'inProgress') addInProgressTask(inputVal)
                if (currentStatus === 'completed') addCompletedTask(inputVal)
                break
            case 'edit':
                if (currentStatus === 'open') editOpenTask({id, status: selectVal, body: inputVal})
                if (currentStatus === 'inProgress') editInProgressTask({id, status: selectVal, body: inputVal})
                if (currentStatus === 'completed') editCompletedTask({id, status: selectVal, body: inputVal})
                break
            default:
                return;
        }
        toggle()
    }

    return <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader
            toggle={toggle}>{modalType === 'add' ? 'Add ' + currentStatus + ' task' : 'Edit' + currentStatus + ' task'}</ModalHeader>
        <ModalBody>
            <input type="text" placeholder={'Task body'} className={'form-control'} value={inputVal}
                   onChange={(e) => setInputVal(e.target.value)}/>
            {modalType === 'edit' ?
                <select className={'form-control mt-3'} value={selectVal} onChange={(e) => setSelectVal(e.target.value)}>
                    <option value=''>Choose Task Status</option>
                    <option value="open">Open task</option>
                    <option value="inProgress">In Progress task</option>
                    <option value="completed">Completed</option>
                </select> : ''}
        </ModalBody>
        <ModalFooter>
            <button className={'btn btn-danger'} onClick={toggle}>Close</button>
            <button className={'btn btn-success'} onClick={onSubmit}>Save</button>
        </ModalFooter>
    </Modal>
}

export default connect(null, {
    addOpenTask,
    addInProgressTask,
    addCompletedTask,
    editOpenTask,
    editInProgressTask,
    editCompletedTask
})(MyModal)