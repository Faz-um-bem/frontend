export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve({
        base64: fileReader.result.replace('data:', '').replace(/^.+,/, ''),
        urlPreview: fileReader.result,
      });
    };

    fileReader.onerror = error => {
      reject(error);
    };
  });
}
