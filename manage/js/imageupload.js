// // uploadToCloudinary
// const uploadPreset = "Hancock"; // Replace with your unsigned upload preset name
// const cloudName = "dzxs5xgfy"; // Replace with your Cloudinary cloud name
// async function uploadToCloudinary(file, uploadPreset, cloudName) {
//   if (!file) {
//     console.error("No file provided for upload");
//     return { success: false, data: { error: "No file provided for upload" } };
//   }

//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", uploadPreset);

//   const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       body: formData,
//     });

//     if (!response.ok) {
//       const errorDetails = await response.json();
//       return {
//         success: false,
//         data: { error: errorDetails.error?.message || "Upload failed" },
//       };
//     }

//     const data = await response.json();
//     return {
//       success: true,
//       data: { link: data.secure_url }, // Mimic Imgur's `link` field
//     };
//   } catch (error) {
//     console.error("Error uploading image to Cloudinary:", error);
//     return {
//       success: false,
//       data: { error: error.message },
//     };
//   }
// }
// //
// // async function imgurUpload(clientId, formData) {
// //   try {
// //     const response = await fetch("https://api.imgur.com/3/image", {
// //       method: "POST",
// //       headers: {
// //         Authorization: `Client-ID ${clientId}`,
// //       },
// //       body: formData,
// //     });

// //     if (!response.ok) {
// //       throw new Error(`Failed to upload image: ${response.statusText}`);
// //     }

// //     const result = await response.json();
// //     return result; // Return the result for further handling
// //   } catch (error) {
// //     console.error("Error uploading image to Imgur:", error);
// //     throw error; // Re-throw the error for the caller to handle
// //   }
// // }

// // Imgur upload implementation
// async function uploadToImgur(file, { clientId }) {
//   const formData = new FormData();
//   formData.append("image", file);

//   const response = await fetch("https://api.imgur.com/3/image", {
//     method: "POST",
//     headers: {
//       Authorization: `Client-ID ${clientId}`,
//     },
//     body: formData,
//   });

//   if (!response.ok) {
//     const errorDetails = await response.json();
//     throw new Error(errorDetails.error?.message || "Imgur upload failed");
//   }

//   const result = await response.json();
//   return {
//     service: "imgur",
//     url: result.data.link,
//     data: result.data,
//   };
// }
// // Cloudinary upload implementation
// async function uploadToCloudinary(file, { uploadPreset, cloudName }) {
//   const formData = new FormData();
//   formData.append("file", file);
//   formData.append("upload_preset", uploadPreset);

//   const response = await fetch(
//     `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//     {
//       method: "POST",
//       body: formData,
//     }
//   );

//   if (!response.ok) {
//     const errorDetails = await response.json();
//     throw new Error(errorDetails.error?.message || "Cloudinary upload failed");
//   }

//   const result = await response.json();
//   return {
//     service: "cloudinary",
//     url: result.secure_url,
//     data: result,
//   };
// }
// async function uploadToBunny(
//   file,
//   { accessKey, storageZoneName, storetitle, region = "", pullZone }
// ) {
//   // Generate unique filename
//   const fileExtension = file.name.split(".").pop();
//   const filename = `Matager_img_${storetitle}_${Date.now()}_${Math.random()
//     .toString(36)
//     .substr(2, 9)}.${fileExtension}`;

//   const baseHostname = "storage.bunnycdn.com";
//   const hostname = region ? `${region}.${baseHostname}` : baseHostname;
//   const uploadUrl = `https://${hostname}/${storageZoneName}/${filename}`;

//   const response = await fetch(uploadUrl, {
//     method: "PUT",
//     headers: {
//       AccessKey: accessKey,
//       "Content-Type": "application/octet-stream",
//     },
//     body: file,
//   });

//   if (!response.ok) {
//     const errorText = await response.text();
//     throw new Error(`Upload failed: ${errorText}`);
//   }

//   // Return public URL
//   return {
//     url: `https://${pullZone}/${filename}`,
//   };
// }

// uploadToCloudinary
const uploadPreset = "kingdripstore"; // Replace with your unsigned upload preset name
const cloudName = "dpgefu3hi"; // Replace with your Cloudinary cloud name

async function uploadToCloudinary(file, uploadPreset, cloudName) {
  if (!file) {
    console.error("No file provided for upload");
    return { success: false, data: { error: "No file provided for upload" } };
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorDetails = await response.json();
      return {
        success: false,
        data: { error: errorDetails.error?.message || "Upload failed" },
      };
    }

    const data = await response.json();
    return {
      success: true,
      data: { link: data.secure_url }, // Mimic Imgur's `link` field
    };
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return {
      success: false,
      data: { error: error.message },
    };
  }
}
//
async function imgurUpload(clientId, formData) {
  try {
    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Client-ID ${clientId}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload image: ${response.statusText}`);
    }

    const result = await response.json();
    return result; // Return the result for further handling
  } catch (error) {
    console.error("Error uploading image to Imgur:", error);
    throw error; // Re-throw the error for the caller to handle
  }
}
