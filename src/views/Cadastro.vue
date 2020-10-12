<template>
    <section>
    <div class="divCadastro">
        <div class="botaoVoltar">
            <img src="../assets/blackArrow.png" onclick='history.go(-1)'>
        </div>

        <div class="divLogo">
            <img src="../assets/vamosCuidarIcon.png"> 
        </div>  

        <form action="">
            <div class="divInputs">
                <input type="text" name="" placeholder="Nome">
                <input type="email" name="" placeholder="Email">
                <input type="password" name="" placeholder="Senha">
            </div>

            <div class="divBotoes">
                <button>Cadastrar</button>
            </div>
        </form>
    </div>
    </section>  
</template> 

<script>


</script>

<style lang="scss" scoped>

    section{
        width: 100%;
        height: 100%;
        display: flex;
    }

    .divCadastro{
        height: 620px;
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
    }

    @media only screen and (min-height:600px) {
        section{
            justify-content: center;
        }
    }

    @media only screen and (min-width:500px){
        .divCadastro{
            width: 440px;
            margin: auto;
        }
    }

    .botaoVoltar{
        display: flex;
        align-items: flex-end;
        height: 50px;
        margin-bottom: 20px;
        // border: 1px solid orange;
        
        & img{
            height: 25px;
            // border: 1px solid green;
            padding: 10px 10px 0 0;
        }

    }

    .divLogo{
        display: flex;
        justify-content: center;

        height: 200px;
        margin-bottom: 20px;

        // border: 1px solid blue;

        & img{
            display: block;

            height: 65%;
            margin: auto;
        }
    }

    form{
        height: 310px;
        // border: 1px solid purple;

        & .divInputs{
            width: 100%;
            height: 240px;
            margin-bottom: 20px;
            // border: 1px solid black;
            
            input{
                width: 100%;
                height: 50px;

                font-size: 14px;
                border-bottom: 1px solid #DADDE0;
                margin-bottom: 10px;
            }

            input::placeholder {
                color: #000000;
            }
        }

        & .divBotoes{
            width: 100%;
            height: 50px;

            display: flex;
            flex-direction: column;

            & button{
                height: 50px;
                width: 100%;

                cursor: pointer;
                font-size: 20px;
                border: none;
                border-radius: 25px;   
                color: #ffffff;
                background-color: #090673;
            }
        }
    }
</style>