<!--
 * @Description: 
 * @Date: 2021-06-24 14:38:06
 * @LastEditTime: 2021-06-24 16:04:42
-->

<template>
    <div ref="sectorRef" class="w-full h-full"></div>
</template>

<script >
import { defineComponent, onMounted, ref, nextTick } from "vue";
import cytoscape from "cytoscape";
export default defineComponent({
    setup() {
        const sectorRef = ref(null);
        let cy = null;
        const getData = () => {
            fetch("data/sector.json")
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    console.log(res[0]);
                    createSector(res);
                });
        };
        const createSector = (elements) => {
            if (sectorRef.value) {
                cy = cytoscape({
                    container: sectorRef.value,

                    elements,
                    style: [
                        {
                            selector: "node",
                            style: {
                                "background-color": "#f40",
                                color: "#ffffff",
                                label: "data(id)",
                            },
                        },
                        {
                            selector: "edge",
                            style: {
                                width: 1,
                                "line-color": "green",
                                "target-arrow-color": "#ccc",
                                "target-arrow-shape": "triangle",
                                "curve-style": "bezier",
                            },
                        },
                    ],
                    zoom: 1,
                    minZoom: 0.1,
                    maxZoom: 2,
                    layout: {
                        name: "concentric",
                        concentric: (node) => node.degree(),
                        levelWidth: () => 2,
                    },
                });
            }
        };

        onMounted(async () => {
            await getData();
            await nextTick();
        });
        return {
            sectorRef,
        };
    },
});
</script>
