(function() {
var exports = {};
exports.id = 922;
exports.ids = [922];
exports.modules = {

/***/ 2049:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: external "next/error"
var error_namespaceObject = require("next/error");;
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: ./components/container.tsx
var container = __webpack_require__(8);
// EXTERNAL MODULE: ./components/markdown-styles.module.css
var markdown_styles_module = __webpack_require__(7957);
var markdown_styles_module_default = /*#__PURE__*/__webpack_require__.n(markdown_styles_module);
;// CONCATENATED MODULE: ./components/post-body.tsx



const PostBody = ({
  content
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "max-w-2xl mx-auto",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (markdown_styles_module_default()).markdown,
      dangerouslySetInnerHTML: {
        __html: content
      }
    })
  });
};

/* harmony default export */ var post_body = (PostBody);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/header.tsx




const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
    className: "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "hover:underline",
        children: "Blog"
      })
    }), "."]
  });
};

/* harmony default export */ var header = (Header);
;// CONCATENATED MODULE: ./components/avatar.tsx



const Avatar = ({
  name,
  picture
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: picture,
      className: "w-12 h-12 rounded-full mr-4",
      alt: name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-xl font-bold",
      children: name
    })]
  });
};

/* harmony default export */ var avatar = (Avatar);
;// CONCATENATED MODULE: external "date-fns"
var external_date_fns_namespaceObject = require("date-fns");;
;// CONCATENATED MODULE: ./components/date-formatter.tsx



const DateFormatter = ({
  dateString
}) => {
  const date = (0,external_date_fns_namespaceObject.parseISO)(dateString);
  return /*#__PURE__*/jsx_runtime_.jsx("time", {
    dateTime: dateString,
    children: (0,external_date_fns_namespaceObject.format)(date, 'LLLL	d, yyyy')
  });
};

/* harmony default export */ var date_formatter = (DateFormatter);
;// CONCATENATED MODULE: external "classnames"
var external_classnames_namespaceObject = require("classnames");;
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./components/cover-image.tsx




const CoverImage = ({
  title,
  src,
  slug
}) => {
  const image = /*#__PURE__*/jsx_runtime_.jsx("img", {
    src: src,
    alt: `Cover Image for ${title}`,
    className: external_classnames_default()('shadow-small', {
      'hover:shadow-medium transition-shadow duration-200': slug
    })
  });

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "sm:mx-0",
    children: slug ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      as: `/posts/${slug}`,
      href: "/posts/[slug]",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        "aria-label": title,
        children: image
      })
    }) : image
  });
};

/* harmony default export */ var cover_image = (CoverImage);
;// CONCATENATED MODULE: ./components/post-title.tsx


const PostTitle = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",
    children: children
  });
};

/* harmony default export */ var post_title = (PostTitle);
;// CONCATENATED MODULE: ./components/post-header.tsx








const PostHeader = ({
  title,
  coverImage,
  date,
  author
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(post_title, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden md:block md:mb-12",
      children: /*#__PURE__*/jsx_runtime_.jsx(avatar, {
        name: author.name,
        picture: author.picture
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mb-8 md:mb-16 sm:mx-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(cover_image, {
        title: title,
        src: coverImage
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "max-w-2xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "block md:hidden mb-6",
        children: /*#__PURE__*/jsx_runtime_.jsx(avatar, {
          name: author.name,
          picture: author.picture
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mb-6 text-lg",
        children: /*#__PURE__*/jsx_runtime_.jsx(date_formatter, {
          dateString: date
        })
      })]
    })]
  });
};

/* harmony default export */ var post_header = (PostHeader);
// EXTERNAL MODULE: ./components/layout.tsx + 1 modules
var layout = __webpack_require__(3647);
// EXTERNAL MODULE: ./lib/api.ts
var api = __webpack_require__(4573);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(2808);
;// CONCATENATED MODULE: external "remark"
var external_remark_namespaceObject = require("remark");;
var external_remark_default = /*#__PURE__*/__webpack_require__.n(external_remark_namespaceObject);
;// CONCATENATED MODULE: external "remark-html"
var external_remark_html_namespaceObject = require("remark-html");;
var external_remark_html_default = /*#__PURE__*/__webpack_require__.n(external_remark_html_namespaceObject);
;// CONCATENATED MODULE: ./lib/markdownToHtml.ts


async function markdownToHtml(markdown) {
  const result = await external_remark_default()().use((external_remark_html_default())).process(markdown);
  return result.toString();
}
;// CONCATENATED MODULE: ./pages/posts/[slug].tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Post = ({
  post,
  morePosts,
  preview
}) => {
  const router = (0,router_namespaceObject.useRouter)();

  if (!router.isFallback && !(post !== null && post !== void 0 && post.slug)) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      statusCode: 404
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(layout/* default */.Z, {
    preview: preview,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(container/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(header, {}), router.isFallback ? /*#__PURE__*/jsx_runtime_.jsx(post_title, {
        children: "Loading\u2026"
      }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
          className: "mb-32",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
              children: [post.title, " | Next.js Blog Example with ", constants/* CMS_NAME */.yf]
            }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
              property: "og:image",
              content: post.ogImage.url
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(post_header, {
            title: post.title,
            coverImage: post.coverImage,
            date: post.date,
            author: post.author
          }), /*#__PURE__*/jsx_runtime_.jsx(post_body, {
            content: post.content
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var _slug_ = (Post);
async function getStaticProps({
  params
}) {
  const post = (0,api/* getPostBySlug */.zQ)(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await markdownToHtml(post.content || '');
  return {
    props: {
      post: _objectSpread(_objectSpread({}, post), {}, {
        content
      })
    }
  };
}
async function getStaticPaths() {
  const posts = (0,api/* getAllPosts */.Bd)(['slug']);
  return {
    paths: posts.map(posts => {
      return {
        params: {
          slug: posts.slug
        }
      };
    }),
    fallback: false
  };
}

/***/ }),

/***/ 7957:
/***/ (function(module) {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__1x9gM"
};


/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 9064:
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,487], function() { return __webpack_exec__(2049); });
module.exports = __webpack_exports__;

})();