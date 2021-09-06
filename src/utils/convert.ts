interface ConvertData {
  base64: string;
  urlPreview: string;
}

export function convertToBase64(file) {
  return new Promise<ConvertData>((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    const result = {
      base64: String(fileReader.result)
        .replace('data:', '')
        .replace(/^.+,/, ''),
      urlPreview: String(fileReader.result),
    };

    fileReader.onload = () => {
      resolve(result);
    };

    fileReader.onerror = error => {
      reject(error);
    };
  });
}
