myButton.addEventListener('click',(e)=>{
  let request = new XMLHttpRequest();
  request.onreadystatechange = ()=>{
    // console.log(request.readyState);
    if(request.readyState === 4){
      console.log('变4了，请求完成了');
      if(request.status >= 200 && request.status < 300){ 
        //状态码如果是3开头的 浏览器会再发一个请求到别的网址 到底3开头的
        // 算成功还是失败  要具体情况具体分析 忽略3开头的
        console.log('说明请求成功');
        console.log(request.responseText); //请求成功了 就读这个响应
        console.log(typeof request.responseText);
        let string = request.responseText;
        let object = window.JSON.parse(string);
        //所谓parse就是理解一下这个字符串 把它变成对象 parse：解析
        // 浏览器自己写的 像document.getElementsById一样
        //把后台返回的符合json语法的字符串 转为js里对应的值 有可能是数组 对象
        console.log(typeof object);
        console.log(object); 
        console.log('object.note');  
        console.log(object.note);  
        console.log(object.note.from);  
        console.log('object.note.from');         
        // let parser = new DOMParser();
        // let xmlDoc = parser.parseFromString(request.responseText,"text/xml");
        // let title = xmlDoc.getElementsByTagName('heading')[0].textContent;
        // console.log(title);
        
      }else if(request.status >= 400){
        console.log('>= 400说明请求失败');        
      }      
    }    
  }
  request.open('get','/xxx');//配置request 第三个参数 默认是true 异步
  
  request.send();
  // console.log(request);
  
})

