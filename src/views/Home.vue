<template>
  <Header/>
    <form class="feedPostagens">
      <!-- <h1>{{post.post_title}}</h1> -->
      <div class="col" v-for="post in this.commonPosts" :key="post.id">
        <PostBlock v-bind:title="post.post_title"  v-bind:status="post.post_status" author="Daniel Porto" v-bind:local="post.post_place" v-bind:date="post.post_created_at" />
      </div>
      
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
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 60px;
    }

    .col {
      margin: 0 auto;
      margin-bottom: 20px;
    }
</style>
