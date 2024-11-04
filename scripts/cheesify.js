function cheesify() {
  // TODO: Add the image replacement script here
  document.querySelectorAll('img').forEach((img) => {
    img.src = 'https://media.istockphoto.com/id/904453184/photo/composite-image-of-mt-fuji-and-tokyo-skyline.jpg?s=612x612&w=0&k=20&c=EAJrI5nVsDuIkiv7o3NY1LsaZHRCcOWUOvk2g9FfFD0='
    img.srcset = img.src
  })
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
  