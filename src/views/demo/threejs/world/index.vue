<!--
 * @Description: 球的世界
 * @Date: 2021-07-06 16:38:11
 * @LastEditTime: 2021-07-06 22:00:46
-->

<template>
    <div id="block" class="w-full h-full center"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import {
    Scene,
    Renderer,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    TextureLoader,
    DoubleSide,
    Mesh,
    Object3D,
} from "three";
import { useWindow } from "@/hooks/web/useWindow";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "stats.js";
export default defineComponent({
    setup() {
        let stop: number | null = null;
        onMounted(() => {
            const block: HTMLElement | null = document.getElementById("block");
            const IMG_PATH = "/threejs/world";
            const stats: Stats = new Stats();
            const { getContextSize } = useWindow();
            const { x, y } = getContextSize();
            const client = {
                x: x - 10 || 600,
                y: y - 10 || 400,
            };
            //  舞台
            const scene: Scene = new Scene();
            //  相机
            const camera: PerspectiveCamera = new PerspectiveCamera(
                45,
                client.x / client.y,
                0.1,
                1000
            );

            camera.position.z = 50;
            const renderer: Renderer = new WebGLRenderer({ antialias: true });
            renderer.setSize(client.x, client.y);

            //  操作
            const orbitControls: OrbitControls = new OrbitControls(
                camera,
                renderer.domElement
            );
            orbitControls.maxDistance = 250; //  往外移出范围

            //  箱子材质
            const textureLoader: TextureLoader = new TextureLoader();
            const boxTextureLoader = textureLoader.load(`${IMG_PATH}/box.jpeg`);

            //  创建箱子
            const boxGeometry: BoxGeometry = new BoxGeometry(10, 10, 10);
            const meshBasiMeterial: MeshBasicMaterial = new MeshBasicMaterial({
                map: boxTextureLoader,
                side: DoubleSide,
            });
            const mesh: Mesh = new Mesh(boxGeometry, meshBasiMeterial);
            mesh.name = "box";
            scene.add(mesh);

            //  渲染背景
            const bgList: string[] = ["rt", "lf", "up", "dn", "bk", "ft"];
            const skyboxMaterial: MeshBasicMaterial[] = bgList.map(
                (b) =>
                    new MeshBasicMaterial({
                        map: textureLoader.load(`${IMG_PATH}/${b}.png`),
                        side: DoubleSide,
                    })
            );

            //  天空为大盒子
            const skyboxGeometry: BoxGeometry = new BoxGeometry(500, 500, 500);
            const skyboxMesh: Mesh = new Mesh(skyboxGeometry, skyboxMaterial);
            skyboxMesh.name = "skyboxMesh";
            scene.add(skyboxMesh);

            //  渲染
            const render = () => {
                stop = requestAnimationFrame(() => render());
                renderer.render(scene, camera);
                const box: Object3D | undefined = scene.getObjectByName("box");
                const skyboxMesh: Object3D | undefined =
                    scene.getObjectByName("skyboxMesh");

                if (box) {
                    box.rotation.x += 0.01;
                    box.rotation.y += 0.01;
                }
                if (skyboxMesh) {
                    skyboxMesh.rotation.y += 0.001;
                }
                stats.update();
            };
            if (block) {
                //  性能监控
                stats.showPanel(0);
                block.appendChild(stats.dom);
                stats.dom.style.position = "absolute";

                block.appendChild(renderer.domElement);
            }

            render();
        });

        //  离开页面停止渲染
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
#block {
    height: 100%;
}
</style>