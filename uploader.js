function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output_image');
      output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }





  

// function preview_image(event) {
//     // Clear the image
//     var output = document.getElementById('output_image');
//     output.src = '';
    
//     // Upload the new image
//     var reader = new FileReader();
//     reader.onload = function(){
//       var output = document.getElementById('output_image');
//       output.src = reader.result;
      
//       // Upload the image to the server here
//       // ...
//     }
//     reader.readAsDataURL(event.target.files[0]);
//   }


// function uploadImage() {
//     const fileInput = document.getElementById('fileInput');
//     const file = fileInput.files[0];
//     const formData = new FormData();
//     formData.append('image', file);
    
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '/upload-image');
//     xhr.onload = function() {
//       if (xhr.status === 200) {
//         const imageUrl = xhr.responseText;
//         const uploadedImage = document.getElementById('uploadedImage');
//         uploadedImage.src = imageUrl;
//         location.reload(); // Refresh the page
//       } else {
//         alert('Failed to upload image');
//       }
//     };
//     xhr.send(formData);
//   }




// const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']; // Replace with your own image URLs
// let currentIndex = 0;

// function uploadImage() {
//   const fileInput = document.getElementById('fileInput');
//   const file = fileInput.files[0];
//   const formData = new FormData();
//   formData.append('image', file);

//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', '/upload-image');
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       const imageUrl = xhr.responseText;
//       const outputImage = document.getElementById('output_image');
//       outputImage.src = imageUrl;
      
//       // Click on the image 10 times
//       const myImage = document.getElementById('myImage');
//       for (let i = 0; i < 10; i++) {
//         setTimeout(() => {
//           clickImage();
//         }, i * 1000); // Wait 1 second between clicks
//       }
//     } else {
//       alert('Failed to upload image');
//     }
//   };
//   xhr.send(formData);
// }

// function clickImage() {
//   const myImage = document.getElementById('myImage');
//   currentIndex = (currentIndex + 1) % images.length;
//   myImage.src = images[currentIndex];
  
//   if (currentIndex === 0) {
//     // Do something after 10 clicks
//     alert('You clicked 10 times!');
//   }
// }