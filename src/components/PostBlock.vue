<template>
    <div id="postBlock">
        <div class="row">
            <h3>{{title}}</h3>
            <p>{{status}}</p>
        </div>

        <div class="row">
            <p>{{author}}</p>
        </div>

        <div class="row">
            <p>{{local}}</p>
            <p>{{date}}</p>
        </div>

        <div class="row">
            <button class="moreButton">ver mais</button>
            <button>Apoiar</button>
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
    }
}
</script>

<style>
    #postBlock {
        border: solid 2px  #DADDE0;
        border-radius: 15px;
        width: 80vw;
        height: 180px;
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

   /*  .moreButton {
        background: #090673;
        color: white;
        border-radius: 8px;
    } */
</style>