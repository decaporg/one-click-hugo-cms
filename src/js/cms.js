import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProjektePreview from "./cms-preview-templates/projekte";
import ValuesPreview from "./cms-preview-templates/ziele";
import ContactPreview from "./cms-preview-templates/mitmachen";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("projekte", ProjektePreview);
CMS.registerPreviewTemplate("ziele", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.init();
