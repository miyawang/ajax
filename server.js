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
  }else if(path === '/main.js'){
    let string = fs.readFileSync('./main.js','utf8');
    response.statusCode = 200;
    response.setHeader('Content-Type','text/javascript;')
    response.write(string);
    response.end();
  }else if(path === '/xxx'){
    response.statusCode = 200;
    response.setHeader('Content-Type','text/xml')    
    response.write(`
    <?xml version="1.0",encoding="UTF-8"?>
    <note>
      <to>George</to>
      <from>John</from>
      <heading>Reminder</heading>
      <body>Don't forget the meeting!</body>
    </note>
    `);
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