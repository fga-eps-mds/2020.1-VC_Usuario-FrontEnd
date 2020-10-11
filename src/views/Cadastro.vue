<template> 
    <div class="divCadastro">
        <div onclick='history.go(-1)' class="botaoVoltar">
            <img src="../assets/blackArrow.png">
        </div>

        <div class="divLogo">
            <img src="../assets/vamosCuidarIcon.png"> 
        </div>  

        <form action="">
            <div class="divInputs">
                <input type="text" name="" placeholder="Nome">
                <input type="text" name="" placeholder="Email">
                <input type="password" name="" placeholder="Senha">
            </div>

            <div class="divBotoes">
                <button>Cadastrar</button>
            </div>
        </form>
    </div>  
</template> 

<script>


</script>

<style lang="scss" scoped>

    .divCadastro{
        height: 100%;
        min-width: 200px;
        min-height: 600px;
        // margin: 0 30px;
        padding: 0;
    }

    @media only screen and (min-width:500px){
        .divCadastro{
            width: 440px;
            margin: auto;
        }
    }

    .botaoVoltar{
        // display: flex;
        // align-items: flex-end;

        // height: 5%;
        // top: 0;
        // left: 0;
        // width: 40px;
        
        // cursor: pointer;

        // & img{
        //     display: block;

        //     height: 50%;
        //     padding: 1px;
        // }
        display: flex;
        align-items: flex-end;
        
        & img{
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 5px;
            height: 25px;
        }

    }

    .divLogo{
        display: flex;
        justify-content: center;

        width: 100%;
        height: 40%;
        margin-top: 2%;
        margin-bottom: -5%;

        & img{
            display: block;

            height: 50%;
            margin: auto;
            margin-top: 14%;
        }
    }

    form{
        height: 40%;
        margin-top: 2%;
        margin-left: 30px;
        margin-right: 30px;

        & .divInputs{
            width: 100%;
            height: 45%;
            
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

            input::placeholder {
                color: #000000;
            }
        }

        & .divBotoes{
            width: 100%;
            height: 45%;
            margin-top: 20%;

            display: flex;
            flex-direction: column;

            & button{
                height: 35%;
                width: 100%;

                cursor: pointer;
                font-size: 20px;
                border: none;
                border-radius: 10px;   
                color: #ffffff;
                background-color: #090673;
            }
        }
    }
</style>