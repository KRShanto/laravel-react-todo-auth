import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({ auth }: PageProps) {
  return (
    <div className="mx-auto px-4 py-8 w-[50%]">
      <Head title="Todo App"></Head>

      {auth.user ? (
        <>
          <h1 className="text-4xl font-bold">Welcome, {auth.user.name}!</h1>
          <p className="text-gray-600">Here are some useful links:</p>
          <ul className="list-disc ml-4">
            <li>
              <Link href="/todos" className="text-blue-500 hover:underline">
                My Todos
              </Link>
            </li>
            <li>
              <Link href="/settings" className="text-blue-500 hover:underline">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/logout" className="text-blue-500 hover:underline">
                Logout
              </Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold text-center">
            Welcome to Todo App!
          </h1>

          <p className="text-gray-400 text-xl text-center mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sint
            quod cupiditate, tenetur natus dicta ut id iusto deserunt similique
            totam modi eius repellendus quia? Nulla corporis atque architecto
            labore provident nobis ipsa blanditiis repellat maiores fuga neque,
            repellendus harum iusto aut magnam debitis ipsam recusandae quod
            quia. Officiis, aspernatur?
          </p>
          <ul className="flex justify-center mt-8 gap-10">
            <li>
              <Link
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Register
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
