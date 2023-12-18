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
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-[30rem]"
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
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo)}
              className="mr-2"
            />
            <span
              className={todo.completed ? "line-through text-gray-500" : ""}
            >
              {todo.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
