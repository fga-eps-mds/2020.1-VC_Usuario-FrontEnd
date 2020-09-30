<template>

    <Header/>

    <div class="divFormCriarPostagem">
        <form @submit.prevent="visualizarObjetoFormCriado"> 
            <input class= "baseElemento inputText" type="text" placeholder="Título" v-model="postagem.titulo_post">
            <br><br><br>

            <div class="baseElemento divSelectFields">
                
                <select>
                    <!-- <select v-model="postagem.categoria"> -->
                    <option disabled value="">Categoria</option>
                    <option>Limpeza</option>
                    <option>Segurança</option>
                    <option>Infraestrutura</option>
                    <option>Transportes</option>
                    <option>Serviços Terceirizados</option>
                    <option>Meio Ambiente</option>
                    <option>Jardinagem</option>
                    <option>Alimentação nos campi</option>
                    <option>Saúde e seguridade</option>
                    <option>Abuso de Assédio</option>
                    <option>Outros</option>
                </select>

                <select>
                <!-- <select v-model="postagem.local"> -->
                    <option disabled value="">Local</option>
                    <option>FGA</option>
                    <option>DARCY</option>
                    <option>FCE</option>
                    <option>FUP</option>
                </select>
            </div>
            <br><br>

            <div class="baseElemento divImageFields">
                <input type="file" class="baseElemento" accept="image/png, image/jpeg" @change="imagemSelecionada">

                <!-- <progress class="baseElemento elementoProgress" value="70" max="100">Progress: 0%</progress> -->
            </div>
            <br><br>

            <legend>Descrição</legend>
            <textarea class="baseElemento inputText inputTextArea" rows="5" cols="50" v-model="postagem.descricao"></textarea>
            <br>

            <fieldset>
                <legend>Postagem anônima?</legend>
                <div class="toggle">
                    <input type="radio" value="false" id="idPostNaoAnonimo" checked="checked" v-model="postagem.canPost"/>
                    <label for="idPostNaoAnonimo">Não</label>

                    <input type="radio" value="true" id="idPostSimAnonimo" v-model="postagem.canPost"/>
                    <label for="idPostSimAnonimo">Sim</label>   
                </div>
            </fieldset>
            <br><br><br>

            <div class="baseElemento divBotoes">
                <button type="submit">Criar</button>
                <button onclick='history.go(-1)'>Voltar</button>
            </div>
            <br>
        </form>
    </div>

    <MenuBar/>

</template> 

<script>

import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
/* import Postagem from '@/services/postagens.js' */
/* import HTTP from './services/config.js' */
/* const axios = require('axios') */


export default {
    name: 'CriarPostagem',

    components: {
    Header,
    MenuBar
    },
    data(){
        return{
            postagem: {
                fk_id_usuario: '5f72b06dd02a450038c286f0',
                titulo_post: '',
                /* local: '',
                categoria: '', */ 
                descricao: '',
                canPost: 'false',
                file: null
            }
        }
    },
    
    methods:{

        imagemSelecionada(event){
            console.log(event),
            console.log(event.target.files[0])
            this.postagem.file = event.target.files[0];
        },

        visualizarObjetoFormCriado(){
            console.log(this.postagem)
        },

        /* postagemPost(){

            console.log(this.postagem),

            Postagem.criarPostagem(this.postagem).then(resposta => {
                alert('Salvo com sucesso!')
                console.log(resposta)
            })
        } */
    }
}
</script>

<style scoped lang="scss">

    .baseElemento{
        height: 50px;
        width: 100%;
    }
    
    .divFormCriarPostagem{
        margin-top: 45px;

        & form{
            padding: 30px 20px 120px;
            
            /* border: 1px solid black; */
        }
    }

    .inputText{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        display: block;

        padding: 0;

        font-size: 20px;
        border-bottom: 1px solid #DADDE0; 
    }

    .inputText::placeholder {
        font-size: 20px;
        color: #000000;
    }

    .inputTextArea{
        height: 150px;
        margin-top: 5px;

        font-size: 16px;
        border-radius: 10px;
        border: 1px solid #DADDE0;
    }

    .inputTextArea::placeholder {
        font-size: 16px;
        color: #000000;
    }

    .divSelectFields{
        display: flex;

        height: 40px;
        
        /* border: 1px solid red; */

        & select{
            flex: 1;

            border-radius: 10px;
            background-color: #ffffff;
            border: 1px solid #DADDE0;
        }

        select:first-child{
            margin-right: 20px;
        }
    }

    .divImageFields{
        height: 35px;
        justify-items: center;

        /* border: 1px solid black; */

        /* & input{
            width: 0; height: 0; position: absolute; left: -9999px;
        } */
        
        /* & progress::-webkit-progress-value{
            display: block;
            border-radius: 10px;
        } */
    }

    .divBotoes{
        display: flex;
        
        /* border: 1px solid blue; */

        & button{
            flex: 1;
        
            font-size: 20px;
            border-radius: 10px;
        }

        button:first-child{
            margin-right: 20px;
            
            color: #ffffff;
            background-color: #090673;
        }

        button:last-child{
            background-color: #ffffff;
            border: 1px solid #DADDE0;
        }
    }

    //Configuração Radio Postagem Anonima
    $darkNavy: #213140;
    $teal2: #090673;

    /* MIXINS */
    @mixin hideInput {width: 0; height: 0; position: absolute; left: -9999px;}
    @mixin breakpoint($point) {
        @if $point == 5000 {
            @media (max-width: 5000px) { @content ; }
        }
    }

    fieldset {
        display: block;

        border: none;
        /*  border: solid 1px red; */
    }

    legend {
            width: 100%; float: left; display: table;
            font-size: 20px; line-height: 140%; font-weight: 400; color: #000000;	
            + * {clear: both;}
    }

    body:not(:-moz-handler-blocked) fieldset {display: table-cell;}

    /* TOGGLE STYLING */
    .toggle {
        width: 180px;
        height: 40px;
        margin: 0; box-sizing: border-box;
        font-size: 0;
        display: flex; flex-flow: row nowrap;
        justify-content: flex-start; align-items: stretch;
        input {@include hideInput;}
        input + label {
            margin: 0; padding: .75rem 2rem; box-sizing: border-box;
            position: relative; display: inline-block;
            border: solid 1px #DADDE0; background-color: #FFF;
            font-size: 1rem; line-height: 140%; font-weight: 600; text-align: center;
            box-shadow: 0 0 0 rgba(255,255,255,0);
            transition: 	border-color .15s ease-out, 
                        color .25s ease-out, 
                        background-color .15s ease-out,
                        box-shadow .15s ease-out;
            
            &:first-of-type {border-radius: 10px 0 0 10px; border-right: none;}
            &:last-of-type {border-radius: 0 10px 10px 0; border-left: none;}
        }

        input:hover + label {border-color: $darkNavy;}
        input:checked + label {
            background-color: $teal2;
            color: #FFF;
            border-color: $teal2;
            z-index: 1;
        }

        @include breakpoint(5000) {
            input + label {
                padding: .75rem .25rem;
                flex: 0 0 50%;
                display: flex; justify-content: center; align-items: center;
            }
        }
    }
</style>