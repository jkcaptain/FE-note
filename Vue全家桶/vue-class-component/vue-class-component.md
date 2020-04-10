### vue-class-component

#### 声明组件写法
``` javascript
export default class HelloWorld extends Vue {}
```

#### 引入组件写法

```javascript
@Component({
  components: {
    OtherComponent
  }
});

export default class HelloWorld extends Vue {}
```

#### data, computed, methods, hooks 写法

``` javascript
export default class HelloWorld extends Vue {

  // data
  message = 'helloWorld';
  d
    return {}
  }

  // computed
  get computedName() {
    return this.message + '-name';
  }

  set computedName(value) {
    const [msg] = value.split('-');
    this.message = msg;
  }

  // methods
  methodName() {

  }

  // hooks
  mounted() {}
  render() {}
}
```

