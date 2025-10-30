<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        return Inertia::render('products/Index', []);
    }
    public function create()
    {
        return Inertia::render('products/Create', []);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'description' => 'nullable',
        ]);
        return redirect()->route('products.index')->with('message', 'Product created successfully!');
    }
}
