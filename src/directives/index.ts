/*
 * @Description: 
 * @Date: 2021-07-08 14:35:40
 * @LastEditTime: 2021-07-08 14:48:08
 */

import type { App } from 'vue';
import { setupCopyDirective } from "./copy";

export function setupGlobDirectives(app: App) {
    setupCopyDirective(app)
}
