<template>
   <div>
    
    <div class="h-20 w-full shadow-lg flex items-center justify-between p-5">
        <div>
            <NuxtLink :to="list[0].route"><img src="https://preview.colorlib.com/theme/ashion/img/logo.png" alt=""></NuxtLink>
        </div>
        <div class="h-8 w-8 border-2 border-black flex justify-center items-center lg:hidden">
            <i class="fa-solid fa-bars"
            @click="issidebaropen=!issidebaropen"></i>
        </div>
        <div class="hidden lg:block">
            <ul class="flex justify-center items-center gap-3">
                <li v-for="(item,index) in list" :key="index">
                    <NuxtLink :to="item.route">{{item.name}}</NuxtLink>
                </li>
            </ul> 
        </div>
        <div class="hidden lg:flex justify-center items-center gap-3 cursor-pointer">
            <i class="fa-solid fa-magnifying-glass"></i>
            <NuxtLink to="/wishlist" >
                <div class="relative">
                    <i class="fa-solid fa-heart"></i>
                    <div class="bg-black h-3 w-3 absolute -top-1 -right-1 rounded-full text-white text-[8px] flex justify-center items-center">1</div>
                </div>
            </Nuxtlink>  
            <NuxtLink to="/cart" >
                <div class="relative">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="bg-black h-3 w-3 absolute -top-1 -right-1 rounded-full text-white text-[8px] flex justify-center items-center">1</div>   
                </div>
            </NuxtLink>
        </div>
    </div>
    <div class="h-screen fixed top-0 w-full bg-black/80 overflow-hidden z-10 lg:hidden transition-[0.3s]"
    :class="issidebaropen?'-left-0':'-left-full'">
        <div class="bg-white h-screen max-w-[270px] p-5">
            <div class="flex justify-end items-center">
                <div class="h-7 w-7 rounded-full border border-black flex justify-center items-center p-5">
                    <i class="fa-solid fa-xmark"
                    @click="issidebaropen=!issidebaropen"></i>
                </div>
            </div>
            <div class="flex justify-around items-center  mt-5">
                <i class="fa-solid fa-magnifying-glass"></i>
                <NuxtLink to="/wishlist" class="relative">
                    <i class="fa-solid fa-heart"></i>
                    <div class="bg-black h-3 w-3 absolute -top-1 -right-1 rounded-full text-white text-[8px] flex justify-center items-center">1</div>
                </NuxtLink>
                <NuxtLink to="/cart" class="relative">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div class="bg-black h-3 w-3 absolute -top-1 -right-1 rounded-full text-white text-[8px] flex justify-center items-center">1</div>   
                </NuxtLink>
            </div>
            <div>
                <div class="mt-5">
                    <img src="https://preview.colorlib.com/theme/ashion/img/logo.png" alt="">
                </div>
                <div>
                    <ul class="flex flex-col justify-center items-start gap-3 mt-5 font-semibold">
                        <li v-for="(item,index) in list" :key="index">
                            <NuxtLink :to="item.route">{{item.name}}</NuxtLink>
                        </li>
                    </ul> 
                </div>
                <div class="flex justify-around items-center mt-5 ">
                   <div class="w-20 h-10 bg-slate-500 p-5 flex justify-center items-center"><NuxtLink to="/login">Login</NuxtLink></div> 
                    <div class="w-20 h-10 bg-slate-500 p-5 flex justify-center items-center "><NuxtLink to="/register">SignUp</NuxtLink> </div>
                </div>
            </div>
        </div>
    </div>
   </div>
    
</template>
<script>
export default{
    data(){
        return{
            list:[{
                name:'Home',
                route:'/',
            },
            {
                name:'Contact',
                route:'/contact',
            },
            {
                name:"Product",
                route:"/Product",
            },
            {
                name:"Categories",
                route:"/Categories",
            }
            
        ],
        issidebaropen:false,
        };
    }
}
</script>