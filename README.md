# Baseball Game
#### 4자리 숫자 야구 게임

--------
### 게임 규칙
- 플레이어가 게임에 입장하면 4자리의 랜덤 숫자가 생성된다. 플레이어에겐 보이지 않는다.
- 플레이어는 4자리의 숫자를 예측하여 입력한다.
- 입력한 숫자에 대한 결과값과 몇번째 시도인지를 화면에 보여준다.
- 숫자와 위치가 모두 맞는 경우 - Strike
- 숫자만 맞는 경우 - Ball
- 일치하는 숫자가 없는 경우 - Out
- 4자리의 숫자를 맞추면 게임이 종료된다.
- Out이 3번 되거나 10번의 기회가 소진되면 게임 종료된다.

-------
### 사용 Tool
- node 14.16.1
- npm 7.11.2
- javascript
- ubuntu 18

------
### install
- node, npm install

      curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
      sudo apt-get install -y nodejs
      sudo npm install -g npm
      
- start

      npm init
      npm install ejs --save
      node server.js
    


