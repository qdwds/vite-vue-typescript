<!--
 * @Description: 知识图库
 * @Date: 2021-06-22 22:06:31
 * @LastEditTime: 2021-06-24 17:11:56
-->

<template>
    <div class="w-full h-full">
        <button @click="handleAdd">add</button>
        <button @click="handleRemove">remove</button>
        <div ref="cyRef" class="w-full h-full"></div>
    </div>
</template>

<script >
import { defineComponent, nextTick, onMounted, reactive, ref } from "vue";
import * as cytoscape from "cytoscape";
export default defineComponent({
    setup() {
        const cyRef = ref(null);
        let cy = null;
        const state = reactive({
            nodes: [
                {
                    data: { id: "a" },
                    locked:true,       //  锁定节点不可变
                },
                {
                    data: { id: "b" },
                    grabbable:false,    //  是否允许移动
                    
                },
                
                {
                    data: { id: "c" },
                    pannable:false, //  是否可以平移
                },
                {
                    data: { id: "d" },
                    classes:["d","e"]
                },
                {
                    data: { id: "e" },
                },
            ],
            edges: [
                {
                    data: { id: "ab", source: "a", target: "b" },
                },
                {
                    data: { id: "ba", source: "b", target: "a" },
                },
                {
                    data: { id: "ca", source: "c", target: "a" },
                },
                {
                    data: { id: "cb", source: "c", target: "b" },
                },
            ],
        });
        cytoscape.warnings(false);
        const createCY = () => {
            if (cyRef) {
                cy = cytoscape({
                    container: cyRef.value,
                    animation: {
                        style: {
                            "background-color": "red",
                            width: 75,
                        },
                        duration: 1000,
                    },
                    elements: {
                        nodes: state.nodes,
                        edges: state.edges,
                    },
                    style: [
                        {
                            selector: "node",
                            style: {
                                "background-color": "#f40",
                                color: "#ffffff",
                                label: "data(id)",
                            },
                            duration: 1000,
                        },
                        {
                            selector: "edge",
                            style: {
                                width: 1,
                                "line-color": "#ccc",
                                "target-arrow-color": "#ccc",
                                "target-arrow-shape": "triangle",
                                "curve-style": "bezier",
                            },
                        },
                    ],
                    zoom: 1,
                    wheelSensitivity: 1,
                    minZoom: 1,
                    maxZoom: 5,
                    layout: {
                        name: "grid",
                        rows: 2,
                    },
                });
            }
        };
        const handleAdd = () => {
            cy.add([
                {
                    group: "nodes",
                    data: { id: "n0" },
                    position: { x: 100, y: 100 },
                },
                {
                    group: "nodes",
                    data: { id: "n1" },
                    position: { x: 200, y: 200 },
                },
                {
                    group: "edges",
                    data: { id: "e0", source: "n0", target: "n1" },
                },
                {
                    group: "edges",
                    data: { id: "n0a", source: "n0", target: "c" },
                },
            ]);
        };
        const handleRemove = () => {
            cy.remove(cy.getElementById("n0"));
        };

        //  触犯事件
        const clickEvent = () => {
            cy.on("tap", "node", (e) => {
                console.log(e);
            });
            cy.nodes().on("click", (e) => {
                console.log(e);
            });
            cy.nodes().on("mouseover", (e) => {
                console.log(e);
            });
        };
        
        
    
        onMounted(async () => {
            await nextTick();
            createCY();
            clickEvent();
            //  获取id
            console.log(cy.getElementById("n0"));
            //  自带选择器
            console.log(cy.$("node[id='n0']"));
        });
        return { cyRef, handleAdd, handleRemove };
    },
});
</script>
