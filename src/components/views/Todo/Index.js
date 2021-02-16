import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { addTodo, clearTodo } from '../../redux'
import '../../css/todo/index.css';
import useTitle from '../../hooks/useTitle';

function Index(props) {

    useTitle('Todo App')
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    
    const propsData = props.todos;

    const handleOnSubmit = ()=>{
        if(data.length == ''){
            setError('Text is Required!');
            return;
        }
        props.addTodoInList(data);
        setData('')
    }

    useEffect(()=>{

    }, [])

    return (
        <>
            <ol type="1">
                {
                    propsData.map((item, index)=>{
                        return <li  style={{textAlign:'left'}} key={index}>{item}</li>
                    })
                }
            </ol>
            <textarea 
                type='text'
                className="text-area" 
                placeholder="Enter Todo Title" 
                value={data} 
                onChange={
                    (e)=>{setData(e.target.value)
                        setError('');
                    }} 
            />
            <div>
                {error?<span className="error-msg">{error}</span>:null}
            </div>
            <div>
                <button className="add-todo-button" onClick={handleOnSubmit}><strong>Add Todo</strong></button>
                <button className="clear-todo-button" onClick={props.clearTodoList}><strong>Clear Todos</strong></button>
            </div>
        </>
    )
}

const mapStateToProps = (state)=>{
    return {
        todos: state.todo.todos
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addTodoInList: (data)=>dispatch(addTodo(data)),
        clearTodoList: ()=>dispatch(clearTodo())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (Index)
