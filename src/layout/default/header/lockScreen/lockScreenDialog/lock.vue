<template>
    <div :class="['lock', unlockingShow ? 'lock_filter' : '']">
        <div class="clock">
            <p class="date">{{ date }}</p>
            <p class="time">{{ time }}</p>
            <p class="name">点击随机位置解锁!</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useAppStoreModule } from "@/hooks/web/useApp";
export default defineComponent({
    props: {
        unlockingShow: Boolean,
    },
    setup() {
        const { getUnlocking } = useAppStoreModule();
        const state = reactive({
            time: "",
            date: "",
        });
        const week = [
            "星期天",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
        ];
        const updateTime = () => {
            if (!getUnlocking.value) {
                clearInterval(timerID);
            }
            let cd = new Date();
            state.time =
                zeroPadding(cd.getHours(), 2) +
                ":" +
                zeroPadding(cd.getMinutes(), 2) +
                ":" +
                zeroPadding(cd.getSeconds(), 2);
            state.date =
                zeroPadding(cd.getFullYear(), 4) +
                "-" +
                zeroPadding(cd.getMonth() + 1, 2) +
                "-" +
                zeroPadding(cd.getDate(), 2) +
                " " +
                week[cd.getDay()];
        };
        let timerID = setInterval(updateTime, 1000);

        const zeroPadding = (num: any, digit: any) => {
            var zero = "";
            for (var i = 0; i < digit; i++) {
                zero += "0";
            }
            return (zero + num).slice(-digit);
        };

        onMounted(() => updateTime());
        return {
            ...toRefs(state),
        };
    },
});
</script>

<style lang="less" scoped>
.lock {
    width: 100vw;
    height: 100vh;
    background: black;
    color: white;
}
.lock_filter {
    filter: blur(10px);
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -ms-filter: blur(10px);
    -o-filter: blur(10px);
}

.clock {
    font-family: "Share Tech Mono", monospace;
    color: #ffffff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 30%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    color: #daf6ff;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
.clock .time {
    letter-spacing: 0.1em;
    font-size: 100px;
    padding: 5px 0;
}
.clock .date {
    letter-spacing: 0.1em;
    font-size: 32px;
}
.clock .name {
    letter-spacing: 0.1em;
    font-size: 16px;
    padding: 10px 0 0;
}
</style>