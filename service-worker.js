/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8dd6b2f459bc3fa1d4a300a0ad72d873"
  },
  {
    "url": "assets/css/0.styles.8729c105.css",
    "revision": "c04f618332e622297b4ad1f3132b827b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8aeb1ed9.js",
    "revision": "b8fb6d1393e77db207e420ff61a90528"
  },
  {
    "url": "assets/js/11.e6a37484.js",
    "revision": "25f77c82252008a28d80d718c077bbca"
  },
  {
    "url": "assets/js/12.d7c6d842.js",
    "revision": "50065e12f5d04504ef4d0b8b4c542a2a"
  },
  {
    "url": "assets/js/13.0909a73f.js",
    "revision": "096ce92472aaf509177e86e6c781e0b2"
  },
  {
    "url": "assets/js/14.327840d2.js",
    "revision": "dd70f58db469920b0bb0c57db4403d03"
  },
  {
    "url": "assets/js/15.919ff011.js",
    "revision": "2bfbc6ef04bf6d730d57a4a872a75bca"
  },
  {
    "url": "assets/js/16.da285d26.js",
    "revision": "6d7180a3257331994088f945d4ded1af"
  },
  {
    "url": "assets/js/17.2def535f.js",
    "revision": "68425132156843c52cfaba2657c8bcbc"
  },
  {
    "url": "assets/js/18.a2e0a331.js",
    "revision": "ac4958c7b3c61306254beae91b900047"
  },
  {
    "url": "assets/js/19.4d3f03e2.js",
    "revision": "5269938794f45c928bac4280f28d784b"
  },
  {
    "url": "assets/js/20.596d9c26.js",
    "revision": "bdef87edc3b63610a7c8d5e96b5fc3df"
  },
  {
    "url": "assets/js/21.e73b98ec.js",
    "revision": "242b6859b0a796f44461ba240af8cdfb"
  },
  {
    "url": "assets/js/22.fb0a12b8.js",
    "revision": "266e62d0faef8a10d980719d9b285978"
  },
  {
    "url": "assets/js/23.102cc458.js",
    "revision": "4c412388d205fdc53d4097318d3d81f5"
  },
  {
    "url": "assets/js/24.4a418aa3.js",
    "revision": "dbcf4960708ac791e58ffff68084de25"
  },
  {
    "url": "assets/js/25.db5a45cd.js",
    "revision": "9e5f5bc905680d11e3fd53aa6af8ac6c"
  },
  {
    "url": "assets/js/26.3a70ef78.js",
    "revision": "b893944d10581b069614d7de6cf4bba7"
  },
  {
    "url": "assets/js/27.7e3042f7.js",
    "revision": "f2ba4c336deebdfe362280c71143e09b"
  },
  {
    "url": "assets/js/28.314af7d9.js",
    "revision": "897e872ed1c12e9978c470a55923a963"
  },
  {
    "url": "assets/js/29.99283ab2.js",
    "revision": "35220f15a6d9d18d1aa134a5dc91720c"
  },
  {
    "url": "assets/js/3.6c356d29.js",
    "revision": "7255dc64cea7dc1e2ae0387619329a08"
  },
  {
    "url": "assets/js/30.4aa2d303.js",
    "revision": "bb14ab931c22c0e87e9b8a2eedc61d10"
  },
  {
    "url": "assets/js/31.3216408b.js",
    "revision": "3758d1e47dfc7fdced9c2829047f8a7e"
  },
  {
    "url": "assets/js/32.29e4f92e.js",
    "revision": "bfda5ebf36f4321d37b23501966300b2"
  },
  {
    "url": "assets/js/33.086361d2.js",
    "revision": "473167a2699ed7158ffbf409668d0b05"
  },
  {
    "url": "assets/js/34.a5eb7415.js",
    "revision": "ac3d0702f6327c38a2639afdad2b7f02"
  },
  {
    "url": "assets/js/35.70dc3cfe.js",
    "revision": "a2223996938c8e867ca3c25fde77470b"
  },
  {
    "url": "assets/js/36.87d622c3.js",
    "revision": "1ab7a838c6cf63acfb1ca53e65eb205e"
  },
  {
    "url": "assets/js/37.3bfc927e.js",
    "revision": "23551e3b86550b476064680daa806ebb"
  },
  {
    "url": "assets/js/38.912c9d12.js",
    "revision": "4edf20876b6a9b29da1104015b606ee7"
  },
  {
    "url": "assets/js/39.ced6469e.js",
    "revision": "85fb8e954d951beeb3384a9469832b7c"
  },
  {
    "url": "assets/js/4.9fb9b92a.js",
    "revision": "c5ee3e9af3a607348c8c827aa42b3b47"
  },
  {
    "url": "assets/js/40.49fabaae.js",
    "revision": "411e778818848e4f92877f42f4dac886"
  },
  {
    "url": "assets/js/5.9bae494e.js",
    "revision": "d02ec2d88671f4ab5a2aaccd67f85340"
  },
  {
    "url": "assets/js/6.d5ed689a.js",
    "revision": "fe56141121f92b1ee72d0da4ac566240"
  },
  {
    "url": "assets/js/7.84eec1d4.js",
    "revision": "6643a914a2b7a4a1ead9c49ffdb25f56"
  },
  {
    "url": "assets/js/8.5b17701c.js",
    "revision": "4c53067e94032b80a8d65d524722bfb8"
  },
  {
    "url": "assets/js/9.764283b0.js",
    "revision": "163dc8433bd636a107902db31b8d8af1"
  },
  {
    "url": "assets/js/app.8d263a25.js",
    "revision": "b140126a597b2a53452cbf2bbf339b02"
  },
  {
    "url": "assets/js/vendors~docsearch.2c1e3e44.js",
    "revision": "c5ebf7ef01be97d8f408d5b2d3c929ce"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "142513058b4be83d6b684da32cc40e8b"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "8515e658c2557d0552cbf4ced02b2b15"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "380c712fbf47a77738fc16688f1cfe21"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4cb345aaea17f8501ac14e195bf47d5a"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "05197e1e253a5a46b0ce91ac81fdcfd3"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "751cc19f3828901dd3d4709f5b3ef1f8"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "5789a4715542439bed1d8069e7d7a051"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "0b6eb39e416df9744d175cb5ee517a0d"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "35a665dfeef5d6505b01a9952c50343d"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "e91b2ec1bdb35dd64e7cb44ae95d3707"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "fd072e1b795a04f900b6252386858ba2"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "29c79347af74c68b52b9ddfb341d6ba0"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "461cfafef4e5906905e3f0fbba93f7ab"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "1e85c455e02ea66378c566f354bbd4c0"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "33e4b47ce954ec11a2b1cece190478a0"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "0fa068b1e9eb3763d68215447c774ef5"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "14a95557299130e3912348baec56cd7f"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "1e5ff537b0b040b57740860d2b083272"
  },
  {
    "url": "resources/books.html",
    "revision": "3bfe230174ac1a8760f11ceb45556d8b"
  },
  {
    "url": "resources/community.html",
    "revision": "3971b77faf3ab7ff30ebed7b4e7f6fc4"
  },
  {
    "url": "resources/conferences.html",
    "revision": "1a53b3de7ede631ee2486787c6a7e664"
  },
  {
    "url": "resources/courses.html",
    "revision": "b9fe21468eb9d3a6d6f5272c2277aa06"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "83726e2b75c6335baa23bbff280a5e59"
  },
  {
    "url": "resources/examples.html",
    "revision": "0b7aeabce5ce1791bee7950ba7aa487f"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "c0536189ae340b9b3ab1928bc7b50bff"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b0b412a89c2bc0ee585033cf8e031745"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "b4cb7c9d4c4300096985fea042ba5c27"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "db9aeed757f0d64bfc505555772b338f"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "5031aeca17dddbd1d837348d6c04f121"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "425ba296bacf4a912b15dfb4460eaf09"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "72e5e22871d36f04a2b9b519f54da60f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
