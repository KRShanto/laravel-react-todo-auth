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

  const handleDelete = (todo: any) => {
    router.delete(route("todos.destroy", { id: todo.id }));
  };

  return (
    <div className="w-[50%] mx-auto px-4">
      <Head>
        <title>Todo App</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>

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
                  : "text-xl text-slate-300"
              }
            >
              {todo.task}
            </p>

            <div className="flex items-center gap-5">
              <button type="button" onClick={() => handleDelete(todo)}>
                <i className="fas fa-trash text-red-500 hover:text-red-700 text-lg"></i>
              </button>

              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo)}
                className="mr-2 h-5 w-5 rounded"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
