<template>
  <div class="row">
    <div class="col-12">
      <h4>User List</h4>
      <div class="row mb-2 justify-content-between">
        <div class="col-2">
          <router-link :to="{ name: 'userAdd' }" class="btn btn-success"
            >Create</router-link
          >
        </div>
        <div class="col-4">
          <form @submit.prevent="getUsers">
            <div class="input-group">
              <input
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Search"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="submit">Search</button>
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
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <!-- <th>Profile</th> -->
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, key) in users.data" :key="key">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.dob }}</td>
            <td>{{ user.address }}</td>
            <!-- <td><img :src="path + user.profile" height="200px" width="180px"></td> -->
            <td>
              <router-link
                :to="{
                  name: 'userEdit',
                  params: { id: user.id },
                }"
                class="btn btn-success"
                >Edit</router-link
              >
            </td>
            <td>
              <button
                type="button"
                @click="deleteuser(user.id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <pagination :data="users" @pagination-change-page="getUsers"></pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "users",
  data() {
    return {
      search: "",
      users: {},
      path: "storage/uploads/",
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    // searchUser() {
    //     axios.get('/api/user?search=' + this.search)
    //     .then(response => this.users = response.data)
    // },
    async getUsers(page = 1) {
      await this.axios
        .get(`/api/user?page= + ${page} & search=${this.search}`)
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.users = [];
        });
    },
    deleteuser(id) {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          this.axios.delete(`/api/user/${id}`).then((response) => {
            this.getUsers();
            Swal.fire({
              title: "Deleted",
              icon: "success",
            });
          });
        }
      });

      //   if (confirm("Are you sure to delete this user ?")) {
      //     this.axios
      //       .delete(`/api/user/${id}`)
      //       .then((response) => {
      //         this.getUsers();
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       });
      //   }
    },
  },
};
</script>
