<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index(): \Inertia\Response
    {
        $todos = auth()->user()->todos;
        return Inertia::render('Todo/Index', ['todos' => $todos]);
    }

    public function store(Request $request)
    {
        $formFields = $request->validate([
            'task' => 'required',
        ]);

        $formFields['user_id'] = auth()->id();

        Todo::create($formFields);

        return redirect()->back();
    }

    public function update(Request $request, string $id)
    {
        $todo = Todo::find($id);

        if ($todo->user_id !== auth()->id()) {
            abort(403);
        }

        $todo->update($request->validate([
            'completed' => 'boolean',
        ]));

        return redirect()->back();
    }

    public function destroy(string $id)
    {
        $todo = Todo::find($id);

        if ($todo->user_id !== auth()->id()) {
            abort(403);
        }

        $todo->delete();

        return redirect()->back();
    }
}
