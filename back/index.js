const express = require('express');
const cors = require('cors');
const app = express();
const {sequelize, user} = require('./public');

// npm i cors

sequelize.sync({force:false}).then(()=>{
    console.log('연결 잘댐');
}).catch((err)=>{
    console.log(err);
})

const options = {
    origin : 'http://localhost:3000'
}

// 전달 받은 객체 형태를 해석해서 사용할 수 있게 설정
app.use(express.json());

app.use(cors(options));

app.post('/login', async (req,res)=>{
    let {id, pw} = req.body;
    const users = await user.findOne({
        where : {user_id: id, user_pw:pw}
    });
    if(users){
       res.send(true);
    } else{
        res.send(false);
    }
})

app.post('/signUp', async(req,res)=>{
    console.log(req.body);
    let {id, pw} = req.body;
    const users = await user.findOne({
        where : {user_id: id}
    });
    if(!users){
        user.create({
            user_id : id, user_pw:pw
        }).then(()=>{
             res.send('너 가입됨');
        })
    } else{
        res.send('동일한 아이디가 있어요');
    }
})

app.listen(8000,()=>{
    console.log('서버잘열림');
})