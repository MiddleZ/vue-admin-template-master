<template>
    <div style="display: flex; justify-content: space-around;">
        <div class="echart-box" ref="box"></div>
    </div>
</template>
<script>
export default {
    mounted() {
        // 挂在完成dom后进行初始化
        this.showEcarts();
    },
    methods: {
        showEcarts() {
           //基于准备好的dom，初始化echarts实例
            const userdom = this.$refs.box
            const mycart = this.$echarts.init(userdom,'vintage')
           // 绘制图表
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }
                ]
            };
 
            // // 渲染图表
            mycart.setOption(option)
            //饼图 
            // const mypie = this.$echarts.init(this.$refs.boxpie,'vintage')
            // mypie.setOption({
            //     title: {
            //         text: 'Referer of a Website',
            //         subtext: 'Fake Data',
            //         left: 'center'
            //     },
            //     tooltip: {
            //         trigger: 'item'
            //     },
            //     legend: {
            //         orient: 'vertical',
            //         left: 'left'
            //     },
            //     series: [
            //         {
            //             name: 'Access From',
            //             type: 'pie',
            //             radius: '50%',
            //             data: [
            //                 { value: 1048, name: 'Search Engine' },
            //                 { value: 735, name: 'Direct' },
            //                 { value: 580, name: 'Email' },
            //                 { value: 484, name: 'Union Ads' },
            //                 { value: 300, name: 'Video Ads' }
            //             ],
            //             emphasis: {
            //                 itemStyle: {
            //                     shadowBlur: 10,
            //                     shadowOffsetX: 0,
            //                     shadowColor: 'rgba(0, 0, 0, 0.5)'
            //                 }
            //             }
            //         }
            //     ]
            // })
        },
    },
}
</script>
<style scoped>
.echart-box {
    width: 500px;
    height: 300px;
    /* border: 3px solid pink;
     */
    margin: 20px ;
    border: 1px solid #ebeef5;
    border-radius: 30px;
}
</style>