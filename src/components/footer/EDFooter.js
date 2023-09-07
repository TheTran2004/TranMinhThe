import React from 'react'

export const EDFooter = () => {
  return (
    <div  style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "35%",
        backgroundColor: "white",
        color:"#003B95",
        fontSize:"20px",
      margin:"50px"
      }}>
        <div style={{ display: 'flex', flexDirection: 'row',}}>
                    <div style={{ display: 'flex',  width: '20%' , flexDirection: 'column',textAlign:'left',marginLeft:'70px'}}>
                        <div >Các quốc gia</div>
                        <div >Khu vực</div>
                        <div >Thành phố</div>
                        <div>Quận</div>
                        <div>Sân bay</div>
                        <div>Khách sạn</div>
                    </div>

                    <div style={{  display: 'flex',  width: '25%' , flexDirection: 'column',textAlign:'left' }}>
                        <div>Khám phá</div>
                        <div>Đánh giá của khách</div>
                        <div>Các bài viết</div>
                        <div>Ưu đãi theo mùa và dịp lễ</div>
                      
                    </div>
                    <div style={{  display: 'flex',  width: '25%' , flexDirection: 'column',textAlign:'left'}}>
                        <div >Cho thuê xe hơi</div>
                        <div>Tìm chuyến bay</div>
                        <div>Đặt nhà hàng</div>
                    </div>
                    <div style={{  display: 'flex',  width: '25%' , flexDirection: 'column',textAlign:'left',marginLeft:'70px' }}>
                        <div>Về chúng tôi</div>
                        <div>Dịch vụ khách hàng</div>
                        <div>Trợ giúp đối tác</div>
                        <div>Careers</div>
                        <div>Du lịch bền vững</div>
                        <div>Truyền thông</div>
                        <div>Trung tâm thông tin bảo mật</div>
                        <div>Quan hệ cổ đông</div>
                        <div>Điều khoản và điều kiện</div>
                    </div>
                    
                </div>
        
    </div>
  )
}