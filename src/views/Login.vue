<template> 
        <div class="divLogin">
            <div class="botaoVoltar">
                 <!-- <img src="../assets/wordmarkIcon.png"> --> 
            </div>
            <div class="divLogo">
                <div class="Logo">

                </div>
            </div>  
            <form action="">
                <div class="inputFields">
                    
                </div>

                <div class="botoesOpcoes">

                </div>
            </form>    
        </div>    
</template> 

<script>


</script>

<style lang="scss" scoped>
    template{
        height: 100%;
        border: 1px solid blue;
    }
    .divLogin{
        border: 1px solid red;
        height: 100%;
        padding: 30px;
        display: block;
        & form{
            width: 100%;
            height:450px;
            margin-top: 20px;
            border: 1px solid red;
            & .inputFields{
                width: 100%;
                height: 215px;
                border: 1px solid black;
            }
            & .botoesOpcoes{
                width: 100%;
                height: 215px;
                margin-top: 20px;
                border: 1px solid black;
            }
        }
    }
    .botaoVoltar{
        border: 1px solid blue;
        height: 40px;
        top: 0;
        left: 0;
        width: 40px;
    }
    .divLogo{
        width: 100%;
        height: 200px;
        margin-top: 20px;
        display: flex;
        border: 1px solid blue;
    }
    .Logo{
        width: 200px;
        height: 100px;
        margin: auto;
        border: 1px solid red;
    }
    form{

    }

    

</style>