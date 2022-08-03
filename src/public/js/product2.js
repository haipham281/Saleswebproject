var product = [];
var pro = [];

function saveproduct() {
    sessionStorage.setItem('shopping', JSON.stringify(pro));
  }
    // Load cart
  function loadproduct() {
    pro = JSON.parse(sessionStorage.getItem('shopping'));
  }
  
  var chuyen = function() {
    pro=[];
    saveproduct();    
    window.location = "/";
  };
  $('.proo').click(function(event) {
    event.preventDefault();
    var id = $(this).data('id');
    var name = $(this).data('name');
    var img = $(this).data('img');
    var danhgia = $(this).data('danh_gia');
    var sl_danhgia =Number( $(this).data('sl_danhgia'));
    var mau_sac = $(this).data('color');
    var sp_daban =$(this).data('sp_daban');
    var size =$(this).data('size');

    var price = Number($(this).data('price'));
    var mota=$(this).data('mota');

    // var size=Number ($(this).data('sp_daban'));
    var tinhtrangsize=$(this).data('tinhtrangsize');




    var item ={
       id,
       name,
       img,
       danhgia,
      sl_danhgia,
      mau_sac,
      sp_daban,
      price,
      mota,
      tinhtrangsize,
      size,
      sp_daban,
   }
    pro.push(item);
    saveproduct();
   window.location="detail";    
  });
  
  if (sessionStorage.getItem("shopping") != null) {
    loadproduct();
  }
  
function Save(product){
    localStorage.setItem('listProduct',JSON.stringify(product))
}
//lấy sản phẩm 
function load(){
   product = JSON.parse(localStorage.getItem('listProduct'));
} 
//xuất sản phẩm ra html
if (localStorage.getItem("listProduct") != null) {
load();
}
var ProductLocal = function(){
    loadproduct();
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    })
    var Cproduct ="";
    var data1 =pro[pro.length-1];
    var size1=data1.size;
    var tinhtrangsize=data1.tinhtrangsize;
    console.log(tinhtrangsize)

    var size3=size1.split('-');
    var size2=tinhtrangsize.split('-');
    Cproduct+='<h3>Sản phẩm/'+data1.name+'</h3>';
    Cproduct+='<div class="sanpham" style="display: flex;">';
    Cproduct+='<div class="hinhanh mt-3" >';
    Cproduct+='<img src="'+data1.img+'" alt="" style="width: 90%;">';
    Cproduct+='</div>';
    Cproduct+='<div class="content mt-3">';
    Cproduct+='<div class="title" style="border-bottom: 2px solid #dddddd; padding-bottom: 2px;">';
    Cproduct+='<span class="title-name h5">'+data1.name+' <br> </span> ';
    Cproduct+='<span class="title-ma">Mã sản phẩm: <b>'+data1.id+' </b> <br> </span> ';
    Cproduct+='<span class="title-trangthai">Còn hàng </span> ';
    Cproduct+= '<div class="p-review">'
    Cproduct+= '<div class="p-r1">'
    Cproduct+= '<p>'+data1.danhgia+' <i class="fas fa-star"></i></p> </div> <div class="p-r2"> <p>'+data1.sl_danhgia+' <a href="">Đánh Giá</a></p> </div> <div class="p-r3"> <p>'+data1.sp_daban+' <a href="">Đã Bán</a></p></div></div>'
    Cproduct+='</div> ';
    Cproduct+='<div class="price" style="margin-top: 10px; font-weight: 900; font-size: x-large;">'+formatter.format(data1.price)+'</div>';
    Cproduct += '<div class="p-color"> <p><span style="font-weight: bold;">Color: </span>'+data1.mau_sac+'<span style="color: red;">*</span></p> </div>'
    Cproduct+= '<div class="p-transpot"> <div class="p-t1"><p>Phương thức vận chuyển:</p></div> <div class="p-t2"><p><i class="fas fa-shipping-fast"></i>Vận chuyển bằng dịch vụ GHTK</p></div> </div>';
    Cproduct+='<div class="form"> <label class="p-size" style="font-weight: bold;">Size:</label>';
    Cproduct+='<div class="p-size-content">';

    

//check size số

    if(tinhtrangsize.includes('7.0') || tinhtrangsize.includes('7.5')|| tinhtrangsize.includes('8.0')|| tinhtrangsize.includes('8.5')|| tinhtrangsize.includes('9.0')){
      var count=0;

    for(var i=0;i<size2.length;i++){
    if(size2[i][4]==='0'){
      Cproduct+='<input id="'+size3[i]+'" type="radio" name="gender" value="'+size3[i]+'" disabled> <label for="'+size3[i]+'">'+size3[i]+' </label>';

      count++;

    }
    else{
      Cproduct+='<input id="'+size3[i]+'" type="radio" name="gender" value="'+size3[i]+'"> <label for="'+size3[i]+'">'+size3[i]+' </label>';
      
    }
  }
  if(count==5){

    Cproduct+='<button style="margin-top: 10px; width: 100%;" class="btn btn-primary add-to-cart add-cart  themhang"  data-id="'+data1.id+'" data-name="'+data1.name+'" data-size="" data-img="'+data1.img+'" data-price="'+data1.price+'" disabled >Thêm vào giỏ</button>';

  }
  else{


    Cproduct+='<button style="margin-top: 10px; width: 100%;" class="btn btn-primary add-to-cart add-cart  themhang"  data-id="'+data1.id+'" data-name="'+data1.name+'" data-size="" data-img="'+data1.img+'" data-price="'+data1.price+'">Thêm vào giỏ</button>';

  }
}

