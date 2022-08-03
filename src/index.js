const express=require('express');
const morgan=require('morgan');
const mysql=require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const upload=require('express-fileupload');
const { dirname } = require('path');
const path=require('path');
const { connect } = require('http2');
const e = require('express');
const app=express();
const port=3000;
const shortid = require('shortid');
const { isContext } = require('vm');
const { ppid } = require('process');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(upload())


app.use(express.json({limit :'1mb'}));



app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:true,
  cookie:{secure:false},


}))



app.get('/logout',function(req,res,next){
      req.session.destroy();
      res.redirect('/')
    });
// app.use(morgan('combined'));
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public/style')))
app.use(express.static(path.join(__dirname,'/public/img')))
app.use(express.static(path.join(__dirname,'/public/js')))


var connection=mysql.createConnection({
  port:3307,
  host:'localhost',
  user:'root',
  password:'',
  database:'web_banhang',
})

connection.connect(function(error){
if(!error){
console.log("Success")
}
else{
console.log(error)
}
})


app.set('view engine', 'ejs');


app.set('views',path.join(__dirname,'/resource/views'))

function renderhome(req,res,page,place){
    
  connection.query(`SELECT * FROM san_pham ${place}`,function(err,row,fields){
      if(!err){
        connection.query(`SELECT * FROM size_sanpham` ,function(err,row1){
          for(var i=0;i<row.length;i++){
            var arr=[],temp=[]
            var soluong=0
            for(var j=0;j<row1.length;j++){
              var size_soluong='';

              if(row[i].id_sanpham===row1[j].id_sanpham){
                    size_soluong=row1[j].size.concat(":",row1[j].con_hang);
                    arr.push(row1[j].size)
                    soluong=row1[i].soluong_daban
                    temp.push(size_soluong);
                  }
            }
            temp=temp.join('-')
            arr=arr.join('-')
            row[i]["size"]=arr
            row[i]["soluongdaban"]=soluong;
            row[i]["tinhtrangsize"]=temp;
            // console.log(row[i])
          }
          
          res.render(page,{result:row})
        })
      }
    })

  }


app.get('/',function(req,res){
  renderhome(req,res,'homepage');
})


app.get('/page2',function(req,res){
  renderhome(req,res,'page2');
})

app.get('/login',function(req,res){
  if(!req.session.userId){
    res.render('login');
  }
  else{
  connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
    if(!err){
    if(row[0].loai_taikhoan=='User'){
          res.redirect('/information')
    }
    else if(row[0].loai_taikhoan=='Admin'){
      res.redirect('/admin');
    }
    else if(row[0].loai_taikhoan=='Kho'){
      res.redirect('/quanlykho');
    }
    else if(row[0].loai_taikhoan=='Quản lý đơn hàng'){
      res.redirect('/quanlydonhang');
    }


  }
  else{
    console.log(err)
  }
})
}
})


app.post('/changepass',function(req,res){
    connection.query(`SELECT tai_khoan, mat_khau FROM user_account WHERE tai_khoan="${req.session.userId}" and mat_khau ="${req.body.oldpass}"`,function(err,row){
      if(!err){
        if(row.length!=0){
          connection.query(`UPDATE user_account SET mat_khau="${req.body.confirm}" WHERE tai_khoan="${req.session.userId}"`,function(err,row){
            if(!err){
            res.json("Success")}
            else{console.log(err)}
          })
        }
        else{
          res.json("Sai pass")
        }
      }
      else{
        console.log(err)
      }
    })

})



app.post('/login',function(req,res){
  connection.query(`SELECT tai_khoan, mat_khau FROM user_account where tai_khoan="${req.body.taikhoan}" and mat_khau="${req.body.matkhau}"`,function(err,row){
    if(!err){
      if(row.length!==0){
      req.session.userId= req.body.taikhoan

      connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.body.taikhoan}"`,function(err,row){
       if(!err){
        // console.log(row)
          if(row[0].loai_taikhoan=='User'){
            res.redirect('/information')
      }
          else if(row[0].loai_taikhoan==='Admin'){
              res.redirect('/admin');
           }
      else if(row[0].loai_taikhoan==='Kho'){
        res.redirect('/quanlykho');
        }
      else if(row[0].loai_taikhoan==='Quản lý đơn hàng'){
          res.redirect('/quanlydonhang');
}
    }
    else{
      console.log(err)
    }
  
  }
  )
}
  else{
    res.redirect('/login');
  }
  }
  else{
    console.log(err);
  }
}
)})






app.get('/quanlytaikhoan',function(req,res){
  if(req.session.userId){
    connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
      if(!err){
        // console.log(row[0].loai_taikhoan)
      if(row[0].loai_taikhoan==="Admin"){
        connection.query(`SELECT * FROM user_account`,function(err,data){
          if(!err){
            res.render('ql_account',{result:data})
        }
          else{
            console.log("1",err)
          }
      })
    }
      else{
        res.redirect('/login');
      }
    }

else{
  console.log("2",err);
}
})}

