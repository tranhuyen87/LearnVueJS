<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="toggle"
      @dblclick="changeType">
      {{ treeData.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
        <tree-view
            class="item" 
            v-for="(treeData , index) in treeData.children"
            :key="index"
            :treeData="treeData"
        />
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'tree-view', // necessary for self-reference
  props: {
    treeData: Object
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder() {
      return this.treeData.children && this.treeData.children.length
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen
      }
    },
    changeType() {
        //console.log(this.treeData.children)
      if (!this.isFolder) {
        this.treeData.children = []
        this.addChild()
        this.isOpen = true
        
      }
    },
    addChild() {
      this.treeData.children.push({
        name: 'new stuff'
      })
    }
  }
}
</script>
<style>
.treeview {
    text-align: left;
}
.item {
    display: block;
    cursor: pointer;
    line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>