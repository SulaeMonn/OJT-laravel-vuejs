<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add User</h4>
                </div>
                <div class="card-body">
                    <form
                        @submit.prevent="create"
                        enctype="multipart/form-data"
                    >
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="user.name"
                                    />
                                    <div v-if="user.errors.has('name')" v-html="user.errors.get('name')" class="text-danger" />
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
                                    <div v-if="user.errors.has('email')" v-html="user.errors.get('email')" class="text-danger" />
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        v-model="user.password"
                                    />
                                    <div v-if="user.errors.has('password')" v-html="user.errors.get('password')" class="text-danger" />
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        v-model="user.password_confirm"
                                    />
                                    <div v-if="user.errors.has('password_confirm')" v-html="user.errors.get('password_confirm')" class="text-danger" />
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Type</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="user.type"
                                    />
                                    <div v-if="user.errors.has('type')" v-html="user.errors.get('type')" class="text-danger" />
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
                                    <div v-if="user.errors.has('phone')" v-html="user.errors.get('phone')" class="text-danger" />
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Date Of Birth</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        v-model="user.dob"
                                    />
                                    <div v-if="user.errors.has('dob')" v-html="user.errors.get('dob')" class="text-danger" />
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Address</label>
                                    <textarea
                                        type="date"
                                        class="form-control"
                                        v-model="user.address"
                                    ></textarea>
                                    <div v-if="user.errors.has('address')" v-html="user.errors.get('address')" class="text-danger" />
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Profile</label>
                                    <input
                                        type="file"
                                        name="profile"
                                        class="form-control-file"
                                        id="profile"
                                        @change="onFileChange"
                                    />
                                    <div v-if="user.errors.has('profile')" v-html="user.errors.get('profile')" class="text-danger" />
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">
                                    Save
                                </button>
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
    name: "add-user",
    data() {
        return {
            user: new Form({
                name: "",
                email: "",
                password: "",
                password_confirm: "",
                type: "",
                phone: "",
                dob: "",
                address: "",
                profile: ""
            })
        };
    },
    methods: {
        onFileChange(event) {
            this.user.profile = event.target.files[0];
        },
        async create() {
            let formData = new FormData();

            formData.append("name", this.user.name);
            formData.append("email", this.user.email);
            formData.append("password", this.user.password);
            formData.append("password_confirm", this.user.password_confirm);
            formData.append("type", this.user.type);
            formData.append("phone", this.user.phone);
            formData.append("dob", this.user.dob);
            formData.append("address", this.user.address);
            formData.append("profile", this.user.profile);

            await this.user
                .post("/api/user", formData)
                .then(response => {
                    this.$router.push({ name: "userList" });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
