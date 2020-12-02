<template>
    <div class="divComponentComentario">
        <p>"{{UPC_description}}"</p>
    </div>
</template>

<script>
export default {
    name: 'comentarioBlock', 

    props: {
        _id: String,
        fk_user_id: String,
        fk_postage_id: String,
        UPC_description: String,
    },
}
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/pallete.scss";

    .divComponentComentario {
        height: auto;
        width: 100%;

        & p {
            font-style: oblique;
            text-align: justify;
            color: $colorCinzaEscuro;
        }
    }
</style>