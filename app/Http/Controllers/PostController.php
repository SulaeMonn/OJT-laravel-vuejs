<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function index()
    {
        $posts = Post::orderBy('id', 'desc')->get();
        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $post = Post::create($request->post());
        return response()->json([
            'message'=>'Post Created Successfully!!',
            'post'=>$post
        ]);
    }

    public function show(Post $post)
    {
        return response()->json($post);
    }

    public function update(Request $request, Post $post)
    {
        $post->fill($request->post())->save();
        return response()->json([
            'message'=>'Post Updated Successfully!!',
            'post'=>$post
        ]);
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json([
            'message'=>'Post Deleted Successfully!!'
        ]);
    }
}