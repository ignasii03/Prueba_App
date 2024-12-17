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
        ),
        postLikes (*),
        comments (count)
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

export const createPostLike = async (postLike) => {
  try {
    const { data, error } = await supabase
      .from("postLikes")
      .insert(postLike)
      .select()
      .single();

    if (error) {
      return { success: false, msg: "No se pudo crear el like" };
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, msg: "No se pudo crear el like" };
  }
};

export const removePostLike = async (postId, userId) => {
  try {
    const { error } = await supabase
      .from("postLikes")
      .delete()
      .eq("postId", postId)
      .eq("userId", userId);

    if (error) {
      return { success: false, msg: "No se pudo eliminar el like" };
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, msg: "No se pudo eliminar el like" };
  }
};

export const fetchPostDetails = async (postId) => {
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
        ),
        postLikes (*),
        comments (
          *,
          user: users(
            id,
            name,
            image
          )
        )
        `
      )
      .eq("id", postId)
      .order("created_at", { ascending: false, foreignTable: "comments" })
      .single();

    if (error) {
      return { success: false, msg: "error al cargar la lista de posts" };
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, msg: "error al cargar la lista de posts" };
  }
};

export const createPostComment = async (comment) => {
  try {
    const { data, error } = await supabase
      .from("comments")
      .insert(comment)
      .select()
      .single();

    if (error) {
      return { success: false, msg: "No se pudo crear el comentario" };
    }
    return { success: true, data: data };
  } catch (error) {
    return { success: false, msg: "No se pudo crear el comentario" };
  }
};
