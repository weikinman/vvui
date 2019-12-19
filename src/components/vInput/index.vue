<template>
  <div :class="[
    type === 'textarea' ? 'el-textarea' : 'el-input',
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div class="el-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :tabindex="tabindex"
        class="el-input__inner"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        ref="input"
      >
      <!-- 前置内容 -->

      <!-- 后置内容 -->
      <span v-if="validated?true:false">{{msg}}</span>
      <!-- 后置元素 -->
    </template>
   
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ItemFacus from "../.././mixin/focus";
@Component
export default class vInput extends ItemFacus {
  @Prop()
  msg?:String;
  
  tabindex:number = 1;
 
  inputDisabled?:Boolean=false;

  
  readonly?:Boolean=false;


  showPassword:Boolean=false;

   
  passwordVisible:Boolean=false;

  
  hovering:Boolean = false;

  
  type:object = {
    type:String,
    default:'text'
  }

  
  validated:Boolean = true;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
