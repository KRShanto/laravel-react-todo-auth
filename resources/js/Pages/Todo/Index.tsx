import { Head, router, useForm } from "@inertiajs/react";

export default function Todos({ todos }: any) {
  const { data, setData, post } = useForm({
    task: "",
  });

  const handleAddTodo = (e: any) => {
    e.preventDefault();

    post(route("todos.store"));
    setData("task", "");
  };

  const handleToggleComplete = (todo: any) => {
    router.patch(route("todos.update", { id: todo.id }), {
      completed: !todo.completed,
    });
  };

  return (
    <div className="w-[50%] mx-auto px-4">
      <Head title="Todos" />

      <form
        onSubmit={handleAddTodo}
        className="flex items-center justify-between mt-5"
      >
        <input
          type="text"
          value={data.task}
          onChange={(e) => setData("task", e.target.value)}
          required
          className="border border-gray-700 bg-gray-900 text-xl px-5 pr-16 rounded-lg w-[50rem]"
          placeholder="Add a new todo"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Todo
        </button>
      </form>

      <ul className="mt-5">
        {todos.map((todo: any) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 border-b border-gray-200"
          >
            <p
              className={
                todo.completed
                  ? "line-through text-gray-500 text-xl"
                  : "text-xl"
              }
            >
              {todo.task}
            </p>

            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo)}
              className="mr-2 h-5 w-5 rounded"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
