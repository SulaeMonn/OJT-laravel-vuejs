<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h4>Update User</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="update">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" v-model="user.name" />
                  <div
                    v-if="user.errors.has('name')"
                    v-html="user.errors.get('name')"
                    class="text-danger"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.email"
                  />
                  <div
                    v-if="user.errors.has('email')"
                    v-html="user.errors.get('email')"
                    class="text-danger"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.phone"
                  />
                  <div
                    v-if="user.errors.has('phone')"
                    v-html="user.errors.get('phone')"
                    class="text-danger"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Date Of Birth</label>
                  <input type="text" class="form-control" v-model="user.dob" />
                  <div
                    v-if="user.errors.has('dob')"
                    v-html="user.errors.get('dob')"
                    class="text-danger"
                  />
                </div>
              </div>
              <div class="col-12 mb-2">
                <div class="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="user.address"
                  />
                  <div
                    v-if="user.errors.has('address')"
                    v-html="user.errors.get('address')"
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
  name: "update-user",
  data() {
    return {
      user: new Form({
        name: "",
        email: "",
        phone: "",
        dob: "",
        address: "",
        _method: "patch",
      }),
    };
  },
  mounted() {
    this.showUser();
  },
  methods: {
    async showUser() {
      await this.axios
        .get(`/api/user/${this.$route.params.id}`)
        .then((response) => {
          const { name, email, phone, dob, address } = response.data;
          this.user.name = name;
          this.user.email = email;
          this.user.phone = phone;
          this.user.dob = dob;
          this.user.address = address;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async update() {
      await this.user
        .post(`/api/user/${this.$route.params.id}`, this.user)
        .then((response) => {
          this.$router.push({ name: "userList" });
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
