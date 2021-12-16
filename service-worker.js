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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "cf23a3323d306c8bf0f39f85f3b70052"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.53cf339a.css",
    "revision": "75e076e9081f5d1513f04279d7e34733"
  },
  {
    "url": "assets/img/create-task.fae3b9fa.png",
    "revision": "fae3b9fa5abfd68099a7851420e6ef11"
  },
  {
    "url": "assets/img/delete-task.ebf13499.png",
    "revision": "ebf13499414cf93eee777672d04eaa72"
  },
  {
    "url": "assets/img/eerd.15e90ae6.svg",
    "revision": "15e90ae6cfee069594b2e9488ead692e"
  },
  {
    "url": "assets/img/init-delete.aa9d0643.png",
    "revision": "aa9d0643bcf8b187776a1886ff503699"
  },
  {
    "url": "assets/img/phase_dev.6361ae0f.png",
    "revision": "6361ae0f1d761577ef26ee2ac4de7341"
  },
  {
    "url": "assets/img/read-task.0f031df6.png",
    "revision": "0f031df6bf0e12abdaaab85cbadcb713"
  },
  {
    "url": "assets/img/result-create.5fac0c82.png",
    "revision": "5fac0c82c34b30261e7c49711f3e91f6"
  },
  {
    "url": "assets/img/result-delete.eb8ef2d5.png",
    "revision": "eb8ef2d50ddcdea0a21846b3d55908ca"
  },
  {
    "url": "assets/img/result-update.6cbf5dc9.png",
    "revision": "6cbf5dc9842e9dfed2499acd6f36feb9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/server-work.e500e235.png",
    "revision": "e500e23563206d4a5ab9fe247d2db653"
  },
  {
    "url": "assets/img/task-list.535690dc.png",
    "revision": "535690dcbcd22c93b7446c240443d60e"
  },
  {
    "url": "assets/img/update-task.1e8d131a.png",
    "revision": "1e8d131a64fd29f56bbc2ed59ca73726"
  },
  {
    "url": "assets/js/10.969eb352.js",
    "revision": "b93f0ad6cc7fa061ebbfe4cbba60db62"
  },
  {
    "url": "assets/js/11.2db13ea8.js",
    "revision": "e9db83a60469f2ce628467789317aed6"
  },
  {
    "url": "assets/js/12.a5329e46.js",
    "revision": "935f0c1dbb7f8da131ae30fd59bd262c"
  },
  {
    "url": "assets/js/13.84a79874.js",
    "revision": "29de30887f517a5f2553fe31410d676c"
  },
  {
    "url": "assets/js/14.aebd1da8.js",
    "revision": "116014692822910191f813ad013ec0af"
  },
  {
    "url": "assets/js/15.3f90b968.js",
    "revision": "f7e3bb985f198cdc5e78d3ada3af2959"
  },
  {
    "url": "assets/js/16.9134dc15.js",
    "revision": "f2a36a981c814eebe649d1ba249580f5"
  },
  {
    "url": "assets/js/17.488910d2.js",
    "revision": "a9294152515a63721109a08eb1b04c8d"
  },
  {
    "url": "assets/js/18.6f42ebf6.js",
    "revision": "45f3048b3d92f706d29a6bdb0826ad35"
  },
  {
    "url": "assets/js/19.4116ed86.js",
    "revision": "d61248fda60a9f5ecfcfdc7242605fb9"
  },
  {
    "url": "assets/js/2.768dcf3a.js",
    "revision": "9f5d81778f264235ef1ff99e0ed77e85"
  },
  {
    "url": "assets/js/20.3baf29af.js",
    "revision": "10d2d9a94565144c0068d99ec6036769"
  },
  {
    "url": "assets/js/21.aaf417e5.js",
    "revision": "aaf067b215297f80e2c7319b5e4763e9"
  },
  {
    "url": "assets/js/22.798f76f1.js",
    "revision": "65e4054f02ca8311b8c09d737b8ec6fd"
  },
  {
    "url": "assets/js/23.0e6331cc.js",
    "revision": "703a9897ac06cc3c21b1765f9827f8c5"
  },
  {
    "url": "assets/js/24.48577cee.js",
    "revision": "afa369549bc2d29f33f7c15be8527138"
  },
  {
    "url": "assets/js/26.2a58e3d0.js",
    "revision": "730466dab27a3b499e639af86a681853"
  },
  {
    "url": "assets/js/3.297b5169.js",
    "revision": "314cbe5b4c18e0c1da515184ae0be9d8"
  },
  {
    "url": "assets/js/4.2905fd12.js",
    "revision": "727944e61f1b7e7ac414327498c1be0c"
  },
  {
    "url": "assets/js/5.19446e2c.js",
    "revision": "5946558363fb920222d6f3b0fa83d985"
  },
  {
    "url": "assets/js/6.80e32d60.js",
    "revision": "b92702f2d637ff84229b43384b8f7332"
  },
  {
    "url": "assets/js/7.63bbc8ba.js",
    "revision": "551fa76df78ffe15a8e30aa95237f044"
  },
  {
    "url": "assets/js/8.3a86f016.js",
    "revision": "2d2f62a3531e0c4502d404d9577c62a9"
  },
  {
    "url": "assets/js/9.ef66c48d.js",
    "revision": "4ded6a42f572773e8079384dcbba57db"
  },
  {
    "url": "assets/js/app.9da984b3.js",
    "revision": "109db20e42a27e9c415ee05dc163b8e2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "37f1fecd9c9f6d2b17dab3a7d36b4519"
  },
  {
    "url": "design/index.html",
    "revision": "965e68fdface4cc44d58a734dfbfb3b4"
  },
  {
    "url": "index.html",
    "revision": "15b356e6f16a91ae2b01dcc609a3a512"
  },
  {
    "url": "intro/index.html",
    "revision": "d4c1a4f1de29827f8c0da9996da7bc20"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "69b05810f72b87938f1a6ac39e4e2fdf"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "3e2da16546c0137885f603506a569cf7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1280186245e7a14780b085a78d57ac60"
  },
  {
    "url": "software/index.html",
    "revision": "ccd33288d6561d503b58e236502e1c2d"
  },
  {
    "url": "test/index.html",
    "revision": "60e6a952a73a41bef757b2288a44d96f"
  },
  {
    "url": "use cases/index.html",
    "revision": "4e3ca255a633124727c581e35545939e"
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
