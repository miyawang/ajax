var http = require('http'); //引入http模块
var fs = require('fs'); //引入fs模块
var url = require('url'); //引入url模块
var port = process.argv[2];

if(!port){
  console.log('请指定端口号\nnode server.js 80')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  if(path === '/'){
    let string = fs.readFileSync('./index.html','utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type','text/html;')
    response.write(string);
    response.end();
  }else if(path === '/main.js'){  //都是绝对路径
    let string = fs.readFileSync('./main.js','utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type','text/javascript;charset = utf-8')
    response.write(string);
    response.end();
  }else if(path === '/xxx'){
    response.statusCode = 200;
    // response.setHeader('Content-Type','text/xml;charset = utf-8')    
    // response.write(`
    // <note>
    //   <to>to 张飞</to>
    //   <from>from 关羽</from>
    //   <heading>结义</heading>
    //   <body>加上老大</body>
    // </note>
    // `);
    response.setHeader('Content-Type','text/json;charset=utf-8');
    response.write(`
    {
      "note":{
        "to":"关羽",
        "from":"张飞飞",
        "heading":"赤兔",
        "content":"的卢 刘小备"
      }
    }`)
    // 这不是一个对象  这是一个字符串 http第四部分永远是字符串 
    // 这个字符串 刚好符号json对象的语法 后台是没有办法返回一个对象给前端的
    response.end();
  }
  else{
    response.statusCode = 404;
    response.setHeader('Content-Type','text/html;')
    response.write('404啦亲');
    response.end();
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' hahahaha成功\n请打开 http://localhost:' + port)