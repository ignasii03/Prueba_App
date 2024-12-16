import { supabase } from "../lib/supabase";
import { uploadFile } from "./imageService";

export const createOrUpdatePost = async (post) => {
  try {
    if (post.file && typeof post.file == "object") {
      let isImage = post?.file?.type == "image";
      let folderName = isImage ? "postImages" : "postVideos";
      let fileResult = await uploadFile(folderName, post?.file?.uri, isImage);
      if (fileResult.success) post.file = fileResult.data;
      else {
        return fileResult;
      }
    }

    const { data, error } = await supabase
      .from("posts")
      .upsert(post)
      .select()
      .single();

    if (error) {
      return { success: false, msg: "error al crear el post" };
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, msg: "error al crear el post" };
  }
};

export const fetchPosts = async (limit = 10) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select(
        `
        *,
        user: users(
          id,
          name,
          image
        )
        `
      )
      .order("created_at", { ascending: false })
      .limit(limit);

    if (error) {
      return { success: false, msg: "error al cargar la lista de posts" };
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, msg: "error al cargar la lista de posts" };
  }
};
