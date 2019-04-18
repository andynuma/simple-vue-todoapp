var app = new Vue({
  el: "#app",
  data:{
    addText:"",
    list:[],
    nextId:1
  },
  methods:{
    addTodo(){
      if(this.addText){
        this.list.push({
          text:this.addText,
          id:this.nextId
        })
        this.addText="";
        this.nextId = this.nextId + 1;
      }
    },

    deleteTodo(id){
      this.list = this.list.filter((todo,index) => {
        return index !== id
      })
    }
  }
})