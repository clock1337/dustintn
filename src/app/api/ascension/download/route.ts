import { NextRequest, NextResponse } from "next/server";
import { incrementDownloadCount } from "@/lib/addon-stats";
import { getAddonBySlug } from "@/data/ascension-addons";

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();

    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }

    const addon = getAddonBySlug(slug);
    if (!addon) {
      return NextResponse.json({ error: "Unknown addon" }, { status: 404 });
    }

    const count = await incrementDownloadCount(slug);
    return NextResponse.json({ success: true, count });
  } catch (error) {
    console.error("[ascension/download]", error);
    return NextResponse.json(
      { error: "Failed to record download" },
      { status: 500 }
    );
  }
}
