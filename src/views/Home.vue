<template>
  <Header/>
    <form class="feedPostagens" v-for="post in this.commonPosts" :key="post.id">
      <!-- <h1>{{post.post_title}}</h1> -->
      <PostBlock v-bind:title="post.post_title"  status="Aguardando" author="Daniel Porto" local="Lago Sul" date="28/09/2020" />
    </form>
    
    <MenuBar/>
</template>

<script>
/* Import dos components */
import Header from '@/components/Header.vue'
import PostBlock from '@/components/PostBlock.vue'
import MenuBar from '@/components/MenuBar.vue'
import Postage from '@/services/postagens.js'

export default {
    name: 'Home',

    data (){
      return {
        commonPosts: { }
      }
    },

    created: function(){
      this.listPosts();
    },

    components: {
      Header,
      PostBlock,
      MenuBar
    },

    methods: {

      listPosts(){
        Postage.listarPostagem().then(Response => {
          console.log(Response);
          this.commonPosts = Response.data.posts;
          console.log(this.commonPosts);
        })
      },

      hw(){
        console.log('ok');
      },
    },
}

</script>

<style scoped lang="scss">

    .feedPostagens{
        margin-top: 60px;
        display: flex;
        justify-content: center;
    }
</style>
