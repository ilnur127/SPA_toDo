<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>
<script>
import EmptyLayout from './layouts/EmptyLayout'
import MainLayout from './layouts/MainLyout'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
}
</script>
<style>
    body {
        margin: 0;
        padding: 0;
    }
  .empty-layout {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      padding-top: 5rem;
  }
  .grey {
    background-color: #757575 !important;
  }
  .card {
    position: relative;
    margin: .5rem 0 1rem 0;
    background-color: #fff;
    transition: box-shadow .25s;
    border-radius: 2px;
    width: 500px;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);
  }
  .card-content {
    padding: 24px;
    border-radius: 0 0 2px 2px;
  }
  .card-action {
    background-color: inherit;
    border-top: 1px solid rgba(160,160,160,0.2);
    position: relative;
    padding: 16px 24px;
    border-radius: 0 0 2px 2px;
  }
  .card-title {
    font-size: 24px;
    font-weight: 300;
    display: block;
    line-height: 32px;
    margin-bottom: 8px;
  }
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
    box-shadow: none;
    box-sizing: content-box;
    transition: box-shadow .3s, border .3s;
  }
  select {
    font-size: 16px;
    margin: 8px 0 8px 0;
    padding: 0;
    box-shadow: none;
    height: 2rem;
    width: 100%;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
  }
  label {
    color: #9e9e9e;
    font-size: 1rem;
    cursor: text;
    text-align: initial;
  }
  .helper-text {
    position: relative;
    min-height: 18px;
    display: block;
    font-size: 12px;
    color: #f44336;
  }
  .auth-submit {
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: .5px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    vertical-align: middle;
    z-index: 1;
    transition: .3s ease-out;
    width: 100%;
    border: none;
    border-radius: 2px;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-transform: uppercase;
    font-size: 14px;
    outline: 0;
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)
  }
  .reg {
    color: #ffab40;
    margin-right: 24px;
    transition: color .3s ease;
    text-transform: uppercase;
    text-decoration: none;
  }
  .center {
      text-align: center;
  }
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px!important;
    z-index: 1000;
    background-color: #ffa726 !important;
  }
  nav .nav-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 2rem;
}
.menu-first {
    margin-right: 1rem;
}
.logout {
    margin-left: 2rem;
    border: 1px solid black;
    background: none;
    height: 36px;
    width: 100px;
    color: black;
    border-radius: 10px;
    cursor: pointer;
}
.logout:hover {
    background: rgb(212, 211, 211);
}
.app-content {
    padding-top: 64px;
    padding-left: 250px;
    transition: padding-left .3s;
    position: relative;
}
.app-page {
    padding: 2rem;
}
.page-title {
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: solid 1px rgba(51, 51, 51, .12);
    margin-bottom: 2rem;
    font-size: 2rem;
}
table {
    width: 100%;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    border: none;
}
tr {
    border-bottom: 1px solid rgba(0,0,0,0.12);
}
td, th {
    padding: 15px 5px;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
    border-radius: 2px;
}
.btn-small {
    height: 32.4px;
    line-height: 32.4px;
    font-size: 13px;
}
.btn {
    text-decoration: none;
    color: #fff;
    background-color: #26a69a;
    text-align: center;
    letter-spacing: .5px;
    transition: background-color .2s ease-out;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    display: inline-block;
    padding: 0 16px;
    text-transform: uppercase;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    outline: 0;
}
.fixed-action-btn {
    position: fixed;
    right: 23px;
    bottom: 23px;
    padding-top: 15px;
    margin-bottom: 0;
    z-index: 997;
}
.btn-floating.btn-large {
    width: 56px;
    height: 56px;
    padding: 0;
}
.btn-large {
    height: 54px;
    line-height: 54px;
    font-size: 15px;
    padding: 0 28px;
}
.btn-floating {
    display: inline-block;
    color: #fff;
    position: relative;
    overflow: hidden;
    z-index: 1;
    width: 40px;
    height: 40px;
    line-height: 40px;
    padding: 0;
    background-color: #26a69a;
    border-radius: 50%;
    transition: background-color .3s;
    cursor: pointer;
    vertical-align: middle;
}
.btn-floating.btn-large i {
    line-height: 56px;
}
.btn-floating i {
    width: inherit;
    display: inline-block;
    text-align: center;
    color: #fff;
    font-size: 2.4rem;
    line-height: 40px;
}
.nav--item {
    display:flex;
    align-items: center;
}
.breadcrumb-wrap {
    position: relative;
    display: flex;
    margin-bottom: 10px;
}
.breadcrumb-wrap, .breadcrumb-wrap a, .breadcrumb-wrap a:before {
    align-items: center;
}
.breadcrumb-wrap a, .breadcrumb-wrap a:before {
    display: inline-flex;
    color: rgba(0, 0, 0, .7)!important;
}
.breadcrumb-wrap a, .breadcrumb-wrap a:before {
    display: inline-flex;
    color: rgba(0, 0, 0, .7)!important;
}
.breadcrumb {
    font-size: 18px;
}
a {
    text-decoration: none;
}
.breadcrumb-wrap span {
    color: rgba(0, 0, 0, .7)!important;
    vertical-align: top;
    display: inline-block;
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 25px;
    margin: 0 10px 0 8px;
    -webkit-font-smoothing: antialiased;
}
.modal {
    position: absolute;
    top: 50%;
    height: 200px;
    width: 500px;
    background: white;
    left: 40%;
    padding: 20px;
    box-shadow: 0px 5px 15px 5px #9c9c9c;
    border-radius: 10px;
}
.modal-text {
    margin: 10px;
    font-size: 18px;
}
.modal-action {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
}
button {
    width: 100px;
    height: 30px;
    background: none;
    border: 1px solid;
    border-radius: 10px;
    cursor: pointer;
}
button:hover {
    background: rgb(182, 181, 181);
}
.menu-item {
    cursor: pointer;
}
</style>
