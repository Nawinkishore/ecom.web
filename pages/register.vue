<template>
    <div>
      <navbar />
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create an Account</h2>
            </div>
          
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <div class="space-y-6" >
                <div>
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                  <div class="mt-2">
                    <input type="text" v-model="userData.name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
                <div>
                    <label for="email"  type="Number" class="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                    <div class="mt-2">
                      <input type="email" v-model="userData.phone" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                      <input type="email" v-model="userData.email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                  </div>
          
                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" type="password"  class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                   
                  </div>
                  <div class="mt-2">
                    <input type="password" v-model="userData.password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  </div>
                </div>
          
                <div>
                  <button type="submit" @click="register()" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                </div>
              </div>
          
              <p class="mt-10 text-center text-sm text-gray-500">
                Already a member?
                <NuxtLink to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">login</NuxtLink>
              </p>
            </div>
          </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      userData:{
        name: "",
        email: "",
        password: "",
        phone: "",
      },
    };
  },
  methods:{
    register(){
      this.$http.$post('/auth/register',{
        body:{
          ...this.userData,
        }
      }).then((res) => {
        if(res.success){
          
        this.$router.push("/login");
        }
        else{
          alert(res.message);
        }
      });
    },
  },
};
</script>