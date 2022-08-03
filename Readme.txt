Các thao tác để mở trang website:

- Start apache và mysql trong xampp
- Mở trình duyệt và nhập url http://localhost:8080/phpmyadmin/ hoặc http://localhost/phpmyadmin/  và nhập file web_banhang.sql ở thư mục database vào
- Tải và cài đặt nodejs và npm
- Mở terminal và dẫn đường dẫn đến folder project hiện tại
- Dùng lệnh npm start để mở server
- Nếu mở file dùng lệnh npm start bị lỗi thì xóa "port:3307" ở dòng 47 trong file index.js rồi chạy lại
- Mở trình duyệt và nhập url http://localhost:3000/

Tài khoản được sử dụng trong bài: 
- Tài khoản user (username: user222, password: 123)
- Tài khoản admin (username: admin111, password: 123)
- Tài khoản nhân viên kho (username: nhanvienkho, password: 1234)
- Tài khoản nhân viên quản lý đơn hàng (username: nvdonhang, password: 1234)

Mô tả chức năng Website phía người dùng:
_Trang chủ: Khi mở Website, đầu tiên bạn sẽ thấy trang chủ website.
+ Tại Website bạn sẽ thấy logo thương hiệu Germe. Khi click vào logo, bạn sẽ được chuyển về trang chủ.
+ Khi click vào một trong các nhãn bao gồm: Homepage, Shirts, Bottoms, Jackets, Shoes, Accessories. Bạn sẽ được chuyển tới một trang tương ứng với với lựa chọn của bạn.
(ví dụ: nếu click vào Shirts, bạn sẽ được chuyển tới trang trưng bày chỉ có sản phẩm là áo).
+ Khi Click vào logo đăng nhập, bạn sẽ được chuyển tới trang đăng nhập, trang này được dùng để đăng nhập cho cả member,admin,nhân viên kho và nhân viên quản lý đơn hàng
+ Khi Click vào logo giỏ hàng, bạn sẽ được chuyển tới trang giỏ hàng của mình. Nếu bạn chưa thêm sản phẩm vào giỏ hàng, giỏ hàng sẽ bị trống.
+ Tại mục sản phẩm bán chạy, bạn sẽ thấy tổng thể các sản phẩm bán chạy tại cửa hàng bao gồm tên và giá sản phẩm. Khi click vào từng mục sản phẩm, bạn sẽ được chuyển đến 
chi tiết thông tin sản phẩm bao gồm:  tên sản phẩm, mã sản phẩm, còn hàng hay không, đánh giá của khách hàng, giá tiền, màu sắc, size, mô tả
+ Chức năng đăng ký cho phép người dùng đăng ký làm member của cửa hàng và sẽ được extra discount 5% trên tổng hóa đơn. 

_ Thực hiện đăng nhập:
+ Người dùng vào đường dẫn http://localhost:3000 và nhấp vào biểu tượng người ở góc trên phải màn hình , nếu người dùng đã đăng nhập thì khi nhấn vào icon này sẽ được điều hướng đến trang
http://localhost:3000/information nếu chưa thì sẽ được điều hướng đến http://localhost:3000/login.
+ Người dùng nhập username và password vào, hệ thống sẽ kiểm tra username và password có tồn tại trong cơ sở dữ liệu không, nếu khớp thì sẽ cho người dùng đăng nhập vào.

_ Thực hiện đăng ký:
+ Người dùng có thể nhập đường dẫn http://localhost:3000/register để vào trang đăng ký hoặc bấm vào mục đăng ký ở trang đăng nhập, ở mực này người dùng điền các thông tin
bao gồm họ tên, username, password, Số điện thoại, địa chỉ, email.
+ Khi người dùng nhấn đăng ký, hệ thông sẽ kiểm tra username và email đã tồn tại chưa, nếu đã tồn tại sẽ yêu cầu người dùng chọn tên khác và email khác, nếu không thì sẽ hiển thị
thông báo đăng ký thành công

_ Trang thông tin của user khi đã đăng nhập (dùng tài khoản : user222, mật khẩu:123 )
+ Sau khi đăng nhập user sẽ được điều hướng đến đường dẫn http://localhost:3000/information, ở đây người dùng có thể xem thông tin cá nhân,
sửa thông tin cá nhân, xem thông tin đơn hàng đã mua và đổi mật khẩu.
+ User có thể đăng xuất nếu không sử dụng tài khoản này nữa.

