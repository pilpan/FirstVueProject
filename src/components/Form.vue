<template lang="">
    <div>
        <form @submit.prevent="call">
            <input @keyup.enter.prevent="call" type="text">
            <button>Отправить</button>
        </form>
    </div>
</template>
<script>
export default {
    methods: {
        call(event){
            console.log(event)
        }
    }
}
</script>
