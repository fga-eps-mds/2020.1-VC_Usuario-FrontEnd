<template>

    <Header/>

    <div class="divFormListarPostagem">
    <tr v-for="postagem of postagens" :key="postagem._id">
        <h1>{{postagem.post_title}}</h1>
        <h1>{{postagem.post_category}}</h1>
        <h1>{{postagem.post_description}}</h1>
        <h1>{{postagem.post_place}}</h1>
        <h1>{{postagem.post_status}}</h1>
    </tr>
    </div>

    <MenuBar/>

</template> 

<script>

import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import Postagem from '@/services/postagens.js'

export default {
    name: 'CriarPostagem',

    components: {
        Header,
        MenuBar
    },

    data(){
        return{
            postagens: []
        }
    },
    
    mounted(){
        Postagem.listarUmaPostagem().then(res => {
            console.log(res.data)
            this.postagens = res.data;
        })
    },

  
}
</script>

<style scoped lang="scss">
@import "../assets/stylesheets/pallete.scss";

    .divFormListarPostagem{
        margin-top: 45px;
        max-width: 900px;
        font-size: 10px;
        color: $colorPreta;
    }
</style>