_Thực hiện đặt hàng :
+ Người dùng sẽ truy cập vào trang chủ, click vào sản phẩm mình muốn mua sau đó sẽ được điều hướng đến trang http://localhost:3000/detail để xem chi tiết sản phẩm, ở đây người dùng
sẽ chọn size và thêm vào giỏ hàng.
+ Sau khi đã chọn được các sản phẩm ưng ý và muốn đặt hàng, người dùng sẽ click vào icon giỏ hàng ở góc phải màn hình và sẽ được điều hướng đến trang http://localhost:3000/cart, 
ở đây sẽ có các thông tin về sản phẩm người dùng đã chọn, người dùng có thể thêm số lượng sản phẩm hoặc xóa sản phẩm muốn mua ở đây, giá tiền tạm tính là tổng tiền mà người dùng 
chưa được discount.
+ Khi đã ưng ý, người dùng có thể sử dụng các mã giảm giá ở bên dưới bằng cách nhập mã giảm giá, giá tiền sẽ tự động cập nhập lại, sau đó người dùng nhấn vào tiến hàng đặt hàng, 
sau đó nhập thông tin và bấm xác nhận đặt hàng, màn hình sẽ hiện ra các thông tin của người dùng đã nhập vào và số tiền cần phải trả, nếu người dùng đã đăng nhập thì sẽ được
extra discount 5%. Khi đặt hàng thành công, đơn hàng sẽ được thêm vào cơ sở dữ liệu. 
+ Người dùng kiểm tra thông tin đơn hàng bằng cách truy cập vào đường dẫn http://localhost:3000/donhang hoặc nhấn vào biểu tượng user, chọn phần đơn hàng để xem thông tin đơn hàng

_Thực hiện đổi mật khẩu:
+ Người dùng sau khi đăng nhập sẽ được điều hướng đến đường dẫn http://localhost:3000/information, người dùng muốn đổi mật khẩu sẽ nhấn vào nút đổi mật khẩu
+ Người dùng sẽ được yêu cầu nhập lại mật khẩu cũ, nhập mật khẩu mới và xác minh mật khẩu mới đã nhập, Sau đó nhấn vào nút đổi để đổi mật khẩu.
+ Hệ thống sẽ kiểm tra mật khẩu cũ người dùng có đúng không, nếu không sẽ hiển thị thông báo mật khẩu cũ không đúng và yêu cầu nhập lại, hệ thông cũng sẽ kiểm tra mật khẩu mới 
và xác minh mật khẩu có trùng nhau hay không. Khi mật khẩu cũ đúng, mật khẩu mới và xác minh mật khẩu trùng nhau sẽ thông báo đổi mật khẩu thành công.

_Thực hiện cập nhật thông tin cá nhân :
+ Người dùng sau khi đăng nhập có thể thay đổi thông tin cá nhân ở trang http://localhost:3000/information, sửa thông tin cần sửa và bấm "cập nhật thông tin"

_ Trang đăng nhập với quyền truy cập của admin (tài khoản: admin111, mật khẩu: 123)
+ Để đăng nhập với tư cách Admin cần truy cập vào http://localhost:3000/login và nhập tài khoản và mật khẩu vào, đăng nhập thành công hệ thống sẽ tự chuyển hướng sang trang 
http://localhost:3000/admin .
+ Admin có thể thao tác tất cả các chức năng khi login.

_ Thực hiện quản cấp tài khoản cho nhân viên và quản lý tài khoản member:
+ Chức năng này chỉ dành cho Admin, admin có thể cấp tài khoản cho nhân viên bằng cách tạo tài khoản
+ Để tạo tài khoản admin sẽ vào mục "quản lý người dùng" và nhấn "Create", sau đó nhập các thông tin và ở mục role là nơi để cấp quyền cho tài khoản đó, có thể cấp 1 trong 3 quyền dưới đây 
là User, Kho(nhân viên kho), Quản lý đơn hàng(nhân viên quản lý đơn hàng).
+ Admin có thể chỉnh sửa thông tin bằng cách bấm vào biểu tượng bánh răng hoặc xóa tài khoản khi bấm vào biểu tượng thùng rác.

