import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    // In production: create Stripe checkout session
    // const session = await stripe.checkout.sessions.create({ ... });

    return NextResponse.json({
      sessionId: "demo_session_" + Date.now(),
      url: "/checkout",
      message: "Checkout session created (demo mode)",
    });
  } catch {
    return NextResponse.json(
      { error: "Checkout failed" },
      { status: 500 }
    );
  }
}
