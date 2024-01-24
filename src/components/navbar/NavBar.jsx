import React from "react";
import logoIcon from "../../assets/icons/logo_pro.svg";
const NavBar = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "8px 24px",
        borderBottom: "1px #B3B4B9 solid",
        justifyContent: "space-between",
        alignItems: "center",
        display: "inline-flex",
      }}
      className="h-full w-full px-2 py-6 "
    >
      <div
        style={{
          alignSelf: "stretch",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "4px",
          display: "inline-flex",
        }}
      >
        <div style={{ width: 50, height: 50, background: "#2D68C4" }}>
          <img src={logoIcon} alt="logo" />
        </div>

        <div
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "#2D68C4",
              fontSize: 14,
              fontFamily: "Comfortaa",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Bio Farm
          </div>

          <div
            style={{
              color: "#2D68C4",
              fontSize: 14,
              fontFamily: "Comfortaa",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Nepal
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 60,
          display: "inline-flex",
        }}
      >
        <div
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 40,
            display: "flex",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#031028",
              fontSize: "14px",
              fontFamily: "Lato",
              fontWeight: "600",
              textTransform: "uppercase",
              wordWrap: "break-word",
            }}
          >
            Home
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#031028",
              fontSize: "14px",
              fontFamily: "Lato",
              fontWeight: "600",
              textTransform: "uppercase",
              wordWrap: "break-word",
            }}
          >
            About Us
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#031028",
              fontSize: "14px",
              fontFamily: "Lato",
              fontWeight: "600",
              textTransform: "uppercase",
              wordWrap: "break-word",
            }}
          >
            Services
          </div>
        </div>

        <div
          style={{
            padding: "12px 16px",
            background: "#2D68C4",
            borderRadius: " 360px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "4px",
            display: "flex",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "14px",
              fontFamily: "Lato",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
