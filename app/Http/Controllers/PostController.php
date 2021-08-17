<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Imports\PostsImport;
use App\Exports\PostsExport;
use Maatwebsite\Excel\Facades\Excel;

class PostController extends Controller
{

    public function index(Request $request)
    {
        if($request->search){
            return Post::where('title', 'like', '%' . $request->search . '%')
            ->orderBy('id', 'desc')->paginate(5);
        }else{
            $posts = Post::orderBy('id', 'desc')->paginate(5);
            return response()->json($posts);
        }
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|unique:posts',
            'description' => 'required',
        ]);
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
        $this->validate($request, [
            'title' => 'required',
            'description' => 'required',
        ]);
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

    public function import(Request $request)
    {
        //  $request->validate([
        //     'import_file' => 'required|file|mimes:xls,xlsx'
        // ]);
        Excel::import(new PostsImport,request()->file('file'));
           
        return response()->json([
            'message'=>'Post Upload Successfully!!'
        ]);
    }

    public function export() 
    {
        return Excel::download(new PostsExport, 'posts.xlsx');
    }

}