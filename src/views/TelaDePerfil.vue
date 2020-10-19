<template>

	<Header/>
		<section>
			<section class="PerfilContainer">
				<div class="PerfilContainer__infoPerfil">

					<div class="PerfilContainer__infoPerfil__nome">
						<h1>Fulano de tal</h1>
					</div>

					<span>
                        <img src="../assets/edit.png" class="PerfilContainer__infoPerfil__edit"> 
                    </span>

				</div>
			</section>
		</section>
	<MenuBar/>

</template>

<script>
import Header from '@/components/Header.vue'
import MenuBar from '@/components/MenuBar.vue'

export default {
	name: "Perfil",

	components: {
		Header,
		MenuBar
	}
}
</script>

<style scoped lang="scss">
    @import "../assets/stylesheets/pallete.scss";

    section{
        width: 100%;
        display: flex;
    }

    .PerfilContainer{
        height: auto;
        margin: 0 30px;
        min-width: 200px;
        width: 100%;
        margin-top: 65px;
        min-height: 620px;
        background-color: #ffff99;

		&__infoPerfil{
			display: flex;

			&__nome{
				font-size: 18px;
				max-height: 30px;
				width: 100%;
				color: $colorPreta;
				overflow: hidden;
			}

			&__edit{
				height: 20px;
				padding-left: 80px;
			}
		}
    }

</style>