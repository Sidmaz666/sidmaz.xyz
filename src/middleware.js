"use server"
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import sessionOptions from './config/session';
import { NextResponse } from 'next/server'
 
export default async function Auth(req){
  const session = await getIronSession(cookies(),sessionOptions)
  if(!session.user || !session.user.login_status){
    	const clone = req.nextUrl.clone()
        clone.pathname = "/admin"
    	return NextResponse.rewrite(clone)
  }
  if(req.nextUrl.pathname == "/admin"){
    	const clone = req.nextUrl.clone()
        clone.pathname = "/admin/dashboard"
    	return NextResponse.redirect(clone)
  }
      NextResponse.next()
}

export const config = {
  matcher:"/admin/:path*",
}
