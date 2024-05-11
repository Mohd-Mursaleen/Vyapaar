// import { createClient } from "@supabase/supabase-js";
// import { config } from "dotenv";
// config({ path: "./config/config.env" });
// import { catchAsyncErrors } from "./middlewares/catchAsyncErrors.js";
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_API_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// // Function to sign up a user
// export const signUp = catchAsyncErrors(async (req, res, next) => {
//   const { email, password } = req.body;
//   const { user, session, error } = await supabase.auth.signUp({
//     email: email,
//     password: password,
//   });

//   if (error) return next(error);
//   res.json({ user, session });
// });

// // Function to sign in a user
// export const signIn = catchAsyncErrors(async (req, res, next) => {
//   const { email, password } = req.body;
//   const { user, session, error } = await supabase.auth.signIn({
//     email: email,
//     password: password,
//   });

//   if (error) return next(error);
//   res.json({ user, session });
// });

// // Function to sign in using an OAuth provider
// export const signInWithProvider = catchAsyncErrors(async (req, res, next) => {
//   const provider = req.params.provider;
//   const { user, session, error } = await supabase.auth.signIn(
//     {
//       provider: provider,
//     },
//     {
//       redirectTo: "http://localhost:3000/auth/callback",
//     }
//   );

//   if (error) return next(error);
//   res.json({ session }); // User might not be available immediately with OAuth
// });

// // Function to check the current session
// export const checkSession = catchAsyncErrors((req, res, next) => {
//   const session = supabase.auth.session();
//   res.json({ session });
// });

// // Function to get the currently logged-in user
// export const getCurrentUser = catchAsyncErrors((req, res, next) => {
//   const user = supabase.auth.user();
//   res.json({ user });
// });

// // Function to log out
// export const signOut = catchAsyncErrors(async (req, res, next) => {
//   const { error } = await supabase.auth.signOut();
//   if (error) return next(error);
//   res.send("Signed out successfully");
// });
