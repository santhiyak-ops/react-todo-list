import TaskCard from "./taskcard";

function TaskList() {
  return (
    <section className="task-list">
      <h2>Today's Tasks</h2>

      <div className="tasks">
        <TaskCard
          title="Complete Assignment"
          description="Finish the React practical assignment"
          status="Pending"
        />

        <TaskCard
          title="Study Java"
          description="Revise Java programming concepts"
          status="In Progress"
        />

        <TaskCard
          title="Read Notes"
          description="Read DBMS semester notes"
          status="Completed"
        />
      </div>
    </section>
  );
}

export default TaskList;