<template>
    <div class="blogList">
        <van-button type="info" icon="star-o" size="normal" @click="openMyDocument">访问我的语雀文档</van-button>
    </div>
</template>

<script>
    export default {
        name: 'Book',
        props: {
            msg: String
        }, methods: {
            openMyDocument() {
                window.open('https://www.yuque.com/tao_book')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .blogList {
        display: flex;
        justify-content: center;
        padding: 30px;
    }

</style>