else{
  res.redirect('/login');
}
})





function render_admin(req,res){
      if(req.session.userId){
        connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
          if(!err){
          if(row[0].loai_taikhoan=='Admin'){
            connection.query(`SELECT * FROM san_pham`,function(err,data){
              if(!err){
                res.render('index_admin',{data})
            }
              else{
                console.log("1",err)
              }
          }
          )
        }
          else{
            res.redirect('/login');
          }
        }
  
    else{
      console.log("2",err);
    }
  })}
  
    else{
      res.redirect('/login');
    }
  }


app.get('/admin',function(req,res){
  if(req.session.userId){
    connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
      if(!err){
        // console.log(row[0].loai_taikhoan)
      if(row[0].loai_taikhoan==="Admin" ||row[0].loai_taikhoan==="Kho" ){
        connection.query(`SELECT * FROM san_pham`,function(err,data){
          if(!err){
            res.render('index_admin',{result:data})
        }
          else{
            console.log("1",err)
          }
      })
    }
      else{
        res.redirect('/login');
      }
    }

else{
  console.log("2",err);
}
})}

else{
  res.redirect('/login');
}
});




app.get('/register',function(req,res){
  if(!req.session.userId){
  res.render('register')
  }
  else{
    connection.query(`SELECT tai_khoan,loai_taikhoan FROM user_account where tai_khoan ="${req.session.userId}"`,function(err,row){
      if(!err){
      if(row[0].loai_taikhoan=='User'){
        res.redirect('/information')
      }
      else if(row[0].loai_taikhoan=='Admin'){
        res.redirect('/admin')
      }
      else if(row[0].loai_taikhoan=='Kho'){
        res.redirect('/quanlykho')
      }
      else if(row[0].loai_taikhoan=='Quản lý đơn hàng'){
        res.redirect('/quanlydonhang')
      }
    }
    else{console.log(err)}
    })
  }
})

app.get('/information',function(req,res){
  if(req.session.userId){
    connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
      if(!err){
        if(row[0].loai_taikhoan=='User'){
          connection.query(`SELECT * FROM user_account WHERE tai_khoan="${req.session.userId}"`,function(err,row){
            if(!err){
              res.render('information',{result:row})
            }
            else{
              console.log(err)
            }
          })
        }
        else{
          res.redirect('/admin');
        }

  }
  else{
   console.log(err)
  }

})
  }
  else{
    res.redirect('/login')
  }
})




app.get('/cart',function(req,res){
  if(req.session.userId){
    connection.query(`SELECT * from user_account where tai_khoan='${req.session.userId}'`,function(err,row){
      if(!err){
        connection.query(`SELECT * FROM discount `,function(err,row1){
          if(!err){  
            row[0]["discount"]=JSON.parse(JSON.stringify(row1))
            res.render('cart',{result:row})
          }    
      })
      

      }
      else{
        console.log(err)
      }
    })
  }
  else{

        connection.query(`SELECT * FROM discount `,function(err,row1){
          if(!err){  
            res.render('cart',{result:row1})
        } else{console.log(err)}
      })
  }
})


app.post('/discount',function(req,res){
  connection.query(`SELECT discount_value from discount where discount_id='${req.body.discount_code}'`,function(err,row){
    if(row.length==0){
        res.json("invalid")
    }
    else{
      console.log(row)
      res.json(row);
    }
  })
})


app.post('/cart',function(req,res){
  if(req.body.arr.length!==0){
    var discount=[];
    var type;
  if(req.session.userId){ 
  for (var i=0;i<req.body.arr.length;i++){
    discount.push(req.body.arr[i].total *(1-(req.body.discountvalue/100+ 0.05)));
  }
  type='User'
}
  else{
    for(var a=0;a<req.body.arr.length;a++){
      discount.push(req.body.arr[a].total * (1-req.body.discountvalue/100));
    }
    type='Guest'

  }
  var iddon=shortid.generate();
  for(var x=0;x<req.body.arr.length;x++){
    connection.query(`INSERT INTO don_hang VALUES ('${iddon}','${req.body.arr[x].id}','${req.body.email}','${req.body.ten}','${req.body.arr[x].name}','${req.body.arr[x].size}','${req.body.arr[x].count}',null,'${discount[x]}','${type}','${req.body.diachi}','${req.session.userId}','${req.body.sdt}',DEFAULT)`,function(err,row){
      if(!err){
      console.log("success")
      }
      else{
        console.log(err);
      }
    })
  }

  for(var i=0;i<req.body.arr.length;i++){
    connection.query(`UPDATE size_sanpham SET soluong_daban=soluong_daban+'${req.body.arr[i].count}' , con_hang=so_luong-soluong_daban WHERE id_sanpham='${req.body.arr[i].id}' and size='${req.body.arr[i].size}'`)
  }

}
  else{
    res.json('Empty cart')
  }
})



