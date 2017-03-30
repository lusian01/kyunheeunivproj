//모듈을 추출합니다.
var fs = require('fs');
var connect = require('connect');
var mysql = require('mysql');
var ejs = require('ejs');

//데이터 베이스와 연결합니다.
var client = require('mysql').createClient({
	user: 'root',
	password:'fntldks01',
	database: 'userinfo'
});

//서버를 생성합니다.
connect.createServer(connect.bodyParser(), connect.router(function(app) {
	

		app.get('/musics', function(request, response) {
		//로그인 이미지 파일을 읽습니다.
		fs.readFile('secondrun.mp3', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'audio/mp3'});
			response.end(data);
		});
		});

		app.get('/musics2', function(request, response) {
			fs.readFile('GoodEveningNarvik.mp3', function(error, data) {
				response.writeHead(200, {'Content-Type': 'audio/mp3'});
				response.end(data);
			});
		});
	
	app.get('/mainmusic', function(request, response) {
			fs.readFile('GRAVitation.mp3', function(error, data) {
				response.writeHead(200, {'Content-Type': 'audio/mp3'});
				response.end(data);
			});
		});
		
		app.get('/loginimg', function(request, response) {
		//로그인 이미지 파일을 읽습니다.
		fs.readFile('Login.png', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
		});
	});
	
	app.get('/nokton', function(request, response) {
		//로그인 이미지 파일을 읽습니다.
		fs.readFile('nokton.png', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
		});
	});
	app.get('/background', function(request, response) {
		//로그인 이미지 파일을 읽습니다.
		fs.readFile('background.png', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
		});
	});
	
	app.get('/roamini', function(request, response) {
		//로그인 이미지 파일을 읽습니다.
		fs.readFile('roamini.jpg', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
		});
	});
	//GET-/INSERT
	app.get('/Insert', function(request, response) {
		//Insert.htm 파일을 읽습니다.
		fs.readFile('insert_cn.htm', 'utf8', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
		});
	});
	
	//GET-/Mainframe
	app.get('/main', function(request, response) {
		fs.readFile('mainframe1.html', 'utf8', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type' : 'text/html'});
			response.end(data);
		});
	});
	//GET-/login
	app.get('/login', function(request, response) {
		//Loginpage.html 파일을 읽습니다.
		fs.readFile('Loginpage.html', 'utf8', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
		});
	});
	
	//GET-/characterselect
	app.get('/characterselect', function(request, response) {
		//Loginpage.html 파일을 읽습니다.
		fs.readFile('charselect.htm', 'utf8', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
		});
	});
	
	
	//POST-/characterselect
	app.post('/characterselect', function(request, response) {
		//Loginpage.html 파일을 읽습니다.
//		fs.readFile('Loginpage.html', 'utf8', function(error, data) {
			//응답합니다.
			
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
//		});
	});
	//POST-/login
	app.post('/login', function(request, response) {
		//Loginpage.html 파일을 읽습니다.
//		fs.readFile('Loginpage.html', 'utf8', function(error, data) {
			//응답합니다.
			var body2 = request.body;
			var id = body2.txt_id;
			var pw = body2.txt_pw;
			//console.log(id);
			client.query('select * from userinfos', function(err, rows, cols) {
				if(err) throw err; 
				var tablerows = rows.length +1;
				var k=1;
				for(var i in rows) {
					if(id == rows[i].userid && pw == rows[i].userpassword) {
						console.log(id + 'login 성공');
						response.writeHead(302, {'Location':'/characterselect'});
				/*		//response.write('loing성공');
						response.writeHead(200, { 'Content-Type': 'text/html'});
						response.write('<!DOCTYPE "html">');
  						response.write('<html>');
  						response.write('<head>');
  						response.write('</head>');
 						response.write('<body>');
						response.write('<script language="JavaScript">');
						response.write('location.replace("/characterselect");');
						response.write('var returnValue1 = alert("login에 성공하였습니다. 즐거운 하루되세요.");');
						response.write('document.write(returnValue1);');
						response.write('</script>');
  						response.write('</body>');
  						response.write('</html>');  */
						response.end();
					}
					k= k+1;
				
				if(k >= tablerows) {
						console.log(id + 'login 실패');
						response.writeHead(302, {'Location':'/login'});
					/*	response.writeHead(302, { 'Content-Location': '/login'});

						response.write('<script language="JavaScript">');
						response.write('var returnValue = alert("login fail, please check id and password.");');
						//response.write('location.replace("/login")');
						response.write('</script>');*/
					/*	response.writeHead(200, { 'Content-Type': 'text/html'});
						response.write('<!DOCTYPE "html">');
  						response.write('<html>');
  						response.write('<head>');
  						response.write('</head>');
 						response.write('<body>');
						response.write('<script language="JavaScript">');
						response.write('var returnValue = alert("login fail, please check id and password.");');
												//response.write('location.replace(/"/login/");');

						//response.write('fucntion i{');
						response.write('loacation.replace(/"http/://ploracia.iptime.org:52273/login/");');
						//response.write('}');
						response.write('</script>');
  						response.write('</body>');
  						response.write('</html>'); 
*/														
						response.end();


					}
				}
				console.log(k);
				

			});

	});
	
	//POST - /INSERT
	app.post('/Insert', function(request, response) {
		//변수를 선언합니다.
		var body = request.body;
		console.log('id insert');
		//데이터베이스 쿼리를 실행합니다.
		client.query('insert into userinfos ( username, userid, userpassword) values (?, ?, ?)', [body.t_name1, body.t_id1, body.t_pw1]);
		
		response.writeHead(302, {'Location':'/login'});
		response.end();
		
		
	});
	
	
		//GET-/main2
	app.get('/main2', function(request, response) {
		//Loginpage.html 파일을 읽습니다.
		fs.readFile('mainframe2.html', 'utf8', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
		});
	});
	
	
	//POST-/main2
	app.post('/main2', function(request, response) {
		//Loginpage.html 파일을 읽습니다.
//		fs.readFile('Loginpage.html', 'utf8', function(error, data) {
			//응답합니다.
			response.writeHead(200, { 'Content-Type': 'text/html'});
			response.end(data);
//		});
	});
	

})).listen(52273, function () {
	console.log('server running at http:// 127.0.0.1:52273');
});