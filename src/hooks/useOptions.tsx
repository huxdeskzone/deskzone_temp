import { useEffect, useState } from "react";

const UseOptions = () => {
  const [blogs, setBlogs] = useState<
    { text: string; value: string; url: string }[]
  >([]);

  const getAllBlogs = async () => {
    return [];
  };

  useEffect(() => {
    const onGetAllBlogs = async () => {
      await getAllBlogs();
    };

    const timer = setTimeout(() => {
      onGetAllBlogs();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const blogData = [{ title: "new post" }].map((blog) => {
      let newBlogData = {
        text: blog?.title,
        value: blog?.title,
        url: `https://utivablog-project-server.onrender.com/api/v1/blogs/jksgsgsjklsg`,
      };

      return newBlogData;
    });

    return setBlogs(blogData);
  }, []);

  const toolbar = {
    options: [
      "inline",
      "blockType",
      // "fontSize",
      // "list",
      // "textAlign",
      // "link",
      // "history",
    ],
    // inline: { inDropdown: true },
    // list: { inDropdown: true },
    // textAlign: { inDropdown: true },
    // link: { inDropdown: true },
    // history: { inDropdown: true },
  };

  const mention = {
    separator: " ",
    trigger: "@",
    suggestions: blogs,
  };

  const hashtag = {
    separator: " ",
    trigger: "#",
  };

  return { toolbar, mention, hashtag };
};

export default UseOptions;
