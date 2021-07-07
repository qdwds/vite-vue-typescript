<!--
 * @Description: vr
 * @Date: 2021-07-06 22:04:29
 * @LastEditTime: 2021-07-06 22:15:42
-->

<template>
    <div id="vr" class="w-full h-full center"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    DoubleSide,
    TextureLoader,
    SphereGeometry,
    MeshBasicMaterial,
    Mesh,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "stats.js";
import { useWindow } from "@/hooks/web/useWindow";
export default defineComponent({
    setup() {
        const VR_PATH = "/threejs/vr";
        let stop: number | null = null;

        onMounted(() => {
        const { getContextSize } = useWindow();
            const { x, y } = getContextSize();
            const client = {
                x: x - 10 || 600,
                y: y - 10 || 400,
            };
        const stats: Stats = new Stats();
        const scene: Scene = new Scene();
        console.log(client);
        
        const camera: PerspectiveCamera = new PerspectiveCamera(
            45,
            client.x / client.y,
            0.1,
            10000
        );
        camera.position.z = 30;
        const renderer: WebGLRenderer = new WebGLRenderer({ antialias: true });
        renderer.setSize(client.x, client.y);

        //  操作
        const control: OrbitControls = new OrbitControls(
            camera,
            renderer.domElement
        );
        control.maxDistance = 980;
        //  球体
        const geometry: SphereGeometry = new SphereGeometry(1000, 32, 32);
        let textureLoader = new TextureLoader().load(`${VR_PATH}/vr.jpg`);
        const material: MeshBasicMaterial = new MeshBasicMaterial({
            map: textureLoader,
            side: DoubleSide,
        });

        const sphere = new Mesh(geometry, material);
        scene.add(sphere);

        const render = () => {
            stop = requestAnimationFrame(render);
            renderer.render(scene, camera);
            stats.update();
        };

        //  窗口 改变
        // window.addEventListener("resize", () => onWindowResize());
        // const onWindowResize = () => {
        //     // console.log(getWindowSize.value.width,getWindowSize.value.height);
        //     if (getWindowSize.value?.height && getWindowSize.value?.width) {
        //         renderer.setSize(
        //             getWindowSize.value.width,
        //             getWindowSize.value.height
        //         );
        //         camera.aspect =
        //             getWindowSize.value.width / getWindowSize.value.height; //  处理 浏览器缩放
        //     }
        //     camera.updateProjectionMatrix(); //  更新窗口
        // };

        
            const vr: HTMLElement | null = document.getElementById("vr");
            if (vr) {
                //  加载 stats.js
                stats.showPanel(0);
                vr.appendChild(stats.dom);
                stats.dom.style.position = "absolute";

                //  添加 renderer
                vr.appendChild(renderer.domElement);
            }
            render();
        });
        onUnmounted(() => {
            if (stop) {
                cancelAnimationFrame(stop);
            }
        });
        return {};
    },
});
</script>

<style scoped>
</style>