app.post('/deletekho',function(req,res){
  connection.query(`DELETE FROM size_sanpham WHERE id_sanpham='${req.body.deid}' and size='${req.body.desize}'`,function(err,row){
    if(!err){
      res.json("Success");
    }
    else{console.log(err)}
  })
})



app.get('/quanlydonhang',function(req,res){
  if(req.session.userId){
    connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
      if(!err){
        // console.log(row[0].loai_taikhoan)
      if(row[0].loai_taikhoan==="Quản lý đơn hàng" || row[0].loai_taikhoan==="Admin"){
        connection.query(`SELECT * FROM don_hang`,function(err,data){
          if(!err){
            res.render('ql_donhang',{result:data})
        }
          else{
            console.log("1",err)
          }
      })
    }
      else{
        res.redirect('/login');
      }
    }

else{
  console.log("2",err);
}
})}

else{
  res.redirect('/login');
}
})




app.get('/donhang',function(req,res){
  
  if(req.session.userId){
    connection.query(`SELECT * FROM don_hang WHERE tai_khoan="${req.session.userId}"`,function(err,row){
      if(!err){
        // console.log(row)
        res.render('donhang',{result:row});
      }
      else{
        console.log(err);
      }
    })
    
  }
  else{
    res.redirect('/login')
  }
})

app.post('/updatedonhang',function(req,res){
  connection.query(`UPDATE don_hang SET id_donhang='${req.body.iddon}',id_sanpham='${req.body.idsp}',email_khachhang='${req.body.email}',ten_khachhang='${req.body.tenkhach}',sdt='${req.body.sdt}',dia_chi='${req.body.diachi}',trang_thai='${req.body.trangthai}' WHERE id_donhang='${req.body.iddon}' and id_sanpham='${req.body.idsp}' and size='${req.body.size}'`,function(err,row){
    if(!err){
      res.json("Success");
    }
    else{console.log(err)}
  });
})




app.post('/addsp',function(req,res){
  let sampleFile = req.files.file;
  let uploadPath= __dirname + '\\public\\img\\' + sampleFile.name;
  sampleFile.mv(uploadPath, function(err) {
    if (err){
      return res.status(500).send(err);
  }
  else{

    connection.query(`INSERT INTO san_pham VALUES ('${req.body.id}','${req.body.name}','${req.body.price}','${req.body.type}','${req.body.evaluate}','${req.body.color}','${req.body.description}','${sampleFile.name}','')`,function(err,row){
      if(!err){
        // console.log(row)
        connection.query(`SELECT * FROM san_pham`,function(err,row){
          if(!err){
          res.json("Success")
          }
          else{console.log(err)}
        })
      }
      else{
        console.log(err);
      }
  })
  }

});


})



app.post('/updatesp',function(req,res){
  let sampleFile = req.files.file;
  let uploadPath= __dirname + '\\public\\img\\' + sampleFile.name;
  sampleFile.mv(uploadPath, function(err) {
    if (err){
      return res.status(500).send(err);
  }
  else{
  connection.query(`UPDATE san_pham SET ten_sanpham='${req.body.name}',gia_ban='${req.body.price}',loai_hang ='${req.body.type}',danh_gia='${req.body.danhgia}',mau_sac='${req.body.color}',mo_ta='${req.body.des}',img_sanpham='${sampleFile.name}' WHERE id_sanpham='${req.body.id}'`,function(err,row){
    if(!err){
        res.json('Success') 
    }
    else{
      console.log(err)
    }
})
}
})
})  


app.post('/deletesp',function(req,res){
  connection.query(`DELETE FROM size_sanpham where id_sanpham='${req.body.idsp}'`);

  connection.query(`DELETE FROM san_pham where id_sanpham='${req.body.idsp}'`,function(err,row){
    if(!err){
      res.json("Success");
    }
    else{console.log(err)};
  })


})

app.post('/updateinfor',function(req,res){
  connection.query(`UPDATE user_account SET email='${req.body.email}',ten_khachhang='${req.body.hoten}',so_dienthoai='${req.body.sdt}',dia_chi='${req.body.diachi}' WHERE tai_khoan='${req.session.userId}'`,function(err,row){
    if(!err){
      res.json("success");
    }
    else{
      console.log(err);
    }
  })
})


