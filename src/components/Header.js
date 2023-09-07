import React from "react";

export const Header = () => {
  return (
    <div style={{ display:'flex', justifyContent:'center', 
    backgroundColor: "#9400D3", width: "100%", height: "100px" }}>
      <div style={{ width:'77%'}}>

            <div style={{display:'flex',  flexDirection:'row', height:'50%' }}>
                <div style={{  display:'flex',  alignItems:'center', justifyContent:'flex-start', width:'12%', }}>
                        <div style={{ marginLeft:'20px', color:'white', fontSize:'15px', fontWeight:'bold' }}>Product Management</div>
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', width:'88%' }}>
                <div style={{ display: "flex", flexDirection: "row", height: "50%" }}>
          <form style={{ display: "flex", width: "100%", margin: "1px" }}>
            <input
              type="text"
              placeholder="Search... "
              style={{
                marginRight: "40px",
                width: "70%",
                fontSize: "20px",
                marginLeft: "20px",
              }}
            />
            <button
              type="submit"
              style={{
                border: "none",
                width: "50%",
                backgroundColor: "#006CE4",
                color: "white",
                fontSize: "20px",
                fontWeight: "lighter",
              }}
            >
              Search 
            </button>
          </form>
        </div>
                <div style={{ marginLeft: '20px', color: 'white', fontSize: '15px', fontWeight: 'bold' }}>Đăng ký / Đăng nhập </div>
                        <button type="submit" style={{ height: '30px', margin: '10px', color: '#003B95', fontWeight: 'bold' }}>Đăng ký</button>
                        <button type="submit" style={{ height: '30px', marginRight: '50px', color: '#003B95', fontWeight: 'bold' }}>Đăng nhập</button> </div>

            </div>
            <div style={{
                    height: '50%', color: 'white',
                    fontWeight: 'bold',
                    alignItems: 'center',
                    fontSize: '20px',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    justifyItems: "center",
                }}>
                    <div style={{ marginRight: '20px' }}>ERP FEATURES </div>
                    <div style={{ marginRight: '20px' }}>SERVICE</div>
                    <div style={{ marginRight: '20px' }}>PRODUCT</div>
                    <div style={{ marginRight: '20px' }}>ABOUT ECOUNT ERP</div>
                    <div style={{ marginRight: '20px' }}>INTRODUCE</div>

                </div>
      </div>
    </div>
  );
};
