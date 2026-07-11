import React, { useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
} from "mdb-react-ui-kit";

const Todo = () => {
    const [todoInput, setTodoInput] = useState('');
    const [todoArr, setTodoArr] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [targetKey, setTargetKey] = useState('');

    const addItem = () => {
        const cloneTodos = [...todoArr];
        cloneTodos.push(todoInput);
        setTodoArr(cloneTodos);
        setTodoInput('');
    };

    const deleteItem = (key) => {
        const cloneTodos = [...todoArr];
        cloneTodos.splice(key, 1);
        setTodoArr(cloneTodos);
    };

    const editItem = (key) => {
        const targetVal = todoArr[key];
        setTargetKey(key);
        setTodoInput(targetVal);
        setIsEdit(true)
    };

    const updateItem = () => {
        const cloneTodos = [...todoArr];
        cloneTodos.splice(targetKey, 1, todoInput);
        setTodoArr(cloneTodos);
        setTodoInput('');
        setIsEdit(false);
        setTargetKey('');
    }

    return (
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex justify-content-center align-items-center">
                    <MDBCol lg="9" xl="7">
                        <MDBCard className="rounded-3">
                            <MDBCardBody className="p-4">
                                <h4 className="text-center my-3 pb-3">To Do App</h4>
                                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                                    <MDBCol size="12">
                                        <MDBInput
                                            label="Enter a task here"
                                            id="form1"
                                            type="text"
                                            value={todoInput}
                                            onChange={(e) => setTodoInput(e.target.value)}
                                        />
                                    </MDBCol>
                                    <MDBCol size="12">
                                        {
                                            (isEdit)
                                                ?
                                                (
                                                    <MDBBtn onClick={updateItem}>
                                                        Update Item
                                                    </MDBBtn>
                                                )
                                                :
                                                (
                                                    <MDBBtn onClick={addItem}>
                                                        Add Item
                                                    </MDBBtn>
                                                )
                                        }
                                    </MDBCol>
                                    <MDBCol size="12">
                                        <MDBBtn
                                            color="warning"
                                            onClick={() => setTodoArr([])}
                                        >
                                            Delete All
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                                <MDBTable className="mb-4">
                                    {
                                        todoArr.length > 0 &&
                                        <MDBTableHead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Todo item</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </MDBTableHead>
                                    }
                                    <MDBTableBody>
                                        {
                                            todoArr?.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <th scope="row"> {index + 1} </th>
                                                        <td> {item} </td>
                                                        <td> {new Date().toLocaleTimeString()} </td>
                                                        <td>
                                                            <MDBBtn
                                                                color="danger"
                                                                onClick={() => deleteItem(index)}
                                                                disabled={isEdit}
                                                            >
                                                                Delete
                                                            </MDBBtn>

                                                            <MDBBtn
                                                                color="success"
                                                                className="ms-1"
                                                                onClick={() => editItem(index)}
                                                            >
                                                                Edit
                                                            </MDBBtn>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
};

export default Todo;