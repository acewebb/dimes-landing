import { NextRequest, NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

interface WaitlistEntry {
  email: string;
  timestamp: string;
  source: string;
}

const BLOB_PREFIX = "waitlist/";

async function getEntries(): Promise<WaitlistEntry[]> {
  try {
    const { blobs } = await list({ prefix: BLOB_PREFIX });
    return blobs.map((blob) => {
      const name = blob.pathname.replace(BLOB_PREFIX, "").replace(".json", "");
      return {
        email: decodeURIComponent(name),
        timestamp: blob.uploadedAt.toISOString(),
        source: "unknown",
      };
    });
  } catch {
    return [];
  }
}

// POST — add email to waitlist
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = "hero" } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const trimmed = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Store each email as its own blob — deduplication by filename
    const blobPath = `${BLOB_PREFIX}${encodeURIComponent(trimmed)}.json`;
    const entry: WaitlistEntry = {
      email: trimmed,
      timestamp: new Date().toISOString(),
      source,
    };

    await put(blobPath, JSON.stringify(entry), {
      access: "private",
      addRandomSuffix: false,
    });

    const entries = await getEntries();

    return NextResponse.json({
      success: true,
      message: "You're in!",
      count: entries.length,
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}

// GET — return waitlist count
export async function GET() {
  try {
    const entries = await getEntries();
    return NextResponse.json({ count: entries.length });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}
