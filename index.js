window.onload = function () {
  document.getElementById("header").innerHTML = `
  <!-- HEADER -->
  <div class="text-left">
    <a href="/" class="font-bold text-2xl m-1 hover:bg-gray-400 rounded sm:text-4xl"> [ n i c , m o t t a ]</a>
  </div>
  
  
  <div class="grid grid-cols-2 gap-2 text-base font-bold text-center mt-3 m-2 md:grid-cols-4">
    <a href="index.html" class="border-2 border-gray-300 hover:bg-gray-300">[ proyectos ]</a>
    <a href="bio.html" class="border-2 border-gray-300 hover:bg-gray-300">[ bio ]</a>
    <a href="exhibiciones.html" class="border-2 border-gray-300 hover:bg-gray-300">[ exhibiciones ]</a>
    <a href="portfolio.html" class="border-2 border-gray-300 hover:bg-gray-300">[ portfolio ]</a>
  </div>
  <!-- HEADER -->`;

  document.getElementById("footer").innerHTML = `
  <div class="grid grid-cols-2 gap-1 text-sm text-center mt-3 m-1 md:grid-cols-5 text-gray-500">
  <a href="https://www.instagram.com/nicmotta_" class="border-2 border-gray-300 hover:bg-gray-300">instagram</a>
  <a href="https://www.linkedin.com/in/nic-motta/" class="border-2 border-gray-300 hover:bg-gray-300">linkedin</a>
  <a href="https://www.youtube.com/channel/UCzcHwERGhtBfxYfLtzDT0nA" class="border-2 border-gray-300 hover:bg-gray-300">youtube</a>
  <a href="https://github.com/NicMotta" class="border-2 border-gray-300 hover:bg-gray-300">github</a>
  
</div>
<p class="text-center text-base text-gray-500">n i c , m o t t a  - 2022</p>
`;
};



