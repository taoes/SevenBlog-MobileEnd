<template>
    <div class="blogList">
        <van-divider>当前开发进度</van-divider>
        <van-steps direction="vertical" :active="3">
            <van-step>
                <h3>【服务器端】开发基本完成</h3>
                <p>基于JDK8+ MyBatis + SpringBoot 前后端分离的架构</p>
            </van-step>

            <van-step>
                <h3>【PC 端】开发基本完成</h3>
                <p>基于Vue + ElementUI + Vuex 前后端分离的架构</p>
            </van-step>

            <van-step>
                <h3>【文档】整理个人文档以及资料整理</h3>
                <p>使用阿里开源的语雀文档进行资料管理</p>
            </van-step>

            <van-step>
                <h3>【移动端】移动端开发中</h3>
                <p>基于VueJs + Vant + Ts 开发的移动端APP</p>
            </van-step>

            <van-step>
                <h3>【管理端】计划开发中</h3>
                <p>计划基于React + Ant Design 开发</p>
            </van-step>


            <van-step>
                <h3>更多功能 ...</h3>
                <p>革命尚未成功，同志仍需努力</p>
            </van-step>
        </van-steps>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .blogList {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

</style>
