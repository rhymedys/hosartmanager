/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2021-07-04 18:57:45
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2021-07-04 22:47:52
 */

import { ElMain } from 'element-plus'
import ComponentList from './components/ComponentList'
import ComponentPrview from './components/ComponentPrview'
import style from './index.less'

export default {
  render () {
    return (
      <ElMain class={style.workspace}>
        <ComponentList />
        <ComponentPrview />
      </ElMain>
    )
  }
}
