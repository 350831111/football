function services($http){
	function JsonUrl(params){
		var data="",arr=[];
		for(var i in data){
			data=i+"="+params[i];
			arr.push(data);
		}
		return arr.join("&")
	}
	function fetch(url,params,mothod){
		if(mothod=="get"){
			params=JsonUrl(params)
			return $http.get(url+"?"+params)
		}else{
			params=JsonUrl(params)
			return $http.post(url,params)
		}
	}

	this.access_Data=function(url,params,mothod){
		return fetch(url,params,mothod)
	}
}
angular.module("myApp")
		.service("services",services);