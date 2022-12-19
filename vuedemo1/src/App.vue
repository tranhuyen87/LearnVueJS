<template>
  <div id="app">
    <comp-header 
      v-bind:title="title"
      v-on:ttlevent="changetitle"
    />
    <div class="contents">
      <!-- <button v-on:click="title = 'Thay doi title mới từ App'">change title tai App.vue </button><br> -->
      <div class="inner">
          <!-- <comp-listuser 
            v-bind:listUser="listUser"
            v-on:deleteUevent="deleteuseApp"
          /> -->
          <!-- <div class="demo">
            <comp-slot/>
          </div> -->
          <!-- <div class="markdown">
            <markdown-editor/>
          </div> -->

          <!-- <div class="treeview">
             <ul>
               <tree-view
                  class="item" v-bind:treeData="treeData"
               />
            </ul>
          </div> -->
          <div class="girdSort">
             <form id="search">
              Search <input name="query" v-model="searchQuery">
            </form>
            <DemoGrid
              :gridData="gridData"
              :gridColumns="gridColumns"
              :filterKey="searchQuery">
            </DemoGrid>
          </div>
      </div>
    </div>
    <comp-footer v-bind:title="title"/>
  </div>
</template>

<script>
/*
  App (title , listuser [])
  compHeader (title)
  compListuser
    -compUser (Object)
  compFooter (title)
  -> props - > những data truyền từ component cha vào component con
    cú pháp giống thuộc tính - > ràng buộc thuộc tính
      -> sử dụng v-bind:
*/

import compListuser from './components/compListuser.vue';
import compHeader from './components/compHeader.vue';
import compFooter from './components/compFooter.vue';
import compSlot from './components/compSlot.vue';
import markdownEditor from './components/markdownEditor.vue';
import treeView from './components/treeView.vue';
import DemoGrid from './components/gird.vue';
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ],
      treeData: {
        name: 'My Tree',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [{ name: 'hello' }, { name: 'wat' }]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [{ name: 'hello' }, { name: 'wat' }]
              }
            ]
          }
        ]
      },
      title: 'Welcome to Your Vue.js App',
      listUser : [
        {id: 1 , name: "Nguyen Van A" , active: true },
        {id: 2 , name: "Nguyen Van B" , active: true },
        {id: 3 , name: "Nguyen Van C" , active: false },
        {id: 4 , name: "Nguyen Van D" , active: true },
        {id: 5 , name: "Nguyen Van E" , active: false }
      ]
    }
  },
  components: {
    compHeader,
    compFooter,
    compListuser,
    compSlot,
    markdownEditor,
    treeView,
    DemoGrid
  },
  methods: {
    changetitle(data) {
      this.title = data.title;
      //this.title = "hoc vue js kho qua"
      //console.log("su kien click event:" ,data)
    },
    deleteuseApp(data) {
      //console.log("su kien delete tai App", data)
      var index = -1;
      this.listUser.forEach((u,idx)=>{        
        //console.log(u.id,idx,data.id);
        if(u.id === data.id) {
          index = idx
        }
      })
      console.log(index)
      if(index!=-1) {
        this.listUser.splice(index,1)
        //var test = this.listUser.splice(index,0);
        //console.log(test);
      }
    }
  }
  /*
    Props down - > Truyền dữ liệu từ thằng cha vào thằng con - > thằng con chỉ được dùng thôi không được thay đổi trực triêp.

    Event UP - > Truyền thông điệp (truyền sự kiện) thông báo cho component cha biết là nó muốn thay đổi dữ liêu
    - > Nhiêm vụ của component cha là nhận thông điệp và tiến hành thay đổi data
    sử dụng -> custom event trong vue js

    click- > sự kiện có sẵn trong vue js
    v-on:click= "changeTitle"
    "click" - > tên sự kiện
    "changeTitle" > hàm xử lí sự kiện được kích hoạt (khi người dùng click)
  */
}
</script>
