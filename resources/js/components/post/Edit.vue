<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Update Post</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="post.title"
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
                <button type="submit" class="btn btn-primary">Update</button>
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
  name: "update-post",
  data() {
    return {
      post: new Form({
        title: "",
        description: "",
        _method: "patch",
      }),
    };
  },
  mounted() {
    this.showPost();
  },
  methods: {
    async showPost() {
      await this.axios
        .get(`/api/post/${this.$route.params.id}`)
        .then((response) => {
          const { title, description } = response.data;
          this.post.title = title;
          this.post.description = description;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async update() {
      await this.post
        .post(`/api/post/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push({ name: "postList" });
          Toast.fire({
            icon: "success",
            title: "Updated successfully",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