_ Trang đăng nhập với quyền truy cập của nhân viên kho (tài khoản: nhanvienkho, mật khẩu: 1234)
+ Nhân viên kho sau khi đăng nhập sẽ chỉ được thao tác với 2 giao diện là quản lí sản phẩm và quản lý kho.
+ Nhân viên kho sẽ chịu trách nhiệm làm các công việc: tạo, sửa, xoá sản phẩm theo yêu cầu của cửa hàng trong giao diện này. Khi nhập sản phẩm tại giao diện này, 
thông tin sản phẩm sẽ được truyền ra bên ngoài để người dùng có thể chọn lựa trong quá trình đặt hàng.
+ Nhân viên kho được admin cấp quyền truy cập vào giao diện quản lí kho, nhân viên kho sẽ chịu trách nhiệm làm các công việc: tạo, sửa, xoá sản phẩm có trong kho. 
Nhân viên kho còn chịu trách nhiệm kiểm kê kho, nếu số lượng thực tế bên ngoài hết hàng, nhân viên kho sẽ có nhiệm vụ xoá số lượng tương ứng với thực tế. 
Ngược lại, nếu cửa hàng muốn nhập thêm size và sản phẩm. Nhân viên kho sẽ thêm thông tin sản phẩm và số lượng của sản phẩm đó vào giao diện quản lí kho.

_ Thực hiện nhập sản phẩm:
+ Nhân viên kho hoặc admin sau khi đăng nhập sẽ được chuyển hướng sang đường dẫn http://localhost:3000/admin. Sau đó bấm vào nút "create" và nhập thông tin
+ Khi nhập hoàn tất sẽ bấm nút "thêm" và sản phẩm sẽ được thêm vào kho đồng thời sản phẩm cũng sẽ được hiển thị ở trang http://localhost:3000/
+ Sau đó nhân viên kho sẽ nhập size của sản phẩm vừa thêm vào ở mục "quản lý kho", ở trang này người nhân viên kho sẽ nhấn nút "create" và cần phải nhập id tương ứng với id 
sản phẩm vừa được thêm ở trang "quản lý sản phẩm" 


_Thực hiện xóa sản phẩm:
+ Nhân viên kho sẽ vào mục "quản lý kho" và bấm vào biểu tượng thùng rác để xóa hàng có id sản phẩm muốn xóa, sau khi xóa thì các sản phẩm có id trùng với id sản phẩm đã xóa cũng sẽ bị xóa

_Thực hiện cập nhật sản phẩm:
+ Nhân viên kho cập nhật ở mục "quản lý kho" và "quản lý sản phẩm", bấm chọn biểu tượng bánh răng để chỉnh sửa.

_ Trang đăng nhập với quyền truy cập của nhân viên quản lí đơn hàng (tài khoản: nvdonhang, mật khẩu: 123)
+ nhân viên quản lí đơn hàng khi đăng nhập sẽ chỉ quản lí được đơn hàng. 
+ Khi khách hàng hoàn thành một đơn hàng ở bên ngoài trang chủ, hệ thống sẽ ghi nhận và gửi thông tin đơn hàng về giao diện quản lí đơn hàng.
+ nhân viên quản lí đơn hàng sẽ có nhiệm vụ kiểm tra thông tin từng đơn hàng, có thể sửa thông tin đơn hàng nếu khách hàng báo sai thông tin. 
Nhân viên quản lí đơn hàng cũng sẽ chịu trách nhiệm trong việc cập nhật trạng thái vận chuyển bao gồm (Đang xử lí, Đang giao hàng, Đã huỷ).
+ Trong giao diện quản lí đơn hàng, từng đơn hàng sẽ không thể bị xoá bởi bất cứ cá nhân nào. Nếu khách hàng báo huỷ đơn, nhân viên quản lí đơn hàng chỉ có thể chuyển trạng thái “Đã huỷ”.
+ Để thực hiện cập nhật trạng thái giao hàng thì người quản lý đơn hàng sẽ nhấn vào biểu tượng bánh răng và chọn trạng thái.

