<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Add Post</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="create">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="post.title"
                    name="title"
                  />
                  <div
                    v-if="post.errors.has('title')"
                    v-html="post.errors.get('title')"
                    class="text-danger"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="post.description"
                  />
                  <div
                    v-if="post.errors.has('description')"
                    v-html="post.errors.get('description')"
                    class="text-danger"
                  />
                </div>
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from "vform";

export default {
  name: "add-post",
  data() {
    return {
      post: new Form({
        title: "",
        description: "",
      }),
    };
  },
  methods: {
    async create() {
      await this.post
        .post("/api/post")
        .then((response) => {
          this.$router.push({ name: "postList" });
          Toast.fire({
            icon: "success",
            title: "Created successfully",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
