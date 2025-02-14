
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/kip/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-MOPH5IJH.js"
    ],
    "route": "/C:/Program Files/Git/kip"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TMVMXPBX.js",
      "chunk-NAZ4QANY.js"
    ],
    "route": "/C:/Program Files/Git/kip/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MOPH5IJH.js"
    ],
    "route": "/C:/Program Files/Git/kip/auth/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FJM265AG.js"
    ],
    "route": "/C:/Program Files/Git/kip/auth/forget-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-MLL26XB6.js",
      "chunk-NAZ4QANY.js"
    ],
    "route": "/C:/Program Files/Git/kip/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WJ3QVHAK.js"
    ],
    "route": "/C:/Program Files/Git/kip/brands"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NHV5ER62.js"
    ],
    "route": "/C:/Program Files/Git/kip/products"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YERBGWMU.js"
    ],
    "route": "/C:/Program Files/Git/kip/categories"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XU6D6YWR.js"
    ],
    "route": "/C:/Program Files/Git/kip/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3VK7ZG7K.js"
    ],
    "route": "/C:/Program Files/Git/kip/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7534, hash: 'd1598e55c761a009eb3ac0c0ee7df7f81712d7cf0bf507e059bd1a01ede0541b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1401, hash: '6f5f082f0b8382711a099154780fd745822f5607b12af50eea986842b2b9a172', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 39375, hash: '2b28fc9525ed148cd557b7479c678ddec36b98887134e84e499e7728672eb78f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 39427, hash: '75d3c858518e3cc789c0337956cb8fff1665f4036679b3d95298b44fdea5ff2d', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 39375, hash: '2b28fc9525ed148cd557b7479c678ddec36b98887134e84e499e7728672eb78f', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'auth/forget-password/index.html': {size: 39375, hash: 'dbb3e0d1e06f0afeccf755c19a069d50d700cf34256e76179b5e536d0cfe4a3b', text: () => import('./assets-chunks/auth_forget-password_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 39427, hash: '10dcd2ee67d82b6824036909af1f422dbd8cdeb6934d5db711fdd5aefa777234', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 39375, hash: '0f783fe76718730c915098b8562102dc04a911fb5e70783fcba1a36e9d3bb2ac', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 39375, hash: 'b5dce4f1aabf9fa18da3cc490db6462f77edccc051c41bd6cec14b2d966fbd41', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 39375, hash: 'd9314226541bcb2da70d7055ede19a8b3b37f4572f2b741e844e9042d1b71482', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 39375, hash: 'edbe4387d03eaeefbd0f1888312477efd978ccdd48326bc8edc4e5695cd9935d', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'styles-YDFNG7GN.css': {size: 949339, hash: 'qgY95Dfsiac', text: () => import('./assets-chunks/styles-YDFNG7GN_css.mjs').then(m => m.default)}
  },
};
