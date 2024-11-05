function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

loco()


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});
function files(index) {
  var data = `
Stunning/img2 (89).jpg
Stunning/img2 (90).jpg
Stunning/img2 (91).jpg
Stunning/img2 (92).jpg
Stunning/img2 (93).jpg
Stunning/img2 (94).jpg
Stunning/img2 (95).jpg
Stunning/img2 (96).jpg
Stunning/img2 (97).jpg
Stunning/img2 (98).jpg
Stunning/img2 (99).jpg
Stunning/img2 (100).jpg
Stunning/img2 (101).jpg
Stunning/img2 (102).jpg
Stunning/img2 (103).jpg
Stunning/img2 (104).jpg
Stunning/img2 (105).jpg
Stunning/img2 (106).jpg
Stunning/img2 (107).jpg
Stunning/img2 (108).jpg
Stunning/img2 (109).jpg
Stunning/img2 (110).jpg
Stunning/img2 (111).jpg
Stunning/img2 (112).jpg
Stunning/img2 (113).jpg
Stunning/img2 (114).jpg
Stunning/img2 (115).jpg
Stunning/img2 (116).jpg
Stunning/img2 (117).jpg
Stunning/img2 (118).jpg
Stunning/img2 (119).jpg
Stunning/img2 (120).jpg
Stunning/img2 (121).jpg
Stunning/img2 (122).jpg
Stunning/img2 (123).jpg
Stunning/img2 (124).jpg
Stunning/img2 (125).jpg
Stunning/img2 (126).jpg
Stunning/img2 (127).jpg
Stunning/img2 (128).jpg
Stunning/img2 (129).jpg
Stunning/img2 (130).jpg
Stunning/img2 (131).jpg
Stunning/img2 (132).jpg
Stunning/img2 (133).jpg
Stunning/img2 (134).jpg
Stunning/img2 (135).jpg
Stunning/img2 (136).jpg
Stunning/img2 (137).jpg
Stunning/img2 (138).jpg
Stunning/img2 (139).jpg
Stunning/img2 (140).jpg
Stunning/img2 (141).jpg
Stunning/img2 (142).jpg
Stunning/img2 (143).jpg
Stunning/img2 (144).jpg
Stunning/img2 (145).jpg
Stunning/img2 (146).jpg
Stunning/img2 (147).jpg
Stunning/img2 (148).jpg
Stunning/img2 (149).jpg
Stunning/img2 (150).jpg
Stunning/img2 (151).jpg
Stunning/img2 (152).jpg
Stunning/img2 (153).jpg
Stunning/img2 (154).jpg
Stunning/img2 (155).jpg
Stunning/img2 (156).jpg
Stunning/img2 (157).jpg
Stunning/img2 (158).jpg
Stunning/img2 (159).jpg
Stunning/img2 (160).jpg
Stunning/img2 (161).jpg
Stunning/img2 (162).jpg
Stunning/img2 (163).jpg
Stunning/img2 (164).jpg
Stunning/img2 (165).jpg
Stunning/img2 (166).jpg
Stunning/img2 (167).jpg
Stunning/img2 (168).jpg
Stunning/img2 (169).jpg
Stunning/img2 (170).jpg
Stunning/img2 (171).jpg
Stunning/img2 (172).jpg
Stunning/img2 (173).jpg
Stunning/img2 (174).jpg
Stunning/img2 (175).jpg
Stunning/img2 (176).jpg
Stunning/img2 (177).jpg
Stunning/img2 (178).jpg
Stunning/img2 (179).jpg
Stunning/img2 (180).jpg
Stunning/img2 (181).jpg
Stunning/img2 (182).jpg
Stunning/img2 (183).jpg
Stunning/img2 (184).jpg
Stunning/img2 (185).jpg
Stunning/img2 (186).jpg
Stunning/img2 (187).jpg
Stunning/img2 (188).jpg
Stunning/img2 (189).jpg
Stunning/img2 (190).jpg
Stunning/img2 (191).jpg
Stunning/img2 (192).jpg
Stunning/img2 (193).jpg
Stunning/img2 (194).jpg
Stunning/img2 (195).jpg
Stunning/img2 (196).jpg
Stunning/img2 (197).jpg
Stunning/img2 (198).jpg
Stunning/img2 (199).jpg
Stunning/img2 (200).jpg
Stunning/img2 (201).jpg
Stunning/img2 (202).jpg
Stunning/img2 (203).jpg
Stunning/img2 (204).jpg
Stunning/img2 (205).jpg
Stunning/img2 (206).jpg
Stunning/img2 (207).jpg
Stunning/img2 (208).jpg
Stunning/img2 (209).jpg
Stunning/img2 (210).jpg
Stunning/img2 (211).jpg
Stunning/img2 (212).jpg
Stunning/img2 (213).jpg
Stunning/img2 (214).jpg
Stunning/img2 (215).jpg
Stunning/img2 (216).jpg
Stunning/img2 (217).jpg
Stunning/img2 (218).jpg
Stunning/img2 (219).jpg
Stunning/img2 (220).jpg
Stunning/img2 (221).jpg
Stunning/img2 (222).jpg
Stunning/img2 (223).jpg
Stunning/img2 (224).jpg
Stunning/img2 (225).jpg
Stunning/img2 (226).jpg
Stunning/img2 (227).jpg
Stunning/img2 (228).jpg
Stunning/img2 (229).jpg
Stunning/img2 (230).jpg
Stunning/img2 (231).jpg
Stunning/img2 (232).jpg
Stunning/img2 (233).jpg
Stunning/img2 (234).jpg
Stunning/img2 (235).jpg
Stunning/img2 (236).jpg
Stunning/img2 (237).jpg


`;
  return data.split("\n")[index];
}
const frameCount = 300;
const images = [];
const imageSeq = {
  frame: 1,
};
for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}
gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 2,
    trigger: "#page>canvas",
    start: `top top`,
    end: `200% bottom`,
    scroller: `#main`,
  },
  onUpdate: render,
});
images[1].onload = render;
function render() {
  scaleImage(images[imageSeq.frame], context);
}
function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `200% bottom`,
});