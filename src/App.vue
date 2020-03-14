<template>
    <div id="app">
        <van-notice-bar
                color="#1989fa"
                background="#ecf9ff"
                left-icon="info-o"
                mode="closeable"
        >
            非常抱歉,移动端网站正在开发中，请使用电脑端访问本网站,谢谢，移动端使用VueJs + vant 开发
        </van-notice-bar>
        <van-search
                v-model="searchText"
                placeholder="请输入搜索关键词"
                input-align="center"
                @search="onSearch"
        />

        <van-image src="https://img.yzcdn.cn/vant/leaf.jpg"></van-image>

        <router-view></router-view>


        <van-tabbar v-model="tabActive" @change="tabChanged">

            <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item icon="send-gift">知识库</van-tabbar-item>
            <van-tabbar-item icon="column">博文</van-tabbar-item>
            <van-tabbar-item icon="youzan-shield">作品</van-tabbar-item>
        </van-tabbar>


    </div>
</template>

<script>


    import {Toast} from 'vant'

    const routerList = ['/', '/book', '/blog', '/work'];


    export default {
        name: 'App',
        data: function () {
            return {
                searchText: '',
                tabActive: 0
            }
        },
        methods: {
            onSearch: function () {
                Toast({
                    message: '暂不支持搜索功能',
                    forbidClick: false
                });
                this.searchText = ''
            },
            tabChanged: function (tabIndex) {
                this.$router.push(routerList[tabIndex]);
            }
        }
    }
</script>

<style>
    .routerView {
        width: 100%;
        max-height: 10800px;
        background-color: #f0f2f5;
    }
</style>
