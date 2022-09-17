import React from 'react'

function TODOList() {
    const myTodo = [
        { id: 1, description: "Create a new todo", completed: false },
        { id: 2, description: "Update an existing todo", completed: false },
        { id: 3, description: "Delete an existing todo", completed: false },
    ];
    const [todos, setTodos] = React.useState(myTodo);
    const [newTodo, setNewTodo] = React.useState("");
    
    const getNextId = ( ( id ) => () => ++id )( 3 );
    function handleDelete( id ) {
        console.log("Just Clicked "+ id );
    }
    function addNewTodo( e ) {
        e.preventDefault();
        const myNewTodo = {
            id: getNextId(),
            description: newTodo,
            completed:false
        }
        const nowTodos = [...todos, myNewTodo];
        console.log( nowTodos );
        setTodos( nowTodos );
        setNewTodo( "" );
    }
   
  return (
    <div className="App">
      <h2>Add Todos</h2>
      <form onSubmit={addNewTodo}>
        <label>
          Description:
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </label>
        <input type="submit" value="Add todo"/>
      </form>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.description}</strong>
            <label>
              Completed?
              <input
                type="checkbox"
                onChange={(e) => console.log(todo.id, e.target.checked)}
                checked={todo.completed}
              />
            </label>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TODOList