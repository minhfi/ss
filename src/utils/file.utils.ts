export const readFilePromise = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = function (e: ProgressEvent<FileReader>) {
      resolve(e.target?.result)
    }

    // if (file && file.type.match('image.*')) {
    reader.readAsDataURL(file)
    // }
  })
