# JSAlgorithms
javaScript语言实现的数据结构和算法的插件，包括使用demo和API，可以引入相应的插件来使用相应的算法。
## binarySortTree.js
二叉排序树算法的实现插件，插件提供了以下API：
### 1. insertOneNode(key)   
插入一个二叉排序树的树节点。  
参数key为树节点的数值。   
>binarySortTree.insertOneNode(key);
### 2. initTreeByArray(array)   
通过一个数组来初始化一棵二叉排序树。  
参数array为数值数组。   
>binarySortTree.initTreeByArray(array);
### 3. getRoot()   
获取二叉排序树的根节点。     
>binarySortTree.getRoot();  

获取二叉排序树的根节点的左子树。
>binarySortTree.getRoot().left; 

获取二叉排序树的根节点的右子树。 
>binarySortTree.getRoot().right; 
### 4. preOrderTraversal(callback)   
二叉排序树前序遍历。  
参数callback为回调函数。该函数可以对每个遍历的节点做相应的操作和处理。
回调函数的的参数为每个遍历的节点对象。
> binarySortTree.preOrderTraversal(function(node){
>        console.log(node.key); \
>  });
### 5. inOrderTraversal(callback)   
二叉排序树中序遍历。  
参数callback为回调函数。该函数可以对每个遍历的节点做相应的操作和处理。
回调函数的的参数为每个遍历的节点对象。
> binarySortTree.inOrderTraversal(function(node){
>        console.log(node.key); \
>  });
### 6. postOrderTraversal(callback)   
二叉排序树后序遍历。  
参数callback为回调函数。该函数可以对每个遍历的节点做相应的操作和处理。
回调函数的的参数为每个遍历的节点对象。
> binarySortTree.postOrderTraversal(function(node){
>        console.log(node.key); \
>  });  
### 7. min()   
返回二叉排序树中节点的最小值。   
>binarySortTree.min();
### 8. max()   
返回二叉排序树中节点的最大值。   
>binarySortTree.max();  
### 9. search(key)   
查找二叉排序树是否存在节点值为key。 
如果存在，返回true；否则返回false。
>binarySortTree.search(key);    
### 10. remove(key)   
移除二叉排序树中节点值为key的树节点。 
>binarySortTree.remove(key);    
### 11. findMinNode(node)   
查找二叉排序树中当前节点的最小值节点。 
参数node为当前节点对象。
>binarySortTree.findMinNode(node);





