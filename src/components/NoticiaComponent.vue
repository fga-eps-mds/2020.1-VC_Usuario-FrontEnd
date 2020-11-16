<template>
    <div class="noticia">
        <div class="tituloESubTitulo">
            <span>{{titulo}}</span>
            <span>{{subTitulo}}</span>
        </div>

        <div class="divBotoes">
            <button>Ver mais</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'noticia',

    props: {
        titulo: String,
        subTitulo: String,
    },
}
</script>

<style lang="scss">

    .noticia {
        height: auto;
        border-radius: 15px;
        height: 150px;
        padding: 10px;

        border: solid 1px #DADDE0;
    }

    .tituloESubTitulo {
        height: auto;
        /* border: 1px solid red; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;  

        & span:first-child{
            /* width: 70%; */
            padding-right: 30px;
            /* border: 1px solid red; */
            
            font-size: 20px;
            font-weight: bold;
            color: #090673;
        }
    }

    .divBotoes{
        display: flex;
        width: 80%;
        max-width: 300px;
        margin-bottom: 10px;
        
        & button{
            flex: 1;
            height: 30px;
            margin-right: 20px;

            cursor: pointer;
            border: none;
            border-radius: 25px; 
            color: #ffffff;
            background-color: #090673;
        }

        & button:hover{
            background-color: #060449;
        }
    }
</style>