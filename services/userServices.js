export const updateUserData = async (user) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", user.id)
      .single();

    if (error) {
      return { success: false, msg: error?.message };
    }
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, msg: error.message };
  }
};
