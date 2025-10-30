<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return Inertia::render('products/Index', compact('products'));
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
        Product::create($request->all());
        return redirect()->route('products.index')->with('message', 'Product created successfully!');
    }
}
