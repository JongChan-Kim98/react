const express = require('express');
const cors = require('cors');
const app = express();
const {sequelize, user} = require('./public');

// npm i cors

sequelize.sync({force:false}).then(()=>{
    console.log('sequelize 연결 잘댐');
}).catch((err)=>{
    console.log(err);
})

const options = {
    origin : 'http://localhost:3000'
}

// 전달 받은 객체 형태를 해석해서 사용할 수 있게 설정
app.use(express.json());

app.use(cors(options));

app.post('/log', async (req,res)=>{
    let {id, pw} = req.body;
    const users = await user.findOne({
        where : {user_id: id, user_pw:pw}
    });
    if(users){
       res.send('환영함!');
    } else{
       res.send('없는 아이디임');
    }
})

app.post('/registerPage', async(req,res)=>{
    console.log(req.body);
    let {id, pw, name} = req.body;
    const users = await user.findOne({
        where : {user_id: id}
    });
    if(!users){
        user.create({
            user_id : id, user_pw:pw, user_name : name
        }).then(()=>{
             res.send('가입축하');
        })
    } else{
        res.send('동일한 아이디가 있어요');
    }
})







app.listen(8000,()=>{
    console.log('백서버잘열림');
})