<template>
  <div class="compoent-list">
    <h3>组件选择器</h3>
    <div class="wrapper">
      <div
        class="item"
        draggable="true"
        v-for="item of $options.componentList"
        :key="item.pageComponentId"
        :data-component="item.pageComponentId"
        @dragstart.stop="e=>$emit('on-item-drag-start',e,item)"
        @dragend.stop="e=>$emit('on-item-drag-end',e,item)"
      >
        <i class="fa item__icon" :class="item.icon" />
        <div class="item__title">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import componentList from '../../../../config/componentList.json'
export default {
  name: 'ComponentList',
  componentList,
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.compoent-list {
  min-width: 186px;
  width: 186px;
  height: calc(~'100vh - 80px');
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 10px 5px;
  overflow: auto;

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item {
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 80px;
      width: 80px;
      min-width: 80px;

      &:hover {
        background: #eef0f4;
        cursor: move;
      }
      &__icon {
        color: rgb(125, 126, 128);
        font-size: 32px;
      }
      &__title {
        color: #323233;
        line-height: 16px;
        margin-top: 4px;
        font-size: 14px;
        user-select: none;
      }
    }
  }
}
</style>
