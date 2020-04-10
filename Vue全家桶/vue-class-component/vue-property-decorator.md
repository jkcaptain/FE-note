### vue-property-decorator 


`vue-property-decorator` 基于 `vue-class-component` 封装了一些常用的装饰器。

以下是结合 `TypeScript` 使用的 `装饰器` 用法。

#### @Prop - 定义 props 属性

传统写法
```typescript
export default {
  props: {
    propA: { type: Number },
    propB: { default: 'value' }
    propC: { type: [String, Boolean]}
  }
}
```

装饰器写法
``` typescript
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MyComponent extends Vue {
  @Prop(Number) readonly propA: number | undefined;
  @Prop({ default: 'value' }) readonly propB!: string;
  @Prop([String, Boolean]) readonly PropC: string | boolean | undefined;
}
```

#### @PropSync - 带 sync 修饰符的 props 属性
传统写法
``` typescript
export default {
  props: {
    name: {
      type: String
    }
  },
  computed: {
    syncedName: {
      get() {
        return this.name
      },
      set(value) {
        this.$emit('update:name', value)
      }
    }
  }
}
```
装饰器写法
``` typescript
@Component
export default class YourComponent extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
}
```
#### @Model - 自定义组件中的 model 属性
传统写法
``` typescript
export default {
  props: {
    checked: { type: Boolean }
  },
  model: {
    prop: 'checked',
    event: 'change'
  }  
}
```
装饰器写法
``` typescript
@Component
export default class MyComponent extends Vue {
  @Model('eventName', { type: Boolean }) readonly checked!: boolean;
}
```
#### @Watch - vue 中 的 watch
传统写法
``` typescript
export default {
  watch: {
    child: [
      {
        handler: 'onChildChanged',
        immediate: false,
        deep: false
      }
    ],
    person: {
      handler: 'onPersonChanged',
      immediate: true,
      deep: true
    }
  },
  methods: {
    onChildChanged(val, oldVal) {},
    onPersonChanged(val, oldVal) {}
  }
}
```
装饰器写法
``` typescript
@Component
export default class MyComponent extends Vue {
  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true }) 
  onPersonChanged(val: string, oldVal: string) {}
}
```
#### @Emit - vue 中的 $emit

传统写法
``` typescript
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    resetCount() {
      this.count = 0;
      this.$emit('reset');
    }
    returnValue() {
      this.$emit('return-value', 10);
    }
    addToCount(n) {
      this.count += n;
      this.$emit('add-to-count', n);
    }
    promise() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve(20)
        }, 0)
      });

      promise.then(value => {
        this.$emit('promise', value)
      });
    }
  }
}
```
装饰器写法

`return` 的返回值，表示要 `$emit` 的值。如果没有返回值，就只是广播`$emit`事件。

如果返回值是 `promise`，则`$emit`的参数是`resolved`的值。

``` typescript
@Component
export default class MyComponent extends Vue {
  count = 0;

  @Emit('reset')
  resetCount() {
    this.count = 0;
  }

  @Emit() 
  returnValue() {
    return 10;
  }

  @Emit() 
  addToCount(n: number) {
    this.count += n;
  }

  @Emit()
  promise() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(20)
      }, 0)
    });
  }
}
```
#### @Ref - vue 中的 $refs
传统写法
``` typescript
export default {
  computed: {
    anotherComponent: {
      get() {
        return this.$refs.anotherComponent  as AnotherComponent;
      }
    },
    button: {
      get() {
        return this.$refs.aButton as HTMLButtonElement;
      }
    }
  }
}
```
装饰器写法
``` typescript
import AnotherComponent from '@/path/to/another-component.vue'

@Component
export default class MyComponent extends Vue {
  @Ref() readonly anotherComponent!: AnotherComponent;
  @Ref('aButton') readonly button!: HTMLButtonElement;
}
```
#### @Provide / @Inject 

父组件提供 `Provide`，子组件注入`Inject`。

这对选项需要一起使用，以允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深。类似 `React` 里的 `上下文` 特性。

这对属性，是为了解决数据只能在父子组件之间通信的短板。

传统写法
``` typescript

```
装饰器写法
``` typescript

```
#### @ProvideReactive / @ InjectReactive
传统写法
``` typescript

```
装饰器写法
``` typescript

```
