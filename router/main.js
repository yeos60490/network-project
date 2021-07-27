module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });

     //example 코드
     app.get('/example',function(req,res){
        res.render('example.html')
     });

     app.get('/example_get',function(req,res){
	var id = req.query.id;
	var age = req.query.age;
	console.log(id, age);
 	res.send();
     });



     //랜덤 숫자 만들어서 반환
     app.get('/random',function(req,res){
      var numbers=[0,1,2,3,4,5,6,7,8,9];
      var random = 0;
      for(var i=0; i<4; i++){
        idx=Math.floor(Math.random() * numbers.length);
	    if(i==0 && idx == 0){
	    	idx += 1;
	    }
	    random = 10*random + numbers[idx];
          numbers.splice(idx,1);
      }

      console.log("random number: " + random);
      res.send({"number" : random});
     });

     
     // 프론트에서 숫자(사용자 입력)를 주면 해당 숫자의 strike, ball등의 결과를 반환
     // 2021.05.07 v1. 시작 (테스트 안해봄. 프론트 완성시 해보고 수정 예정)
     app.get('/result', function(req,res){
       console.log("result")
      let strike = 0, ball = 0, out = 0, win = 0;

      console.log(req.query);

      // 일단 아래 코드는 프론트에서 user, base를 string type으로 주었다고 가정. (number type으로 준다면 toString() 함수만 추가하면 됨)
      let usernumb = req.query.user;       // 프론트로부터 받은 사용자 입력 숫자 (나중에 프론트가 주는 변수명에 따라 바꾸면 됨)
      let basenumb = req.query.base;       // 프론트로부터 받은 맞춰야 하는 숫자 (나중에 프론트가 주는 변수명에 따라 바꾸면 됨)

      console.log(usernumb);
      console.log(basenumb);

      let t = 4;                     // 4자리 숫자 야구 (나중에 자리수 늘리고 싶으면 변경하면 됨) 
      let outcnt = 0;

      while(t--){
        let temp = usernumb[t];      // 사용자가 준 숫자 중 하나 파싱
        if(temp === basenumb[t]) strike++;    // strike 조건 만족시
        else if(basenumb.indexOf(temp) != -1) ball++;  // ball 조건 만족시
        else outcnt++;
      }

      if(outcnt === 4) out = 1;      // 숫자 하나도 못맞췄을 때
      if(strike === 4) win = 1;      // 숫자 다 맞췄을 때

      console.log(`strike : ${strike}, ball : ${ball}, out : ${out}, win : ${win}`);  // 테스트용

      res.send( {                    // JSON 형태로 반환
        "strike" : strike,
        "ball" : ball,
        "out" : out,
        "win" : win
      })
     })

     // 힌트 기능
     // 프론트에서 맞춰야 할 숫자 numb를 넘겨주면 이 중 랜덤으로 하나의 숫자를 자리수와 함께 알려줌
     app.get('/hint',(function(req, res) {
        console.log("hint");
        let rand = Math.floor(Math.random() * 4); // 0~3 사이의 난수 생성
        let ret = '';
        if(rand === 0) ret = `${req.query.numb[0]}***`;
        else if(rand === 1) ret = `*${req.query.numb[1]}**`;
        else if(rand === 2) ret = `**${req.query.numb[2]}*`;
        else ret = `***${req.query.numb[3]}`;
        res.send({
          "digit" : rand,
          "num" : req.query.numb[rand]
        })
      })
    );
}
