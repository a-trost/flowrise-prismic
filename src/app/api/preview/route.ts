import { NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "../../../prismicio";

export async function GET(request: NextRequest) {
  const client = createClient();

  draftMode().enable();

  await redirectToPreviewURL({ client, request });
}
