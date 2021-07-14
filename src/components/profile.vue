<template>
<div id="app">
    <div class="container">
        <div class="header_wrapper">
            <modal v-if="modalFlag" @modalClose="modalClose()">
                <template v-slot:text>確定要刪除嗎？</template>
                確定
            </modal>
            <div class="header_img">
            </div>
            <div class="header_account">
                {{account}}
            </div>
        </div>
        <div class="order_wrapper">
            <table>
                <thead>
                    <tr>
                        <th>訂單時間</th>
                        <th>電影名稱</th>
                        <th>電影時間</th>
                        <th>電影類型</th>
                        <th>選購位置</th>
                        <th>單張票價</th>
                        <th>總金額</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in pageData" :key="index">
                        <td>{{new Date(parseInt(item.timestamp)).getFullYear()+"/" +(new Date(parseInt(item.timestamp)).getMonth() + 1) +
            "/" + new Date(parseInt(item.timestamp)).getDate()+
            " " + new Date(parseInt(item.timestamp)).getHours() +
            ":" + new Date(parseInt(item.timestamp)).getMinutes()+
            ":" + new Date(parseInt(item.timestamp)).getSeconds()}}</td>
                        <td>{{item.movietname}}</td>
                        <td>{{item.datechoose+'   '+item.timechoose.split(' ')[2]}}</td>
                        <td>{{item.timechoose.split(' ')[0]}}</td>
                        <td>第二行第三排、第四行第五排</td>
                        <td>{{item.movieprice}}</td>
                        <td>{{item.movietotalprice}}</td>
                        <td>
                            <button class="btn btn-danger mr-2" @click="spliceOrder(item.id)">刪除</button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
        <pagination class='pagination' @pagesChange='pagesChange' :orderDataLength=orderData.length></pagination>
    </div>

</div>
</template>

<style lang="scss" scoped>
* {
    font-size: 25px;
    color: black;
}

.pagination {
    width: 100%;
    display: flex;
    justify-content: center;
}

.container {
    margin-top: 30px;
    background-color: white;
    border-radius: 20px;
    padding-bottom: 50px;
}

.header_wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 200px;
    justify-content: center;

    .header_img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-image: url(https://buzzorange.com/vidaorange/wp-content/uploads/sites/3/2019/05/15135831021858-600x518.webp?jpg);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }

    .header_account {
        margin-left: 70px;
    }
}

.order_wrapper {
    width: 100%;
    display: flex;
    padding: 0px 0px 50px 0px;
    overflow-x: auto;

    table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        border-radius: 1em;
        border: 3px #cccccc solid;
        overflow: hidden;

        th,
        td {
            padding: 0px 10px;
            height: 100px;
            border: 3px #cccccc solid;
            vertical-align: middle;
            white-space: nowrap;
        }
    }
}

@media screen and (max-width: 768px) {

    th,
    td {
        font-size: 16px;
    }
}
</style>

<script>
import pagination from '../components/pagination'
import modal from '../components/Modal'
import axios from 'axios';
export default {
    components: {
        pagination,
        modal
    },
    data() {
        return {
            account: '',
            orderData: '',
            dateData: '',
            modalFlag:false,
            currentIndex:1,
            pageData:''
        }
    },
    methods: {
        spliceOrder(id) {
            this.modalFlag = true;
            const url = `https://vert-choucroute-22094.herokuapp.com/order/delete`; // origin api url
            axios.post(`${url}`, {
                id: id
            }).then((res) => {
                console.log(res.data)
            })
        },
        modalClose(){
            this.modalFlag = false;
            window.location.reload()
        },
        pagesChange(index){
            if(index ==='1'){
                this.currentIndex+= 1;
            }else if(index === '-1'){
                this.currentIndex -= 1;
            }else {
                this.currentIndex = index
            }
            const url = `https://vert-choucroute-22094.herokuapp.com/page/${this.account}/${this.currentIndex}`; // origin api url
            axios.get(`${url}`).then((res)=>{
                this.pageData = res.data;
                console.log('pageData')
                console.log(this.pageData)
            })
        }
    },
    created() {
        const dateTime = Date.now();
        console.log(typeof (dateTime))
        var date = new Date(dateTime);
        console.log(date.getFullYear() + "/" + (date.getMonth() + 1) +
            "/" + date.getDate() +
            " " + date.getHours() +
            ":" + date.getMinutes() +
            ":" + date.getSeconds());
        this.account = sessionStorage.getItem('account')
    },
    mounted() {
        const url = `https://vert-choucroute-22094.herokuapp.com/order/${this.account}`;
        axios.get(`${url}`).then((res) => {
            this.orderData = res.data;
        })
        this.pagesChange(1);
    }
}
</script>
