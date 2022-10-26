const express = require('express');
const cors = require('cors');
const app = express();
const {sequelize, user, border} = require('./public');

const multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
		cb(null, './uploadImg')
		//이미지 업로드시킬 폴더 위치
    },
    filename: function (req, file, cb) {		
		cb(null, file.originalname.replace('.PNG',""))
        // Buffer.from(filename, 'latin1').toString('utf8')
        // 서버에 저장할 파일 명
    }
})
let upload = multer({ storage: storage })
// storage는 업로드 될 폴더 위치

app.use("/uploadimg", express.static(__dirname + "/uploadImg"));


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

// 로그인
app.post('/log', async (req,res)=>{
    let {id, pw} = req.body;
    const users = await user.findOne({
        where : {user_id: id, user_pw:pw}
    });
   // console.log(users)
    if(users){
       res.send({ 
        notice : "로그인환영!",
        userid : users.user_id,
        userpw : users.user_pw,
        userPicture : users.profilePicture,
        userName : users.user_name
    });
    } else{
       res.send('없는 아이디임');
    }
})

// 회원가입 등록
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

// 질문작성하기
app.post('/writerQna', async(req,res)=>{
    let {title, content, id} = req.body;
    if (title == "" || content == "") {
        res.send('내용입력하세요')
    } else{
        border.create({
            title: title,
            content: content,
            user_id: id,
        }).then(()=>{
            res.send('게시글이 작성되었습니다.');
        })
    }
});

// 질문 목록
app.post('/qna',(req,res)=>{
    border.findAll().then((datas)=>{
        res.send(datas);
    })
})


// 마이페이지 아이디 업데이트  
app.post('/mypage', async(req,res)=>{
    let {reId, userId} = req.body;
        user.update({
            user_id : reId,
        },
        {
            where : {user_id: userId}
        }
        ).then((e)=>{
            res.send({
                notice:"아이디변경완료!",
            });
        }).catch((err) =>{
            console.log(err)
        })
   
    console.log("reId: " + reId)
    console.log("userId: " + userId)
})

// 마이페이지 프로필 사진 업데이트
app.post('/mypage'), upload.single("file"), async(req,res) =>{
    const userId = req.body;
    user.update({
        profilePicture : "uploadimg/" + req.file.originalname.replace("PNG","")
    },
    {
        where : {
            user_id : userId,
        }
    }).then((e)=>{
        res.send();
    })
}





app.listen(8000,()=>{
    console.log('백서버잘열림');
})


