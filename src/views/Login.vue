<template> 
    <div class="divLogin">
        <div class="botaoVoltar">
            <img src="../assets/botaoVoltar.png"> 
        </div>

        <div class="divLogo">
            <img src="../assets/vamosCuidarIcon.png"> 
        </div>  

        <form action="">
            <div class="divInputs">
                    
                <input type="text" name="" placeholder="Seu Email">
                <input type="senha" name="" placeholder="Sua Senha">
                <a href="#">Esqueceu sua senha?</a>
            </div>
            <div class="divBotoes">
                <button>Entrar</button>
                <button>Cadastrar</button>
            </div>
        </form>
    </div>  
</template> 

<script>


</script>

<style lang="scss" scoped>
    .divLogin{
        /* border: 1px solid red; */
        height: 100%;
        max-width: 600px;
        min-width: 200px;
        min-height: 600px;
        margin: 0 30px;
        padding: 0;
    }

    .botaoVoltar{
        border: 1px solid blue;
        display: flex;
        height: 5%;
        top: 0;
        left: 0;
        width: 40px;
        align-items: flex-end;

        & img{
            display: block;
            height: 65%;
            padding: 1px;
            border: 1px solid red;
        }

    }

    .divLogo{
        display: flex;
        justify-content: center;

        width: 100%;
        height: 40%;
        margin-top: 2%;
        
        border: 1px solid blue;

        & img{
            display: block;
            height: 50%;
            margin: auto;
            margin-top: 25px;
            padding: 0 10px;

            border: 1px solid red;
        }
    }

    form{
        width: 100%;
        height: 40%;
        margin-top: 2%;
        //border: 1px solid green;

        & .divInputs{
            width: 100%;
            height: 45%;
            //border: 1px solid black;//
            
            input{
                box-shadow: 0 0 0 0;
                border: 0 none;
                outline: 0;
                display: block;
                width: 100%;
                height: 35%;
                font-size: 14px;
                border-bottom: 1px solid #DADDE0;
            }

            input:last-child{
                margin-bottom: 20px;
            }

            .input::placeholder {
                font-size: 20px;
                color: #000000;
            }

            a{
                color: #090673;
                font-weight: bolder;
                text-decoration: none;
                font-size: 11px;
            }

        }

        & .divBotoes{
            width: 100%;
            height: 40%;
            margin-top: 5%;
            //border: 1px solid black;

            display: flex;
            flex-direction: column;

            & button{
                height: 50px;
                width: 100%;
                font-size: 20px;
                border: none;
                border-radius: 10px;
            }

            button:first-child{  
                margin-bottom: 40px;        
                color: #ffffff;
                background-color: #090673;
            }

            button:last-child{
                background-color: #ffffff;
                border: 1px solid #DADDE0;
            }
        }
    }
</style>