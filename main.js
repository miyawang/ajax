myButton.addEventListener('click',(e)=>{
  let request = new XMLHttpRequest();
  request.onreadystatechange = ()=>{
    // console.log(request.readyState);
    if(request.readyState === 4){
      console.log('变4了，请求完成了');
      if(request.status >= 200 && request.status < 300){ 
        //如果是3开头的 浏览器会再发一个请求到别的网址 到底3开头的
        // 算成功还是失败  要具体情况具体分析 忽略3开头的
        console.log('请求成功');
        console.log(request.responseText);
        
      }else if(request.status >= 400){
        console.log('请求失败');
        
      }
      
    }
    
  }
  request.open('post','/xxx');//配置request 第三个参数 默认是true 异步
  
  request.send();
  // console.log(request);
  
})

