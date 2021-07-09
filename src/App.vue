<template>
  <div id="app">
    <div class="banner-bg header">
      <span class="title">svg-sprite</span>
    </div>
    <div class="wrap">
      <div class="page-collection-detail-wrap">
        <ul class="block-icon-list">
          <li>
            <div class="icon-twrap">
              <svg-icon icon-class="baocun" class='custom-class' />
            </div>
            <span class="icon-name" title="保存">
              <span>保存</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {},
  created () {
   
  },
}
</script>

<style lang="scss" scoped>
.banner-bg {
  background: #090723;
  // position: absolute;
  width: 100%;
  height: 200px;
  left: 0;
  top: -55px;
  padding-top: 55px;
  overflow: hidden;
  margin: 0 auto;
  .title {
    color: #fff;
  }
}
.wrap {
  width: 1160px!important;
  height: 600px;
  margin: 0 auto;
  .page-collection-detail-wrap {
    padding-top: 30px;
    overflow: visible;
    .block-icon-list {
      color: #666;
      li {
        float: left;
        margin: 15px 13px;
        width: 100px;
        height: 105px;
        text-align: center;
        position: relative;
        overflow: visible;
        border: 1px dashed transparent;
        border-radius: 5px;
        .icon-twrap {
          display: inline-block;
          margin-top: 18px;
        }
        .icon-name {
          display: block;
          width: 100%;
          height: 20px;
          line-height: 20px;
          color: #666;
          font-size: 12px;
          text-align: center;
          margin-top: 15px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
ul {
  list-style-type: none;
  list-style-image: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.custom-class {
  color: #31cf9a;
}
</style>
