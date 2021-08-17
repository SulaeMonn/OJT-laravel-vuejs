<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index(Request $request)
    {
        if($request->search){
            return User::where('name', 'like', '%' . $request->search . '%')
            ->orderBy('id', 'desc')->paginate(5);
        }else{
            $users = User::orderBy('id', 'desc')->paginate(5);
            return response()->json($users);
        }
        
    } 

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'password_confirm' => 'required|same:password',
            'type' => 'required',
            'phone' => 'required',
            'dob' => 'required',
            'address' => 'required',
            'profile' => 'required',
        ]);
        $user = new User();
        if($request->hasFile('profile'))
        {
            // $imagePath = $request->file('profile');
            $imageName = $request->profile->getClientOriginalName();
            $request->file('profile')->storeAs('uploads', $imageName, 'public');
            $user->profile = $imageName;
            
        } 

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->type = $request->type;
        $user->phone = $request->phone;
        $user->dob = $request->dob;
        $user->address = $request->address;
        $user->save();

        return response()->json(['success'=>'File uploaded successfully.']);
        // $user = User::create($request->post());
        // return response()->json([
        //     'message'=>'User Created Successfully!!',
        //     'user'=>$user
        // ]);
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(Request $request, User $user)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'type' => 'required',
            'phone' => 'required',
            'dob' => 'required',
            'address' => 'required',
            'profile' => 'required',
        ]);
        $user->fill($request->post())->save();
        return response()->json([
            'message'=>'User Updated Successfully!!',
            'user'=>$user
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            'message'=>'User Deleted Successfully!!'
        ]);
    }
}