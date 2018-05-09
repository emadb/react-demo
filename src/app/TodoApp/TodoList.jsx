function TodoList({todos, onChecked}) {
  return (
    <div className="card col-12">
      <h3>Things todo...</h3>
      <ul>
        {todos.map(t => {
          return (
            <li key={t.id}>
              <input type="checkbox" className="form-check-input" checked={t.done} onChange={() => onChecked(t.id)} />
              <label>{t.text}</label>
            </li>
          )
        })}
       </ul>
    </div>
  );
}

export default TodoList;
