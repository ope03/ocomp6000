import { NextRequest, NextResponse } from 'next/server';
import xqtrequest from './aiRequest';

export async function POST(req = NextRequest) {
    const {request} = await req.json();
    console.log(request);
  
    const message = await xqtrequest(request);
    return NextResponse.json({response: message});
  };
