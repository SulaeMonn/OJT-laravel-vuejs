<template>
    <div class="row">
        <div class="col-12">
            <h4>Post List</h4>
            <div class="row mb-2 justify-content-between">
                <div class="col-2">
                    <router-link
                        :to="{ name: 'postAdd' }"
                        class="btn btn-success"
                        >Create</router-link
                    >
                </div>
                <div class="col-4">
                    <form action="">
                        <div class="input-group">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Search"
                            />
                            <div class="input-group-append">
                                <button class="btn btn-primary" type="submit">
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody v-if="posts.length > 0">
                                <tr v-for="(post, key) in posts" :key="key">
                                    <td>{{ post.id }}</td>
                                    <td>{{ post.title }}</td>
                                    <td>{{ post.description }}</td>
                                    <td>
                                        <router-link
                                            :to="{
                                                name: 'postEdit',
                                                params: { id: post.id }
                                            }"
                                            class="btn btn-success"
                                            >Edit</router-link
                                        >
                                        <button
                                            type="button"
                                            @click="deletepost(post.id)"
                                            class="btn btn-danger"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">
                                        No posts Found.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> -->
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-if="posts.length > 0">
                    <tr v-for="(post, key) in posts" :key="key">
                        <td>{{ post.id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.description }}</td>
                        <td>
                            <router-link
                                :to="{
                                    name: 'postEdit',
                                    params: { id: post.id }
                                }"
                                class="btn btn-success"
                                >Edit</router-link
                            >
                        </td>
                        <td>
                            <button
                                type="button"
                                @click="deletepost(post.id)"
                                class="btn btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td colspan="4" align="center">
                            No posts Found.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "posts",
    data() {
        return {
            posts: []
        };
    },
    mounted() {
        this.getPosts();
    },
    methods: {
        async getPosts() {
            await this.axios
                .get("/api/post")
                .then(response => {
                    this.posts = response.data;
                })
                .catch(error => {
                    console.log(error);
                    this.posts = [];
                });
        }, 
        deletepost(id) {
            if (confirm("Are you sure to delete this post ?")) {
                this.axios
                    .delete(`/api/post/${id}`)
                    .then(response => {
                        this.getPosts();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
};
</script>
