<!--
 * @Description: demo
 * @Date: 2021-06-22 21:33:36
 * @LastEditTime: 2021-06-22 22:17:12
-->

<template>
    <div id="box" style="widht: 100%; height: 100%">
        <div id="cy" style="widht: 100%; height: 100%"></div>
    </div>
</template>

<script>
import cytoscape from "cytoscape";

export default {
    name: "cytoscape",
    components: {},
    data() {
        return {
            nodes: [
                {
                    data: {
                        id: "n0",
                    },
                },
                {
                    data: {
                        id: "n1",
                    },
                },
                {
                    data: {
                        id: "n2",
                    },
                },
                {
                    data: {
                        id: "n3",
                    },
                },
            ],
            edges: [
                {
                    data: {
                        source: "n3",
                        target: "n1",
                    },
                },
                {
                    data: {
                        source: "n2",
                        target: "n3",
                    },
                },
                {
                    data: {
                        source: "n0",
                        target: "n3",
                    },
                },
                {
                    data: {
                        source: "n1",
                        target: "n0",
                    },
                },
                {
                    data: {
                        source: "n0",
                        target: "n1",
                    },
                },
            ],
        };
    },
    methods: {
        createCytoscape() {
            cytoscape.warnings(false);
            const cy = cytoscape({
                container: document.getElementById("cy"),
                boxSelectionEnabled: true,
                userZoomingEnabled: true, //滚轮缩放
                wheelSensitivity: 0.1,
                autounselectify: true,
                autoungrabify: true,
                layout: {
                    // name: 'breadthfirst',
                },
                minZoom: 0.1,
                style: [
                    {
                        selector: "node",
                        style: {
                            content: "data(id)",
                            "text-opacity": 0.5,
                            height: 40,
                            width: 40,
                            "pie-size": "100%",
                            "text-valign": "center",
                            "text-halign": "left",
                            "pie-1-background-color": "#E8747C",
                            "pie-1-background-size":
                                "mapData(occupy, 0, 10, 0, 100)",
                        },
                    },
                    {
                        selector: ":parent",
                        css: {
                            "text-valign": "top",
                            "text-halign": "center",
                            "text-halign": "right",
                            "text-rotation": "90deg", //文字旋转
                        },
                    },
                    {
                        selector: "edge",
                        style: {
                            width: 1,
                            label: "data(label)",
                            "target-arrow-shape": "triangle",
                            "target-arrow-fill": "hollow", //箭头填充 空心
                            "line-color": "#9dbaea",
                            "target-arrow-color": "#9dbaea",
                            "curve-style": "bezier",
                        },
                    },
                ],
                elements: {
                    nodes: this.nodes,
                    edges: this.edges,
                },
            });
        },
    },
    mounted() {
        this.createCytoscape();
    },
};
</script>

<style>
</style>