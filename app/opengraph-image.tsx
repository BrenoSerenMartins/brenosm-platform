import { ImageResponse } from "next/og";
import { siteConfig } from "@/src/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #02040a 0%, #071323 42%, #120d2d 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #2bb7ff, #6d65ff)",
              fontSize: 34,
              fontWeight: 900,
            }}
          >
            B
          </div>
          <div style={{ fontSize: 34, fontWeight: 800 }}>{siteConfig.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              maxWidth: 920,
              fontSize: 78,
              lineHeight: 0.98,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            SaaS, MVPs e landing pages de alta conversao
          </div>
          <div
            style={{
              maxWidth: 820,
              color: "rgba(236, 242, 255, 0.76)",
              fontSize: 30,
              lineHeight: 1.35,
              fontWeight: 500,
            }}
          >
            Software sob medida para validar rapido, vender melhor e escalar com consistencia.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 18,
            color: "rgba(236, 242, 255, 0.72)",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <span>Next.js</span>
          <span>React</span>
          <span>Magento</span>
          <span>Laravel</span>
          <span>ERP</span>
        </div>
      </div>
    ),
    size,
  );
}
