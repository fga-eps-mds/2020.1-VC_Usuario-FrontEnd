<template>
    <Header/>

    <div class="main" >
        <h4>
            {{ nome }}
        </h4>
        <div class="divBotoes">
                <button type="button" onclick="window.location.href='http://localhost:8080/editar'">Editar</button>
        </div>
    </div>

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
        //const store = useStore()
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
    .main {
        margin-top: 60px;
    }

</style>