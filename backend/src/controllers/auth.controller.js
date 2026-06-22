import supabase from "../config/supabase.js";

// Write the respective functions for each route (i.e. controller)
export async function signUp(req, res) {
    const {email, password, name, role_type} = req.body;
    if(!email || !password || !name) {
        return res.status(400).json({error: "email, password and name are required!"});
    }

    const {data, error} = await supabase.auth.signUp({ email, password }); 
    if(error) {
        return res.status(400).json({error: error.message});
    }

    const {error: profileError} = await supabase.from("profiles").insert({
        id: data.user.id,
        name,
        role_type: role_type || "member",        
    });

    if (profileError) {
        return  res.status(400).json({error: profileError.message });
        console.log("Profile Error!");
    }
    res.status(201).json({ user: data.user });
}