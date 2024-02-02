const sessionOptions = {
  password:process.env.SESSION_SIGN,
  cookieName: "connect.sid",
  cookieOptions:{
    secure:process.env.NODE_ENV === "production"
  }
}

export default sessionOptions

