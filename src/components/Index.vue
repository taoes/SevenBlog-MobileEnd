<template>
    <div class="blogList">
        <van-list
                style="margin-top: 20px"
                v-model="loading"
                :finished="finished"
                finished-text="移动端正在开发中,敬请期待..."
                @load="onLoad">
            <div style="display: flex;flex-direction: column;margin-bottom: 20px;border-bottom: lightgray 1px solid"
                 v-for="book in bookList"
                 :key="book.name"
                 @click="openPage(book.url)">
                <span class="bookTitle">{{book.name}}</span>
            </div>


        </van-list>
    </div>
</template>

<script>
    export default {
        name: 'Index',
        data: function () {
            return {
                bookList: [{
                    name: "深入理解Java 虚拟机",
                    imgUrl: 'https://www.zhoutao123.com/picture/book_convert/jvm.png',
                    url: 'https://www.yuque.com/tao_book/jvm'
                }, {
                    name: "高性能MySQL",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/mysql.png',
                    url: 'https://www.yuque.com/tao_book/mysql'
                }, {
                    name: "Netty 入门与实战",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/netty.png',
                    url: 'https://www.yuque.com/tao_book/netty'
                }, {
                    name: "Java 并发编程",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/java.png',
                    url: 'https://www.yuque.com/tao_book/java_concurrent'
                }, {
                    name: "JavaScript 学习笔记",
                    imgUrl: 'http://www.zhoutao123.com/picture/book_convert/js.png',
                    url: 'https://www.yuque.com/tao_book/JavaScript'
                }],
                loading: false,
                finished: false
            }
        },
        methods: {
            onLoad() {
                this.loading = false;
                this.finished = true;

            },
            openPage(url) {
                window.open(url)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bookTitle {
        font-size: 18px;
        font-weight: bolder;
        margin-left: 10px;
        color: #7A7A7A;
        margin-bottom: 5px;
        font-family: STFangsong, "Microsoft YaHei";
    }

</style>
