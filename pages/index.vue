    <template>
        <div class="overflow-hidden">
            <navbar />
            <!-- Categories -->
            <section>
                <div class="w-full min-h-screen grid lg:grid-cols-2 gap-4">
                  <div
                    class="h-[300px] lg:h-full w-full bg-[#fae3d9] flex flex-col justify-center p-5"
                  >
                    <h1 class="text-2xl mb-3 font-bold">Women's Fashion</h1>
                    <p class="text-sm mb-5">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                      deleniti in qui quaerat animi ipsum corrupti sunt tempora
                      necessitatibus fugiat?
                    </p>
                    <span
                      class="font-medium underline decoration-2 decoration-red-500 underline-offset-8"
                      >Shop Now</span
                    >
                  </div>
                  <div class="grid sm:grid-cols-2 h-full w-full gap-4">
                    <div
                      class="h-[300px] lg:h-full w-full bg-[#bee2d6] flex flex-col justify-center p-5"
                    >
                      <h1 class="text-2xl mb-3 font-bold">Men's Fashion</h1>
                      <p class="text-sm mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                        deleniti in qui quaerat animi ipsum corrupti sunt tempora
                        necessitatibus fugiat?
                      </p>
                      <span
                        class="font-medium underline decoration-2 decoration-red-500 underline-offset-8"
                        >Shop Now</span
                      >
                    </div>
                    <div
                      class="h-[300px] lg:h-full w-full bg-[#d6d3f0] flex flex-col justify-center p-5"
                    >
                      <h1 class="text-2xl mb-3 font-bold">Kid's Fashion</h1>
                      <p class="text-sm mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                        deleniti in qui quaerat animi ipsum corrupti sunt tempora
                        necessitatibus fugiat?
                      </p>
                      <span
                        class="font-medium underline decoration-2 decoration-red-500 underline-offset-8"
                        >Shop Now</span
                      >
                    </div>
                    <div
                      class="h-[300px] lg:h-full w-full bg-[#fedbe4] flex flex-col justify-center p-5"
                    >
                      <h1 class="text-2xl mb-3 font-bold">Cosmetics</h1>
                      <p class="text-sm mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                        deleniti in qui quaerat animi ipsum corrupti sunt tempora
                        necessitatibus fugiat?
                      </p>
                      <span
                        class="font-medium underline decoration-2 decoration-red-500 underline-offset-8"
                        >Shop Now</span
                      >
                    </div>
                    <div
                      class="h-[300px] lg:h-full w-full bg-[#cee2f5] flex flex-col justify-center p-5"
                    >
                      <h1 class="text-2xl mb-3 font-bold">Accessories</h1>
                      <p class="text-sm mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                        deleniti in qui quaerat animi ipsum corrupti sunt tempora
                        necessitatibus fugiat?
                      </p>
                      <span
                        class="font-medium underline decoration-2 decoration-red-500 underline-offset-8"
                        >Shop Now</span
                      >
                    </div>
                  </div>
                </div>
              </section>
              <!-- categories -->

              <!-- New products -->
            <section class=" dark:bg-gray-900 ">
              <div  class="p-20">
               <div class=" flex flex-col md:flex justify-around items-center w-full text-white">
                <div><h1 class="font-bold text-2xl ">New Products</h1></div>
                <div>
                  <ul class="flex items-center justify-center gap-5 font-semibold text-1xl underline decoration-2 decoration-red-600 underline-offset-8">
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kid</li>
                    <li>Cosmetics</li>
                    <li>Accessories</li>

                  </ul>
                </div>
               </div>
               <div v-for="n in 5" :key="n" class="md:grid grid-flow-col ">
                <div class=" mx-auto relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                
                  <a href="#">
                    <img class="h-60 rounded-t-lg object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                  </a>
                  <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
                  <div class="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
                    </a>
                    <div class="mt-2.5 mb-5 flex items-center">
                      <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <div class="flex items-center justify-between">
                      <p>
                        <span class="text-3xl font-bold text-slate-900">$249</span>
                        <span class="text-sm text-slate-900 line-through">$299</span>
                      </p>
                      <a href="#" class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a
                      >
                    </div>
                  </div>
                </div> <div class=" mx-auto relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
                  <a href="#">
                    <img class="h-60 rounded-t-lg object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                  </a>
                  <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
                  <div class="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 class="text-xl font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
                    </a>
                    <div class="mt-2.5 mb-5 flex items-center">
                      <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <div class="flex items-center justify-between">
                      <p>
                        <span class="text-3xl font-bold text-slate-900">$249</span>
                        <span class="text-sm text-slate-900 line-through">$299</span>
                      </p>
                      <a href="#" class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Add to cart</a
                      >
                    </div>
                  </div>
                </div>
               </div>
                
              </div>
            </section>
              <!-- New products -->
<!-- swiper /offer -->
            <section>
              <div class="h-[200px] w-full bg-rose-300 p-10 swiper offerswiper">
               <div class="swiper-wrapper">
                <div v-for="n in 5" :key="n"
                class="flex flex-col justify-center  items-center swiper-slide">
                  <h1 class="text-2xl font-medium">Best Collections</h1>
                  <p class="mt-3 font-bold ">Get 50% offer on your first order  !</p>
                  <p class="mt-3 font-bold underline decoration-2 decoration-red-500 underline-offset-8">Shop Now</p>

                </div>
               </div>
              </div>
            </section>
<!-- swiper /offer -->

        </div>
    </template>
<script>
export default{
  data(){
    return {
      swipper:{
        offerswipper:null,
      },
    };
    
  },
  mounted() {
    this.swipper.offerswiper = new window.Swiper(".offerswiper", {
      autoplay:{
        delay:1000,
        disableonInteraction:false,
      }
    });
  },
}
</script>