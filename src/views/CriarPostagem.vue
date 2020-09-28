<template>

    <Header/>
    
    <div class="divFormCriarPostagem">
        <form action="" method="post"> 
            <input class= "baseElemento inputText" type="text" placeholder="Título" v-model="tituloField">
            <br><br><br>
            
            <div class="baseElemento divSelectFields">
                <select v-model="selected">
                    <!-- <option disabled value="">Escolha um item</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option> -->
                </select>

                <select v-model="selected">
                    <!-- <option disabled value="">Escolha um item</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option> -->
                </select>
                <!-- <span>Selecionado: {{ selected }}</span> -->
            </div>
            <br>

            <div class="baseElemento divImageFields">
            </div>
            <br><br><br>

            <h4>Descrição</h4>
            <textarea class="baseElemento inputText inputTextArea" rows="5" cols="50" v-model="descricaoField"></textarea>
            <br><br><br>

            <div class="baseElemento divBotoes">
                <input type="submit" value="Criar">
                <input type='button' value='Voltar' onclick='history.go(-1)'/>  
            </div>
        </form>     
    </div>

    <MenuBar/>

</template> 

<script>

import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
export default {
    name: 'CriarPostagem',
    components: {
    Header,
    MenuBar
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

        /* border: 1px solid green; */
    }

    .divBotoes{
        display: flex;
        
        /* border: 1px solid blue; */

        & input{
            flex: 1;
        
            font-size: 20px;
            border-radius: 10px;
        }

        input:first-child{
            margin-right: 20px;
            
            color: #ffffff;
            background-color: #090673;
        }

        input:last-child{
            background-color: #ffffff;
            border: 1px solid #DADDE0;
        }
    }
</style>