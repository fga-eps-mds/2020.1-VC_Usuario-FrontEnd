<template> 
    <div class="divLogin">
        <div class="botaoVoltar">
            
        </div>

        <div class="divLogo">
            <div class="logo">

            </div>
        </div>  

        <form action="">
            <div class="inputCampos">
                
            </div>

            <div class="botoesOpcoes">

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
        min-height: 600px;
        margin: 0 30px;
        padding: 0;
    }

    .botaoVoltar{
        border: 1px solid blue;
        height: 5%;
        top: 0;
        left: 0;
        width: 40px;
    }

    .divLogo{
        width: 100%;
        height: 30%;
        margin-top: 2%;
        display: flex;
        border: 1px solid blue;

        & .logo{
            width: 150px;
            height: 100px;
            margin: auto;
            border: 1px solid red;
        }
    }

    form{
        width: 100%;
        height: 50%;
        margin-top: 2%;
        border: 1px solid green;
        & .inputCampos{
            width: 100%;
            height: 45%;
            border: 1px solid black;
        }
        & .botoesOpcoes{
            width: 100%;
            height: 45%;
            margin-top: 5%;
            border: 1px solid black;
        }
    }
</style>