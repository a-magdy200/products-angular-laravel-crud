<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $products = Product::select('id','name','picture','description')->get()->toJson();
        return Response($products, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Display one resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $product = Product::select('id','name','picture','description')->find($id)->toJson();
        return Response($product, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $product = Product::create($request->json()->all());
        return Response($product, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $product = Product::find($id)->update($request->json()->all());
        return Response(json_encode(['response' => $product]), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $product = Product::destroy($id);
        return Response($product, 200);
    }
}
