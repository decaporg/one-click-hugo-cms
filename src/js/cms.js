import CMS from "netlify-cms";
import PostPreview from "./cms-preview-templates/post";

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("post", PostPreview);
