function TodoStats({done, notDone}) {
  return (
  <div className="card">
    <h3>Stats</h3>
    <div>
      <h4>Done</h4>
      <p>{done}</p>
    </div>
    <div>
      <h4>Not Done</h4>
      <p>{notDone}</p>
    </div>
  </div>)
}

export default TodoStats