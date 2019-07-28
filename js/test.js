/**
 * @description 测试
 * @constructor 测试构造函数
 */
function test(a){
	console.log(a);
	return "xx";
}

/**  
 * @description 这是一个构造函数  
 * @example   
 * var animal = new Animal('恐龙',1000);  
 * @constructor  
 */  
function Animal(name,weight){  
    this.name = name;  
    this.weight = weight;  

    this.say = function(){}  
}  

/**  
 * @extends {Animal}  
 */  
function Dog(){  
	this.say = function(){  
		console.log(this.name+":wang wang wang ...");  
	}  
}  
Dog.prototype = new Animal();  
var dog = new Dog();  
dog.name = "gougou";  
dog.say();  

/**  
 * @property {IDString} id id元素  
 * @property {ClassString} classNames class样式  
 */  
var htmlOptions = {  
    id:null,  
    classNames:null  
}  
htmlOptions.id = "123";  
htmlOptions.classNames = "arrow area"  


/**  
 * @return {Element}  
 */  
function getDocument() {  
    //some code  
}  
getDocument().setAttribute();
getDocument().getElementById();
getDocument().getElementById("123");  

[].findIndex(0);
[].find(function(e){
	console.log(e)
})

/**  
 * @type {IDString}  
 */  
var htmlId = null;  
htmlId = "123";