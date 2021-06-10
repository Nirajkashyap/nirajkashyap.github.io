exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 8:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


const Container = ({
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container mx-auto px-5",
    children: children
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Container);

/***/ }),

/***/ 3647:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(2808);
;// CONCATENATED MODULE: ./components/meta.tsx





const Meta = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#000000"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "msapplication-TileColor",
      content: "#000000"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "theme-color",
      content: "#000"
    }), /*#__PURE__*/jsx_runtime_.jsx("link", {
      rel: "alternate",
      type: "application/rss+xml",
      href: "/feed.xml"
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      name: "description",
      content: `A statically generated blog example using Next.js and ${constants/* CMS_NAME */.yf}.`
    }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
      property: "og:image",
      content: constants/* HOME_OG_IMAGE_URL */.vC
    })]
  });
};

/* harmony default export */ var meta = (Meta);
;// CONCATENATED MODULE: ./components/layout.tsx





const Layout = ({
  preview,
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(meta, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full flex flex-row flex-wrap",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "bg-white shadow-lg border-t-4 border-indigo-500 absolute bottom-0 w-full md:w-0 md:hidden flex flex-row flex-wrap",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-full text-right",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "p-2 fa fa-bars text-4xl text-gray-600"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-0 md:w-1/4 lg:w-1/5 h-0 md:h-screen overflow-y-hidden bg-white shadow-lg",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "p-5 bg-white sticky top-0",
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "border border-indigo-100 shadow-lg round",
              src: "/niraj.jpeg"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "pt-2 border-t mt-5 w-full text-center text-xl text-gray-600",
              children: "Niraj Kashyap"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "pt-2 border-t mt-5 w-full text-center text-xl text-gray-600",
              children: "JavaScript Developer"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "w-full h-screen antialiased flex flex-col hover:cursor-pointer",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              className: "hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold",
              href: "https://www.linkedin.com/in/kashyapniraj/",
              children: "Linkedin"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              className: "hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold",
              href: "https://github.com/nirajkashyap",
              children: "GitHub"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              className: "hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold",
              href: "https://stackoverflow.com/users/2498621/niraj-kashyap",
              children: "Stack overflow"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              className: "hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold",
              href: "https://www.hackerrank.com/niraj38re",
              children: "HackerRank"
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              className: "hover:bg-gray-300 bg-gray-200 border-t-2 p-3 w-full text-xl text-left text-gray-600 font-semibold",
              href: "https://www.hackerearth.com/@niraj.38.re",
              children: "HackerEarth"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased",
          children: /*#__PURE__*/jsx_runtime_.jsx("main", {
            children: children
          })
        })]
      })
    })]
  });
};

/* harmony default export */ var layout = (Layout);

/***/ }),

/***/ 4573:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "zQ": function() { return /* binding */ getPostBySlug; },
/* harmony export */   "Bd": function() { return /* binding */ getAllPosts; }
/* harmony export */ });
/* unused harmony export getPostSlugs */
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9064);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(process.cwd(), '_posts');
function getPostSlugs() {
  return fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = (0,path__WEBPACK_IMPORTED_MODULE_1__.join)(postsDirectory, `${realSlug}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const items = {}; // Ensure only the minimal needed data is exposed

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug, fields)) // sort posts by date in descending order
  .sort((post1, post2) => post1.date > post2.date ? -1 : 1);
  return posts;
}

/***/ }),

/***/ 2808:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yf": function() { return /* binding */ CMS_NAME; },
/* harmony export */   "vC": function() { return /* binding */ HOME_OG_IMAGE_URL; }
/* harmony export */ });
/* unused harmony export EXAMPLE_PATH */
const EXAMPLE_PATH = 'blog-starter-typescript';
const CMS_NAME = 'Markdown';
const HOME_OG_IMAGE_URL = 'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg';

/***/ })

};
;