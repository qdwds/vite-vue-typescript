/*
 * @Description: 进度条
 * @Date: 2021-06-18 10:11:23
 * @LastEditTime: 2021-06-18 10:18:54
 */

import type { Router } from "vue-router";
import { start, done } from "nprogress";
import 'nprogress/nprogress.css';

export const nprogressGuard = (router: Router) => {
    router.beforeEach(_ => {
        start()
    })

    router.afterEach(_ => {
        done();
    })
}