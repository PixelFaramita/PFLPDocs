<script lang="ts">
    import { ref, reactive,} from "vue";
    import type { LatestVersionInfo } from "../stores/interface";
    import axios from "axios";

    //获取精确窗口尺寸与页面尺寸 -- 主打的就是一个胡造轮子
    function getPageSize(): {
        pageWidth: number;
        pageHeight: number;
        windowWidth: number;
        windowHeight: number;
    } {
        let xScroll: number,
            yScroll: number;

        if (window.innerHeight && window.scrollY) {
            xScroll = window.innerWidth + window.scrollX;
            yScroll = window.innerHeight + window.scrollY;
        } else if (document.body.scrollHeight > document.body.offsetHeight) {
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else {
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }

        let windowWidth: number = 0, windowHeight: number = 0;

        if (self.innerHeight) {
            if (document.documentElement.clientWidth) {
                windowWidth = document.documentElement.clientWidth;
            } else {
                windowWidth = self.innerWidth;
            }
            windowHeight = self.innerHeight;
        } else if (document.documentElement && document.documentElement.clientHeight) {
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else if (document.body) {
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        let pageHeight: number, pageWidth: number;

        pageHeight = yScroll < windowHeight ? windowHeight : yScroll;
        pageWidth = xScroll < windowWidth ? windowWidth : xScroll;

        return {
            pageWidth,
            pageHeight,
            windowWidth,
            windowHeight,
        };
    }

    const percentage = ref(0);
    const ifShowPrograss = ref(true);
    const ifShowFileInfo = ref(false);
    const latest = ref<LatestVersionInfo>();
    const colors = [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 },
    ];

    //获取控件真实视觉居中位置 -- 奇怪的魔法写法·扭轱辘写法
    let tWidth = getPageSize().windowWidth / 2 - 600;
    document.documentElement.style.setProperty('--window-width', tWidth.toString() + "px");
    // console.log(tWidth);

    percentage.value = 10;
    latest.value = reactive(
        await axios({
            method: 'get',
            url: '/update/latest.json',
            responseType: 'json'
        }),
    ).data as LatestVersionInfo;

    setTimeout(() => {
        percentage.value = 100;
    }, 1000);

    setTimeout(() => {
        ifShowPrograss.value = false;
        ifShowFileInfo.value = true;
    }, 1800);

    function jump(url:string) {
        window.open(url, '_blank');
    }

    export default {
        data() {
            return {
                windowHeight: document.body.clientHeight,
                windowWidth: document.body.clientWidth,
                ifShowPrograss,
                ifShowFileInfo,
                percentage,
                latest,
                colors,
                objectData: [
                    latest.value
                ],
                jump,
            }
        },
        watch: {
            // 监听页面高度
            windowHeight(val) {
                //暂时无用
            },
            // 监听页面宽度
            windowWidth(val) {
                //根据页面宽度设置阶梯获取控件真实显示位置 -- 反正就是很奇怪的判定
                tWidth = (getPageSize().windowWidth / 2 - 600) > 0 ? (getPageSize().windowWidth / 2 - 600) : (getPageSize().windowWidth / 2 - 300);
                document.documentElement.style.setProperty('--window-width', tWidth.toString() + "px");
                // console.log(tWidth);
            }
        },
        mounted() {
            //窗口与页面大小改变监听器
            window.onresize = () => {
                return (() => {
                    this.windowHeight = document.documentElement.clientHeight; // 高
                    this.windowWidth = document.documentElement.clientWidth; // 宽
                })();
            };
        },
    };

    
</script>

<template>
    <div v-if="ifShowPrograss">
        <el-progress class="elp" width="500" type="circle" :percentage="percentage" :color="colors" stroke-width="15" striped="true" striped-flow="true">
            <template #default>
                <span class="percentage-label">正在获取数据信息</span>
            </template>
        </el-progress>
    </div>

    <div v-else-if="ifShowFileInfo" style="margin-left: -100px;">
        <el-table :data="objectData" style="width: 1400px;">
            <el-table-column prop="files" label="Files" width="180" type="expand">
                <template #default="{ row }">
                    <el-table :data="row.files" style="width: 1100px; margin-left: 200px;">
                        <el-table-column prop="name" label="File Name" width="210"></el-table-column>
                        <el-table-column prop="type" label="File Type" width="180"></el-table-column>
                        <el-table-column prop="size" label="Size" width="100"></el-table-column>
                        <el-table-column prop="update" label="Last Build Time" width="210"></el-table-column>
                        <el-table-column prop="path" label="Label Path" width="250"></el-table-column>
                        <el-table-column label="" width="150">
                            <template #default="scope">
                                <el-button type="primary" size="small" @click="jump(scope.row.download)">Download</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="Build Date" width="180"></el-table-column>
            <el-table-column prop="version" label="Main Version" width="180"></el-table-column>
            <el-table-column prop="versionNumber" label="Version Number" width="180"></el-table-column>
            <el-table-column prop="bds" label="Compatible BDS" width="180"></el-table-column>
            <el-table-column prop="ll" label="Compatible LL" width="180"></el-table-column>
            <el-table-column prop="llnet" label="Compatible LLNet" width="180"></el-table-column>
            <el-table-column prop="url" label="Release Page" width="140">
                <template #default="scope">
                    <el-button type="primary" size="small" @click="jump(scope.row.url)">Go to</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style>
    .elp {
        margin-left: var(--window-width);
    }
    
    .percentage-label {
        display: block;
        margin: auto;
        /* margin-top: 10px; */
        font-size: 50px;
        font: bold;
    }
</style>