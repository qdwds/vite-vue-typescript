/*
 * @Description: 校验类型
 * @Date: 2021-07-07 15:06:27
 * @LastEditTime: 2021-07-07 15:06:41
 */

export const isFormData = (value: any): boolean =>
    Object.prototype.toString.call(value) === "[object FormData]"