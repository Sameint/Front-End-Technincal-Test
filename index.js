document.addEventListener('DOMContentLoaded', function () {
  const canva_data = document.getElementById('myCanvas');
  const canva_text = canva_data.getContext('2d');
  const char = 'A';
  const color = '#ccc';

  //set style
  canva_text.font = '24px Arial';
  canva_text.textAlign = 'center';
  canva_text.textBaseline = 'middle';
  //calculate center
  const x = canva_data.width / 2;
  const y = canva_data.height / 2;

  //set font
  canva_text.fillStyle = color;


  //draw char at center
  canva_text.fillText(char, x, y);

  //creat fun to download pixel color data
  function canvasDowloadPixel() {
    const image_data = canva_text.getImageData(
      0,
      0,
      canva_data.width,
      canva_data.height
    ).data;
    let picel_data = '';

    //loop through pixel data conver Rgb formate
    for (let i = 0; i < image_data.length; i += 4) {
      const r = image_data[i].toString(16).padStart(2, '0');
      const g = image_data[i + 1].toString(16).padStart(2,'0');
      const b = image_data[i + 2].toString(16).padStart(2, '0');
      picel_data += `#${r}${g}${b}\n`;
    }

    //create blob with pixel
    const blob = new Blob([picel_data], { type: `text/plain` });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('download');
    downloadLink.href = url;
  }
  //add addeventli.to link download
  const download = document.getElementById('download');
  download.addEventListener('click', canvasDowloadPixel);
});
