/*
Set/Map/WeakSet/WeakMap的区别
*/

/*
// 答案与解析
1)Set
成员唯一、无序且不重复；
[value, value]，键值与键名是一致的（或者说只有键值，没有键名）；
可以遍历，方法有：add、delete、has。

2)WeakSet
成员都是对象；
成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏；
与Set相比，WeakSet 只能是对象的集合，而不能是任何类型的任意值。
不能遍历，方法有 add、delete、has。

3)Map
本质上是键值对的集合，类似集合；
可以遍历，方法很多，可以跟各种数据格式转换。
Map 默认情况不包含任何键。只包含显式插入的键。/一个 Object 有一个原型, 原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。
一个 Map的键可以是任意值，包括函数、对象或任意基本类型。/一个Object 的键必须是一个 String 或是Symbol。
Map 中的 key 是有序的。因此，当迭代的时候，一个 Map 对象以插入的顺序返回键值。/一个 Object 的键是无序的
 Map 的键值对个数可以轻易地通过size 属性获取/Object 的键值对个数只能手动计算
 Map 是 iterable 的，所以可以直接被迭代。/迭代一个Object需要以某种方式获取它的键然后才能迭代。
 频繁增删键值对的场景下表现更好。/在频繁添加和删除键值对的场景下未作出优化。


4)WeakMap
只接受对象作为键名（null 除外），不接受其他类型的值作为键名；
键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的；
基本上，如果你要往对象上添加数据，又不想干扰垃圾回收机制，就可以使用 WeakMap。
不能遍历，方法有 get、set、has、delete。
*/