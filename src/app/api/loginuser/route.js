// app/pages/api/loginuser/route.js
import checkLoginCredentials from './checkLoginCred';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req = NextRequest) {
  const {username, password} = await req.json();

  const isValid = await checkLoginCredentials(username, password);
  return NextResponse.json({authenticated: isValid});
};