import { ImageResponse } from "next/og";

export const alt =
  "We Are Saplings 30-day launch sprint — $999 fixed project fee";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "70px 76px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#F7F0E8",
          color: "#2D261F",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 440,
            height: 440,
            borderRadius: 999,
            right: -120,
            top: -120,
            background: "#E5C769",
            opacity: 0.34,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 250,
            height: 250,
            borderRadius: 999,
            right: 120,
            bottom: -130,
            background: "#59612D",
            opacity: 0.18,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 17,
              fontWeight: 700,
            }}
          >
            <span>prism</span>
            <span style={{ color: "#59612D" }}>proposal for Clare</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#59612D",
                fontSize: 17,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              30-day website launch sprint
            </div>
            <div
              style={{
                maxWidth: 920,
                marginTop: 18,
                fontSize: 62,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: -2.5,
              }}
            >
              Let&apos;s make We Are Saplings ready to sell.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            <span style={{ color: "#B45127" }}>$999 fixed</span>
            <span style={{ color: "#9A8876" }}>·</span>
            <span>30 days</span>
            <span style={{ color: "#9A8876" }}>·</span>
            <span>no automatic renewal</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
