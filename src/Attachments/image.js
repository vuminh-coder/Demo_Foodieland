const images = import.meta.glob("./*.{png,jpg,jpeg,svg,gif,webp}", {
  eager: true,
  import: "default",
});

export default images;
