<template>
    <Header/>
        <section>
            <section class="PerfilContainer">
                <div class="PerfilContainer__infoPerfil">

                    <div class="PerfilContainer__infoPerfil__nome">
                        <h4> {{ nome }} </h4>
                    </div>

                    <span>
                        <img src="../assets/edit.png" class="PerfilContainer__infoPerfil__edit" onclick="window.location.href='http://localhost:8080/editar'"> 
                    </span>

                </div>

                <div class="PerfilContainer__pontosPerfil">
                    <span>
                        <img src="../assets/trophy.png" class="PerfilContainer__pontosPerfil__trofeu"> 
                    </span>
                    <span class="PerfilContainer__pontosPerfil__numero">
                        800
                    </span>
                </div>
            </section>
        </section>
    <MenuBar/>
</template>

<script>
    import Header from '@/components/Header.vue'
    import MenuBar from '@/components/MenuBar.vue'
    import { useStore } from 'vuex'
    import { computed } from 'vue'

export default {
    name:'Perfil',

    components: {
        Header,
        MenuBar
    },

    setup(){
        const nome = computed(() => useStore().getters.getNome)
        return { nome }
    },

    created: () => {
        if( !useStore().getters.getSwap ){
            const token = useStore().getters.getToken
            if(!token){
                window.location.href='http://localhost:8080/login'
            }else {
                useStore().dispatch('validateSessionAction', token)
            }
        }else{
            useStore().commit('SET_SWAP', false)
        }
    },
}

</script>

<style lang="scss" scoped>
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
        display: block;

		&__infoPerfil{
			display: flex;
			width: 100%;
			align-content: space-between;

			&__nome{
				font-size: 18px;
				max-height: 30px;
				color: $colorPreta;
				width: 100%;
				overflow: hidden;
			}

			&__edit{
				height: 20px;
			}
		}

		&__pontosPerfil{
			margin-top: 20px;
			font-size: 13px;
			height: 30px;
			border:1px solid $colorPreta;
			width: 60px; 
			border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: center;

			&__trofeu{
				height: 15px;
			}

            &__numero{
                max-width: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
            }
		}
    }
</style>