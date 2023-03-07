import { Module } from 'vuex'
import { AppModuleStateProps, RootStateProps } from '@/types/store'

const appModule: Module<AppModuleStateProps, RootStateProps> = {
  namespaced: true,
  state: () => ({
    locale: 'zhCn',
    asideCollapse: false,
    activeMenuIndex: '',
    componentCacheList: [],
    articleList: [
      {
        id: 1,
        title: 'javascript中遍历数组的多种方式',
        desc: '记录学习使用数组的各种方法',
        content: `<blockquote>
  <p>学习JavaScript总结了一下集中数组遍历的方式<br>
  更多学习参考<a href="https://www.runoob.com/">菜鸟教程</a></p>
  </blockquote>
  <p>@<a href="%E6%96%87%E7%AB%A0%E7%9B%AE%E5%BD%95">TOC</a></p>
  <hr />
  <h1>前言</h1>
  <p>学习js记录一下几种数组遍历的方式</p>
  <hr />
  <p><code data-backticks="1">提示：以下是本篇文章正文内容，下面案例仅供参考</code></p>
  <h1>一、普通for循环遍历</h1>
  <pre class="lang-javascript"><code data-language="javascript">for (let i = 0; i &lt; arr.length; i++) {
      console.log(arr[i])
  }
  </code></pre>
  <h1>二、ES5和ES6中的其他方式</h1>
  <h2>1.forEach</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript">let objArr = [
      { name: '123', age: 1 },
      { name: '456', age: 2 },
      { name: '789', age: 3 }
  ]
  let arr = [1, 2, 3, 4]
  arr.forEach(function(currentValue, index, arr) {
      currentValue += 5 //输出：[1,2,3,4]
      arr[index] += 5 //输出：[6,7,8,9]
  })
  objArr.forEach(function(currentValue, index, arr) {
      currentValue.name = '改变了'
      currentValue.age += 5
  })
  console.log(objArr)
  </code></pre>
  <blockquote>
  <p>forEach接受一个函数作为参数，函数有3个参数<br>
  第一个：当前项的值<br>
  第二个：当前项的索引<br>
  第三个：当前操作的数组对象<br>
  注意：若数组内的元素是引用类型时操作第一个参数可以改变原有数组内容<br>
  若数组内的元素时基本数据类型时操作第一个参数无法改变原有内容<br>
  forEach中无法使用break和continue关键字</p>
  </blockquote>
  <h2>2.map()</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript">let arr = [1, 2, 3, 4]
  let newArr = arr.map(function(currentValue, index, arr) {
      currentValue *= 5
      return currentValue
  })
  console.log(arr) //[1, 2, 3, 4]
  console.log(newArr) //[5, 10, 15, 20]
  </code></pre>
  <blockquote>
  <p>map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。<br>
  map() 方法按照原始数组元素顺序依次处理元素。<br>
  map() 方法不会改变原有数组。<br>
  map() 不会对空数组进行检测。<br>
  map() 不会改变原始数组。</p>
  </blockquote>
  <h2>3.filter()</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript">let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  let newArr = arr.filter(function(currentValue, index, arr) {
      return currentValue % 2 == 0 //该条件为true则会返回当前元素
  })
  console.log(newArr) //[2, 4, 6, 8, 10, 12, 14]
  </code></pre>
  <blockquote>
  <p>filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。<br>
  filter() 不会改变原始数组。</p>
  </blockquote>
  <h2>4.some()</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript">//不会改变当前数组
  let arr = [1, 2, 3, 4, 5, 6]
  let res = arr.some(function(currentValue, index, arr) {
      return currentValue % 2 == 0 //只要有一个元素使得该条件成立则会返回true,否则false
  })
  console.log(res) //true
  </code></pre>
  <h2>5.every()</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript">//不会改变当前数组
   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   let res = arr.every(function(currentValue, index, arr) {
       return currentValue % 2 == 0 //每一项都使得条件成立会返回true
   })
   console.log(res) //false
  </code></pre>
  <h2>6.for in</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript"> let arr = [1, 2, 3, 4, 5, 6]
   for (let index in arr) {
       console.log(index, arr[index])
   }
   Array.prototype.fun = function() {
       console.log('这是自定义的方法')
   }
   for (let index in arr) {
       console.log(index, arr[index])
   }
  
  </code></pre>
  <p><img src="https://img-blog.csdnimg.cn/36f8f8a6a4fb4078b2bb53d1255ea5ff.png#pic_center" alt="在这里插入图片描述" /><br>
  <img src="https://img-blog.csdnimg.cn/5e380983af30494d8e092107d9f28784.png#pic_center" alt="在这里插入图片描述" /></p>
  <blockquote>
  <p>for in 可以对于数组的遍历是不太适合的，他会把我们通过prototype加进去的自定义方法也遍历出来</p>
  </blockquote>
  <h2>7.find()</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript">let arr = [1, 2, 3, 4, 5, 6]
  let res = arr.find(function(currentValue, index, arr) {
      return currentValue % 2 == 0 //如果这一项条件满足则会返回当前项
  })
  console.log(arr, res) //[1, 2, 3, 4, 5, 6] 2
  </code></pre>
  <blockquote>
  <p>find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。<br>
  find() 方法为数组中的每个元素都调用一次函数执行：<br>
  当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。<br>
  如果没有符合条件的元素返回 undefined<br>
  不会改变数组的原始值。</p>
  </blockquote>
  <h2>8.findIndex()</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript">let arr = [1, 2, 3, 4, 5, 6]
  let res = arr.findIndex(function(currentValue, index, arr) {
      return currentValue % 2 == 0 
      //如果这一项条件满足则会返回当前项的索引值
  })
  console.log(arr, res) //[1, 2, 3, 4, 5, 6] 1
  </code></pre>
  <blockquote>
  <p>findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。<br>
  findIndex() 方法为数组中的每个元素都调用一次函数执行：<br>
  当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。<br>
  如果没有符合条件的元素返回 -1<br>
  并不会改变数组的原始值。</p>
  </blockquote>
  <h2>9.for of</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript"> let arr = [1, 2, 3, 4, 5, 6]
   for (let item of arr) {
       console.log(item)
   } //1 2 3 4 5 6
  
   for (let item of arr.values()) {
       console.log(item)
   } //1 2 3 4 5 6
  
  //获取索引
   for (let index of arr.keys()) {
       console.log(index)
   } //0 1 2 3 4 5
  
  //获取索引和值
   for (let [index, item] of arr.entries()) {
       console.log(index, item)
   }
  </code></pre>
  <h2>10.reduce()</h2>
  <p>代码如下（示例）：</p>
  <pre class="lang-javascript"><code data-language="javascript"> //求和
  let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let res = arr1.reduce(function(total, currentValue, currentIndex, arr) {
      return total += currentValue
  })
  console.log(res) //55
  
  //去重
  let arr2 = [1, 2, 2, 3, 3, 6, 7, 8, 8, 10]
  let newArr = arr2.reduce(function(total, currentValue, currentIndex, arr) {
      total.indexOf(currentValue) == -1 &amp;&amp; total.push(currentValue)
      return total
  }, [])
  console.log(newArr) //[1, 2, 3, 6, 7, 8, 10]
  </code></pre>
  <blockquote>
  <p>参数：function(total,currentValue, index,arr)，initialValue<br>
  total	初始值, 或者计算结束后的返回值。<br>
  currentValue	当前元素<br>
  currentIndex	当前元素的索引<br>
  arr	可选 当前元素所属的数组对象。<br>
  initialValue	可选 传递给函数的初始值</p>
  </blockquote>
  <h1>总结</h1>
  <p>不同的遍历有着不同的功能，利用这些方法可以帮助我们在开发过程简化很多操作，多加练习吧</p>`
      }
    ]
  }),
  mutations: {
    TOGGLE_LOCALE(state) {
      state.locale = state.locale === 'en' ? 'zhCn' : 'en'
    },
    COLLAPSE_ASIDE_BAR(state) {
      state.asideCollapse = !state.asideCollapse
    },
    TOGGLE_MENU_INDEX(state, index) {
      state.activeMenuIndex = index
    },
    ADD_COMPONENT_CACHE(state, name) {
      state.componentCacheList.push(name)
    },
    ADD_ARTICLE(state, article) {
      state.articleList.push(article)
    }
  },
  actions: {
    COLLAPSE_ASIDE_BAR({ commit }) {
      commit('COLLAPSE_ASIDE_BAR')
    },
    TOGGLE_MENU_INDEX({ commit }, index) {
      commit('TOGGLE_MENU_INDEX', index)
    },
    ADD_COMPONENT_CACHE({ commit }, name) {
      commit('ADD_COMPONENT_CACHE', name)
    },
    ADD_ARTICLE({ commit }, article) {
      commit('ADD_ARTICLE', article)
    }
  }
}

export default appModule
