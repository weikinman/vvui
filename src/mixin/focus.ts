
import Vue from 'vue'
import Component from 'vue-class-component'
import MixinComponent from './components'
// You can declare a mixin as the same style as components.
@Component
export default class ItemFacus extends MixinComponent {
  focus() {
    let self:any = this;
    let focus:any = self['$refs'];
    focus.focus();
  }
}