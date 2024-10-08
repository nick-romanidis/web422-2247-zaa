import { NextResponse } from "next/server";

export function middleware(request) {
    const requestHeaders = new Headers(request.headers);
    const language = requestHeaders.get('Accept-Language');

    if (language.includes('en')) {
        return NextResponse.rewrite(new URL(request.url + "en"));
    }
}

export const config = {
    matcher: '/'
}