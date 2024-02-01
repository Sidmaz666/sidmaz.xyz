"use server"
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import sessionOptions from "@/config/session"
import {redirect} from 'next/navigation';



export default async function logout(){
const session = await getIronSession(cookies(), sessionOptions);
session.destroy()
redirect("/admin")
}
