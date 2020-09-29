<template>

    <Header/>

    <div class="divFormCriarPostagem">
        <form @submit.prevent="postPostagem"> 
            <input class= "baseElemento inputText" type="text" placeholder="Título" v-model="postagem.titulo">
            <br><br><br>
            <input type="radio" name="opcaoAnonimo" value="op1" v-model="postagem.canPost"> opção1
            <input type="radio" name="opcaoAnonimo" value="op2" v-model="postagem.canPost"> opção2

            <div class="baseElemento divSelectFields">
                <select v-model="postagem.categoria">
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

                <select v-model="postagem.local">
                    <option disabled value="">Local</option>
                    <option>FGA</option>
                    <option>DARCY</option>
                    <option>FCE</option>
                    <option>F</option>
                </select>
            </div>
            <br>

            <div class="baseElemento div,,,ImageFields">
                <!-- <input type="image"> -->

                <progress class="baseElemento elementoProgress" value="70" max="100">Progress: 0%</progress>
            </div>
            <br><br><br>

            <h4>Descrição</h4>
            <textarea class="baseElemento inputText inputTextArea" rows="5" cols="50" v-model="postagem.descricao"></textarea>
            <br><br><br>

            id: {{ postagem.fk_id_usuario }} <br>
            Titulo: {{ postagem.titulo }} <br>
            Anonimo: {{ postagem.anonimo }} <br>
            Local: {{ postagem.local }} <br>
            Categoria: {{ postagem.categoria }} <br>
            Descricao: {{ postagem.descricao }} <br>

            <div class="baseElemento divBotoes">
                <button type="submit">Criar</button>
                <button onclick='history.go(-1)'>Voltar</button>
            </div>
            <br>,
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
                titulo: '',
                /* local: '', */
                /* opcaoAnonimo: '', */
                /* categoria: '', */
                descricao: '',
                canPost: '' 
            }
        }
    },
    
   /*  methods:{
        criar(){
            Postagem.criarPostagem(this.postagem).then(resposta => {
                alert('Salvo com sucesso!')
                console.log(resposta)
            })
        }
    } */
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

        & progress::-webkit-progress-value{
            display: block;
            border-radius: 10px;
        }
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
</style>