import { ImageResponse } from "next/og";
export const alt = "Hasan Bukhari — Build, Research, Write";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "68px 76px",
        color: "#f5efe4",
        background: "#14070b",
        border: "20px solid #e63352",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
          letterSpacing: 4,
        }}
      >
        <span>ISSUE 01</span>
        <span>PORTFOLIO</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 0.78,
          fontWeight: 900,
          fontSize: 138,
          letterSpacing: -6,
        }}
      >
        <span>HASAN</span>
        <span style={{ color: "#e63352" }}>BUKHARI</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: 28,
        }}
      >
        <span>BUILD · RESEARCH · WRITE</span>
        <span style={{ maxWidth: 360, textAlign: "right", fontSize: 22 }}>
          Systems, signals, stories, and the work that connects them.
        </span>
      </div>
    </div>,
    size,
  );
}
