<template>
    <div id="postBlock">
        <div class="row">
            <h4>{{title}}</h4>
            <p>{{status}}</p>
        </div>

        <div class="row">
            <p>{{author}}</p>
        </div>

        <div class="row">
            <p>{{local}}</p>
            <p>{{date}}</p>
        </div>

        <div class="btns">
            <button class="moreButton">Ver mais</button>
            <button class="supButton">Apoiar</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'postBlock',
    props:{
        title: String,
        status: String,
        author: String,
        local: String,
        date: String,
    },
}
</script>

<style>
    #postBlock {
        border: solid 2px  #DADDE0;
        border-radius: 15px;
        width: 80vw;
        height: 150px;
        padding-left: 10px;
    }

    button {
        width: 30%;
        height: 15%;
        margin-right: 10%;
        margin-top: 20px;
        text-decoration: none;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        border-radius: 10px;   
    } 
    
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px; 
        padding-top: 10px;
        padding-right: 10px; 
        
    }

    .btns {

        height: 120%;
    }

    .moreButton {
        color: #ffffff;
        background-color: #090673;
    }

    .supButton {
        color: #248722;
        background-color: #ffffff;
        border: solid 1px;
    }
</style>