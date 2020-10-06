<template>

    <Header/>

    <div class="divFormCriarPostagem">
        <form @submit.prevent="criarPostagemAnonima" enctype="multipart/form-data"> 
            <input class= "baseElemento inputText" type="text" placeholder="Título" v-model="postagem.post_title" required>
            <br><br><br>

            <div class="baseElemento divSelectFields">
                <select v-model="postagem.post_category" required>
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

                <select v-model="postagem.post_place" required>
                    <option disabled value="">Local</option>
                    <option>FGA</option>
                    <option>DARCY</option>
                    <option>FCE</option>
                    <option>FUP</option>
                </select>
            </div>
            <br><br>

            <div class="baseElemento divImageFields">
                <input type="file" ref="file" accept="image/png, image/jpeg" @change="imagemSelecionada">

                <!-- <progress class="baseElemento elementoProgress" value="70" max="100">Progress: 0%</progress> -->
            </div>
            <br><br>

            <legend>Descrição</legend>
            <textarea class="baseElemento inputText inputTextArea" rows="5" cols="50" v-model="postagem.post_description" required></textarea>
            <br>

            <div class="permissao">
                <fieldset>
                    <legend>Postagem anônima?</legend>
                    <div class="toggle">
                        <input type="radio" value="false" id="idPostNaoAnonimo" v-model="postagem.post_type"/>
                        <label for="idPostNaoAnonimo">Não</label>

                        <input type="radio" value="true" id="idPostSimAnonimo" v-model="postagem.post_type"/>
                        <label for="idPostSimAnonimo">Sim</label>   
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Apresentar no Feed?</legend>
                    <div class="toggle">
                        <input type="radio" value=false id="idPostNaoFeed" v-model="postagem.post_permission"/>
                        <label for="idPostNaoFeed">Não</label>

                        <input type="radio" value=true id="idPostSimFeed" v-model="postagem.post_permission"/>
                        <label for="idPostSimFeed">Sim</label>   
                    </div>
                </fieldset>
            </div>
            
            <br><br><br>

            <div class="baseElemento divBotoes">
                <button type="submit">Criar</button>
                <button onclick='history.go(-1)'>Voltar</button>
            </div>
        </form>
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
            postagem: {
                fk_user_id: '5f72b06dd02a450038c286f0',
                post_title: '',
                post_place: '',
                post_category: '',
                post_description: '',
                post_permission: 'true',
                post_type: 'false',
                file: ''
            }
        }
    },
    
    methods:{

        imagemSelecionada(){

            this.postagem.file = this.$refs.file.files[0];
        },

        visualizarObjetoFormCriado(){
            
            console.log(this.postagem)
        },

        criarPostagemAnonima(){

            console.log(this.postagem)
            const formData = new FormData();

            formData.append('fk_user_id', this.postagem.fk_user_id,)
            formData.append('post_title', this.postagem.post_title,)
            formData.append('post_place', this.postagem.post_place,)
            formData.append('post_category', this.postagem.post_category,)
            formData.append('post_description', this.postagem.post_description,)
            formData.append('post_permission', this.postagem.post_permission,)
            formData.append('file', this.postagem.file)

            if (this.postagem.post_type === "true"){  
                Postagem.criarPostagemAnonima(formData).then(resposta => {
                    console.log('Salvo com sucesso!')
                    console.log(resposta)
                })
            }else{
                Postagem.criarPostagem(formData).then(resposta => {
                    console.log('Salvo com sucesso!')
                    console.log(resposta)
                })
            }

            window.location.href = "http://localhost:8080";
        }
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
        max-width: 900px;

        & form{
            padding: 30px 20px 120px;
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

        & select{
            width: 50%;

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

        /* border-radius: 10px;
        border: 1px solid #DADDE0; */

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
            border: none;
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

    /* MIXINS */
    @mixin hideInput {width: 0; height: 0; position: absolute; left: -9999px;}
    @mixin breakpoint($point) {
        @if $point == 5000 {
            @media (max-width: 5000px) { @content ; }
        }
    }

    .permissao {
        display: flex;
        justify-content: space-between;
    }

    fieldset {
        display: block;

        border: none;
    }

    legend {
            width: 100%; float: left; display: table;
            font-size: 15px; line-height: 140%; font-weight: 400; color: #000000;	
            + * {clear: both;}
    }

    body:not(:-moz-handler-blocked) fieldset {display: table-cell;}

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
            transition: border-color .15s ease-out, 
                        color .25s ease-out, 
                        background-color .15s ease-out,
                        box-shadow .15s ease-out;
            
            &:first-of-type {border-radius: 10px 0 0 10px; border-right: none;}
            &:last-of-type {border-radius: 0 10px 10px 0; border-left: none;}
        }

        input:hover + label {border-color:  #213140;}

        input:checked + label {
            background-color:  #090673;
            color: #FFF;
            border-color:  #090673;
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