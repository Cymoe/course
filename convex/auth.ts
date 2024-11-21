import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Query to check if user exists
export const checkUser = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();
    return !!user; // Returns true if user exists
  },
});

export const signup = mutation({
  args: { 
    email: v.string(), 
    password: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const password = args.password;
    const name = args.name.trim();

    console.log("Signup attempt:", { email, name });

    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) {
      return {
        success: false,
        error: "email_exists",
        message: "Email already exists"
      };
    }

    const userId = await ctx.db.insert("users", {
      email,
      password,
      name,
      createdAt: Date.now(),
    });

    return { 
      success: true,
      user: { 
        id: userId,
        email,
        name
      } 
    };
  },
});

export const login = mutation({
  args: { 
    email: v.string(), 
    password: v.string() 
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const password = args.password;

    console.log("Login attempt:", { email });

    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (!user) {
      return {
        success: false,
        error: "no_account",
        message: "No account found with this email"
      };
    }

    if (user.password !== password) {
      return {
        success: false,
        error: "invalid_password",
        message: "Invalid password"
      };
    }

    return { 
      success: true,
      user: { 
        id: user._id, 
        email: user.email, 
        name: user.name 
      } 
    };
  },
}); 