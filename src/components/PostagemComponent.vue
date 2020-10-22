<template>
    <div class="postagem">
        <div class="tituloEStatus">
            <span>{{title}}</span>
            <span>{{status}}</span>
        </div>

        <div class="autor">
            <p>{{author}}</p>
        </div>

        <div class="localEData">
            <p>{{local}}</p>
            <p>{{date}}</p>
        </div>

        <div class="divBotoes">
            <button @click="verMais(id)">Ver mais</button>
            <!-- <button>Apoiar</button> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'postBlock',
    props: {
        title: String,
        status: String,
        author: String,
        local: String,
        date: String,
        id: String,
    },
    methods: {
        verMais(post_id){
            this.$emit('ver-mais', post_id)
        }
    }
}
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/pallete.scss";

    .postagem {
        height: auto;
        border-radius: 15px;
        height: 150px;
        padding: 10px;

        border: solid 1px $colorCinza;
    }
    
    .autor{
        margin-bottom: 10px;
    }

    .tituloEStatus {
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;  

        & span:first-child{
            padding-right: 30px;            
            font-size: 20px;
            font-weight: bold;
            color: $colorAzul;
        }

        & span:last-child{
            color: $colorVermelho;
        }
    }

    .localEData{
        display: flex;
        justify-content: space-between;

        margin-bottom: 20px;
    }

    /* BOTÕES */
    .divBotoes{
        display: flex;
        width: 80%;
        max-width: 300px;
        margin-bottom: 10px;
        
        & button{
            flex: 1;
            height: 30px;

            cursor: pointer;
            border: none;
            border-radius: 25px; 
        }

        & button:first-child{
            margin-right: 20px;
            color: $colorBranca;
            background-color: $colorAzul;
        }

        & button:first-child:hover{
            background-color: $colorAzul;
        }

        /* & button:last-child{
            background-color: $colorBranca;
            border: 1px solid $colorVerde;
        }

        & button:last-child:hover{
            color: $colorBranca;
            background-color: $colorVerde;
        } */
    }
</style>