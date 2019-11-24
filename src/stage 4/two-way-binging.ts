/**
 * 双向绑定主类，
 * 核心功能为： 
 * 1，bootstar()启动
 */
class UAD {
    private _$el:string;
    
    constructor(el:string){
        this._$el = el;
    }

}

class Util {
    constructor(parameters) {
    }

    /**
     * 从父对象中获取key对应的值
     * @param parent 父对象
     * @param key 子对象key
     */
    public static getValue(parent:any,key:string){
        if (parent && parent.hasOwnProperty(key)){
            return parent[key];
        }else{
            return null;
        }
    }
}