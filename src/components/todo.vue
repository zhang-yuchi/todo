<!--  -->
<template>
  <div class="todo">
    <input @keyup.enter="addTodo" type="text" />
    <item :todos="item" v-for="(item) in fliterTodos" @deleteitem="deleteItem" :key="item.id"></item>
    <tabs
      :todos="todos"
      :fliter="fliter"
      @fliter="toggleFliter"
      @completedtodo="completetodo"
      :state="state"
    ></tabs>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import item from "./item.vue";
import tabs from "./tabs.vue";
let id = 0;
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    item,
    tabs
  },
  data() {
    //这里存放数据

    return {
      state: ["all", "active", "completed"],
      todos: [],
      fliter: "all"
    };
  },
  //监听属性 类似于data概念
  computed: {
    fliterTodos() {
      if (this.fliter === "all") {
        return this.todos;
      } else if (this.fliter === "active") {
        return this.todos.filter(item => !item.completed);
      } else {
        return this.todos.filter(item => item.completed);
      }
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = "";
    },
    toggleFliter(fliter) {
      this.fliter = fliter;
    },
    deleteItem(id) {
      this.todos.splice(
        this.todos.findIndex(item => id === item.id),
        1
      );
    },
    completetodo() {
      this.todos = this.todos.filter(item => !item.completed);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  deactivated() {} //如果有keep-alive缓存功能,当该页面撤销使这个函数会触发
};
</script>
<style scoped>
.todo {
  width: 50%;
  margin: 0 auto;
  border: 1px solid black;
  padding: 18px;
}
</style>