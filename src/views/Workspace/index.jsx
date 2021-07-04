/*
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2021-07-04 18:57:45
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2021-07-04 19:14:20
 */

import { ElMain } from 'element-plus'
import ComponentList from './components/ComponentList'
import style from './index.less'

export default {
  components: {
    ElMain,
    ComponentList
  },
  render () {
    return (
      <ElMain class={style.workspace}>
        <ComponentList />
      </ElMain>
    )
  }
}
