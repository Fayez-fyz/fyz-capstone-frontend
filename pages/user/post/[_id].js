import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import PostForm from "../../../components/forms/PostForm";
import UserRoute from "../../../components/routes/UserRoute";
import { toast } from "react-toastify";

const EditPost = () => {
  const router = useRouter();
  const [post, setPost] = useState({});
  const _id = router.query._id;
  const [content, setContent] = useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (_id) fetchPost();
  }, [_id]);

  const fetchPost = async () => {
    try {
      const { data } = await axios.get(`/user-post/${_id}`);
      setPost(data);
      setContent(data.content);
      setImage(data.image);
    } catch (error) {
      console.log(error);
    }
  };
  const postSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/update-post/${_id}`, {
        content,
        image,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Post Updated");
        router.push("/user/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleImage = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    formData.append("image", file);
    // console.log([...formData])
    setUploading(true);

    try {
      const { data } = await axios.post("/upload-image", formData);
      console.log("uploader image =>", data);
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };
  return (
    <UserRoute>
      <div className="container-fluid">
        <div className="row py-4 bg-secondary text-light">
          <div className="col text-center">
            <h2>News Feed</h2>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-8 offset-md-2">
            <PostForm
              content={content}
              setContent={setContent}
              postSubmit={postSubmit}
              handleImage={handleImage}
              uploading={uploading}
              image={image}
            />

            {/* <pre>{JSON.stringify(posts,null,4)}</pre> */}
          </div>
        </div>
      </div>
    </UserRoute>
  );
};

export default EditPost;
