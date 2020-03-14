<template>
    <div class="workList">
        <van-button type="info" icon="star-o" size="normal" @click="openMyGithub">访问我的 Github</van-button>
    </div>
</template>

<script>
    export default {
        name: 'Work',
        props: {
            msg: String
        },
        methods: {
            openMyGithub() {
                window.open('https://github.com/taoes')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .workList{
        display: flex;
        justify-content: center;
        padding: 30px;
    }

</style>
