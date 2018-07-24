/**
 * javaScript实现二叉排序树算法，使用闭包方式开发为插件
 * 二叉排序树（Binary Sort Tree），又称二叉查找树（Binary Search Tree），亦称二叉搜索树。
 * Created by yangjie on 2018/7/22.
 */
//JavaScript 弱语法的特点,如果前面刚好有个函数没有以";"结尾,那么可能会有语法错误，因此在这里加上";"号。
//使用自调用匿名函数封装(防止插件用户定义的函数名与插件名冲突)
;
(function(window,document){

    //定义节点类
    var Node = function(key){
        this.key = key; //节点的值
        this.left = null;//节点的左孩子节点
        this.right = null;//节点的右孩子节点
    }

    var root = null;//定义根节点

    //定义一些API方法
    var _binarySortTree = {
        insertOneNode:_insertOneNode,
        initTreeByArray:_initTreeByArray,
        getRoot:function(){
            return root;
        },
        inOrderTraversal:_inOrderTraversal,
        preOrderTraversal:_preOrderTraversal,
        postOrderTraversal:_postOrderTraversal,
        min:_min,
        max:_max,
        search:_search,
        remove:_remove,
        findMinNode:_findMinNode

    };

    /**
     * 将一个数值插入为节点
     * @param key
     */
    function _insertOneNode(key){
        var newNode = new Node(key);
        if(root===null){
            root = newNode;
        }else{
            insertNode(root,newNode);
        }

    }

    /**
     * 为当前节点插入新节点
     * @param node  老节点
     * @param newNode  新节点
     */
    var insertNode = function(node,newNode){
        //排序二叉树，节点的左节点小于节点的值，右节点的值大于节点的值
        if(newNode.key<node.key){
            if(node.left===null){
                node.left=newNode;
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                insertNode(node.right,newNode);
            }
        }
    }

    /**
     *  通过数组来初始化一棵二叉排序树
     * @param nodes  数值数组
     * @private
     */
    function _initTreeByArray(nodes){

        nodes.forEach(function(key){
            _binarySortTree.insertOneNode(key);
        });
    }

    /**
     *  中序遍历二叉排序树
     *  中序遍历二叉排序树可以将数组的值由小到大排序
     * @param callback  回调函数，专门用来处理节点值的方法
     */
    function _inOrderTraversal(callback){
        inOrderTraverseNode(root,callback);
    }

    var inOrderTraverseNode = function(node,callback){
        if(node!==null){
            inOrderTraverseNode(node.left,callback);
            callback(node);
            inOrderTraverseNode(node.right,callback);
        }
    }


    /**
     * 前序遍历二叉排序树
     * 前序遍历二叉排序树可以用于快速的复制一棵二叉排序树
     * @param callback 回调函数，专门用来处理节点值的方法
     */
    function _preOrderTraversal(callback){
        preOrderTraverseNode(root,callback);
    }

    var preOrderTraverseNode = function(node,callback){
        if(node!==null){
            callback(node);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    }


    /**
     * 后序遍历二叉排序树
     * 后序遍历可以运用到操作系统的文件系统的遍历中,先遍历子文件夹后遍历根文件目录
     * @param callback 回调函数，专门用来处理节点值的方法
     */
    function _postOrderTraversal(callback){
        postOrderTraverseNode(root,callback);
    }

    var postOrderTraverseNode = function(node,callback){
        if(node!==null){
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
            callback(node);
        }
    }

    /**
     * 二叉排序树查找最小值
     */
    function _min(){
        return minNode(root);
    }
    var minNode = function(node){
        if(node){
            while(node && node.left!==null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    /**
     * 二叉排序树查找最大值
     */
    function _max(){
        return maxNode(root);
    }

    var maxNode = function(node){
        if(node){
            while(node && node.right!==null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }
    /**
     * 查找二叉排序树是否包含特定值
     * @param value
     */
    function _search(key){
        return searchNode(root,key);
    };

    var searchNode = function(node,key){

        if(node===null){
            return false;
        }
        if(key<node.key){
            return searchNode(node.left,key);
        }else if(key>node.key){
            return searchNode(node.right,key);
        }else{
            return true;
        }

    };

    /**
     *  根据二叉排序树值来删除二叉排序树节点
     * @param key
     */
    function _remove(key){
        root = removeNode(root,key);
    }

    var removeNode = function(node,key){
        if(node===null){
            return null;
        }

        if(key<node.key){
            node.left = removeNode(node.left,key);
            return node;
        }else if(key>node.key){
            node.right = removeNode(node.right,key);
            return node;
        }else{
            //如果当前节点为叶子节点，即没有左子树也没有右子树
            if(node.left===null && node.right===null){
                node=null;
                return node;
            }

            //如果当前节点只有右子树时
            if(node.left===null){
                node = node.right;
                return node;
            }else if(node.right===null){ //如果当前节点只有左子树时
                node = node.left;
                return node;
            }

            //当前节点同时包含左子树和右子树时
            //查找当前节点右子树下面的最小值节点
            var minNode = _findMinNode(node.right);
            node.key = minNode.key;
            node.right = removeNode(node.right,minNode.key);
            return node;
        }
    }

    /**
     *  查找当前节点下的最小值节点
     * @param node
     */
    var _findMinNode = function(node){
        if(node){
            while(node && node.left!==null){
                node = node.left;
            }
            return node;
        }
        return null;
    }





    //这里确定了插件的名称
    //this.binarySortTree = _binarySortTree;
    window.binarySortTree = _binarySortTree;

}(window,document));