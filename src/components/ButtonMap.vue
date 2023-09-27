<template>
    <div v-for="el,index in listButton">
            <button :class="{activeButton: el.isActive}" @click.stop="greeting(index,$event)">{{el.text}}</button>
    </div>
            <button @click="say('Вот так выглядит привет на разных языках', $event)">Say</button>

</template>
<script>
export default {
    data() {
        return {
            listButton: [
                { text: 'Привет', isActive: false, },
                { text: 'Hello',isActive: false, },
                { text: 'Guten Tag',isActive: false, },
                { text: 'Bonjour',isActive: false, },
                { text: '헬로',isActive: false, },
            ]
        }
    },
    methods: {
        greeting(i,event){
            console.log( this.listButton[i].isActive)
            this.listButton[i].isActive = !this.listButton[i].isActive
            alert(event.target.innerText)
        },
        say(text, event){
            console.log(text,event.target)
        }
    }
}
</script>

<style>
    .activeButton{
        background-color: red;
    }
</style>