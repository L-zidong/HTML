//DOCUMENT
// 获取不同类型的元素
const elementById = document.getElementById('myId');
const elementsByClass = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const elementByQuery = document.querySelector('.myClass');
const elementsByQuery = document.querySelectorAll('div');

// 创建新元素
const newDiv = document.createElement('div');
newDiv.textContent = '这是一个新创建的div';

// 访问文档信息
console.log(document.title);
console.log(document.URL);


//ELEMENT
// 获取元素信息
const element = document.getElementById('myElement');
console.log(element.tagName);     // 标签名
console.log(element.innerHTML);   // 内部HTML
console.log(element.textContent); // 文本内容

// 修改元素
element.style.color = 'red';
element.className = 'newClass';
element.setAttribute('data-value', 'newValue');

// 添加/删除/切换类
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');

// 插入/删除节点
const parent = element.parentNode;
parent.appendChild(newElement);
parent.removeChild(element);




//ATTRIBUTE
// 获取/设置/删除属性
element.getAttribute('href');
element.setAttribute('title', 'New Title');
element.removeAttribute('disabled');

// dataset API - 获取/设置 data-* 属性
element.dataset.id = '123';      // 设置 data-id="123"
const id = element.dataset.id;   // 获取 data-id 的值



//NODE
// 节点关系
element.parentNode;       // 父节点
element.childNodes;       // 子节点集合
element.firstChild;       // 第一个子节点
element.lastChild;        // 最后一个子节点
element.nextSibling;      // 下一个兄弟节点
element.previousSibling;  // 上一个兄弟节点

// 节点类型检查
if (node.nodeType === Node.ELEMENT_NODE) {
  console.log('这是元素节点');
}

// 节点操作
const clonedNode = node.cloneNode(true); // 深拷贝




//CSS操作
// 直接修改样式
element.style.backgroundColor = 'blue';
element.style.margin = '10px';

// 使用cssText批量设置
element.style.cssText = 'color: red; font-size: 16px;';

// 获取计算后的样式
const computedStyle = window.getComputedStyle(element);
console.log(computedStyle.color);

// 使用类名控制样式
element.classList.add('active');
element.classList.contains('active'); // 检查是否包含类名