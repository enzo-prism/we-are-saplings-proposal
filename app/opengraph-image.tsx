import { ImageResponse } from "next/og";

export const alt =
  "Proposal for Clare Frattarola · We Are Saplings — $1,000 · 30-day sprint";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadInter(weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(
      "prism · proposal one month to get we are saplings ready to sell. $1,000 30-day sprint",
    )}`,
    { headers: { "User-Agent": "Mozilla/5.0" } },
  ).then((res) => res.text());

  const match = css.match(/src: url\(([^)]+)\)/);
  if (!match?.[1]) {
    throw new Error(`Could not load Inter ${weight}`);
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const [regular, medium, semibold] = await Promise.all([
    loadInter(400),
    loadInter(500),
    loadInter(600),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F5F0E8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          gap: "20px",
        }}
      >
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: "3px",
            color: "#938D40",
          }}
        >
          prism · proposal
        </div>
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: 48,
            lineHeight: "56px",
            color: "#0C0C0B",
            maxWidth: 1040,
          }}
        >
          one month to get we are saplings ready to sell.
        </div>
        <div
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "28px",
            color: "#5F594F",
          }}
        >
          $1,000 · 30-day sprint
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: medium, weight: 500, style: "normal" },
        { name: "Inter", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