app.get('/quanlykho',function(req,res){
  if(req.session.userId){
    connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
      if(!err){
        console.log(row[0].loai_taikhoan)
      if(row[0].loai_taikhoan==="Kho" || row[0].loai_taikhoan==="Admin"){
        connection.query(`SELECT * FROM size_sanpham`,function(err,data){
          if(!err){
            res.render('ql_kho',{result:data})
        }
          else{
            console.log("1",err)
          }
      })
    }
      else{
        res.redirect('/login');
      }
    }

else{
  console.log("2",err);
}
})}

else{
  res.redirect('/login');
}
})



app.post('/addkho',function(req,res){
  connection.query(`INSERT INTO size_sanpham VALUES ('${req.body.id}','${req.body.size}','${req.body.quantity}','${req.body.sold}','${req.body.available}')`,function(err,row){
        if(!err){
          res.json("Success");
        }
        else{
          res.json("error")
          console.log(err)}
  })
})

app.post('/updatekho',function(req,res){
  connection.query(`UPDATE size_sanpham SET size='${req.body.size}',so_luong='${req.body.quantity}',soluong_daban='${req.body.sold}',con_hang='${req.body.available}' WHERE id_sanpham='${req.body.id}' and size='${req.body.size}'`,function(err,row){
    if(!err){
      res.json("Success");
    }
    else{
      res.json("error")
      console.log(err)}
  })
})



app.get('/detail',function(req,res){
  res.render('chitiet')
})



app.post('/addacc',function(req,res){
  connection.query(`SELECT tai_khoan from user_account where tai_khoan="${req.body.username}"`,function(err,row){
    if(row.length!=0){
      res.json('username');
    }
  })
  connection.query(`INSERT INTO user_account VALUES ('${req.body.email}','${req.body.username}','${req.body.password}','${req.body.role}','${req.body.name}','${req.body.address}','${req.body.sdt}')`,function(err,row){
      if(!err){
        res.json("Success");
      }
      else{console.log(err)}
  })

})

app.post('/updateacc',function(req,res){
  connection.query(`UPDATE user_account SET email='${req.body.email}',mat_khau='${req.body.password}',loai_taikhoan='${req.body.role}',ten_khachhang='${req.body.name}',dia_chi='${req.body.address}',so_dienthoai='${req.body.sdt}' WHERE tai_khoan='${req.body.username}'`,function(err,row){
      if(!err){
        res.json("Success");
      }
      else{console.log(err)}
  })

})


app.post('/deleteacc',function(req,res){
  connection.query(`DELETE FROM user_account WHERE tai_khoan='${req.body.username}'`,function(err,row){
    if(!err){
      res.json('Success');
    }
    else{
      console.log(err);
    }
  })
})





app.post('/register',function(req,res){
  connection.query(`SELECT email FROM user_account where email="${req.body.email}"`,function(err,row){
    if(!err){
    if(row.length!=0){
      res.json('email');
    }
    else{
      connection.query(`SELECT tai_khoan from user_account where tai_khoan="${req.body.username}"`,function(err,row){
        if(row.length!=0){
          res.json('username');
        }
        else{
          connection.query(`INSERT INTO user_account VALUES ('${req.body.email}','${req.body.username}','${req.body.password}','User','${req.body.hoten}','${req.body.address}','${req.body.sdt}')`,function(err,row){
            res.json("Success");
          })
        }
      })
    }
  }
  else{
    console.log(err)
  }
  })

})


app.get('/doanhthu',function(req,res){
  if(req.session.userId){
    connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
      if(!err){
      if(row[0].loai_taikhoan==="Admin"){
       res.render('doanhthu')
    }
      else{
        res.redirect('/login');
      }
    }

else{
  console.log("2",err);
}
})}

else{
  res.redirect('/login');
}

})


app.get('/datadoanhthu',function(req,res){
  if(req.session.userId){
    connection.query(`SELECT loai_taikhoan FROM user_account where tai_khoan="${req.session.userId}"`,function(err,row){
      if(!err){
      if(row[0].loai_taikhoan==="Admin"){
              connection.query('SELECT * FROM don_hang',function(err,row){
                res.json(row)
              })
          

      }
      else{
        res.redirect('/login');
      }
    }

else{
  console.log("2",err);
}
})}
})



app.get('/shirt',function(req,res){
  renderhome(req,res,'shirt','WHERE loai_hang="Shirt"');
})

app.get('/bottom',function(req,res){
  renderhome(req,res,'bottom','WHERE loai_hang="Bottom"');
})

app.get('/shoes',function(req,res){
  renderhome(req,res,'shoes','WHERE loai_hang="Shoes"')
})


app.get('/accessories',function(req,res){
  renderhome(req,res,'accessories','WHERE loai_hang="Accessories"');
})

app.get('/jacket',function(req,res){
  renderhome(req,res,'jacket','WHERE loai_hang="Jacket"');
})

   




app.listen(3000,function(){console.log(`listen at port http://localhost/${port}`)});