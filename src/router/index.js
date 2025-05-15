import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../home/HomePage.vue"
import RobotBuilder from "@/build/RobotBuilder.vue";
import PartInfo from "@/parts/PartInfo.vue";
import QrCode from "@/build/QrCode.vue";

export default createRouter ({
    history: createWebHashHistory(),
    routes: [{
        path: "/",
        name: "ГЛАВНАЯ",
        component: HomePage,
    }, 
    {
        path: "/build",
        name: "ПОСТРОЙ РОБОТА",
        component: RobotBuilder,
    },
    {
        path: "/qrcode",
        name: "QR код",
        component: QrCode,
    },
    {
        path: "/part/:partType/:id",
        name: "ЗАПЧАСТИ",
        component: PartInfo,
    },
],
})