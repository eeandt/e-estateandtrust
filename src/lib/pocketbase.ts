import PocketBase from "pocketbase";

export const pb = new PocketBase(process.env.NEXT_PUBLIC_SERVER_URL || "https://api.e-estatesandtrusts.com");
