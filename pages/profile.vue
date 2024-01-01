<template>
    <div></div>
</template>
<script>
export default{
    data(){
        return{

        };
    },
    mounted(){
        let isloggedIn = useCookie("islogged");
    
        if(!isloggedIn.value){
            this.$router.push("./login");
    }
},
};
</script>