//check size chữ
  else if(tinhtrangsize.includes('S')||tinhtrangsize.includes('M')||tinhtrangsize.includes('L')){
    var count=0;
    for(var i=0;i<size2.length;i++){
      if(size2[i][2]==='0'){
        Cproduct+='<input id="'+size3[i]+'" type="radio" name="gender" value="'+size3[i]+'" disabled> <label for="'+size3[i]+'">'+size3[i]+' </label>';
        count++;
      }
      else{
        Cproduct+='<input id="'+size3[i]+'" type="radio" name="gender" value="'+size3[i]+'"> <label for="'+size3[i]+'">'+size3[i]+' </label>';
      }
    }
    if(count==size2.length){
      Cproduct+='<button style="margin-top: 10px; width: 100%;" class="btn btn-primary add-to-cart add-cart  themhang"  data-id="'+data1.id+'" data-name="'+data1.name+'" data-size="" data-img="'+data1.img+'" data-price="'+data1.price+'" disabled>Thêm vào giỏ</button>';
  
    }
    else{
    
      Cproduct+='<button style="margin-top: 10px; width: 100%;" class="btn btn-primary add-to-cart add-cart  themhang"  data-id="'+data1.id+'" data-name="'+data1.name+'" data-size="" data-img="'+data1.img+'" data-price="'+data1.price+'">Thêm vào giỏ</button>';
  
    }
  }

  //check không có size
  else if(size1.length==0){
    if(tinhtrangsize[1]!='0' && tinhtrangsize!==''){
 
    Cproduct+='<button style="margin-top: 10px; width: 100%;" class="btn btn-primary add-to-cart add-cart  themhang"  data-id="'+data1.id+'" data-name="'+data1.name+'" data-size="1" data-img="'+data1.img+'" data-price="'+data1.price+'">Thêm vào giỏ</button>';

  }
  else{
    Cproduct+='<button style="margin-top: 10px; width: 100%;" class="btn btn-primary add-to-cart add-cart  themhang"  data-id="'+data1.id+'" data-name="'+data1.name+'" data-size="1" data-img="'+data1.img+'" data-price="'+data1.price+'" disabled>Thêm vào giỏ</button>';
  }
  }
  
    
    Cproduct+='</div></div>';
    // Cproduct+='<button style="margin-top: 10px; width: 100%;" class="btn btn-primary add-to-cart add-cart  themhang"  data-id="'+data1.id+'" data-name="'+data1.name+'" data-size="'+123+'" data-img="'+data1.img+'" data-price="'+data1.price+'">Thêm vào giỏ</button>';
    Cproduct+='<div class="content-footer" style="margin-top: 20px;">';
    Cproduct+='<div class="giaohang" style="display: flex;">';
    Cproduct+='<div><i class="fas fa-truck" style="margin-right: 5px; margin-top: 5px;"></i></div>';
    Cproduct+='<div class="giaohang-content">';
    Cproduct+='<h4>MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</h4>';
    Cproduct+='<p>(Sản phẩm trên 300,000đ)</p>';
    Cproduct+='</div>';      
    Cproduct+='</div>';
    Cproduct+='<div class="giaohang" style="display: flex;">';
    Cproduct+='<div><i class="fas fa-file-invoice" style="margin-right: 5px; margin-top: 5px;"></i></div>';
    Cproduct+='<div class="giaohang-content">';
    Cproduct+='<h4>ĐỔI TRẢ DỄ DÀNG</h4>';
    Cproduct+='<p>(Đổi trả 24h cho tất cả sản phẩm đầy đủ tem mác)</p>';
    Cproduct+='</div>';
    Cproduct+='</div>';
    Cproduct+='<div class="giaohang" style="display: flex;">';
    Cproduct+='<div><i class="fas fa-phone-alt" style="margin-right: 5px; margin-top: 5px;"></i></div>';
    Cproduct+='<div class="giaohang-content">';
    Cproduct+='<h4>TỔNG ĐÀI BÁN HÀNG 1800 1162</h4>';
    Cproduct+='<p>(Miễn phí từ 8h30 - 21:30 mỗi ngày)</p>';
    Cproduct+='</div>        ';   
    Cproduct+='</div>';
    Cproduct+='</div>';
    Cproduct+='</div>';
    Cproduct+='</div>';
    Cproduct+= ` <div class="p-bottom">
    <div class="p-bottom-big">
        <div class="p-bottom-title">
            <div class="p-bottom-title-item"><p>Detail</p></div>
        </div>
        <div class="p-bottom-content">
            <div class="p-bottom-content-chitiet">
              ${data1.mota}
            </div>
        </div>
    </div>
</div>`

    document.getElementById("chitiet").innerHTML =Cproduct; 
    }
    ProductLocal();

function checkradio(){
  const rbs = document.querySelectorAll('input[name="gender"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            return selectedValue;
}